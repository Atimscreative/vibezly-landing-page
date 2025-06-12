# 🌐 Vibezly Landing Page

The **Vibezly Landing Page** is a vibrant, web3-style promotional website for **Vibezly** — an AI-powered Telegram bot that transforms crypto communities through decentralized governance, AI-driven engagement, and gamified rewards powered by the native **VBZ token**.

---

## 🚀 Live Site

> Coming soon: [https://vibezly.io](https://vibezly.io)

---

## 📦 Features

- 🎯 Animated **Hero Section** with CTA buttons and community energy
- 🤖 Detailed overview of **AI, governance, and gamification utilities**
- 💰 **Interactive Tokenomics** with copy-to-clipboard contract address
- 👥 **Team Section** with bios and social profiles
- 🤝 Dynamic **Partnerships Section** with admin-ready integration
- 📅 **Roadmap Timeline** with milestone animations
- 📱 Fully **Responsive Design** (mobile & desktop)
- 🌈 **Web3-style Animations** for a lively experience
- ♿ Accessibility support for inclusive design

---

## 🧩 Project Structure

```

/vibezly-landing/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Full-page landing sections
│   ├── assets/         # Images, icons, videos
│   ├── styles/         # Global styles (e.g., Tailwind or SCSS)
│   ├── utils/          # Reusable logic (e.g., tokenomics helpers)
│   └── App.tsx         # Main application file
├── .env                # Environment variables (optional)
├── README.md
├── package.json
└── vite.config.ts      # Or next.config.js if using Next.js

```

> Built with **React + Vite + SWC**

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm or Yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-org/vibezly-landing.git
cd vibezly-landing

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Access the dev server at `http://localhost:5173`

---

## 🔧 Production Build

```bash
npm run build
# or
yarn build
```

Preview the build:

```bash
npm run preview
```

Deploy to platforms like **Vercel**, **Netlify**, or **Cloudflare Pages**.

---

## 📊 Tokenomics Example

```
Total Supply: 1,000,000,000 VBZ
Allocation:
  - Community Rewards: 40%
  - Development: 25%
  - Partnerships: 15%
  - Treasury: 10%
  - Team: 10%
```

> Includes interactive charts and click-to-copy contract address.

---

## 🧠 Tech Stack

- **React 18**
- **Vite** or **Next.js**
- **TailwindCSS** or **SCSS**
- **Framer Motion** for animations
- **Ethers.js** (if on-chain interaction is present)

---

## 📄 License

MIT License © 2025 Vibezly Team

---

## 📬 Contact

- Telegram: [@vibezly](https://t.me/vibezly)
- Twitter/X: [@vibezly_io](https://x.com/vibezly_io)
- Discord: [https://discord.gg/vibezly](https://discord.gg/vibezly)
- Email: [team@vibezly.io](mailto:team@vibezly.io)

> For partnerships, integrations, or general inquiries — feel free to reach out.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
