import { useState } from "react";
import { TERMINAL_PROMPT } from "../utils/constants.js";

const HELP_TEXT = `Available commands: help, clear, echo <text>, date, files`;

export default function useTerminal(fileNames) {
  const [lines, setLines] = useState([
    "Mini Code Editor terminal (fake, for demo purposes).",
    'Type "help" to see available commands.',
  ]);
  const [input, setInput] = useState("");

  const runCommand = (raw) => {
    const command = raw.trim();
    const newLines = [`${TERMINAL_PROMPT} ${command}`];

    if (command === "help") {
      newLines.push(HELP_TEXT);
    } else if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (command === "date") {
      newLines.push(new Date().toString());
    } else if (command === "files") {
      newLines.push(fileNames.join("  "));
    } else if (command.startsWith("echo ")) {
      newLines.push(command.slice(5));
    } else if (command === "") {
      // no-op on empty enter
    } else {
      newLines.push(`command not found: ${command}`);
    }

    setLines((prev) => [...prev, ...newLines]);
    setInput("");
  };

  return { lines, input, setInput, runCommand };
}
