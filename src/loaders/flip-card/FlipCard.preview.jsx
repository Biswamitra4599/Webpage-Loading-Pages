import FlipCard from "./FlipCard.loader";

export default function FlipCardPreview() {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
      }}
    >
      <FlipCard size={75} speed={2.2} color="#4f46e5" />
      <FlipCard size={65} speed={1.8} color="#ec4899" />
      <FlipCard size={80} speed={2.8} color="#10b981" />
    </div>
  );
}
