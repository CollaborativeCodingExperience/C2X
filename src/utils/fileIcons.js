// Simple extension -> emoji icon mapping used by the sidebar file list.

const iconMap = {
  js: "📜",
  jsx: "📜",
  ts: "📘",
  tsx: "📘",
  css: "🎨",
  json: "🧩",
  md: "📝",
  py: "🐍",
  html: "🌐",
};

export function getFileIcon(fileName) {
  const ext = fileName.split(".").pop();
  return iconMap[ext] || "📄";
}

export function getFileExtension(fileName) {
  return fileName.split(".").pop();
}
