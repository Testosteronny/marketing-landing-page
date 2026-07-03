// English dictionary — canonical shape for all locales.
const en = {
  meta: {
    title: "Sueleli — Swiss finance, kept private",
    description:
      "The Swiss finance app where you pay what it's worth to you. AHV, pension fund, pillar 3a, budgets, and scenarios — every sensitive number stays on your device.",
  },

  nav: {
    pillars: "Pillars",
    scenarios: "Scenarios",
    privacy: "Privacy",
    free: "Your price",
    cta: "Get the app",
  },

  hero: {
    eyebrow: "Swiss finance, kept private",
    lede: "Your whole financial life — what you spend today and what you'll live on tomorrow — in one Swiss app. Every sensitive number stays on your device. <em>Every single one.</em>",
    welcome: "Welcome to Sueleli.",
    ctaPrimary: "Get the app",
    ctaGhost: "Read the privacy promise",
    phoneAria:
      "The Sueleli home screen: estimated monthly pension of CHF 6'240 and a retirement goal gauge at 78%.",
    videoAria: "The Sueleli product film — 31 seconds",
    soundLabel: "Toggle sound",
    countdown: 'Only <strong class="accent">38</strong> more years!',
    kpiLabel: "Estimated monthly pension",
    perMonth: "/ month",
    gaugeLabel: "✦  Your retirement goal  ✦",
    gaugeSub: "of your goal",
    bdAhv: "AHV",
    bdPension: "Pension",
    bdPrivate: "Private",
  },

  duo: {
    latin: "Duo in uno",
    translation: "two in one",
    headline: "One ledger, two horizons.",
    todayLabel: "Today · Spending",
    todayTitle: "Every franc, accounted.",
    todayText:
      "Accounts, budgets, and recurring payments in one calm monthly ledger — categorized on your phone, nowhere else.",
    tomorrowLabel: "Tomorrow · Pension",
    tomorrowTitle: "Retirement, without the fog.",
    tomorrowText:
      "AHV, pension fund, pillar 3a, and private assets in one overview — projections built only from numbers you confirmed.",
    foundation: "One shared inventory, one encrypted vault, one device — yours.",
  },

  pillars: {
    latin: "Tres columnae",
    translation: "three columns",
    headline: "Your retirement goal — carried by three pillars.",
    intro:
      "AHV, pension fund, 3a & private: Sueleli raises all three in one place and measures them against your goal.",
    items: [
      { numeral: "I", name: "AHV", sub: "The state pension" },
      { numeral: "II", name: "BVG", sub: "Your pension fund" },
      { numeral: "III", name: "3a & private", sub: "Your own savings" },
    ],
    sim: {
      gaugeAria:
        "Retirement goal gauge: the three pillars fill the arc up to the simulated score; the rest stays empty.",
      scoreSub: "of your goal",
      totalLabel: "Projected retirement income",
      perMonth: "/ month",
      ahvLabel: "Contribution years",
      yearsUnit: "years",
      bvgLabel: "Pension-fund capital",
      p3Label: "3a & private capital",
      goalNote:
        "Illustrative: goal CHF 7'500 / month, 20-year drawdown, no yield or inflation. In the app, every number is your own.",
    },
    coupleNote:
      "Planning as a couple? Partners exchange encrypted snapshots phone-to-phone — household projections, no server.",
  },

  scaena: {
    latin: "Scaena",
    translation: "the stage",
    headline: "Scenarios & simulations — rehearse tomorrow.",
    panelLabel: "Scenarios & predictions",
    retirementAge: "Retirement age",
    lifeExpectancy: "Life expectancy",
    expectedReturn: "Expected return",
    currentCapital: "Current capital",
    inheritance: "Inheritance to leave",
    peakWord: "peak",
    yearsWord: "years",
    resultLabel: "Estimated retirement income",
    resultUnit: "/ month · illustrative values, not yours",
    chartAria:
      "Capital timeline: accumulation until retirement, then drawdown until life expectancy.",
    axisToday: "Today",
    axisRetirement: "Retirement",
    caption:
      "Accumulation to the breakpoint, drawdown to life expectancy — the same chart the app draws from your confirmed numbers.",
  },

  codex: {
    latin: "Codex",
    translation: "the book",
    headline: "Every day, accounted.",
    p1: "One main budget from your sub-budgets and fixed costs — plus special pots for shared plans and every subscription in sight. Enter payments in seconds or import your bank's CSV.",
    ledgerAria:
      "A sample month in the spending ledger with a budget bar and transactions.",
    month: "June 2026",
    budgetWord: "Budget",
    entries: [
      { payee: "Salary — June", cat: "Income", amount: "+6'500.00", kind: "in" },
      { payee: "Rent", cat: "Housing · recurring ⟳", amount: "−1'850.00", kind: "out" },
      { payee: "Migros", cat: "Groceries", amount: "−54.30", kind: "out" },
    ],
    holidayTitle: "Holiday · Lisbon",
    holidayTotal: "CHF 1'560 total",
    members: [
      { name: "You", amount: "780" },
      { name: "Anna", amount: "450" },
      { name: "Ben", amount: "210" },
      { name: "Lea", amount: "120" },
    ],
    settleLabel: "Who owes whom",
    settles: ["Ben → you · CHF 180", "Lea → you · CHF 210", "Lea → Anna · CHF 60"],
    subsTitle: "Recurring",
    subs: [
      { name: "Netflix", detail: "", amount: "−17.90" },
      { name: "Half-Fare", detail: "CHF 190.00 / year", amount: "≈ −15.85" },
      { name: "Spotify", detail: "", amount: "−10.25" },
    ],
    subsTotal: "CHF 44.00 / month",
    foot: "CHF · Swiss formatting · categorized on-device",
  },

  acta: {
    latin: "Acta",
    translation: "the records",
    headline: "From paper to proof — without the paper ever leaving your hands.",
    sheetAria: "An AHV IK statement being scanned on-device.",
    sheetTitle: "Auszug aus dem individuellen Konto",
    extractedAria: "Values recognized from the statement, awaiting review",
    rows: [
      { year: "2021", value: "CHF 68'200" },
      { year: "2022", value: "CHF 70'150" },
      { year: "2023", value: "CHF 71'400" },
      { year: "2024", value: "CHF 74'900" },
    ],
    chipNote: "Review & confirm — you always have the last word.",
    p1: "Sueleli reads your official IK statement — every year, every amount — with text recognition that runs <strong>entirely on your phone</strong>. No upload, no cloud, no account. It even works in airplane mode.",
    p2: "German, French, Italian, or English; paper or PDF. Nothing is saved until you confirm each value yourself.",
    seal: "Never leaves your device",
  },

  arx: {
    latin: "Arx",
    translation: "the citadel",
    headline: "The vault is yours. We couldn't read it if we wanted to.",
    onDeviceTitle: "Kept only on your device",
    onDevice: [
      "Every account balance and transaction",
      "Your AHV history and pension statements",
      "Every scanned document and OCR result",
      "All budgets, scenarios, and projections",
      "Every generated wealth report",
      "Your partner's shared snapshot",
    ],
    onDeviceFoot:
      "Encrypted with a key that exists only in your phone's secure storage.",
    onServerTitle: "What our servers ever see",
    onServer: [
      "Your e-mail address",
      "Your language and app version",
      "Your connected devices",
      "Public reference values (AHV constants, FX rates)",
    ],
    onServerFoot:
      "That's the whole list. Financial data is not on it — by architecture, not by policy.",
    facts: [
      {
        lead: "Moving phones?",
        text: "Your data travels device-to-device over a QR-keyed encrypted connection — never through our servers.",
      },
      {
        lead: "No cloud backup — deliberately.",
        text: "A backup we hold could be demanded. Lost device, lost vault — the price of real privacy, stated openly.",
      },
      {
        lead: "Scanning stays local.",
        text: "Pension statements are read by on-device text recognition — documents never leave your phone.",
      },
    ],
  },

  foedus: {
    latin: "Foedus",
    translation: "the pact",
    headline: "Plan as two, each holding your own.",
    wreathAria:
      "A gold laurel wreath around the words 'together since 14.06.2019' — the app's couple ceremony.",
    togetherSince: "Together since",
    date: "14.06.2019",
    figcaption: "The first-exchange ceremony — shown once, engraved forever.",
    p1: "Married or registered partners? Swiss pension math changes — AHV pensions are capped as a couple. Each partner keeps their own app, vault, and device.",
    p2: "When you're ready, exchange a snapshot: phone to phone, QR-sealed and encrypted, choosing exactly what to share. Nothing merges, nothing syncs, nothing touches a server.",
  },

  gratis: {
    latin: "Pretium tuum",
    translation: "your price",
    headline: "Test it however you like. Pay what it's worth to you.",
    vows: [
      {
        title: "The whole app, up front",
        text: "Every feature is open from day one — no trial clock, no tiers, no premium.",
      },
      {
        title: "You set the price",
        text: "When you feel what it's worth, pay exactly that — via TWINT. More, less, later, or never.",
      },
      {
        title: "Paying changes nothing",
        text: "Contributions unlock nothing — that rule is written into the product's constitution.",
      },
    ],
    donateBtn: "Pay your price · TWINT",
    donateNote: "Coming with launch — whatever the app feels worth to you.",
  },

  epistula: {
    latin: "Epistula",
    translation: "the letter",
    headline: "Write to the house.",
    emailLabel: "Your e-mail",
    subjectLabel: "Subject",
    messageLabel: "Message",
    send: "Send the letter",
    note: "Delivered to hallo@sueleli.ch — we reply to the address you provide.",
    sent: "Sent — we'll get back to you.",
    error: "Sending failed — please write to hallo@sueleli.ch directly.",
    replyLabel: "Reply to",
  },

  descende: {
    headline: "Take the temple with you.",
    lede: "Sueleli launches in Switzerland on iOS and Android — pay what you want, private, and in all four languages of the house.",
    badgeIos: "App Store · coming 2026",
    badgeAndroid: "Google Play · coming 2026",
    notify: "Tell me when it launches",
    notifySubject: "Notify me at launch",
    signoff: "Built in Switzerland · Kept on your device",
  },

  footer: {
    note: "Built in Switzerland. Kept on your device.",
    contact: "Contact",
    privacy: "Privacy Policy",
  },
};

export default en;
