// import { useNavigate } from "react-router-dom";

// export default function LoaderCard({ loader }) {
//   const navigate = useNavigate();
//   const Preview = loader.Preview;

//   return (
//     <div
//       onClick={() => navigate(`/loader/${loader.id}`)}
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: "12px",
//         padding: "1.5rem",
//         cursor: "pointer",
//       }}
//     >
//       <h3>{loader.name}</h3>
//       <p style={{ color: "#666" }}>{loader.description}</p>

//       <div
//         style={{
//           height: "80px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Preview />
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

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
