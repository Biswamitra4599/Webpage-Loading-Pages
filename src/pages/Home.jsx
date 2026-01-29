import LoaderCard from "../components/LoaderCard";
import { loaderRegistry } from "../loaders/registry";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Loader Playground 🚀</h1>
      <p>Click a card to see the loader in action</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {loaderRegistry.map((loader) => (
          <LoaderCard key={loader.id} loader={loader} />
        ))}
      </div>
    </div>
  );
}
