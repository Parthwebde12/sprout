// =====================================================================
// Text lives here, so Hindi (or any language) is added without touching
// the layout. Any element with data-i18n="key" is swapped. Inputs use
// data-i18n-ph for their placeholder. Missing keys fall back to English.
// =====================================================================
const strings = {
  en: {
    h1: 'Your first investment, <em class="mark not-italic">from just ₹100.</em>',
    sub: "No jargon, no big amounts. Sprout walks you through it one small step at a time, at your pace.",
    cta: "Start with ₹100",
    how: "How it works",
    risk: "Investments are subject to market risks. Returns are not assured, and you may lose some or all of your money. Please read all scheme-related documents carefully.",
    bubble: "Feeling nervous? Everyone does. I'll go slow.",
    howTitle: "Three small steps. That's all.",
    howLead: "Most people stop because they don't know what comes next. So we tell you before you start.",
    s1t: "Get your papers ready",
    s1p: "Keep your PAN card and your Aadhaar-linked phone nearby. It takes about 5 minutes.",
    s2t: "Verify who you are",
    s2p: "This is a one-time check required by law. We'll tell you if it needs a minute to process.",
    s3t: "Put in your first ₹100",
    s3p: "Pick an amount you're comfortable with. You can add more whenever you like.",
    where1: "See it in app screens 1–2",
    where2: "See it in app screens 3–4",
    where3: "See it in app screen 5",
    needTitle: "Before you download",
    needLead: "Don't get stuck halfway. Keep these with you:",
    needPanB: "PAN card",
    needPan: "(the card or just the number)",
    needAadB: "Aadhaar",
    needAadhaar: "(with your mobile number linked)",
    needTimeB: "5 minutes",
    needTime: "and a steady network",
    appTitle: "Inside the app: the first 5 screens",
    appLead: "Same friendly seed, same calm tone. Swipe sideways to walk through it.",
    arc1: "Nervous",
    arc2: "Informed",
    arc3: "Verified",
    arc4: "Invested",
    arcNote: "Sprout grows as you do: watch its leaves from screen 1 to screen 5.",

    tag1: "1 of 5 · Welcome",
    p1h: "Hi, I'm Sprout.",
    p1p: "I'll be with you till your first investment. No rush, no pressure.",
    mobLbl: "Your mobile number",
    mobPh: "10-digit number",
    p1btn: "Continue",
    p1tiny: "We'll send a code by SMS.",

    tag2: "2 of 5 · Get ready",
    p2h: "Two things before we start",
    c1: "Your PAN card or number",
    c2: "Aadhaar with linked mobile",
    c3: "About 5 minutes",
    p2tiny: "Don't have them right now? Save your progress and come back.",
    p2btn1: "I have them",
    p2btn2: "Remind me later",
    remind: "Okay. We'll send you a reminder.",

    tag3: "3 of 5 · Verify",
    p3h: "Step 1 of 2: your PAN",
    p3p: "It's a legal requirement for investing in India. We never show it to anyone.",
    panLbl: "PAN number",
    panBtn: "Check my PAN",
    panFmt: "Format: 5 letters, 4 digits, 1 letter.",
    panOk: "Looks good.",
    panBad: "That doesn't look right. Check it against your card.",

    tag4: "4 of 5 · Checking",
    p4h: "Checking your details…",
    w1: "This usually takes under 2 minutes. The app hasn't frozen. We're just waiting for the official records.",
    w2: "Still working. Official records can be slow at busy times.",
    w3: "Almost there. You can close the app, and we'll notify you.",
    p4tiny: "You can close the app. We'll send you a notification when it's done.",
    p4btn: "Notify me, I'll close the app",

    tag5: "5 of 5 · First step",
    p5h: "You're verified. Pick an amount.",
    p5risk: "Investments are subject to market risks. Returns are not assured, and you may lose some or all of your money.",
    invest: "Invest {amt}",
    investDone: "Nice. Your first investment is being set up.",

    foot: "Sprout is an investing app for first-time investors. Investments are subject to market risks. Please read all scheme-related documents carefully before investing."
  },

  hi: {
    h1: 'आपका पहला निवेश, <em class="mark not-italic">सिर्फ़ ₹100 से।</em>',
    sub: "कोई मुश्किल शब्द नहीं, बड़ी रकम नहीं। Sprout हर छोटा कदम आपके साथ चलता है।",
    cta: "₹100 से शुरू करें",
    how: "यह कैसे काम करता है",
    risk: "निवेश बाज़ार जोखिमों के अधीन हैं। रिटर्न की कोई निश्चितता नहीं है और आप अपना कुछ या पूरा पैसा खो सकते हैं। कृपया सभी योजना संबंधी दस्तावेज़ ध्यान से पढ़ें।",
    bubble: "घबराहट हो रही है? सबको होती है। मैं धीरे चलूँगा।",
    howTitle: "तीन छोटे कदम। बस इतना।",
    howLead: "ज़्यादातर लोग इसलिए रुक जाते हैं कि आगे क्या होगा, पता नहीं होता। इसलिए हम पहले ही बता देते हैं।",
    s1t: "अपने कागज़ात तैयार रखें",
    s1p: "अपना PAN कार्ड और आधार से लिंक फ़ोन पास रखें। लगभग 5 मिनट लगते हैं।",
    s2t: "अपनी पहचान सत्यापित करें",
    s2p: "यह एक बार की जाँच है, जो कानून के तहत ज़रूरी है। थोड़ा समय लगे तो हम बता देंगे।",
    s3t: "अपने पहले ₹100 लगाएँ",
    s3p: "वह रकम चुनें जिसमें आप सहज हों। जब चाहें और जोड़ सकते हैं।",
    where1: "ऐप स्क्रीन 1–2 में देखें",
    where2: "ऐप स्क्रीन 3–4 में देखें",
    where3: "ऐप स्क्रीन 5 में देखें",
    needTitle: "डाउनलोड से पहले",
    needLead: "बीच में अटकें नहीं। ये अपने पास रखें:",
    needPanB: "PAN कार्ड",
    needPan: "(कार्ड या सिर्फ़ नंबर)",
    needAadB: "आधार",
    needAadhaar: "(आपके मोबाइल नंबर से लिंक)",
    needTimeB: "5 मिनट",
    needTime: "और स्थिर नेटवर्क",
    appTitle: "ऐप के अंदर: पहली 5 स्क्रीन",
    appLead: "वही दोस्ताना बीज, वही शांत लहजा। बग़ल में स्वाइप करें।",
    arc1: "घबराहट",
    arc2: "जानकारी",
    arc3: "सत्यापित",
    arc4: "निवेश शुरू",
    arcNote: "आप बढ़ते हैं तो Sprout भी बढ़ता है: स्क्रीन 1 से 5 तक उसकी पत्तियाँ देखें।",

    tag1: "1/5 · स्वागत",
    p1h: "नमस्ते, मैं Sprout हूँ।",
    p1p: "आपके पहले निवेश तक मैं आपके साथ हूँ। कोई जल्दी नहीं, कोई दबाव नहीं।",
    mobLbl: "आपका मोबाइल नंबर",
    mobPh: "10 अंकों का नंबर",
    p1btn: "आगे बढ़ें",
    p1tiny: "हम SMS से कोड भेजेंगे।",

    tag2: "2/5 · तैयारी",
    p2h: "शुरू करने से पहले ये चीज़ें",
    c1: "आपका PAN कार्ड या नंबर",
    c2: "आधार, लिंक किए मोबाइल के साथ",
    c3: "लगभग 5 मिनट",
    p2tiny: "अभी ये पास नहीं हैं? अपनी प्रगति सेव करें और बाद में लौटें।",
    p2btn1: "मेरे पास हैं",
    p2btn2: "बाद में याद दिलाएँ",
    remind: "ठीक है। हम आपको याद दिलाएँगे।",

    tag3: "3/5 · सत्यापन",
    p3h: "चरण 1/2: आपका PAN",
    p3p: "भारत में निवेश के लिए यह कानूनी ज़रूरत है। हम इसे किसी को नहीं दिखाते।",
    panLbl: "PAN नंबर",
    panBtn: "मेरा PAN जाँचें",
    panFmt: "फ़ॉर्मैट: 5 अक्षर, 4 अंक, 1 अक्षर।",
    panOk: "ठीक लग रहा है।",
    panBad: "यह सही नहीं लगता। इसे अपने कार्ड से मिलाएँ।",

    tag4: "4/5 · जाँच",
    p4h: "आपकी जानकारी जाँची जा रही है…",
    w1: "इसमें आमतौर पर 2 मिनट से कम लगते हैं। ऐप अटका नहीं है। हम आधिकारिक रिकॉर्ड का इंतज़ार कर रहे हैं।",
    w2: "काम जारी है। व्यस्त समय में आधिकारिक रिकॉर्ड धीमे हो सकते हैं।",
    w3: "बस थोड़ा और। आप ऐप बंद कर सकते हैं, हम आपको सूचना भेजेंगे।",
    p4tiny: "आप ऐप बंद कर सकते हैं। पूरा होते ही हम सूचना भेजेंगे।",
    p4btn: "मुझे सूचना दें और ऐप बंद करें",

    tag5: "5/5 · पहला कदम",
    p5h: "आप सत्यापित हैं। रकम चुनें।",
    p5risk: "निवेश बाज़ार जोखिमों के अधीन हैं। रिटर्न की कोई निश्चितता नहीं है और आप अपना कुछ या पूरा पैसा खो सकते हैं।",
    invest: "{amt} निवेश करें",
    investDone: "बढ़िया। आपका पहला निवेश तैयार किया जा रहा है।",

    foot: "Sprout पहली बार निवेश करने वालों के लिए एक निवेश ऐप है। निवेश बाज़ार जोखिमों के अधीन हैं। निवेश से पहले सभी योजना संबंधी दस्तावेज़ ध्यान से पढ़ें।"
  }
};

