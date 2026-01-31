import { Link, useParams } from "react-router-dom";
import { getLoadersByCategory } from "../utils/getLoadersByCategory";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const filteredLoaders = getLoadersByCategory(categoryId);

  if (!filteredLoaders.length)
    return <p>No loaders found for this category.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>
        {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Loaders
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingTop: "1rem",
        }}
      >
        {filteredLoaders.map((loader) => {
          const PreviewComponent = loader.Preview;
          return (
            <div
              key={loader.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "1rem",
                width: "160px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to={`/loader/${loader.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <PreviewComponent size={60} />
                <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                  {loader.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
