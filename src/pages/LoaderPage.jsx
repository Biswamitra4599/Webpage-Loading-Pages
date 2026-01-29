import { useParams } from "react-router-dom";
import { loaderRegistry } from "../loaders/registry";

export default function LoaderPage() {
  const { id } = useParams();
  const loader = loaderRegistry.find((l) => l.id === id);

  if (!loader) {
    return <h2>Loader not found</h2>;
  }

  const LoaderComponent = loader.Loader;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h2>{loader.name}</h2>
      <LoaderComponent size="large" />
    </div>
  );
}
