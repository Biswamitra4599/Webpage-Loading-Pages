import Hourglass from "./Hourglass.loader";

export default function HourglassPreview() {
  return (
    <div
      style={{
        height: "260px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        flexWrap: "wrap",
      }}
    >
      <Hourglass size={92} speed={3} color="#4f46e5" />
      <Hourglass size={80} speed={2.5} color="#ec4899" />
      <Hourglass size={100} speed={3.8} color="#10b981" />
    </div>
  );
}