let lang = "en";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const behavior = reduceMotion ? "auto" : "smooth";

function t(key) {
  return (strings[lang] && strings[lang][key]) || strings.en[key] || "";
}

// Set a piece of text AND remember its key, so it re-translates on language switch.
function setText(el, key) {
  el.dataset.i18n = key;
  el.innerHTML = t(key);
}

// ---------- Amount chips and the invest button (screen 5) ----------
const chips = document.getElementById("chips");
const investBtn = document.getElementById("investBtn");
const investMsg = document.getElementById("investMsg");
let amount = "₹500";

function renderInvest() {
  investBtn.textContent = t("invest").replace("{amt}", amount);
}

// ---------- Language switch ----------
function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  renderInvest();
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(lang === "en" ? "hi" : "en");
});

// ---------- Desktop/mobile presentation preview ----------
const siteFrame = document.getElementById("siteFrame");
const desktopPreviewBtn = document.getElementById("desktopPreviewBtn");
const mobilePreviewBtn = document.getElementById("mobilePreviewBtn");
const previewStatus = document.getElementById("previewStatus");

function setPreview(mode) {
  const mobilePreview = mode === "mobile";
  siteFrame.classList.toggle("preview-mobile", mobilePreview);
  desktopPreviewBtn.classList.toggle("is-selected", !mobilePreview);
  mobilePreviewBtn.classList.toggle("is-selected", mobilePreview);
  desktopPreviewBtn.setAttribute("aria-pressed", String(!mobilePreview));
  mobilePreviewBtn.setAttribute("aria-pressed", String(mobilePreview));
  previewStatus.textContent = `${mobilePreview ? "Mobile" : "Desktop"} preview selected`;
}

