// Sueleli marketing site — progressive enhancement.
// Everything degrades gracefully: without JS the page is fully visible.

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (id) => document.getElementById(id);

/* Swiss number formatting: 12'345 */
const chf = (n) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "'");

/* ------------------------------------------------------------------ */
/* Reveal observer — adds .is-inview once per chapter                  */
/* ------------------------------------------------------------------ */

const counters = (scope) => {
  scope.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    if (el.dataset.done) return;
    el.dataset.done = "1";
    if (reduced) {
      el.textContent = chf(target);
      return;
    }
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = chf(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
};

// Assigned by the pillars-gauge module below; fired once when its section enters.
let gaugeIntro = null;

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("is-inview");
      counters(e.target);
      if (gaugeIntro && e.target.querySelector("#pillar-gauge")) {
        gaugeIntro();
        gaugeIntro = null;
      }
      io.unobserve(e.target);
    }
  },
  { threshold: 0.22 }
);

document.querySelectorAll("[data-observe]").forEach((el) => io.observe(el));

/* ------------------------------------------------------------------ */
/* Header scroll-spy — gold strip slides to the active section link    */
/* ------------------------------------------------------------------ */

// Only same-page hash links take part in the scroll-spy — the language
// switcher's URL hrefs are not valid CSS selectors. The chapter rail's
// Roman numerals join the same spy.
const navLinks = [
  ...document.querySelectorAll('.site-header nav a[href^="#"], .chapter-rail a'),
];
const spied = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`)
      );
    }
  },
  { rootMargin: "-30% 0px -55% 0px" }
);

spied.forEach((el) => spy.observe(el));

/* ------------------------------------------------------------------ */
/* Language switch — keep the reader's place on the page               */
/* ------------------------------------------------------------------ */

const SCROLL_KEY = "sueleli:scroll";

for (const a of document.querySelectorAll(".lang a")) {
  a.addEventListener("click", () => {
    try {
      sessionStorage.setItem(SCROLL_KEY, String(Math.round(window.scrollY)));
    } catch {
      /* storage unavailable — just jump to top */
    }
  });
}

try {
  const saved = sessionStorage.getItem(SCROLL_KEY);
  if (saved !== null) {
    sessionStorage.removeItem(SCROLL_KEY);
    window.scrollTo({ top: Number(saved), behavior: "instant" });
  }
} catch {
  /* ignore */
}

/* ------------------------------------------------------------------ */
/* Hero film — pause when the viewer scrolls away                      */
/* ------------------------------------------------------------------ */

const heroVideo = $("hero-video");

if (heroVideo) {
  // Pause when the film scrolls out of view; resume where it left off
  // when the viewer comes back (only if they had it playing).
  let resumeOnReturn = false;
  const videoWatch = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) {
          if (!heroVideo.paused) {
            heroVideo.pause();
            resumeOnReturn = true;
          }
        } else if (resumeOnReturn) {
          resumeOnReturn = false;
          heroVideo.play().catch(() => {});
        }
      }
    },
    { threshold: 0.25 }
  );
  videoWatch.observe(heroVideo);
}

/* ------------------------------------------------------------------ */
/* EPISTULA — contact form. Relayed to the hallo@sueleli.ch inbox with */
/* the visitor's address as reply-to; status shown inline.             */
/* ------------------------------------------------------------------ */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const status = document.getElementById("contact-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    btn.disabled = true;
    try {
      const res = await fetch("https://formsubmit.co/ajax/hallo@sueleli.ch", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email: contactForm.elements.email.value.trim(),
          _replyto: contactForm.elements.email.value.trim(),
          _subject: contactForm.elements.subject.value.trim(),
          message: contactForm.elements.message.value,
          _captcha: "false",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      status.textContent = status.dataset.sent;
      status.style.color = "var(--sage)";
      contactForm.reset();
    } catch {
      status.textContent = status.dataset.error;
      status.style.color = "var(--ruby)";
    } finally {
      btn.disabled = false;
    }
  });
}

/* ------------------------------------------------------------------ */
/* TRES COLUMNAE — retirement-goal gauge (illustrative only).          */
/* One slider per pillar feeds its color segment; the arc fills only   */
/* to the simulated score, the rest stays empty stone track.           */
/* ------------------------------------------------------------------ */

const pgYears = $("pg-years");

if (pgYears) {
  const pgCapital = $("pg-capital");
  const pgSave = $("pg-save");
  const YEARS = document.getElementById("pillars")?.dataset.years ?? "years";

  const GOAL = 7_500;
  const AHV_MAX = 2_520; // full single AHV pension at 44 contribution years
  const FULL_CAREER = 44;
  const DRAWDOWN_YEARS = 20; // simple model: no yield, no inflation

  // Gauge geometry: semicircle, center (220,210), r=170 (viewBox 440x250)
  const pt = (f) => {
    const a = Math.PI * (1 - f);
    return `${(220 + 170 * Math.cos(a)).toFixed(1)},${(210 - 170 * Math.sin(a)).toFixed(1)}`;
  };
  const arc = (a, b) => (b - a < 0.004 ? "" : `M${pt(a)} A170,170 0 0 1 ${pt(b)}`);

  // 0 until the section enters view, then sweeps to 1 once.
  let sweep = reduced ? 1 : 0;

  // zero-length round-cap dot: fills the arc's rounded end in the fill color
  const capDot = (f) => `M${pt(f)} L${pt(f + 0.0006)}`;

  const render = () => {
    const years = Number(pgYears.value);
    const capital = Number(pgCapital.value);
    const p3cap = Number(pgSave.value);

    const ahv = AHV_MAX * Math.min(years / FULL_CAREER, 1);
    const bvg = (capital * 0.068) / 12; // BVG conversion rate, illustrative
    const p3 = p3cap / (DRAWDOWN_YEARS * 12);

    const shown = [ahv, bvg, p3].map((v) => v * sweep);
    const total = shown[0] + shown[1] + shown[2];
    const frac = Math.min(total / GOAL, 1);

    const colors = ["var(--burgundy)", "var(--gold)", "var(--sage)"];
    let acc = 0;
    let firstColor = null;
    let lastColor = null;
    [
      ["pg-seg1", shown[0]],
      ["pg-seg2", shown[1]],
      ["pg-seg3", shown[2]],
    ].forEach(([id, v], i) => {
      const len = total > 0 ? (v / total) * frac : 0;
      $(id).setAttribute("d", arc(acc, acc + len));
      if (len > 0.004) {
        if (firstColor === null) firstColor = colors[i];
        lastColor = colors[i];
      }
      acc += len;
    });

    // round the fill's outer ends to match the track's rounded caps
    const capA = $("pg-capA");
    const capB = $("pg-capB");
    if (frac > 0.008 && firstColor) {
      capA.setAttribute("d", capDot(0));
      capA.setAttribute("stroke", firstColor);
      capB.setAttribute("d", capDot(Math.min(frac, 1) - 0.0006));
      capB.setAttribute("stroke", lastColor);
    } else {
      capA.setAttribute("d", "");
      capB.setAttribute("d", "");
    }

    $("pg-score").textContent = `${Math.round((total / GOAL) * 100)}%`;
    $("pg-total").textContent = chf(total);
    $("pg-val1").textContent = chf(shown[0]);
    $("pg-val2").textContent = chf(shown[1]);
    $("pg-val3").textContent = chf(shown[2]);

    $("pg-out-years").textContent = `${years} ${YEARS}`;
    $("pg-out-capital").textContent = `CHF ${chf(capital)}`;
    $("pg-out-save").textContent = `CHF ${chf(p3cap)}`;

    for (const input of [pgYears, pgCapital, pgSave]) {
      const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
      input.style.setProperty("--fill", `${pct}%`);
    }
  };

  [pgYears, pgCapital, pgSave].forEach((el) => el.addEventListener("input", render));
  render();

  // One dignified sweep when the chapter enters view.
  gaugeIntro = () => {
    if (reduced) return;
    const t0 = performance.now();
    const dur = 1500;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      sweep = 1 - Math.pow(1 - p, 3);
      render();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
}

/* ------------------------------------------------------------------ */
/* SCAENA — live scenario model (illustrative only)                    */
/* ------------------------------------------------------------------ */

const inAge = $("in-age");

if (inAge) {
  const inLife = $("in-life");
  const inYield = $("in-yield");
  const inCapital = $("in-capital");
  const inInherit = $("in-inherit");

  // Localized labels provided by the Scaena section markup.
  const scaena = document.getElementById("scenarios");
  const YEARS = scaena?.dataset.years ?? "years";
  const RETIRE = scaena?.dataset.retire ?? "Retirement";

  const AGE_NOW = 30;
  const YEARLY_SAVING = 12_000;
  const AHV_MONTHLY = 1_510;

  const W = 640;
  const PAD_X = 14;
  const TOP = 56;
  const BOTTOM = 266;

  const simulate = (retire, life, yieldPct, capitalNow, inherit) => {
    const r = yieldPct / 100;
    const points = [];
    let capital = capitalNow;

    for (let age = AGE_NOW; age <= retire; age++) {
      points.push({ age, capital });
      capital = capital * (1 + r) + YEARLY_SAVING;
    }

    const peak = capital;
    // Annuity that lands exactly on the inheritance target at life expectancy
    // (drawdown yield 1% lower, floor 0.5%).
    const rd = Math.max((yieldPct - 1) / 100, 0.005);
    const years = Math.max(life - retire, 1);
    const spendable = Math.max(peak - inherit / Math.pow(1 + rd, years), 0);
    const annual = (spendable * rd) / (1 - Math.pow(1 + rd, -years));

    for (let age = retire; age <= life; age++) {
      points.push({ age, capital: Math.max(capital, 0) });
      capital = capital * (1 + rd) - annual;
    }

    return { points, peak, monthly: AHV_MONTHLY + annual / 12 };
  };

  const render = () => {
    const retire = Number(inAge.value);
    // Keep at least a five-year drawdown horizon; snap the slider along.
    let life = Number(inLife.value);
    const minLife = retire + 5;
    if (life < minLife) {
      life = minLife;
      inLife.value = String(life);
    }

    const capitalNow = Number(inCapital.value);
    const inherit = Number(inInherit.value);
    const { points, peak, monthly } = simulate(
      retire,
      life,
      Number(inYield.value),
      capitalNow,
      inherit
    );

    const x = (age) =>
      PAD_X + ((age - AGE_NOW) / (life - AGE_NOW)) * (W - PAD_X * 2);
    const yMax = Math.max(peak, 1);
    const y = (c) => BOTTOM - (c / yMax) * (BOTTOM - TOP);

    const line = points
      .map((p, i) => `${i ? "L" : "M"}${x(p.age).toFixed(1)},${y(p.capital).toFixed(1)}`)
      .join("");

    $("chart-line").setAttribute("d", line);
    $("chart-area").setAttribute(
      "d",
      `${line}L${x(life).toFixed(1)},${BOTTOM}L${PAD_X},${BOTTOM}Z`
    );

    const bxNum = Number(x(retire).toFixed(1));
    const bx = String(bxNum);
    const breakLine = $("chart-break");
    breakLine.setAttribute("x1", bx);
    breakLine.setAttribute("x2", bx);

    const peakDot = $("chart-peak");
    peakDot.setAttribute("cx", bx);
    peakDot.setAttribute("cy", y(peak).toFixed(1));

    // peak capital, labeled above the breakpoint dot (kept inside the canvas)
    const px = Math.min(Math.max(bxNum, 90), W - 90);
    const peakWord = $("label-peak-word");
    const peakLabel = $("label-peak");
    peakWord.setAttribute("x", String(px));
    peakLabel.setAttribute("x", String(px));
    peakLabel.textContent = `CHF ${chf(peak)}`;

    const retireLabel = $("label-retire");
    retireLabel.setAttribute("x", bx);
    retireLabel.textContent = `${RETIRE} · ${retire}`;
    $("label-life").textContent = String(life);

    $("out-age").textContent = `${retire} ${YEARS}`;
    $("out-life").textContent = `${life} ${YEARS}`;
    $("out-yield").textContent = `${Number(inYield.value).toFixed(1)}%`;
    $("out-capital").textContent = `CHF ${chf(capitalNow)}`;
    $("out-inherit").textContent = `CHF ${chf(inherit)}`;
    $("out-income").textContent = chf(monthly);

    // gold fill proportion for webkit slider tracks
    for (const input of [inAge, inLife, inYield, inCapital, inInherit]) {
      const pct =
        ((input.value - input.min) / (input.max - input.min)) * 100;
      input.style.setProperty("--fill", `${pct}%`);
    }
  };

  [inAge, inLife, inYield, inCapital, inInherit].forEach((el) =>
    el.addEventListener("input", render)
  );
  render();
}

