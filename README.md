# C2X

C2X is a cross-platform desktop IDE that brings coding, an AI assistant, and real-time team collaboration into a single application. It's built to feel fast and native while giving teams a shared space to write, run, and review code together.

## Overview

C2X combines a full-featured code editor, an integrated terminal, an AI-powered assistant, and live multi-user collaboration — all in one desktop app, backed by its own server for accounts, tasks, and analytics.

## Features

### Code Editor
A full-featured in-app editor with syntax highlighting, smart formatting, and support for a wide range of languages. It's designed to make reading and writing code comfortable for long sessions, with breadcrumb navigation so you always know where you are in a large project.

### Integrated Terminal
A real, fully interactive terminal built directly into the app — run builds, scripts, and commands without ever leaving your workspace. Multiple terminal sessions are supported side by side.

### AI Assistant
A built-in chat sidebar that understands your code and can answer questions, explain snippets, suggest fixes, and generate new code directly in the editor. Conversations are saved per session so you can pick up where you left off.

### Team Collaboration
Create or join a shared room and code together in real time:
- **Live editor sync** — see teammates' edits and cursors as they happen
- **In-room chat** — talk through changes without switching apps
- **Task board** — track who's working on what, right inside the IDE
- **Activity timeline** — a running log of what's happened in the session
- **Participant list & notifications** — always know who's online and what's changed

### Themes
Personalize your workspace with switchable color themes and icon sets, so the editor looks and feels the way you want.

### Snapshots
Capture the state of your project at any point and restore it later — a lightweight safety net for experiments and risky changes.

### Project Tooling
Additional panels for a complete workflow: a project map for navigating your codebase, a problems panel for surfacing errors and warnings, a ports panel for managing running services, and an output panel for logs and build results.

### Accounts & Security
Secure sign-up and sign-in with email verification and password reset, so every user and every room is protected.

### Analytics
Built-in usage analytics to help understand activity and engagement across the app.

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- A database instance for the backend (see backend setup)

### 1. Clone the repo

```bash
git clone https://github.com/Jeevan4125/CodeSync-IDE.git
cd CodeSync-IDE
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env   # fill in your own configuration values
npm run dev
```

> **Note:** never commit a real `.env` file. Keep it out of version control and share only a `.env.example` with placeholder values.

### 3. Run the desktop app

```bash
cd ..            # back to project root
npm install
npm run dev
```

The app will launch automatically once everything is ready.

### Production build

```bash
npm run build            # build the app for production
npm run build:electron   # package it into an installable desktop app
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Run the app in development mode |
| `npm run build` | Build the app for production |
| `npm run build:electron` | Package the app into a desktop installer |
| `npm run lint` | Type-check the project |
| `npm run preview` | Preview the production build |

Backend:

| Command | Description |
|---|---|
| `npm run dev` | Run the backend server in development mode |
| `npm start` | Run the backend server in production mode |

## License

Add a license (e.g. MIT) here — none is currently specified for this project.
