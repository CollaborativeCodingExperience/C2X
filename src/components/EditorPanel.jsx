import Editor from "@monaco-editor/react";

export default function EditorPanel({ fileName, file, onChange, settings }) {
  if (!fileName || !file) {
    return (
      <div className="empty-state">
        <p>No file selected. Pick a file from the Explorer.</p>
      </div>
    );
  }

  const fontSize = settings?.fontSize ?? 14;
  const tabSize = settings?.tabSize ?? 2;
  const wordWrap = settings?.wordWrap ?? true;

  return (
    <Editor
      height="100%"
      theme="vs-dark"
      path={fileName}
      language={file.language}
      value={file.content}
      onChange={(value) => onChange(fileName, value ?? "")}
      options={{
        fontSize,
        tabSize,
        minimap: { enabled: false },
        wordWrap: wordWrap ? "on" : "off",
        scrollBeyondLastLine: false,
      }}
    />
  );
}
