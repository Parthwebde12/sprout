// =====================================================================
// Text lives here, so Hindi (or any language) is added without touching
// the layout. Any element with data-i18n="key" is swapped. Inputs use
// data-i18n-ph for their placeholder. Missing keys fall back to English.
// =====================================================================
const strings = {
  en: {
    navHow: "How it works",
    navFaq: "Common questions",
    navStart: "Get started",
    backToSite: "Back to website",
    journeyLabel: "Your first steps",
    journeyTitle: "A little clarity goes a long way.",
    journeyCopy: "This is a preview of the Sprout onboarding journey. Take it one screen at a time; you can go back whenever you like.",
    journeyNoteTitle: "Have your documents nearby",
    journeyNoteCopy: "You’ll need your PAN and the mobile number linked to your Aadhaar.",
    stepLabelPrefix: "Step",
    readyScreenCopy: "Have these ready so you won’t get stuck halfway.",
    backButton: "Back",
    ctaEyebrow: "Whenever you’re ready",
    ctaTitle: "Your first step can be a small one.",
    ctaLead: "See what onboarding feels like before you commit to anything.",
    heroEyebrow: "A more thoughtful way to begin",
    assurance: "Clear steps. Your pace. No pressure.",
    firstStep: "Your first step",
    startSmall: "Small is a good place to start.",
    artLabel: "Meet Sprout, your guide",
    sectionLabel: "A clear path forward",
    readyEyebrow: "A quick heads-up",
    faqEyebrow: "Good questions",
    faqTitle: "A few things you might be wondering.",
    faq1q: "What should I have ready before I begin?",
    faq1a: "Your PAN details and the mobile number linked to your Aadhaar. We’ll remind you before verification, so you don’t get stuck halfway.",
    faq2q: "What if identity verification takes a while?",
    faq2a: "We’ll explain that your request is still processing. You can leave the app and return when it’s ready.",
    faq3q: "Is investing without risk?",
    faq3a: "No. Investments are subject to market risks, and returns are not assured. Read the relevant scheme documents before deciding.",
    appEyebrow: "The same calm, one screen at a time",
    demoNote: "Prototype only. No personal information is sent or stored.",
    demoWaitNote: "This preview does not connect to identity records. Continue to see the next screen.",
    waitNote: "Your request is still in progress.",
    amountNote: "Choose an amount that feels right for you. This demo won’t place an investment.",
    prototypeNote: "This is a design prototype. Identity verification, SMS, notifications and investments are not processed.",
    h1: 'Your first investment, <em class="highlight">from just ₹100.</em>',
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
    mobileBad: "Enter a valid 10-digit mobile number to continue.",
    p1btn: "Continue",
    p1tiny: "The live app will send a code by SMS. This demo won’t.",

    tag2: "2 of 5 · Get ready",
    p2h: "Two things before we start",
    c1: "Your PAN card or number",
    c2: "Aadhaar with linked mobile",
    c3: "About 5 minutes",
    p2tiny: "No PAN or Aadhaar nearby? Come back when you have both.",
    p2btn1: "I have them",
    p2btn2: "Remind me later",
    remind: "No problem. Come back when your documents are ready; this demo won’t schedule a reminder.",

    tag3: "3 of 5 · Verify",
    p3h: "Step 1 of 2: your PAN",
    p3p: "A PAN is required for identity checks when investing in India. This demo only checks the format.",
    panLbl: "PAN number",
    panBtn: "Check my PAN",
    panFmt: "Format: 5 letters, 4 digits, 1 letter.",
    panOk: "Looks good.",
    panBad: "That doesn't look right. Check it against your card.",

    tag4: "4 of 5 · Checking",
    p4h: "Verification can take a moment.",
    w1: "The app hasn't frozen. In the live app, your request is checked and this step can take a little while.",
    w2: "Your request is still being processed. We’ll let you know when there’s an update.",
    w3: "You can close the app and come back later. We’ll notify you when your verification is ready.",
    p4tiny: "You can close the app. We'll send you a notification when it's done.",
    p4btn: "Continue to amount preview",

    tag5: "5 of 5 · First step",
    p5h: "Ready for your first step?",
    p5risk: "Investments are subject to market risks. Returns are not assured, and you may lose some or all of your money.",
    invest: "Review {amt}",
    investDone: "In a real app, you’d review scheme details before confirming. This prototype doesn’t process payments.",

    foot: "Sprout is an investing app for first-time investors. Investments are subject to market risks. Please read all scheme-related documents carefully before investing."
  },

  hi: {
    navHow: "यह कैसे काम करता है",
    navFaq: "आम सवाल",
    navStart: "शुरू करें",
    backToSite: "वेबसाइट पर वापस जाएँ",
    journeyLabel: "आपके पहले कदम",
    journeyTitle: "थोड़ी स्पष्टता बहुत मदद करती है।",
    journeyCopy: "यह Sprout की शुरुआत की प्रक्रिया का पूर्वावलोकन है। एक बार में एक स्क्रीन देखें; आप कभी भी पीछे जा सकते हैं।",
    journeyNoteTitle: "दस्तावेज़ पास रखें",
    journeyNoteCopy: "आपको PAN और आधार से लिंक मोबाइल नंबर चाहिए।",
    stepLabelPrefix: "कदम",
    readyScreenCopy: "बीच में अटकने से बचने के लिए ये चीज़ें तैयार रखें।",
    backButton: "पीछे",
    ctaEyebrow: "जब आप तैयार हों",
    ctaTitle: "आपका पहला कदम छोटा हो सकता है।",
    ctaLead: "कुछ भी तय करने से पहले ऑनबोर्डिंग का अनुभव देखें।",
    heroEyebrow: "शुरुआत करने का एक सोच-समझकर बनाया तरीका",
    assurance: "साफ़ कदम। आपकी गति। कोई दबाव नहीं।",
    firstStep: "आपका पहला कदम",
    startSmall: "छोटी शुरुआत भी अच्छी शुरुआत है।",
    artLabel: "मिलिए Sprout से, आपके साथी",
    sectionLabel: "आगे का साफ़ रास्ता",
    readyEyebrow: "शुरू करने से पहले",
    faqEyebrow: "अच्छे सवाल",
    faqTitle: "कुछ बातें जो आप सोच रहे होंगे।",
    faq1q: "शुरू करने से पहले क्या तैयार रखना चाहिए?",
    faq1a: "अपना PAN और आधार से लिंक मोबाइल नंबर पास रखें। सत्यापन से पहले हम आपको याद दिलाएँगे, ताकि आप बीच में न अटकें।",
    faq2q: "पहचान सत्यापन में समय लगे तो?",
    faq2a: "हम बताएँगे कि आपकी जाँच जारी है। आप ऐप बंद करके तैयार होने पर वापस आ सकते हैं।",
    faq3q: "क्या निवेश में कोई जोखिम नहीं है?",
    faq3a: "नहीं। निवेश बाज़ार जोखिमों के अधीन हैं और रिटर्न की गारंटी नहीं है। निर्णय से पहले संबंधित योजना दस्तावेज़ पढ़ें।",
    appEyebrow: "वही शांति, एक बार में एक स्क्रीन",
    demoNote: "यह सिर्फ़ एक प्रोटोटाइप है। कोई निजी जानकारी भेजी या सेव नहीं होती।",
    demoWaitNote: "यह पूर्वावलोकन पहचान रिकॉर्ड से नहीं जुड़ता। अगली स्क्रीन देखने के लिए आगे बढ़ें।",
    waitNote: "आपकी जाँच जारी है।",
    amountNote: "वह रकम चुनें जो आपको ठीक लगे। यह डेमो निवेश नहीं करेगा।",
    prototypeNote: "यह एक डिज़ाइन प्रोटोटाइप है। पहचान सत्यापन, SMS, सूचनाएँ और निवेश संसाधित नहीं होते।",
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
    mobileBad: "आगे बढ़ने के लिए 10 अंकों का सही मोबाइल नंबर डालें।",
    p1btn: "आगे बढ़ें",
    p1tiny: "असली ऐप SMS से कोड भेजेगा। इस डेमो में ऐसा नहीं होगा।",

    tag2: "2/5 · तैयारी",
    p2h: "शुरू करने से पहले ये चीज़ें",
    c1: "आपका PAN कार्ड या नंबर",
    c2: "आधार, लिंक किए मोबाइल के साथ",
    c3: "लगभग 5 मिनट",
    p2tiny: "PAN या आधार पास नहीं हैं? दोनों तैयार हों, तब वापस आएँ।",
    p2btn1: "मेरे पास हैं",
    p2btn2: "बाद में याद दिलाएँ",
    remind: "कोई बात नहीं। दस्तावेज़ तैयार हों तब लौटें; यह डेमो रिमाइंडर नहीं भेजेगा।",

    tag3: "3/5 · सत्यापन",
    p3h: "चरण 1/2: आपका PAN",
    p3p: "भारत में निवेश से जुड़ी पहचान जाँच के लिए PAN ज़रूरी है। यह डेमो सिर्फ़ फ़ॉर्मैट जाँचता है।",
    panLbl: "PAN नंबर",
    panBtn: "मेरा PAN जाँचें",
    panFmt: "फ़ॉर्मैट: 5 अक्षर, 4 अंक, 1 अक्षर।",
    panOk: "ठीक लग रहा है।",
    panBad: "यह सही नहीं लगता। इसे अपने कार्ड से मिलाएँ।",

    tag4: "4/5 · जाँच",
    p4h: "सत्यापन में थोड़ा समय लग सकता है।",
    w1: "ऐप अटका नहीं है। असली ऐप में आपकी जाँच होती है और इसमें थोड़ा समय लग सकता है।",
    w2: "आपकी जाँच जारी है। नई जानकारी मिलते ही हम आपको बताएँगे।",
    w3: "आप ऐप बंद करके बाद में लौट सकते हैं। सत्यापन पूरा होने पर हम आपको सूचना देंगे।",
    p4tiny: "आप ऐप बंद कर सकते हैं। पूरा होते ही हम सूचना भेजेंगे।",
    p4btn: "रकम का पूर्वावलोकन देखें",

    tag5: "5/5 · पहला कदम",
    p5h: "अपने पहले कदम के लिए तैयार हैं?",
    p5risk: "निवेश बाज़ार जोखिमों के अधीन हैं। रिटर्न की कोई निश्चितता नहीं है और आप अपना कुछ या पूरा पैसा खो सकते हैं।",
    invest: "{amt} देखें",
    investDone: "असली ऐप में पुष्टि से पहले आप योजना का विवरण देखेंगे। यह प्रोटोटाइप भुगतान नहीं करता।",

    foot: "Sprout पहली बार निवेश करने वालों के लिए एक निवेश ऐप है। निवेश बाज़ार जोखिमों के अधीन हैं। निवेश से पहले सभी योजना संबंधी दस्तावेज़ ध्यान से पढ़ें।"
  }
};

