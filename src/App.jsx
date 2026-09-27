import { useState } from "react";
import ActivityBar from "./components/ActivityBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";
import TabBar from "./components/TabBar.jsx";
import StatusBar from "./components/StatusBar.jsx";
import EditorPanel from "./components/EditorPanel.jsx";
import TerminalPanel from "./components/TerminalPanel.jsx";
import useFiles from "./hooks/useFiles.js";
import useSettings from "./hooks/useSettings.js";
import { PANELS } from "./utils/constants.js";

export default function App() {
  const { files, activeFile, openTabs, openFile, closeTab, updateFileContent } =
    useFiles();
  const settings = useSettings();

  const [activePanel, setActivePanel] = useState(PANELS.EXPLORER);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const activeFileData = activeFile ? files[activeFile] : null;

  const handleJumpToFile = (name) => {
    openFile(name);
    setActivePanel(PANELS.EXPLORER);
  };

  return (
    <div className="app">
      <ActivityBar
        activePanel={activePanel}
        onSelectPanel={setActivePanel}
        onToggleTerminal={() => setTerminalOpen((prev) => !prev)}
      />

      {activePanel === PANELS.EXPLORER && (
        <Sidebar files={files} activeFile={activeFile} onSelectFile={openFile} />
      )}
      {activePanel === PANELS.SEARCH && (
        <SearchPanel files={files} onJumpToFile={handleJumpToFile} />
      )}
      {activePanel === PANELS.SETTINGS && <SettingsPanel settings={settings} />}

      <main className="editor-area">
        <TabBar
          tabs={openTabs}
          activeFile={activeFile}
          onSelectTab={openFile}
          onCloseTab={closeTab}
        />

        <div className="editor-wrapper">
          <EditorPanel
            fileName={activeFile}
            file={activeFileData}
            onChange={updateFileContent}
            settings={settings}
          />
        </div>

        {terminalOpen && (
          <TerminalPanel
            fileNames={Object.keys(files)}
            onClose={() => setTerminalOpen(false)}
          />
        )}

        <StatusBar
          activeFile={activeFile}
          content={activeFileData?.content}
          language={activeFileData?.language}
        />
      </main>
    </div>
  );
}
