# Sprout — First Investment Onboarding Concept

Sprout is a responsive website and app-onboarding concept for people making their first investment in India. Its goal is to make the journey feel approachable by explaining what happens next, keeping amounts small, and using a friendly seed mascot throughout.

> **Prototype only:** This project is a design demonstration. It does not verify identities, send SMS or notifications, connect to investment services, or process payments. Use dummy details when exploring the screens.

## View the prototype

### Deploy with Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**, then import `Parthwebde12/sprout`.
3. Keep the project root as the repository root. Vercel uses `vercel.json` to run `npm run build` and serve the static site.
4. Choose **Deploy**. Vercel will provide a public URL and can redeploy when changes are pushed to GitHub.

The Vercel CLI is not required for this GitHub-based deployment flow.

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

### Desktop and mobile previews

On desktop, use the **Desktop** and **Mobile** controls at the top of the page to switch presentations:

- **Desktop** shows the full landing page and all five onboarding screens in a wide layout.
- **Mobile** shows the same story in a narrow, stacked layout with horizontally swipeable onboarding screens.
- The “Start with ₹100” and “See it in app screens” links switch to Mobile preview and take you to the relevant onboarding section.
- On narrow browser windows and real phones, Mobile layout is selected automatically and the preview controls are hidden.

The preview controls are for judges comparing both layouts on one computer. On a real phone, the page uses the available screen width directly rather than placing the mobile layout inside a simulated phone frame.

## Story and onboarding

The homepage introduces Sprout and explains the journey in three steps: prepare your documents, verify your identity, and choose an investment amount. The primary call to action takes visitors directly to onboarding screen 1. The onboarding concept then shows five screens:

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

- `index.html` — homepage, preview controls, mascot artwork, and onboarding screen markup
- `script.js` — language switching and prototype interactions
- `src/input.css` — Tailwind input and custom component styles
- `dist/output.css` — generated production stylesheet (created by `npm run build`)
- `tailwind.config.js` — Tailwind theme and source configuration

## Build

```bash
npm run build
```

This creates a minified `dist/output.css` file for deployment. Serve the repository root as the static publish directory after running the build.
