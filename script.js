// ======================
// ⚜ ORACLE — SCRIPT PRINCIPAL ⚜
// ======================
//
// Ce fichier gère :
// - La navigation entre les écrans (intro / phases / résultat)
// - Le stockage des scores binaires et élémentaires
// - Le calcul final des axes S1–S4 (via binaries.js)
// - Le calcul du profil élémentaire (via elements.js)
//
// ⚠ Important :
// binaries.js et elements.js doivent être chargés AVANT ce script.
//
// <script src="binaries.js"></script>
// <script src="elements.js"></script>
// <script src="script.js"></script>
// ======================

window.ORACLE = window.ORACLE || {};

// ---------------------------------------------------------
// NAVIGATION ENTRE LES SECTIONS
// ---------------------------------------------------------

(function () {
  const sectionIds = ["intro", "phase1", "phase2", "phase3", "phase4", "result"];

  function showSection(id) {
    sectionIds.forEach(sid => {
      const el = document.getElementById(sid);
      if (!el) return;
      if (sid === id) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  // Exposées globalement pour être appelées depuis le HTML
  window.startRitual = function startRitual() {
    showSection("phase1");
  };

  window.goToPhase = function goToPhase(id) {
    showSection(id);
  };

  window.restartRitual = function restartRitual() {
    // Reset scores
    if (window.ORACLE.QUIZ) {
      window.ORACLE.QUIZ.reset();
    }
    showSection("intro");
  };

  // Alias pour compatibilité avec l'HTML précédent si besoin
  window.start = window.startRitual;
  window.restart = window.restartRitual;
})();


// ---------------------------------------------------------
// STOCKAGE DES SCORES & UTILITAIRES
// ---------------------------------------------------------

window.ORACLE.QUIZ = (function () {

  const ELEMENT_KEYS = ["FEU", "EAU", "FOUDRE", "TERRE", "LUMIERE", "TENEBRE"];

  // Axes binaires :
  // S1 : SOI / AUTRUI
  // S2 : PHYSIQUE / MAGIE
  // S3 : MASQUE / ESSENCE
  // S4 : SOLITAIRE / GROUPE
  const state = {
    elements: {
      FEU: 0,
      EAU: 0,
      FOUDRE: 0,
      TERRE: 0,
      LUMIERE: 0,
      TENEBRE: 0
    },
    binaries: {
      // Soi / Autrui
      SOI: 0,
      AUTRUI: 0,
      // Physique / Magie
      PHYSIQUE: 0,
      MAGIE: 0,
      // Masque / Essence
      MASQUE: 0,
      ESSENCE: 0,
      // Solitaire / Groupe
      SOLITAIRE: 0,
      GROUPE: 0
    }
  };

  function reset() {
    ELEMENT_KEYS.forEach(k => state.elements[k] = 0);
    Object.keys(state.binaries).forEach(k => state.binaries[k] = 0);
  }

  // --------- Ajout de points ---------

  function addElementPoints(key, amount) {
    if (!ELEMENT_KEYS.includes(key)) return;
    const val = Number(amount) || 0;
    state.elements[key] += val;
  }

  function addBinaryPoints(axisKey, positiveKey, amount) {
    // axisKey sert juste à clarifier côté appel, ici on traite les paires directement
    const val = Number(amount) || 0;

    switch (axisKey) {
      case "SOI_AUTRUI":
        if (positiveKey === "SOI") state.binaries.SOI += val;
        else if (positiveKey === "AUTRUI") state.binaries.AUTRUI += val;
        break;

      case "PHYSIQUE_MAGIE":
        if (positiveKey === "PHYSIQUE") state.binaries.PHYSIQUE += val;
        else if (positiveKey === "MAGIE") state.binaries.MAGIE += val;
        break;

      case "MASQUE_ESSENCE":
        if (positiveKey === "MASQUE") state.binaries.MASQUE += val;
        else if (positiveKey === "ESSENCE") state.binaries.ESSENCE += val;
        break;

      case "SOLITAIRE_GROUPE":
        if (positiveKey === "SOLITAIRE") state.binaries.SOLITAIRE += val;
        else if (positiveKey === "GROUPE") state.binaries.GROUPE += val;
        break;
    }
  }

  // ---------------------------------------------------------
  // CALCUL DES BINAIRES (S1 à S4)
  // ---------------------------------------------------------

  function computeBinaries() {
    const b = state.binaries;

    const s1 = window.ORACLE.computeS1_SoiAutrui(b.SOI, b.AUTRUI);
    const s2 = window.ORACLE.computeS2_PhysiqueMagie(b.PHYSIQUE, b.MAGIE);
    const s3 = window.ORACLE.computeS3_MasqueEssence(b.MASQUE, b.ESSENCE);
    const s4 = window.ORACLE.computeS4_SolitaireGroupe(b.SOLITAIRE, b.GROUPE);

    return { s1, s2, s3, s4 };
  }

  // ---------------------------------------------------------
  // CALCUL ELEMENTAIRE — utilise ORACLE.ELEMENT_MATRIX
  // ---------------------------------------------------------

  function computeElementProfile() {
    if (!window.ORACLE.ELEMENT_MATRIX) {
      console.warn("ELEMENT_MATRIX manquant. Charge elements.js avant script.js, kupo.");
      return null;
    }

    const scores = Object.assign({}, state.elements);
    const keys = ELEMENT_KEYS.slice();

    // Total brut
    const total = keys.reduce((sum, k) => sum + Math.max(0, Number(scores[k] || 0)), 0);

    if (total <= 0) {
      const zeroPercents = {};
      keys.forEach(k => zeroPercents[k] = 0);
      return {
        primary: null,
        secondary: null,
        pure: false,
        tieForPrimary: false,
        dominantCandidates: [],
        percents: zeroPercents,
        profile: null
      };
    }

    const list = keys.map(k => {
      const sc = Math.max(0, Number(scores[k] || 0));
      const pct = (sc / total) * 100;
      return { key: k, score: sc, percent: pct };
    });

    const percents = {};
    list.forEach(e => {
      percents[e.key] = Math.round(e.percent);
    });

    // Chercher le max
    let maxPercent = -1;
    list.forEach(e => {
      if (e.percent > maxPercent) maxPercent = e.percent;
    });

    const EPS = 0.0001;
    const dominantCandidates = list
      .filter(e => Math.abs(e.percent - maxPercent) < EPS)
      .map(e => e.key);

    // Egalité : on laisse le choix à la personne
    if (dominantCandidates.length > 1) {
      return {
        primary: null,
        secondary: null,
        pure: false,
        tieForPrimary: true,
        dominantCandidates,
        percents,
        profile: null
      };
    }

    const primaryKey = dominantCandidates[0];
    const primaryPercent = maxPercent;

    // Cas élément pur
    if (primaryPercent >= 50) {
      const secondaryKey = primaryKey; // FEU/FEU, etc.
      const profile =
        window.ORACLE.ELEMENT_MATRIX[primaryKey] &&
        window.ORACLE.ELEMENT_MATRIX[primaryKey][secondaryKey]
          ? window.ORACLE.ELEMENT_MATRIX[primaryKey][secondaryKey]
          : null;

      return {
        primary: primaryKey,
        secondary: secondaryKey,
        pure: true,
        tieForPrimary: false,
        dominantCandidates: [primaryKey],
        percents,
        profile
      };
    }

    // Sinon duo → second plus haut
    const sorted = list.slice().sort((a, b) => b.percent - a.percent);
    const secondaryObj = sorted.find(e => e.key !== primaryKey);
    const secondaryKey = secondaryObj ? secondaryObj.key : null;

    const profile =
      window.ORACLE.ELEMENT_MATRIX[primaryKey] &&
      window.ORACLE.ELEMENT_MATRIX[primaryKey][secondaryKey]
        ? window.ORACLE.ELEMENT_MATRIX[primaryKey][secondaryKey]
        : null;

    return {
      primary: primaryKey,
      secondary: secondaryKey,
      pure: false,
      tieForPrimary: false,
      dominantCandidates: [primaryKey],
      percents,
      profile
    };
  }

  // ---------------------------------------------------------
  // FONCTION GLOBALE : CALCUL COMPLET DU PROFIL
  // ---------------------------------------------------------

  function computeFullProfile() {
    const binaries = computeBinaries();
    const elementProfile = computeElementProfile();

    return {
      binaries,
      element: elementProfile,
      raw: {
        elements: Object.assign({}, state.elements),
        binaries: Object.assign({}, state.binaries)
      }
    };
  }

  // ---------------------------------------------------------
  // EXPOSITION PUBLIQUE
  // ---------------------------------------------------------

  return {
    state,
    reset,
    addElementPoints,
    addBinaryPoints,
    computeBinaries,
    computeElementProfile,
    computeFullProfile
  };
})();


// ---------------------------------------------------------
// LIAISON AVEC L’ECRAN DE RESULTAT
// ---------------------------------------------------------

window.showResult = function showResult() {
  // Calculer le profil complet
  const result = window.ORACLE.QUIZ.computeFullProfile();

  console.log("Résultat complet de l’oracle, kupo :", result);

  // Affichage minimaliste pour l’instant
  const resultSection = document.getElementById("result");
  if (resultSection) {
    const container = resultSection.querySelector(".result-text") || resultSection.querySelector(".result");
    if (container) {
      let text = "";

      if (result.element && !result.element.tieForPrimary && result.element.primary) {
        const e = result.element;
        text += `Élément dominant : ${e.primary}`;
        if (!e.pure && e.secondary && e.secondary !== e.primary) {
          text += `, teinté par ${e.secondary}`;
        }
        text += `.\n`;
        if (e.profile) {
          text += `\n${e.profile.label}\n\n${e.profile.description}`;
        }
      } else if (result.element && result.element.tieForPrimary) {
        text += "Plusieurs éléments revendiquent ton centre, kupo :\n";
        text += result.element.dominantCandidates.join(", ") + ".\n";
        text += "\nC’est à toi de choisir lequel te ressemble le plus.";
      } else {
        text += "L’oracle reste silencieux pour l’instant… aucun élément clair ne se détache, kupo.";
      }

      container.textContent = text;
    }
  }

  // Afficher l’écran résultat
  const sectionIds = ["intro", "phase1", "phase2", "phase3", "phase4", "result"];
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "result") el.classList.add("active");
    else el.classList.remove("active");
  });
};

