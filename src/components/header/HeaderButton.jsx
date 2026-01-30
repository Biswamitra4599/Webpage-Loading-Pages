export default function HeaderButton({ label, onClick }) {
  return (
    <button
      style={{
        padding: "0.5rem 1rem",
        fontSize: "0.9rem",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
