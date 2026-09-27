import { useState } from "react";
import initialFiles from "../data/initialFiles.js";

// Encapsulates all file-related state: the file map, which file is active,
// and the handlers to switch files or edit their content.
export default function useFiles() {
  const [files, setFiles] = useState(initialFiles);
  const [activeFile, setActiveFile] = useState("index.js");
  const [openTabs, setOpenTabs] = useState(["index.js"]);

  const openFile = (name) => {
    setActiveFile(name);
    setOpenTabs((prev) => (prev.includes(name) ? prev : [...prev, name]));
  };

  const closeTab = (name) => {
    setOpenTabs((prev) => prev.filter((tab) => tab !== name));
    if (activeFile === name) {
      const remaining = openTabs.filter((tab) => tab !== name);
      setActiveFile(remaining[remaining.length - 1] || null);
    }
  };

  const updateFileContent = (name, content) => {
    setFiles((prev) => ({
      ...prev,
      [name]: { ...prev[name], content },
    }));
  };

  return {
    files,
    activeFile,
    openTabs,
    openFile,
    closeTab,
    updateFileContent,
  };
}
