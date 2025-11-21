
window.ORACLE = window.ORACLE || {};
window.ORACLE.MINI = window.ORACLE.MINI || {};
window.ORACLE.BINARIES = window.ORACLE.BINARIES || {};

// S1 — SOI / AUTRUI
window.ORACLE.MINI.SOI_AUTRUI = {
  1: { id: "SOI_80", label: "Cœur-Focalisé", axis: "SOI_AUTRUI", description: "Tu te places naturellement au centre." },
  2: { id: "SOI_60", label: "Cœur-Prioritaire", axis: "SOI_AUTRUI", description: "Tu protèges ton espace avant de tendre la main." },
  3: { id: "SOI_50", label: "Cœur-Variable", axis: "SOI_AUTRUI", description: "Tu alternes entre toi et autrui selon l'instant." },
  4: { id: "AUTRUI_60", label: "Cœur-Ouvert", axis: "SOI_AUTRUI", description: "Tu intègres spontanément l'autre dans ton équation." },
  5: { id: "AUTRUI_80", label: "Cœur-Veillant", axis: "SOI_AUTRUI", description: "Tu soutiens avant de te soutenir toi-même." }
};

// S2 — PHYSIQUE / MAGIE
window.ORACLE.MINI.PHYSIQUE_MAGIE = {
  1: { id: "PHYSIQUE_80", label: "Corps-Brut", axis: "PHYSIQUE_MAGIE", description: "Tu comprends en faisant." },
  2: { id: "PHYSIQUE_60", label: "Corps-Instinctif", axis: "PHYSIQUE_MAGIE", description: "Le corps ouvre, l'esprit suit." },
  3: { id: "MIXTE_50_PM", label: "Double-Voie", axis: "PHYSIQUE_MAGIE", description: "Tu alternes réflexion et impulsion." },
  4: { id: "MAGIE_60", label: "Esprit-Dirigeant", axis: "PHYSIQUE_MAGIE", description: "Tu planifies avant d'agir." },
  5: { id: "MAGIE_80", label: "Esprit-Total", axis: "PHYSIQUE_MAGIE", description: "Tu vis surtout dans la tête." }
};

// S3 — MASQUE / ESSENCE
window.ORACLE.MINI.MASQUE_ESSENCE = {
  1: { id: "MASQUE_80", label: "Masque-Protecteur", axis: "MASQUE_ESSENCE", description: "Tu adaptes ta forme pour traverser sans heurts." },
  2: { id: "MASQUE_60", label: "Masque-Souple", axis: "MASQUE_ESSENCE", description: "Tu t'intègres sans te dissoudre." },
  3: { id: "MIXTE_50_ME", label: "Forme-Changeante", axis: "MASQUE_ESSENCE", description: "Tu passes d'un mode à l'autre selon la pression." },
  4: { id: "ESSENCE_60", label: "Essence-Fixe", axis: "MASQUE_ESSENCE", description: "Tu gardes ta forme même si elle accroche." },
  5: { id: "ESSENCE_80", label: "Essence-Nue", axis: "MASQUE_ESSENCE", description: "Tu ne traduis pas ta forme pour convenir." }
};

// S4 — SOLITAIRE / GROUPE
window.ORACLE.MINI.SOLITAIRE_GROUPE = {
  1: { id: "SOLITAIRE_80", label: "Âme-Retraite", axis: "SOLITAIRE_GROUPE", description: "Tu te régénères dans le silence." },
  2: { id: "SOLITAIRE_60", label: "Âme-Discrète", axis: "SOLITAIRE_GROUPE", description: "Tu aimes les autres en petite dose." },
  3: { id: "MIXTE_50_SG", label: "Âme-Hybride", axis: "SOLITAIRE_GROUPE", description: "Tu peut te recharger seul ou entouré." },
  4: { id: "GROUPE_60", label: "Âme-Résonante", axis: "SOLITAIRE_GROUPE", description: "La présence anime ton énergie." },
  5: { id: "GROUPE_80", label: "Âme-Foule", axis: "SOLITAIRE_GROUPE", description: "Tu te nourris intensément du collectif." }
};

console.log("Oracle binaries loaded");
