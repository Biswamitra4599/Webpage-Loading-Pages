import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

export default function CategoryDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>Categories ▾</button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "rgba(20, 30, 60, 0.95)",
            borderRadius: "12px",
            padding: "0.5rem",
            minWidth: "180px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            zIndex: 100,
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              style={{
                display: "block",
                padding: "0.5rem 0.75rem",
                borderRadius: "8px",
                color: "#F6FF99",
              }}
              onClick={() => setOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
