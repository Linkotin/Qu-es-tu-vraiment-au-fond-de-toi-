// Données du test
const NATURES = ["TREE", "BEAST", "MECANIC", "SPIRIT", "FANTASTIC", "OBJECT"];

const QUESTIONS = [
  {
    text: "Quand tu entres dans un nouvel endroit, tu…",
    options: [
      {
        label: "Repères d’abord la structure, les points fixes, les issues.",
        effects: {
          TREE: 2, BEAST: 0, MECANIC: 1, SPIRIT: 0, FANTASTIC: 0, OBJECT: 0,
          wild: 0, urban: 1, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1
        }
      },
      {
        label: "Regardes qui est là, qui domine, qui est invisible.",
        effects: {
          TREE: 0, BEAST: 2, MECANIC: 0, SPIRIT: 0, FANTASTIC: 0, OBJECT: 0,
          wild: 1, urban: 0, noble: 1, broken: 0, big: 1, small: 0, colorful: 0, dull: 1
        }
      },
      {
        label: "Scrutes les systèmes : objets, machines, organisation matérielle.",
        effects: {
          TREE: 0, BEAST: 0, MECANIC: 2, SPIRIT: 0, FANTASTIC: 0, OBJECT: 1,
          wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1
        }
      },
      {
        label: "Ressens l’ambiance, même sans pouvoir l’expliquer.",
        effects: {
          TREE: 1, BEAST: 0, MECANIC: 0, SPIRIT: 2, FANTASTIC: 0, OBJECT: 0,
          wild: 1, urban: 0, noble: 1, broken: 0, big: 0, small: 1, colorful: 1, dull: 0
        }
      },
      {
        label: "Cherches juste un coin où être tranquille.",
        effects: {
          TREE: 1, BEAST: 1, MECANIC: 0, SPIRIT: 0, FANTASTIC: 0, OBJECT: 1,
          wild: 0, urban: 1, noble: 0, broken: 1, big: 0, small: 1, colorful: 0, dull: 1
        }
      }
    ]
  },
  {
    text: "Quand tout le monde panique autour de toi, tu…",
    options: [
      {
        label: "Restes calme, tu deviens automatiquement le point stable.",
        effects: {
          TREE: 2, BEAST: 0, MECANIC: 0, SPIRIT: 1, FANTASTIC: 0, OBJECT: 0,
          wild: 0, urban: 1, noble: 2, broken: 0, big: 1, small: 0, colorful: 0, dull: 1
        }
      },
      {
        label: "Bouges vite, tu protèges, tu anticipes les dégâts.",
        effects: {
          TREE: 0, BEAST: 2, MECANIC: 0, SPIRIT: 1, FANTASTIC: 0, OBJECT: 0,
          wild: 1, urban: 0, noble: 2, broken: 0, big: 1, small: 0, colorful: 1, dull: 0
        }
      },
      {
        label: "Analyses la situation comme un système en panne.",
        effects: {
          TREE: 0, BEAST: 0, MECANIC: 2, SPIRIT: 0, FANTASTIC: 0, OBJECT: 1,
          wild: 0, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 0, dull: 1
        }
      },
      {
        label: "T’éloignes du chaos, tu observes à distance.",
        effects: {
          TREE: 0, BEAST: 1, MECANIC: 1, SPIRIT: 0, FANTASTIC: 0, OBJECT: 0,
          wild: 1, urban: 0, noble: 0, broken: 1, big: 0, small: 2, colorful: 0, dull: 1
        }
      },
      {
        label: "Essaies de changer l’ambiance, de détourner, de dégonfler.",
        effects: {
          TREE: 0, BEAST: 1, MECANIC: 0, SPIRIT: 0, FANTASTIC: 2, OBJECT: 0,
          wild: 1, urban: 1, noble: 1, broken: 0, big: 0, small: 1, colorful: 2, dull: 0
        }
      }
    ]
  }
  // Tu peux dupliquer ce modèle pour ajouter jusqu’à 40 questions.
];

let currentQuestionIndex = 0;
let answers = new Array(QUESTIONS.length).fill(null);

const scores = {
  TREE: 0, BEAST: 0, MECANIC: 0, SPIRIT: 0, FANTASTIC: 0, OBJECT: 0,
  wild: 0, urban: 0, noble: 0, broken: 0, big: 0, small: 0, colorful: 0, dull: 0
};

// Profils : vide pour l’instant, tu les rempliras 1 par 1
const PERSONALITIES = {
  // Exemple de clé :
  // "TREE_WILD_NOBLE_BIG_DULL": { title: "...", archetype: "...", analysis: "...", strengths: [...], weaknesses: [...], growth: "..." }
};

// Sections
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

const resultTitleEl = document.getElementById("result-title");
const resultArchetypeEl = document.getElementById("result-archetype");
const resultAnalysisEl = document.getElementById("result-analysis");
const resultStrengthsEl = document.getElementById("result-strengths");
const resultWeaknessesEl = document.getElementById("result-weaknesses");
const resultGrowthEl = document.getElementById("result-growth");

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

function renderQuestion() {
  const q = QUESTIONS[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} / ${QUESTIONS.length}`;
  questionTextEl.textContent = q.text;

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
  progressFill.style.width = progress + "%";

  answersContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const div = document.createElement("div");
    div.classList.add("answer-option");
    div.textContent = opt.label;
    if (answers[currentQuestionIndex] === index) {
      div.classList.add("selected");
    }
    div.addEventListener("click", () => {
      answers[currentQuestionIndex] = index;
      renderQuestion();
    });
    answersContainer.appendChild(div);
  });
}

function resetScores() {
  for (const key in scores) {
    scores[key] = 0;
  }
}

function calculateScores() {
  resetScores();
  answers.forEach((answerIndex, qIndex) => {
    if (answerIndex === null) return;
    const eff = QUESTIONS[qIndex].options[answerIndex].effects;
    for (const key in eff) {
      scores[key] += eff[key];
    }
  });
}

function getDominantNature() {
  let best = null;
  let bestScore = -Infinity;
  NATURES.forEach((nature) => {
    if (scores[nature] > bestScore) {
      bestScore = scores[nature];
      best = nature;
    }
  });
  return best;
}

function axisChoice(pos, neg) {
  return scores[pos] >= scores[neg] ? pos.toUpperCase() : neg.toUpperCase();
}

function buildProfileKey() {
  const nature = getDominantNature();
  const env = axisChoice("wild", "urban");
  const struct = axisChoice("noble", "broken");
  const size = axisChoice("big", "small");
  const color = axisChoice("colorful", "dull");
  return `${nature}_${env}_${struct}_${size}_${color}`;
}

function showResult() {
  quizSection.classList.remove("active");
  resultSection.classList.add("active");

  const key = buildProfileKey();
  const profile = PERSONALITIES[key];

  if (!profile) {
    resultTitleEl.textContent = "Profil en attente d’écriture";
    resultArchetypeEl.textContent = key;
    resultAnalysisEl.textContent =
      "Ce profil existe dans la structure, mais son texte n’a pas encore été écrit. Tu peux le définir toi-même ou le laisser en suspens.";
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
