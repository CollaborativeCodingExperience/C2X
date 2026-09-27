# CodeSync IDE

A cross-platform desktop IDE built with Electron, React, and Monaco Editor — with an integrated AI assistant, real-time team collaboration, and its own backend for auth, tasks, and analytics.

## Features

- **Code editor** — Monaco Editor (the engine behind VS Code) with syntax highlighting, IntelliSense-style completions, and Prettier-based formatting
- **Integrated terminal** — real shell access in-app via `node-pty` and `xterm.js`
- **AI assistant** — in-editor chat sidebar with code suggestions, powered by Groq
- **Team collaboration** — shared rooms with live editor sync, chat, a task board, and an activity timeline over Socket.IO
- **Themes** — customizable color and icon themes
- **Snapshots** — save and restore project state
- **Project map, ports, problems & output panels** — VS Code–style bottom panel tooling
- **Authentication** — JWT-based auth with email verification and password reset

## Tech stack

**Desktop app**
- Electron (main + preload, contextIsolation, no nodeIntegration)
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)
- Monaco Editor, xterm.js

**Backend**
- Node.js + Express
- Socket.IO (real-time collaboration)
- PostgreSQL / SQLite
- JWT auth, bcrypt, Nodemailer / Resend
- Groq SDK (AI assistant)

## Project structure

```
codesync/
├── electron/                # Electron main process, preload, IPC handlers
├── src/renderer/
│   ├── components/          # UI: editor, terminal, hub, bottom panel, etc.
│   ├── modules/              # Feature modules
│   │   ├── editor/
│   │   ├── ai-assistant/
│   │   ├── team-collaboration/
│   │   ├── theme-manager/
│   │   ├── profiles/
│   │   ├── settings/
│   │   ├── keyboard-shortcuts/
│   │   ├── breadcrumb/
│   │   └── prettier-formatter/
│   ├── services/ store/ hooks/ utils/ types/
├── backend/
│   └── src/
│       ├── modules/          # ai-assistant, team-collaboration
│       ├── controllers/ models/ routes/ sockets/
│       ├── middleware/ config/ utils/
│       └── server.js
├── package.json
└── vite.config.ts
```

## Getting started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL (or SQLite for local dev)

### 1. Clone the repo

```bash
git clone https://github.com/Jeevan4125/CodeSync-IDE.git
cd CodeSync-IDE
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env   # then fill in your own values
npm run dev
```

Required environment variables (`backend/.env`):

```
PORT=
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
FRONTEND_URL=
GROQ_API_KEY=
```

> **Note:** never commit a real `.env` file. Add it to `.gitignore` and provide a `.env.example` with placeholder values instead.

### 3. Run the desktop app

```bash
cd ..            # back to project root
npm install
npm run dev
```

This starts the Vite dev server on port `5173` and launches the Electron window automatically once Vite is ready.

### Production build

```bash
npm run build            # build the renderer to /dist
npm run build:electron   # package the app with electron-builder
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run Vite + Electron together in dev mode |
| `npm run build` | Type-check and build the renderer |
| `npm run build:electron` | Build and package the desktop app |
| `npm run lint` | Type-check without emitting output |
| `npm run preview` | Preview the built renderer |

Backend:

| Command | Description |
|---|---|
| `npm run dev` | Run the backend with nodemon |
| `npm start` | Run the backend in production mode |

## License

Add a license (e.g. MIT) here — none is currently specified for this project.
