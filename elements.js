// ======================
// ⚜ ORACLE — PROFILS ÉLÉMENTAIRES (36 COMBOS) ⚜
// ======================

window.ORACLE = window.ORACLE || {};
window.ORACLE.ELEMENT_MATRIX = window.ORACLE.ELEMENT_MATRIX || {};

/*
Structure :
window.ORACLE.ELEMENT_MATRIX[PRIMARY][SECONDARY] = {
  primary: "FEU" | "EAU" | "FOUDRE" | "TERRE" | "LUMIERE" | "TENEBRE",
  secondary: same,
  code: "FEU_EAU" etc.,
  label: "Nom court",
  synopsis: "Phrase courte résumant la vibe.",
  description: "Texte oracle détaillé."
};
*/

// Petite fonction utilitaire interne
function defineElementCombo(primary, secondary, data) {
  window.ORACLE.ELEMENT_MATRIX[primary] = window.ORACLE.ELEMENT_MATRIX[primary] || {};
  window.ORACLE.ELEMENT_MATRIX[primary][secondary] = Object.assign(
    {
      primary,
      secondary,
      code: primary + "_" + secondary
    },
    data
  );
}

// ======================
// ⚜ PROFILS PURS (PRIMARY = SECONDARY) ⚜
// ======================

// FEU PUR
defineElementCombo("FEU", "FEU", {
  label: "Feu Pur — L’Impulsion Vivante",
  synopsis: "L’élan qui refuse l’immobilité.",
  description: "Tu es le mouvement avant la réflexion. Chez toi, l’énergie ne reste jamais immobile : elle cherche une direction, une action, un contact. Les situations figées t’étouffent, tu préfères te tromper en avançant que rester immobile à tout analyser.\n\nTu peux être moteur pour les autres : tu lances, tu réveilles, tu débloques. Mais ta flamme peut aussi brûler trop fort : paroles lâchées trop vite, décisions impulsives, épuisement nerveux que tu ignores jusqu’au crash.\n\nQuand tu apprends à canaliser ton élan sans le brider, tu deviens un brasier qui réchauffe au lieu d’incendier."
});

// EAU PURE
defineElementCombo("EAU", "EAU", {
  label: "Eau Pure — Le Flux Intérieur",
  synopsis: "Ce qui enveloppe, absorbe et relie.",
  description: "Tu es calme en surface, jamais vide à l’intérieur. Chez toi, les choses bougent en douceur : ressentis, intuitions, impressions se succèdent comme des vagues. Tu observes, tu accueilles, tu t’adaptes avant de pousser frontalement.\n\nTu captes les nuances que les autres ratent, les tensions silencieuses, les émotions à demi-mot. Tu peux être un refuge, un apaisement, un espace où l’autre peut enfin déposer ce qu’il porte.\n\nMais l’Eau pure peut se dissoudre : dire oui à trop de choses, absorber des douleurs qui ne sont pas les tiennes, lisser les conflits jusqu’à disparaître dedans. Quand tu poses des rives sans perdre ta profondeur, tu deviens une force tranquille que rien ne renverse facilement."
});

// FOUDRE PURE
defineElementCombo("FOUDRE", "FOUDRE", {
  label: "Foudre Pure — L’Échappée",
  synopsis: "L’éclair qui refuse la stagnation.",
  description: "Tu es l’éclair qui refuse la ligne droite trop longtemps. Ta nature te pousse au changement, aux détours soudains, aux routes non tracées. Tu avances par sauts, par intuitions brutales, par virages que d’autres ne comprennent pas.\n\nTu apportes la rupture nécessaire : tu brises les cycles toxiques, tu ouvres des portes inattendues, tu donnes de l’audace à ceux qui n’osaient plus.\n\nMais la Foudre pure a du mal à rester : l’engagement long te pèse, la répétition te vide, tu peux laisser derrière toi des choses commencées et jamais vraiment assumées. Quand tu choisis quelques éclairs à honorer jusqu’au bout, tu deviens un catalyseur de changement réel."
});

