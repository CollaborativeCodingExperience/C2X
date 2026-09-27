import { useRef } from "react";
import useTerminal from "../hooks/useTerminal.js";
import { TERMINAL_PROMPT } from "../utils/constants.js";

export default function TerminalPanel({ fileNames, onClose }) {
  const { lines, input, setInput, runCommand } = useTerminal(fileNames);
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
    }
  };

  return (
    <div className="terminal-panel" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <span>Terminal</span>
        <button className="small-button" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="terminal-body">
        {lines.map((line, idx) => (
          <div key={idx} className="terminal-line">
            {line}
          </div>
        ))}
        <div className="terminal-input-row">
          <span>{TERMINAL_PROMPT}</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
