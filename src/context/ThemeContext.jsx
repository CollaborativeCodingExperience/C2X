import { createContext, useContext, useState } from "react";
import themes from "../data/themes.js";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState("dark");

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const value = {
    themeName,
    theme: themes[themeName],
    setThemeName,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