// TERRE PURE
defineElementCombo("TERRE", "TERRE", {
  label: "Terre Pure — Le Pilier",
  synopsis: "Ce qui tient quand tout le reste tremble.",
  description: "Tu es ce qui tient quand tout le reste vacille. Chez toi, il y a une densité, une inertie volontaire : tu ne changes pas d’avis au premier souffle de vent. Tu aimes savoir où tu poses les pieds, ce que tu construis, et pourquoi tu le fais.\n\nOn peut compter sur toi : tu assumes, tu reviens, tu continues même quand ce n’est plus excitant. Tu portes les projets dans la durée, tu rappelles que tout ne peut pas être improvisé.\n\nMais la Terre pure peut se figer : résister à tout changement, rester attachée à des structures mortes, confondre stabilité et immobilité. Quand tu acceptes de bouger sans perdre ton ancrage, tu deviens une base sûre sur laquelle on peut bâtir sans peur."
});

// LUMIERE PURE
defineElementCombo("LUMIERE", "LUMIERE", {
  label: "Lumière Pure — Le Don",
  synopsis: "La part de toi qui veut réparer.",
  description: "Tu es tourné vers ce qui peut être soulagé, réparé, éclairci. Tu repères vite où ça fait mal, où quelqu’un s’effondre en silence, où une situation manque de sens. Ton premier élan, souvent, c’est : “Comment je peux alléger ça ?”.\n\nTu peux être une présence qui rassure, qui remet du sens, qui laisse les lieux un peu mieux qu’elle ne les a trouvés.\n\nMais la Lumière pure peut se sacrifier : porter trop, attirer ceux qui ne veulent pas changer, confondre ta valeur avec ce que tu donnes. Quand tu poses des limites sans fermer ton cœur, tu deviens un phare, pas une bougie qui se consume pour tout le monde."
});

// TENEBRE PURE
defineElementCombo("TENEBRE", "TENEBRE", {
  label: "Ténèbre Pure — La Profondeur Lucide",
  synopsis: "L’œil qui voit sous la surface.",
  description: "Tu es l’œil qui regarde sous la surface. Tu n’as pas peur des zones grises, des fissures, des pensées sombres. Tu vois les failles, les contradictions, les parts d’ombre que d’autres évitent.\n\nTu peux avoir une solidité intérieure rare : tu encaisses, tu analyses, tu comprends des histoires que beaucoup fuiraient. Tu peux marcher avec ceux qui traversent des nuits longues.\n\nMais la Ténèbre pure peut se perdre dans sa propre profondeur : ruminer, se couper des autres, voir le pire partout. Quand tu apprends à remonter à la surface sans renier ce que tu as vu en bas, tu deviens un gardien de vérité, pas un prisonnier de tes ombres."
});


// ======================
// ⚜ FEU DOMINANT ⚜
// ======================

defineElementCombo("FEU", "EAU", {
  label: "Braise Apaisée",
  synopsis: "Intensité qui écoute avant de frapper.",
  description: "Ton feu ne se consume pas dans l’emballement : il pulse et revient, comme des marées brûlantes. Tu agis avec intensité, mais tu écoutes avant de frapper. Tu ressens les courants avant de décider de les traverser.\n\nTu peux allumer quelque chose chez les autres sans les écraser, inspirer sans brûler.\n\nOmbre : tu peux hésiter trop longtemps entre agir et ressentir, comme si ton brasier attendait qu’on l’autorise à exister."
});

defineElementCombo("FEU", "FOUDRE", {
  label: "Impact Errant",
  synopsis: "Mouvement incendiaire et changeant.",
  description: "Ton mouvement devient incendiaire. Tu ne changes pas juste de chemin : tu les ouvres en les frappant. Tu agis avant de tout comprendre, tu sens le “prochain lieu” avant de finir l’actuel.\n\nTu rends les choses vivantes par impact, par friction, par collision.\n\nOmbre : rien ne dure, tu peux laisser derrière toi un champ de cendres et recommencer ailleurs sans regarder en arrière."
});

