# TypeScript + SCSS Web App (Vite)

A tiny starter for building a client-side web app with **TypeScript** and **SCSS**.  
Runs fast in dev, builds to a `dist/` folder, and is ready for GitHub.

## Features

- Vite dev server with hot reload (HMR)
- Type checking with `tsc`
- SCSS compiled for you
- Production build with minified, hashed assets
- Simple structure, markup in `index.html`, hydrate with TypeScript

## Tech

- [Vite](https://vitejs.dev/)
- TypeScript
- SCSS (via `sass`)

## Project structure

```tree
├─ index.html            # Your HTML and
├─ src/
│  ├─ main.ts           # App entry, hydrate the DOM here
│  └─ styles.scss       # Global styles
├─ tsconfig.json
├─ package.json
└─ .gitignore
```

## Quick start

```bash
# install deps
npm install

# run the dev server
npm run dev
# opens http://localhost:5173 (by default)

# make a production build
npm run build

# preview the built site locally
npm run preview
# opens http://localhost:4173 (by default)
```

## NPM Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview --open"
  }
}
```

- dev runs the fast dev server with HMR.
- build runs a type check, then creates dist/.
- preview serves dist/ so you can test the build locally.

You can rebuild while preview is running. Run npm run build in another terminal, then refresh the browser.

## How to work in this template

### 1. HTML in index.html, hydrate with TS

Keep most markup in index.html, then let TS fill in dynamic parts.

index.html

```html
<body>
  <main class="container">
    <h1>TypeScript + SCSS ✅</h1>
    <p id="hint"></p>
    <ul id="items"></ul>
  </main>
  <script type="module" src="/src/main.ts"></script>
</body>
```

src/main.ts

```ts
import "./styles.scss";

const hint = document.querySelector<HTMLParagraphElement>("#hint")!;
const items = document.querySelector<HTMLUListElement>("#items")!;

hint.textContent = "Edit src/main.ts and src/styles.scss, save, and watch.";

["Alpha", "Beta", "Gamma"].forEach((label) => {
  const li = document.createElement("li");
  li.textContent = label;
  items.append(li);
});
```

### 2. Styling in src/styles.scss

```scss
$accent: #60a5fa;

.container {
  padding: 2rem;
}

a {
  color: $accent;
}
```

### 3. Split code as it grows

Create more modules in src/ and import them with ESM.

```tree
src/
  api.ts
  ui.ts
  state.ts
  main.ts
```

```ts
// src/ui.ts
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string
) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  return n;
}
```

```ts
// src/main.ts
import { el } from "./ui";
const box = el("div", "box");
document.body.append(box);
```

## Adding libraries

Preferred: install with npm, import in TS

This keeps code typed and included in the bundle.

```bash
npm i dayjs
```

```ts
import dayjs from "dayjs";
console.log(dayjs().format());
```

### CDN script as a global (only if needed)

Add to `<head>` in index.html, then use its global API.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
  defer
></script>
<script type="module" src="/src/main.ts"></script>
```

## GitHub Pages: Configure ports and base path

Create vite.config.ts if you want to tweak ports or set a base for GitHub Pages.

```ts
import { defineConfig } from "vite";

export default defineConfig({
  server: { port: 5173, host: true },
  preview: { port: 4173 },
  // for GitHub Pages:
  // base: '/REPO_NAME/'
});
```

### Deploy to GitHub Pages

1. Set base: '/REPO_NAME/' in vite.config.ts.
2. Build the site:

   ```bash
   npm run build
   ```

3. Deploy dist/ using your preferred method. Two common options:
   - Push dist/ to a gh-pages branch (for example with gh-pages npm package).
   - Use a GitHub Action for Vite + Pages.

A quick manual way with gh-pages:

```bash
npm i -D gh-pages
```

```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

```bash
npm run build && npm run deploy
```

## Tips and notes

- Dev server sets import.meta.env.DEV === true.
  Build sets import.meta.env.PROD === true.
- In preview, there is no HMR. Rebuild, then refresh.
- If the page is blank on GitHub Pages, check the base setting.
- If a port is taken, Vite will pick the next free one.

## Troubleshooting

- **Port already in use:** Set a custom port in vite.config.ts or run vite --port 3000.
- **Type errors not shown in dev:** Dev is focused on speed. Run a watcher in another terminal:

```bash
npx tsc --noEmit --watch
```

- **CDN script types:** If TS complains about a global from a CDN library, add a small src/global.d.ts with a declaration for that global.

## License

This project is licensed under the **MIT License**. See the [opensource.org MIT License](https://opensource.org/license/mit) file for details.

## 👋 About the Author

Hi! I’m Phillip Cantu, an American digital nomad, a Full Sail University web development student, and a [4Geeks Academy Full Stack Development with AI Bootcamp](https://4geeksacademy.com/us/apply?ref=REFERRALQEZPTJCK-17696). I’m passionate about creating modern, user-friendly, and practical applications that help people learn and build faster.

You can find me here:

- **GitHub:** [hereisphil](https://github.com/hereisphil)
- **LinkedIn:** [PhillipCantu](https://www.linkedin.com/in/phillipcantu/)
- **Instagram:** [@philtheotaku](https://www.instagram.com/philtheotaku/)
