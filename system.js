// ======================
// ⚜ ORACLE SYSTEM — BASE DES ÉLÉMENTS ⚜
// ======================

window.ORACLE = window.ORACLE || {};

// ——— 6 Natures Élémentaires ———
window.ORACLE.ELEMENTS = {
  FEU: {
    id: "FEU",
    label: "Feu",
    keyword: "énergique",
    description: "Impulsion, action, chaleur, passion, intensité."
  },
  EAU: {
    id: "EAU",
    label: "Eau",
    keyword: "calme",
    description: "Adaptabilité, profondeur émotionnelle, douceur, flux."
  },
  FOUDRE: {
    id: "FOUDRE",
    label: "Foudre",
    keyword: "vagabond",
    description: "Mouvement, changement, inspiration, imprévisible."
  },
  TERRE: {
    id: "TERRE",
    label: "Terre",
    keyword: "stable",
    description: "Ancrage, endurance, construction, fiabilité."
  },
  LUMIERE: {
    id: "LUMIERE",
    label: "Lumière",
    keyword: "altruiste",
    description: "Soutien, protection, idéal, orientation vers les autres."
  },
  TENEBRE: {
    id: "TENEBRE",
    label: "Ténèbre",
    keyword: "fort mentalement",
    description: "Résilience mentale, introspection, lucidité, zones grises."
  }
};


// ======================
// ⚜ AXES BINAIRES (SOUS FORME DE JAUGES) ⚜
// ======================

window.ORACLE.AXES = {
  SOI_AUTRUI: {
    id: "SOI_AUTRUI",
    positive: "Soi",
    negative: "Autrui",
    description:
      "Orientation spontanée vers les autres ou vers soi."
  },

  PHYSIQUE_MAGIE: {
    id: "PHYSIQUE_MAGIE",
    positive: "Magie",
    negative: "Physique",
    description:
      "Mode d'action : esprit, imagination, symbolique (Magie) ou concret, terrain, action physique."
  },

  COMMUN_RARE: {
    id: "COMMUN_RARE",
    positive: "Rare",
    negative: "Commun",
    description:
      "Tendance à rester soi-même même si ça détonne (Rare) ou à s'adapter au groupe (Commun)."
  },

  SOLITAIRE_GROUPE: {
    id: "SOLITAIRE_GROUPE",
    positive: "Groupe",
    negative: "Solitaire",
    description:
      "Recharge d'énergie par la présence collective (Groupe) ou par la solitude (Solitaire)."
  }

console.log("ORACLE SYSTEM LOADED, kupo !");