defineElementCombo("FEU", "TERRE", {
  label: "Foyer Inébranlable",
  synopsis: "Flamme qui construit au lieu de se disperser.",
  description: "Ton feu n’est pas un éclair, c’est une forge. Tu vas au bout des choses, tu construis avec ton énergie au lieu de simplement la libérer. Tu peux porter un projet longtemps, avec une endurance surprenante pour un cœur ardent.\n\nTu deviens une flamme qui bâtit, qui transforme, qui chauffe lentement plutôt qu’elle n’explose.\n\nOmbre : tu peux t’obstiner dans une direction brûlante même quand le monde a changé autour de toi."
});

defineElementCombo("FEU", "LUMIERE", {
  label: "Flamme Gardienne",
  synopsis: "Énergie ardente mise au service d’autrui.",
  description: "Ton énergie se met au service de l’autre. Tu te relèves pour protéger, tu agis pour aider, tu te dépenses par instinct pour soutenir un être, un groupe ou une cause.\n\nTu peux être un catalyseur qui rallume les braises éteintes chez ceux qui se croyaient perdus.\n\nOmbre : tu peux tout brûler pour sauver, sans jamais te demander qui te rallume, toi."
});

defineElementCombo("FEU", "TENEBRE", {
  label: "Flamme Profonde",
  synopsis: "Intensité qui brûle dans les fondations.",
  description: "Ton feu ne se disperse pas en surface : il brûle dans les fondations. Tu vois les fissures, tu comprends ce qui manque, et tu agis avec un instinct brut pour transformer ce qui doit l’être, même par la destruction.\n\nTu changes les choses à la racine, pas en façade.\n\nOmbre : tu peux devenir ravageur par lucidité, brûler parce que tu as vu ce que personne n’osait regarder."
});


// ======================
// ⚜ EAU DOMINANTE ⚜
// ======================

defineElementCombo("EAU", "FEU", {
  label: "Marée Ardente",
  synopsis: "Émotion qui se transforme en action.",
  description: "Tu ressens avant de frapper, mais ton ressenti ne reste pas immobile : il appelle l’action. Tu ne te dissous pas dans les émotions des autres, tu les transformes en mouvement, en choix, en décisions vibrantes.\n\nTu peux inspirer les gens à se relever plutôt qu’à se plaindre.\n\nOmbre : tu peux brûler tes émotions pour aller plus vite, confondre réaction et expression."
});

defineElementCombo("EAU", "FOUDRE", {
  label: "Vague Vagabonde",
  synopsis: "Sensibilité nomade, en déplacement constant.",
  description: "Tu captes les courants, puis tu changes brutalement de direction quand une brèche s’ouvre. Ta sensibilité ne te rend pas immobile : elle te sert de radar.\n\nTu ressens où aller, pas seulement ce que tu ressens.\n\nOmbre : tu peux fuir ce que tu portes en donnant l’impression que tu “suis le courant”."
});

defineElementCombo("EAU", "TERRE", {
  label: "Océan Profond",
  synopsis: "Endurance émotionnelle ancrée.",
  description: "Tu ne bouges pas vite, mais quand tu touches quelque chose, tu y descends jusqu’à la roche. Tu comprends les autres en profondeur, tu analyses sans brusquer, tu absorbes lentement.\n\nTa présence rassure : on peut se déposer, se poser, construire avec toi.\n\nOmbre : tu peux t’alourdir, porter trop longtemps, devenir une mer trop dense pour toi-même."
});

defineElementCombo("EAU", "LUMIERE", {
  label: "Baume Clair",
  synopsis: "Empathie qui soigne sans bruit.",
  description: "Tu ressens avec précision et tu veux apaiser. Tu ne te contentes pas de comprendre : tu cherches à soulager, à rendre les choses moins lourdes.\n\nTu peux être un refuge silencieux pour ceux qui n’ont plus de voix.\n\nOmbre : tu peux effacer tes propres besoins au nom de la paix émotionnelle des autres."
});

