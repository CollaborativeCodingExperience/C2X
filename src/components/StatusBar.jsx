import { countLines, countChars, formatLanguageLabel } from "../utils/formatters.js";

export default function StatusBar({ activeFile, content, language }) {
  if (!activeFile) {
    return (
      <div className="status-bar">
        <span>No file open</span>
      </div>
    );
  }

  return (
    <div className="status-bar">
      <span>{activeFile}</span>
      <span>{formatLanguageLabel(language)}</span>
      <span>{countLines(content)} lines</span>
      <span>{countChars(content)} chars</span>
    </div>
  );
}
