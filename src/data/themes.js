// A couple of simple theme presets. Only "dark" is wired into Monaco for
// now, but the structure leaves room for a real "light" theme later.

const themes = {
  dark: {
    name: "Dark",
    monacoTheme: "vs-dark",
    colors: {
      background: "#1e1e1e",
      sidebar: "#252526",
      accent: "#007acc",
      text: "#d4d4d4",
    },
  },
  light: {
    name: "Light",
    monacoTheme: "light",
    colors: {
      background: "#ffffff",
      sidebar: "#f3f3f3",
      accent: "#005fb8",
      text: "#1e1e1e",
    },
  },
};

export default themes;