defineElementCombo("EAU", "TENEBRE", {
  label: "Abysse Silencieux",
  synopsis: "Compassion qui regarde la douleur en face.",
  description: "Tu ressens profondément sans craindre ce qui est lourd, sombre, brut. Tu ne détournes pas le regard quand quelqu’un s’effondre, tu peux te tenir dans les profondeurs psychiques sans paniquer.\n\nTu comprends la douleur sans la dramatiser.\n\nOmbre : tu peux t’attacher à ces profondeurs, les porter comme si c’étaient les tiennes, jusqu’à ce que ton propre centre disparaisse."
});


// ======================
// ⚜ FOUDRE DOMINANTE ⚜
// ======================

defineElementCombo("FOUDRE", "FEU", {
  label: "Explosion Vagabonde",
  synopsis: "Mouvement incendiaire, toujours en départ.",
  description: "Ton mouvement devient incendiaire. Tu ne changes pas juste de chemin, tu les ouvres en les frappant. Tu agis avant de tout comprendre, tu sens le prochain lieu avant de finir l’actuel.\n\nTu rends les choses vivantes par impact, par collision.\n\nOmbre : rien ne dure, tu peux laisser derrière toi un champ de cendres et recommencer ailleurs sans regarder en arrière."
});

defineElementCombo("FOUDRE", "EAU", {
  label: "Courant Fugitif",
  synopsis: "Changement guidé par une sensibilité fluide.",
  description: "Ton mouvement n’est pas impulsif mais instinctif. Tu glisses hors des structures au moment exact où elles deviennent trop lourdes. Tu sens quand partir, quand revenir, quand disparaître.\n\nTes changements semblent désordonnés, mais ils suivent une logique subtile.\n\nOmbre : tu peux changer pour éviter de ressentir, devenir insaisissable pour ceux qui voudraient te rejoindre."
});

defineElementCombo("FOUDRE", "TERRE", {
  label: "Séisme Rythmique",
  synopsis: "Rupture structurante et profonde.",
  description: "Tu transformes en profondeur. Tu ne renverses pas pour renverser : tu fais craquer là où la structure ne tient plus, puis tu reconstruis.\n\nTu peux être le catalyseur qui casse l’ancien système et pose les fondations du nouveau.\n\nOmbre : tu peux détruire méthodiquement, convaincu de faire mieux, même si personne n’en veut vraiment."
});

defineElementCombo("FOUDRE", "LUMIERE", {
  label: "Éclaireur",
  synopsis: "Mouvement qui ouvre la voie aux autres.",
  description: "Tu changes pour guider. Ton mouvement ouvre des chemins, montre ce qui est possible, fait oser ceux qui n’osaient pas.\n\nTu es souvent celui qui part en premier et revient dire : “C’est possible, viens”.\n\nOmbre : tu peux t’épuiser à tirer tout le monde vers l’avant, ou t’agacer de ceux qui n’arrivent pas à suivre."
});

defineElementCombo("FOUDRE", "TENEBRE", {
  label: "Fissure Lucide",
  synopsis: "Rupture dictée par ce que tu vois en profondeur.",
  description: "Tu ne changes pas par ennui, mais parce que tu vois ce qui doit s’effondrer. Tu détectes les mensonges, les structures mortes, les motifs toxiques, et tu frappes là où ça craque.\n\nTa rupture est chirurgicale, froide, inévitable.\n\nOmbre : tu peux devenir saboteur par lucidité, en oubliant ceux qui restent dans les décombres."
});


// ======================
// ⚜ TERRE DOMINANTE ⚜
// ======================

defineElementCombo("TERRE", "FEU", {
  label: "Forge Durable",
  synopsis: "Endurance structurée portée par un feu constant.",
  description: "Ton ancrage ne sert pas à conserver, il sert à transformer. Tu construis par étapes, mais chaque étape chauffe, affine, pousse plus loin. Tu n’es pas un simple mur : tu es une forge.\n\nTu matérialises, tu finis ce que tu commences.\n\nOmbre : tu peux t’accrocher trop longtemps à une flamme qu’il fallait éteindre."
});