desktopPreviewBtn.addEventListener("click", () => setPreview("desktop"));
mobilePreviewBtn.addEventListener("click", () => setPreview("mobile"));

// ---------- Journey: website to app, and screen to screen ----------
const phonesRow = document.getElementById("phones");
const mobile = document.getElementById("mobile");

function goTo(n) {
  const el = document.getElementById("screen-" + n);
  if (!el) return;
  el.scrollIntoView({ behavior, inline: "start", block: "nearest" });
  const input = el.querySelector("input");
  if (input) setTimeout(() => input.focus({ preventScroll: true }), 450);
}

// Any element with data-goto="N" opens that app screen
document.querySelectorAll("[data-goto]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    goTo(el.dataset.goto);
  });
});

// The hero button "Start with ₹100" lands on screen 1, ready to type
document.getElementById("startBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("app").scrollIntoView({ behavior, block: "start" });
  setTimeout(() => {
    phonesRow.scrollTo({ left: 0, behavior });
    mobile.focus({ preventScroll: true });
  }, reduceMotion ? 0 : 500);
});

// ---------- Screen 1: digits only ----------
mobile.addEventListener("input", () => {
  mobile.value = mobile.value.replace(/\D/g, "");
});

// ---------- Screen 2: remind me later ----------
document.getElementById("remindBtn").addEventListener("click", () => {
  setText(document.getElementById("remindMsg"), "remind");
});

// ---------- Screen 3: PAN format check (AAAAA9999A) ----------
const pan = document.getElementById("pan");
const panHint = document.getElementById("panHint");
const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

function showPan(key, cls) {
  panHint.className = "tiny" + (cls ? " " + cls : "");
  setText(panHint, key);
}

pan.addEventListener("input", () => {
  pan.value = pan.value.toUpperCase();
  if (pan.value.length < 10) showPan("panFmt");
  else if (PAN_RE.test(pan.value)) showPan("panOk", "tiny-good");
  else showPan("panBad", "tiny-bad");
});

document.getElementById("panBtn").addEventListener("click", () => {
  if (PAN_RE.test(pan.value)) {
    goTo(4);
  } else {
    showPan("panBad", "tiny-bad");
    pan.focus();
  }
});

// ---------- Screen 4: rotating messages so it never looks frozen ----------
const waitMsg = document.getElementById("waitMsg");
const waitKeys = ["w1", "w2", "w3"];
let waitIndex = 0;
setInterval(() => {
  waitIndex = (waitIndex + 1) % waitKeys.length;
  setText(waitMsg, waitKeys[waitIndex]);
}, 5000);

// ---------- Screen 5: pick an amount, then invest ----------
chips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  chips.querySelectorAll(".chip").forEach((c) => {
    c.classList.remove("chip-on");
    c.setAttribute("aria-pressed", "false");
  });
  chip.classList.add("chip-on");
  chip.setAttribute("aria-pressed", "true");
  amount = chip.textContent;
  investMsg.textContent = "";
  investMsg.removeAttribute("data-i18n");
  renderInvest();
});

investBtn.addEventListener("click", () => {
  setText(investMsg, "investDone");
});

// ---------- CSS 3D tilt on the hero mascot (no library) ----------
const tilt = document.getElementById("tilt");
const tiltInner = document.getElementById("tiltInner");

if (!reduceMotion) {
  tilt.addEventListener("pointermove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tiltInner.style.transform = `rotateY(${x * 28}deg) rotateX(${-y * 28}deg)`;
  });
  tilt.addEventListener("pointerleave", () => {
    tiltInner.style.transform = "rotateY(0) rotateX(0)";
  });
}