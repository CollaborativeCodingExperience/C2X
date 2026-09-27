export default function IconButton({ icon, label, active, onClick }) {
  return (
    <button
      className={`icon-button ${active ? "icon-button-active" : ""}`}
      title={label}
      onClick={onClick}
    >
      <span>{icon}</span>
    </button>
  );
}
