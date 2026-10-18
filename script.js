// ---------- Language (Hindi can grow later without touching the layout) ----------
// Any element with data-i18n="key" gets swapped. Missing keys fall back to English.
const strings = {
  en: {},
  hi: {
    h1: "आपका पहला निवेश, <em class=\"mark not-italic\">सिर्फ़ ₹100 से।</em>",
    sub: "कोई मुश्किल शब्द नहीं, बड़ी रकम नहीं। Sprout हर छोटा कदम आपके साथ चलता है।",
    cta: "₹100 से शुरू करें",
    how: "यह कैसे काम करता है",
    risk: "निवेश बाज़ार जोखिमों के अधीन हैं। रिटर्न की कोई निश्चितता नहीं है और आप अपना कुछ या पूरा पैसा खो सकते हैं। कृपया सभी योजना संबंधी दस्तावेज़ ध्यान से पढ़ें।",
    bubble: "घबराहट हो रही है? सबको होती है। मैं धीरे चलूँगा।",
    howTitle: "तीन छोटे कदम। बस इतना।"
  }
};

let lang = "en";
const original = new Map();
document.querySelectorAll("[data-i18n]").forEach((el) => original.set(el, el.innerHTML));

function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = (strings[next] && strings[next][key]) || original.get(el);
  });
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(lang === "en" ? "hi" : "en");
});

// ---------- Amount chips (screen 5) ----------
const chips = document.getElementById("chips");
const investBtn = document.getElementById("investBtn");
chips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chips.querySelectorAll(".chip").forEach((c) => {
    c.classList.remove("chip-on");
    c.setAttribute("aria-pressed", "false");
  });
  chip.classList.add("chip-on");
  chip.setAttribute("aria-pressed", "true");
  investBtn.textContent = "Invest " + chip.textContent;
});

// ---------- Mobile number: digits only ----------
const mobile = document.getElementById("mobile");
mobile.addEventListener("input", () => {
  mobile.value = mobile.value.replace(/\D/g, "");
});

// ---------- PAN: uppercase and format check (AAAAA9999A) ----------
const pan = document.getElementById("pan");
const panHint = document.getElementById("panHint");
pan.addEventListener("input", () => {
  pan.value = pan.value.toUpperCase();
  panHint.className = "tiny";
  if (pan.value.length < 10) {
    panHint.textContent = "Format: 5 letters, 4 digits, 1 letter.";
  } else if (/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.value)) {
    panHint.textContent = "Looks good.";
    panHint.classList.add("tiny-good");
  } else {
    panHint.textContent = "That doesn't look right. Check it against your card.";
    panHint.classList.add("tiny-bad");
  }
});

// ---------- Waiting screen: rotating messages so it never looks frozen ----------
const waitMsg = document.getElementById("waitMsg");
const messages = [
  "This usually takes under 2 minutes. The app hasn't frozen. We're just waiting for the official records.",
  "Still working. Official records can be slow at busy times.",
  "Almost there. You can close the app, and we'll notify you."
];
let msgIndex = 0;
setInterval(() => {
  msgIndex = (msgIndex + 1) % messages.length;
  waitMsg.textContent = messages[msgIndex];
}, 5000);

// ---------- CSS 3D tilt on the hero mascot (no library) ----------
const tilt = document.getElementById("tilt");
const tiltInner = document.getElementById("tiltInner");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  tilt.addEventListener("pointermove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    tiltInner.style.transform = `rotateY(${x * 28}deg) rotateX(${-y * 28}deg)`;
  });
  tilt.addEventListener("pointerleave", () => {
    tiltInner.style.transform = "rotateY(0) rotateX(0)";
  });
}