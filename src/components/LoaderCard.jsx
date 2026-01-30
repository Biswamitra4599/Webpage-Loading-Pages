import { Link } from "react-router-dom";
import "./LoaderCard.css";

export default function LoaderCard({ id, name, description, children }) {
  return (
    <Link
      to={`/loader/${id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "1rem",
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",

          overflow: "hidden", // 🔥 ADD THIS LINE
          position: "relative", // 🔥 ADD THIS LINE
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        <div style={{ marginBottom: "0.75rem", height: "60px" }}>
          {children}
        </div>

        <h3 style={{ margin: "0 0 0.25rem" }}>{name}</h3>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
          {description}
        </p>
      </div>
    </Link>
  );
}