defineElementCombo("TERRE", "EAU", {
  label: "Roc Mouvant",
  synopsis: "Stabilité qui sait encore s’adapter.",
  description: "Tu tiens, mais tu t’adaptes. Tu ne changes pas souvent, mais tu changes juste. Tes choix sont durables, réfléchis, intégrés.\n\nTu peux être stabilisant pour les autres : un appui qui absorbe sans imposer.\n\nOmbre : tu peux porter trop, trop longtemps, te pétrifier à force de retenir ce qui ne circule plus."
});

defineElementCombo("TERRE", "FOUDRE", {
  label: "Socle Séismique",
  synopsis: "Changement profond venant d’un ancrage solide.",
  description: "Tu transformes en profondeur. Tu ne renverses pas pour renverser, tu fais craquer là où la structure ne tient plus, puis tu rebâtis.\n\nTu peux redessiner un système entier en gardant l’essentiel.\n\nOmbre : tu peux détruire lentement au nom du “mieux”, même si personne ne t’a rien demandé."
});

defineElementCombo("TERRE", "LUMIERE", {
  label: "Gardien",
  synopsis: "Soutien stable, presque invisible.",
  description: "Tu tiens le monde sur ton dos sans bruit. Tu accueilles, tu supportes, tu offres un espace sûr, tu sécurises la route pour les autres.\n\nLes autres bâtissent parce que tu es là.\n\nOmbre : tu peux devenir celui qui doit tout porter, jusqu’à t’effriter en silence."
});

defineElementCombo("TERRE", "TENEBRE", {
  label: "Monolithe",
  synopsis: "Endurance mentale incrustée dans la matière.",
  description: "Tu tiens même quand tout s’effondre. Tu as une endurance intérieure qui dépasse les apparences. Tu encaisses, tu observes, tu restes debout là où d’autres se cassent.\n\nTu cherches la base, le mécanisme, la vérité qui soutient le monde.\n\nOmbre : tu peux devenir impénétrable, sourd aux signaux d’alarme, enfermé dans ta propre forteresse."
});


// ======================
// ⚜ LUMIERE DOMINANTE ⚜
// ======================

defineElementCombo("LUMIERE", "FEU", {
  label: "Porte-Flamme",
  synopsis: "Soutien qui réveille au lieu de consoler.",
  description: "Tu ne guides pas en silence : tu agis, tu inspires, tu tires les autres vers l’avant. Tu aides en ouverture, pas en simple réassurance. Tu veux relever, réveiller, galvaniser.\n\nTon soutien prend la forme d’élans, de décisions, de “on y va”.\n\nOmbre : tu peux imposer ton aide, presser les autres à changer avant d’être prêts."
});

defineElementCombo("LUMIERE", "EAU", {
  label: "Soin Dissous",
  synopsis: "Soutien doux, diffus, quasi invisible.",
  description: "Tu soutiens doucement, sans affichage. Tu ressens avant d’intervenir, tu accompagnes sans forcer le rythme. Tu vois ce qu’il faut alléger, tu comprends la souffrance, tu apaises par ta seule présence.\n\nTu es un baume discret.\n\nOmbre : tu peux t’effacer jusqu’à disparaître, porter l’autre sans jamais te porter toi-même."
});

defineElementCombo("LUMIERE", "FOUDRE", {
  label: "Aube Nomade",
  synopsis: "Tu allumes, tu montres, puis tu repars.",
  description: "Tu ne restes pas là où tu ne peux plus aider. Tu allumes, tu montres, tu ouvres un chemin, puis tu t’éloignes quand le groupe peut marcher seul.\n\nTu es un déclencheur de départs, un signe de passage.\n\nOmbre : tu peux partir trop tôt, convaincu que ton rôle est joué, ou changer de direction avant d’avoir vraiment transmis ce que tu portais."
});

