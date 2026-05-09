import GearLoader from "./GearLoader.loader";

export default function GearLoaderPreview() {
  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "70px",
        flexWrap: "wrap",
      }}
    >
      <GearLoader size={95} speed={2.5} color="#4f46e5" />
      <GearLoader size={80} speed={2.1} color="#ec4899" />
      <GearLoader size={100} speed={3} color="#10b981" />
    </div>
  );
}
