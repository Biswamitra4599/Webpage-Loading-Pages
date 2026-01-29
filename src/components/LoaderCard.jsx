import { useNavigate } from "react-router-dom";

export default function LoaderCard({ loader }) {
  const navigate = useNavigate();
  const Preview = loader.Preview;

  return (
    <div
      onClick={() => navigate(`/loader/${loader.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "1.5rem",
        cursor: "pointer",
      }}
    >
      <h3>{loader.name}</h3>
      <p style={{ color: "#666" }}>{loader.description}</p>

      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Preview />
      </div>
    </div>
  );
}
