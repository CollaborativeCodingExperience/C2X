// Very small "search across all files" helper.
// Returns an array of { fileName, lineNumber, lineText } matches.

export function searchInFiles(files, query) {
  if (!query || !query.trim()) return [];

  const results = [];
  const lowerQuery = query.toLowerCase();

  Object.entries(files).forEach(([fileName, file]) => {
    const lines = file.content.split("\n");
    lines.forEach((lineText, index) => {
      if (lineText.toLowerCase().includes(lowerQuery)) {
        results.push({
          fileName,
          lineNumber: index + 1,
          lineText: lineText.trim(),
        });
      }
    });
  });

  return results;
}

export function highlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
  return text.split(regex);
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
