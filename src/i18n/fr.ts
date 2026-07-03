// French (Swiss French — vouvoiement, AVS/LPP terminology).
import type en from "./en";

const fr: typeof en = {
  meta: {
    title: "Sueleli — Finances suisses, gardées privées",
    description:
      "L'app financière suisse où vous payez ce qu'elle vaut pour vous. AVS, caisse de pension, pilier 3a, budgets et scénarios — chaque chiffre sensible reste sur votre appareil.",
  },

  nav: {
    pillars: "Piliers",
    scenarios: "Scénarios",
    privacy: "Confidentialité",
    free: "Votre prix",
    cta: "Obtenir l'app",
  },

  hero: {
    eyebrow: "Finances suisses, gardées privées",
    lede: "Toute votre vie financière — ce que vous dépensez aujourd'hui et ce dont vous vivrez demain — dans une seule app suisse. Chaque chiffre sensible reste sur votre appareil. <em>Chacun d'entre eux.</em>",
    welcome: "Bienvenue chez Sueleli.",
    ctaPrimary: "Obtenir l'app",
    ctaGhost: "Lire la promesse de confidentialité",
    phoneAria:
      "L'écran d'accueil de Sueleli : rente mensuelle estimée de CHF 6'240 et jauge d'objectif de retraite à 78%.",
    videoAria: "Le film produit Sueleli — 31 secondes",
    soundLabel: "Activer ou couper le son",
    countdown: 'Plus que <strong class="accent">38</strong> ans !',
    kpiLabel: "Rente mensuelle estimée",
    perMonth: "/ mois",
    gaugeLabel: "✦  Votre objectif de retraite  ✦",
    gaugeSub: "de votre objectif",
    bdAhv: "AVS",
    bdPension: "LPP",
    bdPrivate: "Privé",
  },

  duo: {
    latin: "Duo in uno",
    translation: "deux en un",
    headline: "Un livre, deux horizons.",
    todayLabel: "Aujourd'hui · Dépenses",
    todayTitle: "Chaque franc, comptabilisé.",
    todayText:
      "Comptes, budgets et paiements récurrents dans un livre mensuel serein — catégorisé sur votre téléphone, nulle part ailleurs.",
    tomorrowLabel: "Demain · Prévoyance",
    tomorrowTitle: "La retraite, sans le brouillard.",
    tomorrowText:
      "AVS, caisse de pension, pilier 3a et fortune privée en une seule vue — des projections bâties uniquement sur des chiffres confirmés.",
    foundation: "Un inventaire commun, un coffre chiffré, un appareil — le vôtre.",
  },

  pillars: {
    latin: "Tres columnae",
    translation: "trois colonnes",
    headline: "Votre objectif de retraite — porté par trois piliers.",
    intro:
      "AVS, caisse de pension, 3a & privé : Sueleli les érige tous les trois au même endroit et les mesure à votre objectif.",
    items: [
      { numeral: "I", name: "AVS", sub: "La prévoyance étatique" },
      { numeral: "II", name: "LPP", sub: "Votre caisse de pension" },
      { numeral: "III", name: "3a & privé", sub: "Votre propre épargne" },
    ],
    sim: {
      gaugeAria:
        "Jauge de l'objectif de retraite : les trois piliers remplissent l'arc jusqu'au score simulé ; le reste demeure vide.",
      scoreSub: "de votre objectif",
      totalLabel: "Revenu de retraite projeté",
      perMonth: "/ mois",
      ahvLabel: "Années de cotisation",
      yearsUnit: "ans",
      bvgLabel: "Capital de caisse de pension",
      p3Label: "Capital 3a & privé",
      goalNote:
        "Illustratif : objectif CHF 7'500 / mois, retrait sur 20 ans, sans rendement ni inflation. Dans l'app, chaque chiffre vous appartient.",
    },
    coupleNote:
      "En couple ? Les partenaires échangent des instantanés chiffrés de téléphone à téléphone — des projections de ménage, sans serveur.",
  },

  scaena: {
    latin: "Scaena",
    translation: "la scène",
    headline: "Scénarios & simulations — répétez demain.",
    panelLabel: "Scénarios & prévisions",
    retirementAge: "Âge de la retraite",
    lifeExpectancy: "Espérance de vie",
    expectedReturn: "Rendement attendu",
    currentCapital: "Capital actuel",
    inheritance: "Héritage à laisser",
    peakWord: "sommet",
    yearsWord: "ans",
    resultLabel: "Revenu de retraite estimé",
    resultUnit: "/ mois · valeurs illustratives, pas les vôtres",
    chartAria:
      "Courbe du capital : accumulation jusqu'à la retraite, puis retrait jusqu'à l'espérance de vie.",
    axisToday: "Aujourd'hui",
    axisRetirement: "Retraite",
    caption:
      "Accumulation jusqu'au point de bascule, retrait jusqu'à l'espérance de vie — la même courbe que l'app trace à partir de vos chiffres confirmés.",
  },

  codex: {
    latin: "Codex",
    translation: "le livre",
    headline: "Chaque jour, comptabilisé.",
    p1: "Un budget principal composé de sous-budgets et frais fixes — plus des pots spéciaux pour les projets partagés et tous les abonnements en vue. Saisissez en quelques secondes ou importez le CSV.",
    ledgerAria:
      "Un mois d'exemple dans le livre des dépenses, avec barre de budget et transactions.",
    month: "Juin 2026",
    budgetWord: "Budget",
    entries: [
      { payee: "Salaire — juin", cat: "Revenu", amount: "+6'500.00", kind: "in" },
      { payee: "Loyer", cat: "Logement · récurrent ⟳", amount: "−1'850.00", kind: "out" },
      { payee: "Migros", cat: "Courses", amount: "−54.30", kind: "out" },
    ],
    holidayTitle: "Vacances · Lisbonne",
    holidayTotal: "CHF 1'560 au total",
    members: [
      { name: "Vous", amount: "780" },
      { name: "Anna", amount: "450" },
      { name: "Ben", amount: "210" },
      { name: "Lea", amount: "120" },
    ],
    settleLabel: "Qui doit à qui",
    settles: ["Ben → vous · CHF 180", "Lea → vous · CHF 210", "Lea → Anna · CHF 60"],
    subsTitle: "Récurrent",
    subs: [
      { name: "Netflix", detail: "", amount: "−17.90" },
      { name: "Demi-tarif", detail: "CHF 190.00 / an", amount: "≈ −15.85" },
      { name: "Spotify", detail: "", amount: "−10.25" },
    ],
    subsTotal: "CHF 44.00 / mois",
    foot: "CHF · format suisse · catégorisé sur l'appareil",
  },

  acta: {
    latin: "Acta",
    translation: "les actes",
    headline: "Du papier à la preuve — sans que le papier ne quitte jamais vos mains.",
    sheetAria: "Un extrait CI de l'AVS scanné sur l'appareil.",
    sheetTitle: "Extrait du compte individuel",
    extractedAria: "Valeurs reconnues dans l'extrait, en attente de vérification",
    rows: [
      { year: "2021", value: "CHF 68'200" },
      { year: "2022", value: "CHF 70'150" },
      { year: "2023", value: "CHF 71'400" },
      { year: "2024", value: "CHF 74'900" },
    ],
    chipNote: "Vérifier & confirmer — vous avez toujours le dernier mot.",
    p1: "Sueleli lit votre extrait CI officiel — chaque année, chaque montant — grâce à une reconnaissance de texte qui tourne <strong>entièrement sur votre téléphone</strong>. Aucun envoi, aucun cloud, aucun compte. Même en mode avion.",
    p2: "Allemand, français, italien ou anglais ; papier ou PDF. Rien n'est enregistré avant que vous confirmiez chaque valeur.",
    seal: "Ne quitte jamais votre appareil",
  },

  arx: {
    latin: "Arx",
    translation: "la citadelle",
    headline: "Le coffre est à vous. Nous ne pourrions pas le lire, même si nous le voulions.",
    onDeviceTitle: "Gardé uniquement sur votre appareil",
    onDevice: [
      "Chaque solde de compte et chaque transaction",
      "Votre historique AVS et vos certificats de prévoyance",
      "Chaque document scanné et chaque résultat OCR",
      "Tous les budgets, scénarios et projections",
      "Chaque rapport de fortune généré",
      "L'instantané partagé de votre partenaire",
    ],
    onDeviceFoot:
      "Chiffré avec une clé qui n'existe que dans le stockage sécurisé de votre téléphone.",
    onServerTitle: "Ce que nos serveurs voient, en tout et pour tout",
    onServer: [
      "Votre adresse e-mail",
      "Votre langue et la version de l'app",
      "Vos appareils connectés",
      "Des valeurs de référence publiques (constantes AVS, taux de change)",
    ],
    onServerFoot:
      "C'est toute la liste. Les données financières n'y figurent pas — par architecture, pas par simple politique.",
    facts: [
      {
        lead: "Vous changez de téléphone ?",
        text: "Vos données voyagent d'appareil à appareil par une connexion chiffrée scellée par QR — jamais par nos serveurs.",
      },
      {
        lead: "Pas de sauvegarde cloud — délibérément.",
        text: "Une sauvegarde chez nous pourrait être exigée. Appareil perdu, coffre perdu — le prix d'une vraie confidentialité, dit ouvertement.",
      },
      {
        lead: "Le scan aussi reste local.",
        text: "Les relevés sont lus par reconnaissance de texte sur l'appareil — les documents ne quittent jamais votre téléphone.",
      },
    ],
  },

  foedus: {
    latin: "Foedus",
    translation: "le pacte",
    headline: "Planifiez à deux, chacun gardant le sien.",
    wreathAria:
      "Une couronne de laurier dorée autour des mots « ensemble depuis le 14.06.2019 » — la cérémonie de couple de l'app.",
    togetherSince: "Ensemble depuis",
    date: "14.06.2019",
    figcaption: "La cérémonie du premier échange — montrée une fois, gravée pour toujours.",
    p1: "Marié·e ou en partenariat enregistré ? L'AVS plafonne les rentes en couple. Chaque partenaire garde sa propre app, son coffre, son appareil.",
    p2: "Quand vous êtes prêts, échangez un instantané : de téléphone à téléphone, scellé par QR et chiffré — en choisissant ce que vous partagez. Rien ne fusionne, rien ne touche un serveur.",
  },

  gratis: {
    latin: "Pretium tuum",
    translation: "votre prix",
    headline: "Testez-la comme vous voulez. Payez ce qu'elle vaut pour vous.",
    vows: [
      {
        title: "Toute l'app, d'emblée",
        text: "Chaque fonction est ouverte dès le premier jour — pas d'essai, pas de paliers, pas de premium.",
      },
      {
        title: "Vous fixez le prix",
        text: "Quand vous sentez ce qu'elle vaut, payez exactement cela — via TWINT. Plus, moins, plus tard, ou jamais.",
      },
      {
        title: "Payer ne change rien",
        text: "Les contributions ne déverrouillent rien — cette règle est inscrite dans la constitution du produit.",
      },
    ],
    donateBtn: "Payez votre prix · TWINT",
    donateNote: "Disponible au lancement — ce que l'app vaut à vos yeux.",
  },

  epistula: {
    latin: "Epistula",
    translation: "la lettre",
    headline: "Écrivez à la maison.",
    emailLabel: "Votre e-mail",
    subjectLabel: "Objet",
    messageLabel: "Message",
    send: "Envoyer la lettre",
    note: "Livré à hallo@sueleli.ch — nous répondons à l'adresse indiquée.",
    sent: "Envoyé — nous vous répondrons.",
    error: "Échec de l'envoi — écrivez-nous directement à hallo@sueleli.ch.",
    replyLabel: "Répondre à",
  },

  descende: {
    headline: "Emportez le temple avec vous.",
    lede: "Sueleli arrive en Suisse sur iOS et Android — payez ce que vous voulez, privée, et dans les quatre langues de la maison.",
    badgeIos: "App Store · dès 2026",
    badgeAndroid: "Google Play · dès 2026",
    notify: "Prévenez-moi au lancement",
    notifySubject: "Prévenez-moi au lancement",
    signoff: "Construit en Suisse · Gardé sur votre appareil",
  },

  footer: {
    note: "Construit en Suisse. Gardé sur votre appareil.",
    contact: "Contact",
    privacy: "Politique de confidentialité",
  },
};

export default fr;
