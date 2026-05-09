import OrbitingDots from "./OrbitingDots.loader";

export default function OrbitingDotsPreview() {
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
      <OrbitingDots size={75} speed={1.5} color="#4f46e5" dotCount={3} />
      <OrbitingDots size={65} speed={1.2} color="#ec4899" dotCount={4} />
      <OrbitingDots size={80} speed={2} color="#10b981" dotCount={3} />
    </div>
  );
}
