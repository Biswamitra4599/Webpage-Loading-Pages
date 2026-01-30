import { loaderRegistry } from "../loaders/registry";
import LoaderCard from "../components/LoaderCard";
import PageContainer from "../components/layout/PageContainer";
import "./Home.css";

export default function Home() {
  return (
    <PageContainer>
      <h1>Loading Animations</h1>
      <p>Select a loader to customize and preview</p>

      <div className="loader-grid">
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
    </PageContainer>
  );
}
