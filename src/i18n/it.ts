// Italian (Swiss Italian — tu-form, AVS/LPP terminology).
import type en from "./en";

const it: typeof en = {
  meta: {
    title: "Sueleli — Finanze svizzere, tenute private",
    description:
      "L'app finanziaria svizzera in cui paghi quanto vale per te. AVS, cassa pensioni, pilastro 3a, budget e scenari — ogni cifra sensibile resta sul tuo dispositivo.",
  },

  nav: {
    pillars: "Pilastri",
    scenarios: "Scenari",
    privacy: "Privacy",
    free: "Il tuo prezzo",
    cta: "Scarica l'app",
  },

  hero: {
    eyebrow: "Finanze svizzere, tenute private",
    lede: "Tutta la tua vita finanziaria — ciò che spendi oggi e ciò di cui vivrai domani — in un'unica app svizzera. Ogni cifra sensibile resta sul tuo dispositivo. <em>Ognuna di esse.</em>",
    welcome: "Benvenuto da Sueleli.",
    ctaPrimary: "Scarica l'app",
    ctaGhost: "Leggi la promessa di privacy",
    phoneAria:
      "La schermata iniziale di Sueleli: rendita mensile stimata di CHF 6'240 e indicatore dell'obiettivo di pensione al 78%.",
    videoAria: "Il film del prodotto Sueleli — 31 secondi",
    soundLabel: "Attivare o disattivare l'audio",
    countdown: 'Solo <strong class="accent">38</strong> anni ancora!',
    kpiLabel: "Rendita mensile stimata",
    perMonth: "/ mese",
    gaugeLabel: "✦  Il tuo obiettivo di pensione  ✦",
    gaugeSub: "del tuo obiettivo",
    bdAhv: "AVS",
    bdPension: "LPP",
    bdPrivate: "Privato",
  },

  duo: {
    latin: "Duo in uno",
    translation: "due in uno",
    headline: "Un libro, due orizzonti.",
    todayLabel: "Oggi · Spese",
    todayTitle: "Ogni franco, registrato.",
    todayText:
      "Conti, budget e pagamenti ricorrenti in un libro mensile sereno — categorizzato sul tuo telefono, da nessun'altra parte.",
    tomorrowLabel: "Domani · Previdenza",
    tomorrowTitle: "La pensione, senza nebbia.",
    tomorrowText:
      "AVS, cassa pensioni, pilastro 3a e patrimonio privato in un'unica panoramica — proiezioni costruite solo su cifre confermate.",
    foundation: "Un inventario condiviso, una cassaforte cifrata, un dispositivo — il tuo.",
    networthLabel: "Patrimonio netto",
    networthTotal: "214'350",
    networth: [
      { name: "Conti", amount: "48'200" },
      { name: "ETF", amount: "96'400" },
      { name: "Oro", amount: "12'300" },
      { name: "Bitcoin", amount: "8'950" },
      { name: "Pilastro 3a", amount: "74'500" },
      { name: "Ipoteca", amount: "−26'000", neg: true },
    ],
  },

  pillars: {
    latin: "Tres columnae",
    translation: "tre colonne",
    headline: "Il tuo obiettivo di pensione — sorretto da tre pilastri.",
    benefits: [
      {
        lead: "Scoprire presto le lacune AVS",
        text: "Ogni anno di contribuzione in vista — una lacuna si colma solo entro cinque anni.",
      },
      {
        lead: "Ritrovare gli averi dimenticati",
        text: "Rintraccia i conti di libero passaggio dimenticati tramite il fondo di garanzia LPP.",
      },
      {
        lead: "Sfruttare al massimo il 3a",
        text: "Segue il tuo margine 3a, recuperi inclusi (novità dal 2025), fino a cinque conti.",
      },
    ],
    items: [
      { numeral: "I", name: "AVS", sub: "La previdenza statale" },
      { numeral: "II", name: "LPP", sub: "La tua cassa pensioni" },
      { numeral: "III", name: "3a & privato", sub: "Il tuo risparmio personale" },
    ],
    sim: {
      gaugeAria:
        "Indicatore dell'obiettivo di pensione: i tre pilastri riempiono l'arco fino al punteggio simulato; il resto rimane vuoto.",
      scoreSub: "del tuo obiettivo",
      totalLabel: "Reddito di pensione proiettato",
      perMonth: "/ mese",
      ahvLabel: "Anni di contribuzione",
      yearsUnit: "anni",
      bvgLabel: "Capitale della cassa pensioni",
      p3Label: "Capitale 3a & privato",
      goalNote:
        "Illustrativo: obiettivo CHF 7'500 / mese, prelievo su 20 anni, senza rendimento né inflazione. Nell'app ogni cifra è tua.",
    },
    coupleNote:
      "In coppia? I partner si scambiano istantanee cifrate da telefono a telefono — proiezioni familiari, senza server.",
  },

  scaena: {
    latin: "Scaena",
    translation: "il palcoscenico",
    headline: "Scenari & simulazioni — prova il domani.",
    panelLabel: "Scenari & previsioni",
    retirementAge: "Età di pensionamento",
    lifeExpectancy: "Aspettativa di vita",
    expectedReturn: "Rendimento atteso",
    currentCapital: "Capitale attuale",
    inheritance: "Eredità da lasciare",
    peakWord: "picco",
    yearsWord: "anni",
    resultLabel: "Reddito di pensione stimato",
    resultUnit: "/ mese · valori illustrativi, non i tuoi",
    chartAria:
      "Andamento del capitale: accumulo fino alla pensione, poi prelievo fino all'aspettativa di vita.",
    axisToday: "Oggi",
    axisRetirement: "Pensione",
    caption:
      "Accumulo fino al punto di svolta, prelievo fino all'aspettativa di vita — la stessa curva che l'app disegna dalle tue cifre confermate.",
  },

  codex: {
    latin: "Codex",
    translation: "il libro",
    headline: "Ogni giorno, registrato.",
    p1: "Un budget principale da sotto-budget e costi fissi — più fondi speciali per i piani condivisi e tutti gli abbonamenti sott'occhio. Inserisci in pochi secondi o importa il CSV.",
    ledgerAria:
      "Un mese di esempio nel libro delle spese, con barra del budget e transazioni.",
    month: "Giugno 2026",
    budgetWord: "Budget",
    entries: [
      { payee: "Stipendio — giugno", cat: "Reddito", amount: "+6'500.00", kind: "in", rec: true },
      { payee: "Affitto", cat: "Abitazione", amount: "−1'850.00", kind: "out", rec: true },
      { payee: "Netflix", cat: "Abbonamento", amount: "−17.90", kind: "out", rec: true },
      { payee: "Migros", cat: "Spesa", amount: "−54.30", kind: "out", rec: false },
    ],
    holidayTitle: "Vacanze · Lisbona",
    holidayTotal: "CHF 1'560 in totale",
    members: [
      { name: "Tu", amount: "780" },
      { name: "Anna", amount: "450" },
      { name: "Ben", amount: "210" },
      { name: "Lea", amount: "120" },
    ],
    settleLabel: "Chi deve a chi",
    settles: ["Ben → te · CHF 180", "Lea → te · CHF 210", "Lea → Anna · CHF 60"],
    foot: "CHF · formato svizzero · ⟳ = ricorrente",
    sourcesLabel: "Collegamenti dei conti",
    sources: [
      { name: "Import CSV", status: "disponibile oggi" },
      { name: "bLink open banking", status: "in arrivo" },
      { name: "Wallet crypto", status: "previsto" },
    ],
  },

  faq: {
    latin: "Quaestiones",
    translation: "le domande",
    headline: "Domande, risposte chiare.",
    items: [
      {
        q: "Sueleli è davvero gratis?",
        a: "Sì — ogni funzione, dal primo giorno. Se l'app vale qualcosa per te, paga quanto vuoi via TWINT, qui sul sito. I contributi non sbloccano nulla.",
      },
      {
        q: "Dove vivono i miei dati?",
        a: "In una cassaforte cifrata sul tuo dispositivo. I nostri server vedono solo indirizzo e-mail, lingua, dispositivi connessi e valori di riferimento pubblici.",
      },
      {
        q: "E se perdo il telefono?",
        a: "Senza dispositivo, niente cassaforte — non esiste di proposito alcun backup nel cloud. Al cambio di telefono trasferisci i dati direttamente da un dispositivo all'altro tramite una connessione sigillata da QR.",
      },
      {
        q: "Posso collegare la mia banca?",
        a: "Oggi: inserimento manuale e import CSV. In arrivo: bLink open banking per saldi e transazioni in tempo reale. Previsto: wallet crypto e altri fornitori.",
      },
      {
        q: "L'app ha bisogno di internet?",
        a: "Solo per il tuo account e i valori di riferimento. Inserimenti, budget, scenari e scansione funzionano completamente offline.",
      },
    ],
  },

  acta: {
    latin: "Acta",
    translation: "gli atti",
    headline: "Dalla carta alla prova — senza che la carta lasci mai le tue mani.",
    sheetAria: "Un estratto CI dell'AVS scansionato sul dispositivo.",
    sheetTitle: "Estratto del conto individuale",
    extractedAria: "Valori riconosciuti dall'estratto, in attesa di verifica",
    rows: [
      { year: "2021", value: "CHF 68'200" },
      { year: "2022", value: "CHF 70'150" },
      { year: "2023", value: "CHF 71'400" },
      { year: "2024", value: "CHF 74'900" },
    ],
    chipNote: "Verifica & conferma — l'ultima parola è sempre tua.",
    p1: "Sueleli legge il tuo estratto CI ufficiale — ogni anno, ogni importo — con un riconoscimento del testo che gira <strong>interamente sul tuo telefono</strong>. Nessun upload, nessun cloud, nessun account. Persino in modalità aereo.",
    p2: "Tedesco, francese, italiano o inglese; carta o PDF. Nulla viene salvato finché non confermi ogni valore.",
    seal: "Non lascia mai il tuo dispositivo",
  },

  arx: {
    latin: "Arx",
    translation: "la cittadella",
    headline: "La cassaforte è tua. Non potremmo leggerla nemmeno volendo.",
    onDeviceTitle: "Custodito solo sul tuo dispositivo",
    onDevice: [
      "Ogni saldo di conto e ogni transazione",
      "La tua storia AVS e i certificati di previdenza",
      "Ogni documento scansionato e ogni risultato OCR",
      "Tutti i budget, gli scenari e le proiezioni",
      "Ogni rapporto patrimoniale generato",
      "L'istantanea condivisa del tuo partner",
    ],
    onDeviceFoot:
      "Cifrato con una chiave che esiste solo nella memoria sicura del tuo telefono.",
    onServerTitle: "Tutto ciò che i nostri server vedono",
    onServer: [
      "Il tuo indirizzo e-mail",
      "La tua lingua e la versione dell'app",
      "I tuoi dispositivi connessi",
      "Valori di riferimento pubblici (costanti AVS, tassi di cambio)",
    ],
    onServerFoot:
      "Questa è l'intera lista. I dati finanziari non ci sono — per architettura, non per semplice politica.",
    facts: [
      {
        lead: "Cambi telefono?",
        text: "I tuoi dati viaggiano da dispositivo a dispositivo su una connessione cifrata sigillata da QR — mai attraverso i nostri server.",
      },
      {
        lead: "Nessun backup nel cloud — di proposito.",
        text: "Un backup presso di noi potrebbe essere preteso. Dispositivo perso, cassaforte persa — il prezzo della vera privacy, detto apertamente.",
      },
      {
        lead: "Anche la scansione resta locale.",
        text: "Gli estratti sono letti dal riconoscimento del testo sul dispositivo — i documenti non lasciano mai il tuo telefono.",
      },
    ],
  },

  foedus: {
    latin: "Foedus",
    translation: "il patto",
    headline: "Pianificate in due, ciascuno custodendo il proprio.",
    wreathAria:
      "Una corona d'alloro dorata attorno alle parole «insieme dal 14.06.2019» — la cerimonia di coppia dell'app.",
    togetherSince: "Insieme dal",
    date: "14.06.2019",
    figcaption: "La cerimonia del primo scambio — mostrata una volta, incisa per sempre.",
    p1: "Sposati o in unione registrata? L'AVS plafona le rendite come coppia. Ogni partner tiene la propria app, la propria cassaforte, il proprio dispositivo.",
    p2: "Quando siete pronti, scambiate un'istantanea: da telefono a telefono, sigillata da QR e cifrata — scegliendo cosa condividere. Nulla si fonde, nulla tocca un server.",
  },

  gratis: {
    latin: "Pretium tuum",
    translation: "il tuo prezzo",
    headline: "Provala come vuoi. Paga quanto vale per te.",
    vows: [
      {
        title: "Tutta l'app, da subito",
        text: "Ogni funzione è aperta dal primo giorno — nessuna prova, nessun livello, nessun premium.",
      },
      {
        title: "Il prezzo lo decidi tu",
        text: "Quando senti quanto vale, paga esattamente quello — via TWINT. Di più, di meno, più tardi o mai.",
      },
      {
        title: "Pagare non cambia nulla",
        text: "I contributi non sbloccano nulla — questa regola è scritta nella costituzione del prodotto.",
      },
    ],
    donateBtn: "Paga il tuo prezzo · TWINT",
    donateNote: "In arrivo con il lancio — quanto l'app vale ai tuoi occhi.",
  },

  epistula: {
    latin: "Epistula",
    translation: "la lettera",
    headline: "Scrivi alla casa.",
    emailLabel: "La tua e-mail",
    subjectLabel: "Oggetto",
    messageLabel: "Messaggio",
    send: "Invia la lettera",
    note: "Consegnato a hallo@sueleli.ch — rispondiamo all'indirizzo indicato.",
    sent: "Inviato — ti risponderemo.",
    error: "Invio non riuscito — scrivici direttamente a hallo@sueleli.ch.",
    replyLabel: "Rispondi a",
  },

  descende: {
    headline: "Porta il tempio con te.",
    lede: "Sueleli arriva in Svizzera su iOS e Android — paga quanto vuoi, privata e in tutte e quattro le lingue della casa.",
    badgeIos: "App Store · dal 2026",
    badgeAndroid: "Google Play · dal 2026",
    notify: "Avvisami al lancio",
    notifySubject: "Avvisami al lancio",
    signoff: "Costruito in Svizzera · Custodito sul tuo dispositivo",
  },

  footer: {
    note: "Costruito in Svizzera. Custodito sul tuo dispositivo.",
    contact: "Contatto",
    privacy: "Informativa sulla privacy",
    imprint: "Impressum",
  },
};

export default it;
