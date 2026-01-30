export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #ddd",
        textAlign: "center",
        fontSize: "0.85rem",
        color: "#666",
      }}
    >
      © {new Date().getFullYear()} LoaderLab
    </footer>
  );
}
