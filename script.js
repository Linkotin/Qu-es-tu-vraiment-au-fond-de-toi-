// =========================
// Natures et axes
// =========================

const NATURES = ["TREE", "BEAST", "MECANIC", "SPIRIT", "FANTASTIC", "OBJECT"];

// =========================
// Questions (40)
// =========================

const QUESTIONS = [
  // THEME I — FONDATION & ANCRAGE (1–8)
  {
    text: "Lorsque tu arrives dans un environnement inconnu, tu…",
    options: [
      {
        label: "Cherches d’abord les repères structurels et les points fixes.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Évalues les dynamiques humaines et les rapports de force.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Analyses le fonctionnement matériel et organisationnel.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Ressens l’ambiance globale avant d’agir.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand on dépend de toi, tu…",
    options: [
      {
        label: "Ne lâches pas, même sans reconnaissance.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Aides tant que l’action te stimule.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Aides si tu as les moyens concrets de le faire.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Aides lorsque tu sens un lien ou un sens à la relation.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Dans un projet collectif long terme, tu valorises d’abord…",
    options: [
      {
        label: "La stabilité et la continuité.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "La capacité d’agir vite en cas d’obstacle.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "L’efficacité et l’organisation.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "La cohérence émotionnelle ou idéologique.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Lorsque tout s’effondre autour de toi, tu…",
    options: [
      {
        label: "Maintiens ta position jusqu’à ce que ça passe.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Interviens au cœur du chaos.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Cherches où réparer ou rétablir les systèmes.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te centres intérieurement pour comprendre ce qui se joue.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ta relation naturelle au temps est…",
    options: [
      {
        label: "Continue et patiente.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Segmentée en pics d’énergie.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Mesurée et structurée.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Variable, selon ce qui t’habite.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ta motivation première à construire est…",
    options: [
      {
        label: "Laisser quelque chose qui dure.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Transformer ce qui te dépasse.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Créer un système plus fluide et fonctionnel.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Donner forme à ce que tu ressens.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu protèges quelque chose, tu…",
    options: [
      {
        label: "Mets ton corps, ta présence, ta constance.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Fais obstacle, tu deviens force d’impact.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Interviens en amont pour éviter la défaillance.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Protèges en rendant l’objet précieux ou sacré.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu te sens enraciné quelque part, c’est parce que…",
    options: [
      {
        label: "Tu y es établi depuis longtemps et y tiens.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Tu as un rôle actif dans ce qui s’y passe.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Tu y es utile et intégré dans les mécanismes.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Tu y trouves une vibration intérieure juste.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },

  // THEME II — FORCE & INFLUENCE (9–16)
  {
    text: "Quand une situation dérape mais que tu peux intervenir, tu…",
    options: [
      {
        label: "Restes présent et contiens la dérive par ta stabilité.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Agis immédiatement et prends le contrôle.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Corriges les dysfonctionnements en arrière-plan.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Tentes d’influencer les perceptions pour apaiser.",
        effects: { FANTASTIC: 1, wild: 1, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand quelqu’un dépasse tes limites, ta première impulsion est…",
    options: [
      {
        label: "Rester ferme sans escalade.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Répondre frontalement pour rétablir le respect.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Te protéger en fermant l’accès.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Prendre de la distance et sortir du rapport de force.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face à l’injustice, tu…",
    options: [
      {
        label: "Soutiens ceux qui tiennent bon.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Interviens, même si c’est risqué.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Agis méthodiquement pour neutraliser la cause.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Transformes le cadre symbolique ou narratif.",
        effects: { FANTASTIC: 1, wild: 1, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu veux convaincre, tu…",
    options: [
      {
        label: "Montres par l’exemple sur la durée.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Utilises l’intensité et l’affirmation.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Exposes une logique difficile à contredire.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Modifies l’ambiance ou l’imaginaire autour.",
        effects: { FANTASTIC: 1, wild: 1, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "En conflit, ton rapport au pouvoir est…",
    options: [
      {
        label: "Rester debout, imposer la constance.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Dominer ou renverser le rapport.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Tirer les ficelles via les mécanismes.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Dissoudre le conflit en changeant le plan.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu prends une décision rapide, tu…",
    options: [
      {
        label: "Tiens compte du long terme d’abord.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Vas droit à l’action la plus efficace.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Appliques la solution la plus fonctionnelle.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Suis ton ressenti interne.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu dois protéger quelqu’un, tu…",
    options: [
      {
        label: "Te places entre lui et le danger.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Neutralises la menace.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Anticipes et préviens l’incident.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Donnes un sens ou un cadre qui apaise.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Si tu dois changer quelque chose profondément, tu…",
    options: [
      {
        label: "Transformes lentement mais durablement.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Crées un choc, puis tu réorganises.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Modifies le système jusqu’à l’efficience.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Transformes la perception, pas la matière.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },

  // THEME III — FONCTION & STRUCTURE (17–24)
  {
    text: "Lorsqu’on te confie une tâche précise, tu…",
    options: [
      {
        label: "La réalises systématiquement, même si elle est monotone.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "L’améliore ou la modifies si elle est inefficace.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "La restructures pour qu’elle soit reproductible.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’exécutes seulement si elle a du sens pour toi.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu travailles avec des outils ou des systèmes, tu…",
    options: [
      {
        label: "Restes fidèle à la méthode initiale.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Les adaptes pour gagner en impact immédiat.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Les modifies pour les rendre plus fiables.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Les utilises comme support pour une intention plus large.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face à un groupe désorganisé, tu…",
    options: [
      {
        label: "Fournis de la stabilité par ce que tu fais.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Interviens directement pour activer les autres.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Mets en place une structure ou un cadre clair.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Renvoies une direction symbolique ou émotionnelle.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand un projet commence à dévier, tu…",
    options: [
      {
        label: "Maintiens le cap initial et rappelles la ligne.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Forces la correction par une action décisive.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Revois les fondations techniques.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Recentres sur la vision et le sens.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ta manière naturelle d’être utile est…",
    options: [
      {
        label: "Être constant et tenir la charge.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Faire avancer les choses par impulsion.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Optimiser la mécanique des choses.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Relier, inspirer, insuffler.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face au travail répétitif, tu…",
    options: [
      {
        label: "T’adaptes et continues sans dévier.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Accélères pour en finir plus vite.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Améliores le processus pour ne plus recommencer.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Le transformes en expérience intérieure ou expressive.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu apprends quelque chose de nouveau, tu…",
    options: [
      {
        label: "L’expérimentes longuement jusqu’à l’intégrer.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Le testes immédiatement dans l’action.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Le décomposes en logique interne et modèles.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Cherches ce que ça change dans ta perception.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ce qui te décourage le plus dans un projet, c’est…",
    options: [
      {
        label: "L’absence de continuité ou d’engagement.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "L’inaction et la stagnation.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "L’inefficacité ou l’incohérence du système.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’absence de sens ou de résonance interne.",
        effects: { SPIRIT: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },

  // THEME IV — PERCEPTION & SENS (25–32)
  {
    text: "Quand tu rencontres quelqu’un pour la première fois, tu remarques surtout…",
    options: [
      {
        label: "Son comportement concret et fiable dans le temps.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Son énergie, son assurance, sa force d’action.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Sa logique, sa structure, ses capacités réelles.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Son regard intérieur, ses tensions, ce qu’il porte en silence.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu observes un groupe de personnes, tu perçois en premier…",
    options: [
      {
        label: "Les alliances solides et les soutiens implicites.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Les dominances, tensions et rivalités.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Les rôles fonctionnels et la répartition des tâches.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’atmosphère, les non-dits, ce qui circule entre eux.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu veux comprendre quelque chose de complexe, tu…",
    options: [
      {
        label: "L’expérimentes longuement jusqu’à l’intégrer.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "L’abordes par l’action et l’essai direct.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "L’analyses en éléments fondamentaux.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’approches par intuition, symboles ou sens ressenti.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face à un changement imprévu, tu…",
    options: [
      {
        label: "Lisses la transition en l’intégrant progressivement.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Réagis immédiatement pour reprendre la main.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Recalcules la structure pour minimiser les erreurs.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Lis ce que ce changement révèle à un autre niveau.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ce que tu appelles “comprendre”, c’est…",
    options: [
      {
        label: "Pouvoir tenir la chose dans la durée et l’appliquer.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Savoir l’utiliser efficacement en situation.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Savoir l’expliquer sans contradiction.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Sentir comment elle s’inscrit dans un ensemble plus vaste.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face à la douleur émotionnelle d’autrui, tu…",
    options: [
      {
        label: "Restes présent et fiable, sans t’effondrer.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Aides activement à changer la situation.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Cherches à résoudre les causes pratiques.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Accueilles la profondeur sans chercher à corriger.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Ce qui te touche le plus, c’est…",
    options: [
      {
        label: "La loyauté, la constance, la ténacité.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Le courage, la transformation, la victoire sur l’obstacle.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "L’élégance d’un système bien construit.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "La beauté de ce qui relie au-delà du visible.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu crées quelque chose, tu cherches avant tout…",
    options: [
      {
        label: "La solidité et la durabilité.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "L’impact direct et la puissance du résultat.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "La précision et la logique interne.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’expression d’une vérité ressentie.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },

  // THEME V — RETRAIT & PROTECTION (33–40)
  {
    text: "Lorsque tu es entouré mais que tu n’as plus d’espace mental, tu…",
    options: [
      {
        label: "Restes présent mais moins engageant.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Couperais net pour récupérer ton autonomie.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Te concentres sur les tâches concrètes pour t’isoler.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te retires en silence, sans négociation.",
        effects: { SPIRIT: 1, OBJECT: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      }
    ]
  },
  {
    text: "Quand un conflit s’intensifie sans solution immédiate, tu…",
    options: [
      {
        label: "Restes stable en attendant que ça passe.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Roms le contact, tu refuses d’y rester.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "T’occupes d’autre chose, le problème se dégonfle seul.",
        effects: { MECANIC: 1, OBJECT: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Quitte l’échange pour préserver ton intériorité.",
        effects: { SPIRIT: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      }
    ]
  },
  {
    text: "Ce qui te pousse à partir d’un environnement, c’est…",
    options: [
      {
        label: "La perte de constance ou de loyauté.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "La confrontation permanente et stérile.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "La désorganisation systémique ou l’inefficacité.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "L’absence de sens, de profondeur ou de lien.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Quand tu dois t’économiser, tu…",
    options: [
      {
        label: "Fais le strict nécessaire sans rompre la continuité.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Coupes tout investissement relationnel.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Automatises, simplifies ou réduis les charges.",
        effects: { MECANIC: 1, OBJECT: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te replonges dans ton monde interne.",
        effects: { SPIRIT: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      }
    ]
  },
  {
    text: "Quand quelqu’un cherche à te posséder symboliquement, tu…",
    options: [
      {
        label: "Reste présent mais indéplaçable.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Te détaches et ne reviens pas.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Changes la dynamique pour rendre le lien neutre.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te rends inaccessible à un niveau invisible.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Face à l’épuisement émotionnel, tu…",
    options: [
      {
        label: "Réduis l’intensité sans tout abandonner.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Te retires radicalement pour te protéger.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Cherches un fonctionnement plus économe.",
        effects: { MECANIC: 1, OBJECT: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te recentres sur ton espace intérieur.",
        effects: { SPIRIT: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      }
    ]
  },
  {
    text: "Quand une relation devient trop exigeante, tu…",
    options: [
      {
        label: "Tiens un minimum vital pour ne pas rompre.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Coupes et reprends éventuellement plus tard.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Simplifies la relation pour la rendre supportable.",
        effects: { MECANIC: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Te déplaces vers un plan où la relation n’a plus prise.",
        effects: { SPIRIT: 1, FANTASTIC: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 1, dull: 0 }
      }
    ]
  },
  {
    text: "Si tu disparais d’un espace, c’est parce que…",
    options: [
      {
        label: "Il n’avait plus besoin de ta présence stable.",
        effects: { TREE: 1, wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1 }
      },
      {
        label: "Tu refuses d’être prisonnier d’un rôle.",
        effects: { BEAST: 1, wild: 1, urban: 0, noble: 0, broken: 1, big: 1, small: 0, colorful: 1, dull: 0 }
      },
      {
        label: "Il ne fonctionnait plus à ton niveau.",
        effects: { MECANIC: 1, OBJECT: 1, wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      },
      {
        label: "Tu dois revenir à toi pour continuer d’exister.",
        effects: { SPIRIT: 1, wild: 0, urban: 0, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1 }
      }
    ]
  }
];


// =========================
// Thèmes & intros
// =========================

const THEMES = [
  {
    id: 1,
    start: 0,
    end: 7,
    title: "THÈME I — Fondation & ancrage",
    intro:
      "On commence par ta base : comment tu t’ancres, comment tu portes, comment tu tiens quand tout bouge autour de toi. Pas ce que tu racontes, mais ce que tu tiens vraiment sur la durée."
  },
  {
    id: 2,
    start: 8,
    end: 15,
    title: "THÈME II — Force & influence",
    intro:
      "On quitte l’ancrage pur pour regarder ce que tu fais de ta force. Comment tu entres dans le rapport de force, comment tu impactes les autres, comment tu tiens quand ça chauffe vraiment."
  },
  {
    id: 3,
    start: 16,
    end: 23,
    title: "THÈME III — Fonction & structure",
    intro:
      "Là on regarde ton côté mécanique : comment tu organises, comment tu rends les choses fiables, ou comment tu sabotes tout ça parce que ça t’ennuie. C’est ton rapport au fonctionnement réel."
  },
  {
    id: 4,
    start: 24,
    end: 31,
    title: "THÈME IV — Perception & sens",
    intro:
      "On passe au plan intérieur : ce que tu perçois, ce que tu comprends, ce qui te touche vraiment. C’est là qu’on voit si tu es plus câblé matière, logique, énergie ou symbolique."
  },
  {
    id: 5,
    start: 32,
    end: 39,
    title: "THÈME V — Retrait & protection",
    intro:
      "Dernier bloc : comment tu te retires, comment tu coupes, ce que tu protèges en premier quand tout devient trop lourd. C’est souvent ici que se voit ta vraie priorité."
  }
];

// =========================
// Scores & ordres
// =========================

let currentQuestionIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null);

const scores = {
  TREE: 0,
  BEAST: 0,
  MECANIC: 0,
  SPIRIT: 0,
  FANTASTIC: 0,
  OBJECT: 0,
  wild: 0,
  urban: 0,
  noble: 0,
  broken: 0,
  big: 0,
  small: 0,
  colorful: 0,
  dull: 0
};

let natureOrder = [];
let axisFirst = {
  wildUrban: null,
  nobleBroken: null,
  bigSmall: null,
  colorfulDull: null
};

// =========================
// Profils (à compléter plus tard)
// =========================

const PERSONALITIES = {};

// =========================
// DOM
// =========================

const homeSection = document.getElementById("home-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressFill = document.getElementById("progress-fill");


const themeIntroBox = document.getElementById("theme-intro");
const themeTitleEl = document.getElementById("theme-title");
const themeTextEl = document.getElementById("theme-text");

const resultTitleEl = document.getElementById("result-title");
const resultArchetypeEl = document.getElementById("result-archetype");
const resultAnalysisEl = document.getElementById("result-analysis");
const resultStrengthsEl = document.getElementById("result-strengths");
const resultWeaknessesEl = document.getElementById("result-weaknesses");
const resultGrowthEl = document.getElementById("result-growth");

// =========================
// Navigation
// =========================

startBtn.addEventListener("click", () => {
  homeSection.classList.remove("active");
  resultSection.classList.remove("active");
  quizSection.classList.add("active");
  currentQuestionIndex = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  resetScores();
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[currentQuestionIndex] === null) {
    alert("Choisis une réponse avant de continuer.");
    return;
  }
  if (currentQuestionIndex < QUESTIONS.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateScores();
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  resultSection.classList.remove("active");
  homeSection.classList.add("active");
  resetScores();
});

// =========================
// Rendu
// =========================


function renderQuestion() {
  const qIndex = currentQuestionIndex;
  const q = QUESTIONS[qIndex];
  questionNumberEl.textContent = `Question ${qIndex + 1} / ${QUESTIONS.length}`;
  questionTextEl.textContent = q.text;

  const progress = ((qIndex + 1) / QUESTIONS.length) * 100;
  progressFill.style.width = progress + "%";

  updateThemeIntro(qIndex);

  answersContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.classList.add("answer-option");
    div.textContent = opt.label;
    if (answers[qIndex] === index) {
      div.classList.add("selected");
    }
    div.addEventListener("click", () => {
      answers[qIndex] = index;
      renderQuestion();
    });
    answersContainer.appendChild(div);
  });
}

function getThemeForQuestion(index) {
  return THEMES.find((t) => index >= t.start && index <= t.end) || null;
}

function updateThemeIntro(index) {
  if (!themeIntroBox || !themeTitleEl || !themeTextEl) return;
  const theme = getThemeForQuestion(index);
  if (!theme) {
    themeIntroBox.classList.add("hidden");
    return;
  }

  if (index === theme.start) {
    themeIntroBox.classList.remove("hidden");
    themeTitleEl.textContent = theme.title;
    themeTextEl.textContent = theme.intro;
  } else {
    themeIntroBox.classList.add("hidden");
  }
}

// =========================
// Scoring
// =========================
// Scoring
// =========================

function resetScores() {
  for (const key in scores) scores[key] = 0;
  natureOrder = [];
  axisFirst = {
    wildUrban: null,
    nobleBroken: null,
    bigSmall: null,
    colorfulDull: null
  };
}

function calculateScores() {
  resetScores();
  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const eff = QUESTIONS[qIndex].options[answerIndex].effects;
    for (const key in eff) {
      const value = eff[key];
      if (!value) continue;

      if (NATURES.includes(key)) {
        if (!natureOrder.includes(key)) natureOrder.push(key);
      }

      if (key === "wild" || key === "urban") {
        if (!axisFirst.wildUrban) axisFirst.wildUrban = key;
      } else if (key === "noble" || key === "broken") {
        if (!axisFirst.nobleBroken) axisFirst.nobleBroken = key;
      } else if (key === "big" || key === "small") {
        if (!axisFirst.bigSmall) axisFirst.bigSmall = key;
      } else if (key === "colorful" || key === "dull") {
        if (!axisFirst.colorfulDull) axisFirst.colorfulDull = key;
      }

      scores[key] += value;
    }
  });
}

function getDominantNature() {
  let bestScore = -Infinity;
  let candidates = [];

  NATURES.forEach((nature) => {
    if (scores[nature] > bestScore) {
      bestScore = scores[nature];
      candidates = [nature];
    } else if (scores[nature] === bestScore) {
      candidates.push(nature);
    }
  });

  if (candidates.length === 1) return candidates[0];

  for (const n of natureOrder) {
    if (candidates.includes(n)) return n;
  }

  return candidates[0] || "TREE";
}

function axisChoice(pos, neg, axisKey) {
  if (scores[pos] > scores[neg]) return pos.toUpperCase();
  if (scores[neg] > scores[pos]) return neg.toUpperCase();

  if (axisKey === "wildUrban") {
    if (axisFirst.wildUrban === pos) return pos.toUpperCase();
    if (axisFirst.wildUrban === neg) return neg.toUpperCase();
  } else if (axisKey === "nobleBroken") {
    if (axisFirst.nobleBroken === pos) return pos.toUpperCase();
    if (axisFirst.nobleBroken === neg) return neg.toUpperCase();
  } else if (axisKey === "bigSmall") {
    if (axisFirst.bigSmall === pos) return pos.toUpperCase();
    if (axisFirst.bigSmall === neg) return neg.toUpperCase();
  } else if (axisKey === "colorfulDull") {
    if (axisFirst.colorfulDull === pos) return pos.toUpperCase();
    if (axisFirst.colorfulDull === neg) return neg.toUpperCase();
  }

  return pos.toUpperCase();
}

function buildProfileKey() {
  const nature = getDominantNature();
  const env = axisChoice("wild", "urban", "wildUrban");
  const struct = axisChoice("noble", "broken", "nobleBroken");
  const size = axisChoice("big", "small", "bigSmall");
  const color = axisChoice("colorful", "dull", "colorfulDull");
  return `${nature}_${env}_${struct}_${size}_${color}`;
}

// =========================
// Résultat
// =========================

function showResult() {
  quizSection.classList.remove("active");
  resultSection.classList.add("active");

  const key = buildProfileKey();
  const profile = PERSONALITIES[key];

  if (!profile) {
    resultTitleEl.textContent = "Profil en attente d’écriture";
    resultArchetypeEl.textContent = key;
    resultAnalysisEl.textContent =
      "Ce profil existe dans la structure, mais son texte n’a pas encore été écrit. Tu peux le définir toi-même ou le laisser en suspens pour l’instant.";
    resultStrengthsEl.innerHTML = "";
    resultWeaknessesEl.innerHTML = "";
    resultGrowthEl.innerHTML = "";
    return;
  }

  resultTitleEl.textContent = profile.title;
  resultArchetypeEl.textContent = profile.archetype;
  resultAnalysisEl.textContent = profile.analysis.trim();

  if (profile.strengths && profile.strengths.length) {
    resultStrengthsEl.innerHTML =
      "<strong>Points forts :</strong><ul>" +
      profile.strengths.map((s) => `<li>${s}</li>`).join("") +
      "</ul>";
  } else {
    resultStrengthsEl.innerHTML = "";
  }

  if (profile.weaknesses && profile.weaknesses.length) {
    resultWeaknessesEl.innerHTML =
      "<strong>Points faibles :</strong><ul>" +
      profile.weaknesses.map((w) => `<li>${w}</li>`).join("") +
      "</ul>";
  } else {
    resultWeaknessesEl.innerHTML = "";
  }

  if (profile.growth) {
    resultGrowthEl.innerHTML = "<strong>S’améliorer :</strong><br>" + profile.growth.trim();
  } else {
    resultGrowthEl.innerHTML = "";
  }
}
