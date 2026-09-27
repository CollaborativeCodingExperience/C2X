import { MIN_FONT_SIZE, MAX_FONT_SIZE } from "../utils/constants.js";
import { useTheme } from "../context/ThemeContext.jsx";

export default function SettingsPanel({ settings }) {
  const { themeName, toggleTheme } = useTheme();
  const { fontSize, setFontSize, tabSize, setTabSize, wordWrap, setWordWrap, resetSettings } =
    settings;

  return (
    <div className="side-panel">
      <h3>Settings</h3>

      <div className="setting-row">
        <label>Theme</label>
        <button className="small-button" onClick={toggleTheme}>
          {themeName === "dark" ? "Dark" : "Light"}
        </button>
      </div>

      <div className="setting-row">
        <label>Font size ({fontSize}px)</label>
        <input
          type="range"
          min={MIN_FONT_SIZE}
          max={MAX_FONT_SIZE}
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
        />
      </div>

      <div className="setting-row">
        <label>Tab size ({tabSize})</label>
        <input
          type="range"
          min={2}
          max={8}
          step={2}
          value={tabSize}
          onChange={(e) => setTabSize(Number(e.target.value))}
        />
      </div>

      <div className="setting-row">
        <label>Word wrap</label>
        <input
          type="checkbox"
          checked={wordWrap}
          onChange={(e) => setWordWrap(e.target.checked)}
        />
      </div>

      <button className="small-button reset-button" onClick={resetSettings}>
        Reset to defaults
      </button>
    </div>
  );
}