defineElementCombo("LUMIERE", "TERRE", {
  label: "Sanctuaire",
  synopsis: "Refuge stable où l’on peut déposer les armes.",
  description: "Tu ne soignes pas par parole, mais par constance. Tu tiens, tu portes, tu accueilles, tu crées un espace sûr. Ta présence est une structure où les autres peuvent enfin se reposer.\n\nTon aide est durable, concrète, incarnée.\n\nOmbre : tu peux devenir celui qui “doit tenir” pour tout le monde, jusqu’à t’effondrer quand personne ne regarde."
});

defineElementCombo("LUMIERE", "TENEBRE", {
  label: "Clair-Obscur",
  synopsis: "Tu aides en révélant l’ombre, pas en la niant.",
  description: "Tu aides en voyant les ombres. Tu ne nies pas la douleur, tu ne la maquilles pas, tu vas avec elle jusqu’à sa racine. Tu guéris en révélant ce qui est caché, en mettant de la clarté sur ce qui blesse.\n\nTu peux être présence rare pour ceux qui vivent des nuits profondes.\n\nOmbre : tu peux croire que tout doit être confronté, oublier la simple douceur."
});


// ======================
// ⚜ TENEBRE DOMINANTE ⚜
// ======================

defineElementCombo("TENEBRE", "FEU", {
  label: "Rupture Ardente",
  synopsis: "Destruction / transformation guidée par la lucidité.",
  description: "Tu vois ce qui doit tomber… et tu l’abats toi-même. Tu ne te contentes pas de comprendre, tu tranches. Tu peux être une force de transformation radicale, brûlant les illusions, les mensonges, les structures mortes.\n\nOmbre : tu peux confondre purification et destruction, vouloir tout refaire à zéro."
});

defineElementCombo("TENEBRE", "EAU", {
  label: "Puits Intérieur",
  synopsis: "Profondeur émotionnelle sans fuite.",
  description: "Tu ne ressens pas juste la surface : tu plonges au-dessous. Tu comprends la tristesse, la honte, la peur, les zones noyées des autres, et tu peux les accueillir sans panique.\n\nTu es capable d’écouter là où la plupart se referment.\n\nOmbre : tu peux absorber des douleurs qui ne t’appartiennent pas, t’y perdre, ou les confondre avec les tiennes."
});

defineElementCombo("TENEBRE", "FOUDRE", {
  label: "Cassure Choisie",
  synopsis: "Rupture précise, pensée, parfois impitoyable.",
  description: "Tu détectes la vérité cachée et tu frappes là où elle doit éclater. Ton changement n’est pas impulsif, il est calculé, chirurgical. Tu fais bouger les lignes en profondeur, parfois en une seule décision.\n\nOmbre : tu peux devenir stratège de destruction, cassant par lucidité, en oubliant ceux qui restent derrière."
});

defineElementCombo("TENEBRE", "TERRE", {
  label: "Abysse Rocheux",
  synopsis: "Endurance mentale qui traverse les tempêtes.",
  description: "Tu ne bouges pas sous la pression : tu encaisses, tu restes, tu comprends. Tu peux porter des cicatrices mentales sans t’effondrer, tenir une position dans la tempête.\n\nTu vois loin, tu attends le moment juste.\n\nOmbre : tu peux devenir inébranlable à l’excès, enfermé dans ta propre forteresse intérieure."
});

defineElementCombo("TENEBRE", "LUMIERE", {
  label: "Voile Porteur",
  synopsis: "Guérison par la vérité, même sombre.",
  description: "Tu éclaires depuis l’intérieur, pas depuis les hauteurs. Tu aides en traversant la douleur avec l’autre, en révélant ce qui fait mal, pas en lissant la surface.\n\nTu peux accompagner ceux qui n’ont plus accès à la lumière depuis longtemps.\n\nOmbre : tu peux croire qu’il faut toujours plonger dans l’ombre pour guérir, en oubliant qu’on a parfois juste besoin de repos."
});

console.log("ORACLE ELEMENT MATRIX LOADED, kupo !");
