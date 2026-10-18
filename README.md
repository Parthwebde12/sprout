# Sprout — First Investment Onboarding Concept

Sprout is a responsive website and app-onboarding concept for people making their first investment in India. Its goal is to make the journey feel approachable by explaining what happens next, keeping amounts small, and using a friendly seed mascot throughout.

> **Prototype only:** This project is a design demonstration. It does not verify identities, send SMS or notifications, connect to investment services, or process payments. Use dummy details when exploring the screens.


### Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run build
```

Then serve the project root with any static HTTP server and open its URL in a browser. For example, with Python installed:

```bash
python -m http.server 8000
```

Visit <http://localhost:8000>. The build command generates `dist/output.css`, which is loaded by `index.html`.

### Separate website and onboarding pages

- `index.html` is the responsive Sprout homepage. Its calls to action open the separate onboarding page.
- `onboarding.html` is a dedicated, responsive onboarding experience. It shows one app screen at a time and advances through the five-step flow.
- Homepage journey links can open the onboarding flow at the relevant step, such as `onboarding.html?step=3`.
- Desktop and mobile layouts are responsive presentations of each page, not separate sections shown together.

## Story and onboarding

The homepage introduces Sprout and explains the journey in three steps: prepare your documents, verify your identity, and choose an investment amount. The primary call to action opens the separate onboarding page at screen 1. The onboarding flow then shows five screens:

1. Welcome and mobile-number entry
2. PAN/Aadhaar preparation checklist
3. PAN format entry
4. Verification waiting state
5. Amount selection and a review step (no investment is placed by this prototype)

The mascot is an inline SVG reused across the homepage and onboarding, with happy, waiting, and proud expressions. Keeping it inline avoids external image requests.

## Accessibility, performance, and localization

- Semantic headings, labeled form inputs, keyboard-visible focus styles, and live status messages are used. Buttons and controls have at least 44px tap targets.
- Motion is disabled when the visitor requests reduced motion.
- The market-risk notice appears at the top of the homepage, and the amount screen repeats the risk statement in readable text.
- Styling is generated with Tailwind CSS; the mascot is inline SVG, with no image, external font, video, or animation-library dependency.
- The mobile number and PAN interactions are local format checks only. This prototype does not send SMS, save personal details, verify identity, send notifications, or process investments.
- English and Hindi strings are kept in `script.js`, separate from layout markup. The document language is updated when switching languages, and Devanagari-aware system font fallbacks are provided in `src/input.css`.
- New regional languages can follow the existing string-dictionary pattern. Translations should be checked for text expansion, appropriate fonts, and screen-reader pronunciation.

## Project files

- `index.html` — responsive marketing homepage and mascot artwork
- `onboarding.html` — separate five-screen onboarding experience
- `script.js` — shared language switching and page-specific prototype interactions
- `src/input.css` — Tailwind input and custom component styles
- `dist/output.css` — generated production stylesheet (created by `npm run build`)
- `tailwind.config.js` — Tailwind theme and source configuration

## Build

```bash
npm run build
```

This creates a minified `dist/output.css` file for deployment. Serve the repository root as the static publish directory after running the build.
