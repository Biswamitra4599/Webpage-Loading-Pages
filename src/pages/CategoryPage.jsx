import { useParams } from "react-router-dom";
import { loaderRegistry } from "../loaders/registry";
import LoaderCard from "../components/LoaderCard";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const loaders = loaderRegistry.filter(
    (loader) => loader.category === categoryId,
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{categoryId} loaders</h1>

      {loaders.length === 0 && <p>No loaders found for this category.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {loaders.map((loader) => {
          const Preview = loader.Loader;

          return (
            <LoaderCard
              key={loader.id}
              id={loader.id}
              name={loader.name}
              description={loader.description}
            >
              <Preview size={32} speed={1} color="#555" />
            </LoaderCard>
          );
        })}
      </div>
    </div>
  );
}
