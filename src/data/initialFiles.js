// Dummy in-memory "file system" for the editor.
// In a real app this would be replaced by reading from disk or an API.

const initialFiles = {
  "index.js": {
    language: "javascript",
    content: `console.log("Hello from Mini Code Editor!");

function greet(name) {
  return \`Hello, \${name}!\`;
}

greet("World");
`,
  },
  "utils.js": {
    language: "javascript",
    content: `export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}
`,
  },
  "styles.css": {
    language: "css",
    content: `body {
  margin: 0;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: sans-serif;
}

.container {
  padding: 20px;
}
`,
  },
  "config.json": {
    language: "json",
    content: `{
  "name": "mini-code-editor",
  "theme": "dark",
  "fontSize": 14,
  "tabSize": 2
}
`,
  },
  "notes.md": {
    language: "markdown",
    content: `# Notes

This is a dummy file to try out the editor.

- Add more files from the sidebar (future feature)
- Switch between tabs
- Edit and see live changes
`,
  },
  "server.py": {
    language: "python",
    content: `def hello():
    print("Hello from a Python dummy file")

if __name__ == "__main__":
    hello()
`,
  },
  "index.html": {
    language: "html",
    content: `<!doctype html>
<html>
  <head>
    <title>Dummy Page</title>
  </head>
  <body>
    <h1>Hello from a dummy HTML file</h1>
  </body>
</html>
`,
  },
  "types.ts": {
    language: "typescript",
    content: `export interface FileEntry {
  name: string;
  language: string;
  content: string;
}

export type PanelName = "explorer" | "search" | "settings";
`,
  },
  "docker-compose.yml": {
    language: "yaml",
    content: `version: "3.9"
services:
  app:
    build: .
    ports:
      - "5173:5173"
`,
  },
  "todo.txt": {
    language: "plaintext",
    content: `TODO
-----
[ ] Wire up real file persistence
[ ] Add a proper terminal (xterm.js)
[ ] Add light theme support
[x] Add search panel
[x] Add settings panel
`,
  },
};

export default initialFiles;
