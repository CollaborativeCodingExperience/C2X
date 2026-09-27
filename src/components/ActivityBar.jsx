import IconButton from "./IconButton.jsx";
import { PANELS } from "../utils/constants.js";

export default function ActivityBar({ activePanel, onSelectPanel, onToggleTerminal }) {
  return (
    <nav className="activity-bar">
      <IconButton
        icon="📁"
        label="Explorer"
        active={activePanel === PANELS.EXPLORER}
        onClick={() => onSelectPanel(PANELS.EXPLORER)}
      />
      <IconButton
        icon="🔍"
        label="Search"
        active={activePanel === PANELS.SEARCH}
        onClick={() => onSelectPanel(PANELS.SEARCH)}
      />
      <IconButton
        icon="⚙️"
        label="Settings"
        active={activePanel === PANELS.SETTINGS}
        onClick={() => onSelectPanel(PANELS.SETTINGS)}
      />
      <div className="activity-bar-spacer" />
      <IconButton icon="⌨️" label="Toggle Terminal" onClick={onToggleTerminal} />
    </nav>
  );
}