let lang = "en";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function t(key) {
  return (strings[lang] && strings[lang][key]) || strings.en[key] || "";
}

function setText(el, key) {
  el.dataset.i18n = key;
  el.textContent = t(key);
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = next === "en" ? "हिं / EN" : "EN / हिं";
}

document.getElementById("langBtn")?.addEventListener("click", () => {
  applyLang(lang === "en" ? "hi" : "en");
});

const desktopPreviewBtn = document.getElementById("desktopPreviewBtn");
const mobilePreviewBtn = document.getElementById("mobilePreviewBtn");
const siteFrame = document.getElementById("siteFrame");
const previewStatus = document.getElementById("previewStatus");

if (desktopPreviewBtn && mobilePreviewBtn && siteFrame && previewStatus) {
  function setPreview(mode) {
    const mobilePreview = mode === "mobile";
    siteFrame.classList.toggle("preview-mobile", mobilePreview);
    siteFrame.classList.toggle("preview-desktop", !mobilePreview);
    desktopPreviewBtn.classList.toggle("is-selected", !mobilePreview);
    mobilePreviewBtn.classList.toggle("is-selected", mobilePreview);
    desktopPreviewBtn.setAttribute("aria-pressed", String(!mobilePreview));
    mobilePreviewBtn.setAttribute("aria-pressed", String(mobilePreview));
    previewStatus.textContent = `${mobilePreview ? "Mobile" : "Desktop"} preview selected`;
  }

  setPreview(window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop");
  desktopPreviewBtn.addEventListener("click", () => setPreview("desktop"));
  mobilePreviewBtn.addEventListener("click", () => setPreview("mobile"));
}

const tilt = document.getElementById("tilt");
const tiltInner = document.getElementById("tiltInner");

if (tilt && tiltInner && !reduceMotion) {
  tilt.addEventListener("pointermove", (event) => {
    const rect = tilt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltInner.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
  });
  tilt.addEventListener("pointerleave", () => {
    tiltInner.style.transform = "rotateY(0) rotateX(0)";
  });
}

const flowScreens = [...document.querySelectorAll("[data-flow-screen]")];

if (flowScreens.length) {
  const stepLabel = document.getElementById("stepLabel");
  const progressBar = document.getElementById("flowProgress");
  const progressTrack = progressBar.parentElement;
  const previousButton = document.getElementById("previousStep");
  const nextButton = document.getElementById("nextStep");
  const mobileInput = document.getElementById("mobile");
  const mobileHint = document.getElementById("mobileHint");
  const panInput = document.getElementById("pan");
  const panHint = document.getElementById("panHint");
  const amountButtons = [...document.querySelectorAll("[data-amount]")];
  const investButton = document.getElementById("investBtn");
  const investMessage = document.getElementById("investMsg");
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  let currentStep = Number(new URLSearchParams(location.search).get("step")) || 1;
  let amount = "₹100";

  function setStep(step, updateHistory = false) {
    currentStep = Math.min(flowScreens.length, Math.max(1, step));
    flowScreens.forEach((screen, index) => {
      const active = index === currentStep - 1;
      screen.hidden = !active;
      screen.setAttribute("aria-hidden", String(!active));
    });
    stepLabel.textContent = `${currentStep} / ${flowScreens.length}`;
    progressBar.style.width = `${(currentStep / flowScreens.length) * 100}%`;
    progressTrack.setAttribute("aria-valuenow", String(currentStep));
    previousButton.disabled = currentStep === 1;
    nextButton.hidden = currentStep === flowScreens.length;
    nextButton.dataset.i18n = currentStep === 4 ? "p4btn" : "p1btn";
    nextButton.textContent = t(nextButton.dataset.i18n);
    if (updateHistory) {
      history.pushState({ step: currentStep }, "", `?step=${currentStep}`);
    }
    const heading = flowScreens[currentStep - 1].querySelector("h1");
    heading.focus({ preventScroll: true });
  }

  function showMobileError() {
    mobileInput.setAttribute("aria-invalid", "true");
    mobileHint.className = "field-hint status-error";
    setText(mobileHint, "mobileBad");
    mobileInput.focus();
  }

  function validateMobile() {
    if (!/^\d{10}$/.test(mobileInput.value)) {
      showMobileError();
      return false;
    }
    mobileInput.setAttribute("aria-invalid", "false");
    mobileHint.className = "field-hint";
    setText(mobileHint, "p1tiny");
    return true;
  }

  function validatePan() {
    panInput.value = panInput.value.toUpperCase();
    if (!panPattern.test(panInput.value)) {
      panInput.setAttribute("aria-invalid", "true");
      panHint.className = "field-hint status-error";
      setText(panHint, "panBad");
      panInput.focus();
      return false;
    }
    panInput.setAttribute("aria-invalid", "false");
    panHint.className = "field-hint status-good";
    setText(panHint, "panOk");
    return true;
  }

  nextButton.addEventListener("click", () => {
    if (currentStep === 1 && !validateMobile()) return;
    if (currentStep === 3 && !validatePan()) return;
    setStep(currentStep + 1, true);
  });

  previousButton.addEventListener("click", () => setStep(currentStep - 1, true));

  window.addEventListener("popstate", () => {
    const step = Number(new URLSearchParams(location.search).get("step")) || 1;
    setStep(step);
  });

  mobileInput.addEventListener("input", () => {
    mobileInput.value = mobileInput.value.replace(/\D/g, "");
    if (mobileInput.getAttribute("aria-invalid") === "true") {
      mobileInput.setAttribute("aria-invalid", "false");
      mobileHint.className = "field-hint";
      setText(mobileHint, "p1tiny");
    }
  });

  panInput.addEventListener("input", () => {
    panInput.value = panInput.value.toUpperCase();
    panInput.setAttribute("aria-invalid", "false");
    if (panInput.value.length === 10 && panPattern.test(panInput.value)) {
      panHint.className = "field-hint status-good";
      setText(panHint, "panOk");
    } else {
      panHint.className = "field-hint";
      setText(panHint, "panFmt");
    }
  });

  document.getElementById("remindBtn").addEventListener("click", () => {
    setText(document.getElementById("remindMsg"), "remind");
  });

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      amountButtons.forEach((item) => {
        item.classList.toggle("chip-on", item === button);
        item.setAttribute("aria-pressed", String(item === button));
      });
      amount = button.dataset.amount;
      investMessage.textContent = "";
      investButton.textContent = t("invest").replace("{amt}", amount);
    });
  });

  investButton.addEventListener("click", () => setText(investMessage, "investDone"));

  const requestedStep = Number(new URLSearchParams(location.search).get("step")) || 1;
  setStep(requestedStep);
}