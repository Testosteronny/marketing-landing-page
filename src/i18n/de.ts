// German (Swiss High German — no ß, du-form) — default locale.
import type en from "./en";

const de: typeof en = {
  meta: {
    title: "Sueleli — Schweizer Finanzen, privat gehalten",
    description:
      "Die Schweizer Finanz-App, bei der du zahlst, was sie dir wert ist. AHV, Pensionskasse, Säule 3a, Budgets und Szenarien — jede sensible Zahl bleibt auf deinem Gerät.",
  },

  nav: {
    pillars: "Säulen",
    scenarios: "Szenarien",
    privacy: "Privatsphäre",
    free: "Dein Preis",
    cta: "App holen",
  },

  hero: {
    eyebrow: "Schweizer Finanzen, privat gehalten",
    lede: "Dein ganzes Finanzleben — was du heute ausgibst und wovon du morgen lebst — in einer Schweizer App. Jede sensible Zahl bleibt auf deinem Gerät. <em>Jede einzelne.</em>",
    welcome: "Willkommen bei Sueleli.",
    ctaPrimary: "App holen",
    ctaGhost: "Das Privatsphäre-Versprechen",
    phoneAria:
      "Der Sueleli-Startbildschirm: geschätzte monatliche Rente von CHF 6'240 und ein Vorsorgeziel-Messbogen bei 78%.",
    videoAria: "Der Sueleli-Produktfilm — 31 Sekunden",
    soundLabel: "Ton ein- oder ausschalten",
    countdown: 'Nur noch <strong class="accent">38</strong> Jahre!',
    kpiLabel: "Geschätzte monatliche Rente",
    perMonth: "/ Monat",
    gaugeLabel: "✦  Dein Vorsorgeziel  ✦",
    gaugeSub: "deines Ziels",
    bdAhv: "AHV",
    bdPension: "PK",
    bdPrivate: "Privat",
  },

  duo: {
    latin: "Duo in uno",
    translation: "zwei in einem",
    headline: "Ein Buch, zwei Horizonte.",
    todayLabel: "Heute · Ausgaben",
    todayTitle: "Jeder Franken, erfasst.",
    todayText:
      "Konten, Budgets und wiederkehrende Zahlungen in einem ruhigen Monatsbuch — kategorisiert auf deinem Telefon, nirgendwo sonst.",
    tomorrowLabel: "Morgen · Vorsorge",
    tomorrowTitle: "Pensionierung ohne Nebel.",
    tomorrowText:
      "AHV, Pensionskasse, Säule 3a und Privatvermögen in einer Übersicht — Projektionen nur aus Zahlen, die du bestätigt hast.",
    foundation: "Ein gemeinsames Inventar, ein verschlüsselter Tresor, ein Gerät — deins.",
  },

  pillars: {
    latin: "Tres columnae",
    translation: "drei Säulen",
    headline: "Dein Vorsorgeziel — getragen von drei Säulen.",
    intro:
      "AHV, Pensionskasse, 3a & privat: Sueleli richtet alle drei an einem Ort auf und misst sie an deinem Ziel.",
    items: [
      { numeral: "I", name: "AHV", sub: "Die staatliche Vorsorge" },
      { numeral: "II", name: "BVG", sub: "Deine Pensionskasse" },
      { numeral: "III", name: "3a & privat", sub: "Dein eigenes Sparen" },
    ],
    sim: {
      gaugeAria:
        "Vorsorgeziel-Anzeige: Die drei Säulen füllen den Bogen bis zum simulierten Stand; der Rest bleibt leer.",
      scoreSub: "deines Ziels",
      totalLabel: "Prognostiziertes Renteneinkommen",
      perMonth: "/ Monat",
      ahvLabel: "Beitragsjahre",
      yearsUnit: "Jahre",
      bvgLabel: "Pensionskassen-Kapital",
      p3Label: "Kapital 3a & privat",
      goalNote:
        "Illustrativ: Ziel CHF 7'500 / Monat, 20 Jahre Bezug, ohne Rendite und Teuerung. In der App gehört jede Zahl dir.",
    },
    coupleNote:
      "Zu zweit? Partner tauschen verschlüsselte Schnappschüsse von Telefon zu Telefon — Haushaltsprojektionen, ohne Server.",
  },

  scaena: {
    latin: "Scaena",
    translation: "die Bühne",
    headline: "Szenarien & Simulationen — Probe für morgen.",
    panelLabel: "Szenarien & Prognosen",
    retirementAge: "Pensionierungsalter",
    lifeExpectancy: "Lebenserwartung",
    expectedReturn: "Erwartete Rendite",
    currentCapital: "Heutiges Kapital",
    inheritance: "Erbe, das bleiben soll",
    peakWord: "Höchststand",
    yearsWord: "Jahre",
    resultLabel: "Geschätztes Renteneinkommen",
    resultUnit: "/ Monat · illustrative Werte, nicht deine",
    chartAria:
      "Kapitalverlauf: Aufbau bis zur Pensionierung, danach Bezug bis zur Lebenserwartung.",
    axisToday: "Heute",
    axisRetirement: "Pensionierung",
    caption:
      "Aufbau bis zum Wendepunkt, Bezug bis zur Lebenserwartung — dieselbe Kurve zeichnet die App aus deinen bestätigten Zahlen.",
  },

  codex: {
    latin: "Codex",
    translation: "das Buch",
    headline: "Jeder Tag, erfasst.",
    p1: "Ein Hauptbudget aus Teilbudgets und Fixkosten — dazu Sondertöpfe für gemeinsame Pläne und alle Abos im Blick. Zahlungen in Sekunden erfassen oder per CSV importieren.",
    ledgerAria:
      "Ein Beispielmonat im Ausgabenbuch mit Budgetbalken und Transaktionen.",
    month: "Juni 2026",
    budgetWord: "Budget",
    entries: [
      { payee: "Lohn — Juni", cat: "Einkommen", amount: "+6'500.00", kind: "in", rec: true },
      { payee: "Miete", cat: "Wohnen", amount: "−1'850.00", kind: "out", rec: true },
      { payee: "Netflix", cat: "Abo", amount: "−17.90", kind: "out", rec: true },
      { payee: "Migros", cat: "Lebensmittel", amount: "−54.30", kind: "out", rec: false },
    ],
    holidayTitle: "Ferien · Lissabon",
    holidayTotal: "CHF 1'560 gesamt",
    members: [
      { name: "Du", amount: "780" },
      { name: "Anna", amount: "450" },
      { name: "Ben", amount: "210" },
      { name: "Lea", amount: "120" },
    ],
    settleLabel: "Wer schuldet wem",
    settles: ["Ben → Dir · CHF 180", "Lea → Dir · CHF 210", "Lea → Anna · CHF 60"],
    foot: "CHF · Schweizer Format · ⟳ = wiederkehrend",
  },

  acta: {
    latin: "Acta",
    translation: "die Akten",
    headline: "Vom Papier zum Beweis — ohne dass das Papier je deine Hände verlässt.",
    sheetAria: "Ein AHV-IK-Auszug wird auf dem Gerät gescannt.",
    sheetTitle: "Auszug aus dem individuellen Konto",
    extractedAria: "Aus dem Auszug erkannte Werte, bereit zur Prüfung",
    rows: [
      { year: "2021", value: "CHF 68'200" },
      { year: "2022", value: "CHF 70'150" },
      { year: "2023", value: "CHF 71'400" },
      { year: "2024", value: "CHF 74'900" },
    ],
    chipNote: "Prüfen & bestätigen — du hast immer das letzte Wort.",
    p1: "Sueleli liest deinen offiziellen IK-Auszug — jedes Jahr, jeden Betrag — mit Texterkennung, die <strong>vollständig auf deinem Telefon</strong> läuft. Kein Upload, keine Cloud, kein Konto. Sogar im Flugmodus.",
    p2: "Deutsch, Französisch, Italienisch oder Englisch; Papier oder PDF. Gespeichert wird nichts, bevor du jeden Wert selbst bestätigt hast.",
    seal: "Verlässt nie dein Gerät",
  },

  arx: {
    latin: "Arx",
    translation: "die Zitadelle",
    headline: "Der Tresor gehört dir. Wir könnten ihn nicht lesen, selbst wenn wir wollten.",
    onDeviceTitle: "Nur auf deinem Gerät",
    onDevice: [
      "Jeder Kontostand und jede Transaktion",
      "Deine AHV-Geschichte und Vorsorgeausweise",
      "Jedes gescannte Dokument und jedes OCR-Ergebnis",
      "Alle Budgets, Szenarien und Projektionen",
      "Jeder erstellte Vermögensbericht",
      "Der geteilte Schnappschuss deines Partners",
    ],
    onDeviceFoot:
      "Verschlüsselt mit einem Schlüssel, der nur im sicheren Speicher deines Telefons existiert.",
    onServerTitle: "Was unsere Server je sehen",
    onServer: [
      "Deine E-Mail-Adresse",
      "Deine Sprache und App-Version",
      "Deine verbundenen Geräte",
      "Öffentliche Referenzwerte (AHV-Konstanten, Wechselkurse)",
    ],
    onServerFoot:
      "Das ist die ganze Liste. Finanzdaten stehen nicht darauf — aus Architektur, nicht aus Richtlinie.",
    facts: [
      {
        lead: "Telefonwechsel?",
        text: "Deine Daten reisen von Gerät zu Gerät über eine per QR gesicherte, verschlüsselte Verbindung — nie über unsere Server.",
      },
      {
        lead: "Kein Cloud-Backup — mit Absicht.",
        text: "Ein Backup bei uns könnte jemand herausverlangen. Gerät verloren, Tresor verloren — der Preis echter Privatsphäre, offen gesagt.",
      },
      {
        lead: "Auch das Scannen bleibt lokal.",
        text: "Vorsorgeausweise liest die Texterkennung auf dem Gerät — Dokumente verlassen dein Telefon nie.",
      },
    ],
  },

  foedus: {
    latin: "Foedus",
    translation: "der Bund",
    headline: "Plant zu zweit — und jeder behält das Eigene.",
    wreathAria:
      "Ein goldener Lorbeerkranz um die Worte «Zusammen seit 14.06.2019» — die Paar-Zeremonie der App.",
    togetherSince: "Zusammen seit",
    date: "14.06.2019",
    figcaption: "Die Zeremonie des ersten Austauschs — einmal gezeigt, für immer graviert.",
    p1: "Verheiratet oder in eingetragener Partnerschaft? Die AHV plafoniert Renten als Paar. Jeder Partner behält die eigene App, den eigenen Tresor, das eigene Gerät.",
    p2: "Wenn ihr bereit seid, tauscht ihr einen Schnappschuss: Telefon zu Telefon, per QR versiegelt und verschlüsselt — ihr wählt, was ihr teilt. Nichts verschmilzt, nichts berührt einen Server.",
  },

  gratis: {
    latin: "Pretium tuum",
    translation: "dein Preis",
    headline: "Teste, wie du willst. Zahl, was es dir wert ist.",
    vows: [
      {
        title: "Die ganze App, von Anfang an",
        text: "Jede Funktion ist ab Tag eins offen — keine Testfrist, keine Stufen, kein Premium.",
      },
      {
        title: "Du bestimmst den Preis",
        text: "Wenn du spürst, was es dir wert ist, zahl genau das — per TWINT. Mehr, weniger, später oder nie.",
      },
      {
        title: "Zahlen ändert nichts",
        text: "Beiträge schalten nichts frei — diese Regel steht in der Verfassung des Produkts.",
      },
    ],
    donateBtn: "Zahl deinen Preis · TWINT",
    donateNote: "Kommt zum Launch — so viel, wie dir die App wert ist.",
  },

  epistula: {
    latin: "Epistula",
    translation: "der Brief",
    headline: "Schreib dem Haus.",
    emailLabel: "Deine E-Mail",
    subjectLabel: "Betreff",
    messageLabel: "Nachricht",
    send: "Brief senden",
    note: "Landet direkt im Postfach hallo@sueleli.ch — wir antworten an deine angegebene Adresse.",
    sent: "Gesendet — wir melden uns bei dir.",
    error: "Senden fehlgeschlagen — schreib uns direkt an hallo@sueleli.ch.",
    replyLabel: "Antwort an",
  },

  descende: {
    headline: "Nimm den Tempel mit.",
    lede: "Sueleli erscheint in der Schweiz für iOS und Android — zahl, was du willst, privat und in allen vier Sprachen des Hauses.",
    badgeIos: "App Store · ab 2026",
    badgeAndroid: "Google Play · ab 2026",
    notify: "Sag mir Bescheid zum Launch",
    notifySubject: "Benachrichtigung zum Launch",
    signoff: "Gebaut in der Schweiz · Bleibt auf deinem Gerät",
  },

  footer: {
    note: "Gebaut in der Schweiz. Bleibt auf deinem Gerät.",
    contact: "Kontakt",
    privacy: "Datenschutzerklärung",
  },
};

export default de;
