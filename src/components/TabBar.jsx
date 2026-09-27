import { getFileIcon } from "../utils/fileIcons.js";

export default function TabBar({ tabs, activeFile, onSelectTab, onCloseTab }) {
  return (
    <div className="tab-bar">
      {tabs.map((name) => (
        <div
          key={name}
          className={`tab ${name === activeFile ? "tab-active" : ""}`}
          onClick={() => onSelectTab(name)}
        >
          <span className="file-icon">{getFileIcon(name)}</span>
          <span>{name}</span>
          <span
            className="tab-close"
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(name);
            }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  );
}
