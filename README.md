<div align="center">

# Vimlesh Kumar — Developer Portfolio

**Full-Stack Engineer · Vue 3 · Node.js · Microservices**

A fast, animated, fully theme-aware personal portfolio — built like a production SaaS front end, with a design system, an interactive terminal, and a test suite at 100% coverage.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-F43F5E?logo=framer&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![Tests](https://img.shields.io/badge/tests-151%20passing-brightgreen)
![ESLint](https://img.shields.io/badge/lint-clean-4B32C3?logo=eslint&logoColor=white)

</div>

---

## ✨ Highlights

- **Design-system driven** — a single source of light/dark tokens in [`src/index.css`](src/index.css) powers every surface, accent, and gradient. Toggling the theme re-skins the whole app instantly.
- **Interactive terminal** — a working shell (`help`, `whoami`, `ls`, `cd`, `cat`, `open`, `curl`, `github repos`…) that even fetches live GitHub data, with graceful offline fallbacks.
- **Constellation background** — a canvas particle field that links nearby nodes and leans toward the cursor, plus aurora blobs and a spotlight-follows-mouse effect.
- **Motion everywhere** — scroll-reveal sections, magnetic hovers, and micro-interactions via Framer Motion.
- **Accessible & responsive** — semantic landmarks, keyboard-friendly controls, and a mobile menu.
- **Engineered for review** — 100% test coverage (enforced), zero lint warnings, and clear separation of data / hooks / components.

## 🧱 Tech Stack

| Area        | Choices                                                       |
| ----------- | ------------------------------------------------------------ |
| Framework   | React 19 (automatic JSX runtime)                             |
| Build tool  | Vite 7                                                       |
| Styling     | Tailwind CSS 4 + CSS custom-property design tokens           |
| Animation   | Framer Motion, custom canvas + CSS keyframes                 |
| Icons       | lucide-react + hand-built brand SVGs                         |
| Testing     | Vitest + Testing Library + jsdom                             |
| Quality     | ESLint 9 (flat config), Husky pre-commit / pre-push hooks    |
| Deploy      | Docker (multi-stage) ready                                   |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build + preview
npm run build
npm run preview
```

## 📨 Contact Form Setup (free)

The contact form sends messages via [Web3Forms](https://web3forms.com) — **free**, no signup or billing (you just enter the inbox email and they email you an access key).

1. Get your free access key at <https://web3forms.com>.
2. Copy `.env.example` to `.env` and set your key:

   ```bash
   cp .env.example .env
   # .env
   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
   ```

3. Restart `npm run dev` (Vite reads env vars at startup). For production, set
   `VITE_WEB3FORMS_ACCESS_KEY` in your host's environment (Vercel/Netlify/etc.)
   or in `.env` before `npm run build`.

Until a key is set, the form shows a friendly "email me directly" fallback
instead of failing silently.

## 🧪 Quality & Testing

This project treats a portfolio like production code.

```bash
npm test          # run the unit test suite (151 tests)
npm run coverage  # run tests + enforce 100% coverage thresholds
npm run lint      # ESLint (0 errors, 0 warnings)
```

Coverage thresholds are set to **100%** for statements, branches, functions, and lines in [`vite.config.js`](vite.config.js) — the build fails if coverage regresses. Non-deterministic canvas painting is the only code excluded, via explicit, commented `/* v8 ignore */` ranges (the physics it drives are unit-tested in isolation).

## 📁 Project Structure

```text
src/
├── components/           # UI sections & widgets (Hero, Projects, Skills, Contact…)
│   └── __tests__/        # Component tests colocated per feature
├── context/
│   ├── theme-context.js  # Context + useTheme hook (component-free for Fast Refresh)
│   └── ThemeContext.jsx  # ThemeProvider (persists theme + prefers-color-scheme)
├── lib/                  # Framework-agnostic, unit-tested logic
│   ├── brandColors.js    # Brand color map + resolver
│   ├── particle.js       # Constellation particle physics
│   └── techIcons.jsx     # Brand SVG icon catalogue
├── index.css             # Design tokens (light/dark) + component styles
├── App.jsx               # Root layout & section composition
└── main.jsx              # Entry point
```

### Architecture notes

- **Data / hooks / components are separated.** Pure logic (colors, particle physics, icon data) lives in `src/lib` and `src/context` so it is testable without rendering React and keeps components small.
- **Theme lives in CSS variables.** JS only flips a `data-theme` attribute; the design tokens do the rest — no re-render cascade for styling.
- **Lint enforces JSX-aware usage.** `react/jsx-uses-vars` is enabled so imports used only in JSX aren't false-flagged, replacing brittle ignore patterns.

## 🐳 Docker

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## 📬 Contact

- **Email:** vimlesh11072000@gmail.com
- **GitHub:** [@Vimlesh-Kumar](https://github.com/Vimlesh-Kumar)
- **LinkedIn:** [in/vimlesh11](https://linkedin.com/in/vimlesh11)

---

<div align="center">
<sub>Built with React, Vite & Tailwind — and a slightly obsessive attention to detail.</sub>
</div>
