import { useState } from "react";
import { DEFAULT_FONT_SIZE, DEFAULT_TAB_SIZE } from "../utils/constants.js";

export default function useSettings() {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [tabSize, setTabSize] = useState(DEFAULT_TAB_SIZE);
  const [wordWrap, setWordWrap] = useState(true);

  const resetSettings = () => {
    setFontSize(DEFAULT_FONT_SIZE);
    setTabSize(DEFAULT_TAB_SIZE);
    setWordWrap(true);
  };

  return {
    fontSize,
    setFontSize,
    tabSize,
    setTabSize,
    wordWrap,
    setWordWrap,
    resetSettings,
  };
}
