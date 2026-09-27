# Mini Code Editor

A React + Vite code editor demo built around Monaco Editor (the same editor
that powers VS Code) — file explorer, tabs, search, settings, and a fake
terminal panel.

## Features
- **Explorer** — sidebar with several dummy files (JS, TS, CSS, JSON, YAML,
  Markdown, HTML, Python, plain text)
- **Tabs** — open multiple files, switch and close them
- **Search** — search across all open files, click a result to jump to it
- **Settings** — adjust font size, tab size, word wrap, and toggle dark/light
  theme
- **Terminal** — a small fake terminal panel supporting `help`, `clear`,
  `echo <text>`, `date`, and `files`
- **Status bar** — shows current file, language, line count and char count

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
mini-code-editor/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── ActivityBar.jsx
    │   ├── IconButton.jsx
    │   ├── Sidebar.jsx
    │   ├── SearchPanel.jsx
    │   ├── SettingsPanel.jsx
    │   ├── TabBar.jsx
    │   ├── StatusBar.jsx
    │   ├── EditorPanel.jsx
    │   └── TerminalPanel.jsx
    ├── context/
    │   └── ThemeContext.jsx
    ├── hooks/
    │   ├── useFiles.js
    │   ├── useSearch.js
    │   ├── useSettings.js
    │   └── useTerminal.js
    ├── utils/
    │   ├── constants.js
    │   ├── fileIcons.js
    │   ├── formatters.js
    │   └── search.js
    └── data/
        ├── initialFiles.js
        └── themes.js
```

## Notes
- Files live in memory only (`src/data/initialFiles.js`); nothing persists
  to disk yet.
- The terminal is a small command simulator, not a real shell.
- Natural next steps: real file persistence (File System Access API or a
  backend), a genuine light theme, and a real terminal via `xterm.js`.
