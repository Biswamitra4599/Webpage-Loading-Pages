import { loaderRegistry } from "../loaders/registry";
import LoaderCard from "../components/LoaderCard";
import "./Home.css";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Loading Animations</h1>
      <p>Select a loader to customize and preview</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {loaderRegistry.map((loader) => {
          const PreviewLoader = loader.Loader;

          return (
            <LoaderCard
              key={loader.id}
              id={loader.id}
              name={loader.name}
              description={loader.description}
            >
              <PreviewLoader size={32} speed={1} color="#555" />
            </LoaderCard>
          );
        })}
      </div>
    </div>
  );
}
