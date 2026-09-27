import { getFileIcon } from "../utils/fileIcons.js";

export default function Sidebar({ files, activeFile, onSelectFile }) {
  const fileNames = Object.keys(files);

  return (
    <aside className="sidebar">
      <h3>Explorer</h3>
      <div className="folder-label">mini-code-editor</div>
      {fileNames.map((name) => (
        <div
          key={name}
          className={`file-item ${name === activeFile ? "active" : ""}`}
          onClick={() => onSelectFile(name)}
        >
          <span className="file-icon">{getFileIcon(name)}</span>
          <span>{name}</span>
        </div>
      ))}
    </aside>
  );
}
