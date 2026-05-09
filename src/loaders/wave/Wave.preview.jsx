import Wave from "./Wave.loader";

export default function WavePreview() {
  return (
    <div
      style={{
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        flexWrap: "wrap",
      }}
    >
      <Wave size={90} speed={1.1} color="#4f46e5" />
      <Wave size={80} speed={1.6} color="#ec4899" />
      <Wave size={85} speed={0.9} color="#10b981" />
    </div>
  );
}
