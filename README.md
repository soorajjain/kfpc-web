

# KFPC Web

Kommanalu Farmers Producer Company (KFPC) Web is a modern, responsive website built with React, Vite, and Tailwind CSS. It showcases the mission, projects, partners, and impact of KFPC, helping farmers and stakeholders connect and collaborate. The site features a dynamic UI, smooth navigation, and is optimized for both desktop and mobile devices.

## 🌐 Live Demo
[Check out the live site here](https://soorajjain.github.io/kfpc-web/)

## Features
- Responsive Navbar with scroll blur and mobile menu
- React Router for page navigation
- Tailwind CSS for styling
- Vite for fast development and builds
- GitHub Pages ready (deployed under `/kfpc-web/`)

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Deployment to GitHub Pages
1. Ensure `vite.config.js` has:
	```js
	base: '/kfpc-web/'
	```
2. In `src/main.jsx`, set:
	```jsx
	<BrowserRouter basename="/kfpc-web">
	```
3. Build the project:
	```bash
	npm run build
	```
4. Deploy the `dist` folder to the `gh-pages` branch.

## Project Structure
```
KFPC-web/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## License
MIT
