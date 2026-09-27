// Small formatting helpers used across the app.

export function countLines(content) {
  if (!content) return 0;
  return content.split("\n").length;
}

export function countChars(content) {
  if (!content) return 0;
  return content.length;
}

export function formatLanguageLabel(language) {
  if (!language) return "Plain Text";
  return language.charAt(0).toUpperCase() + language.slice(1);
}
