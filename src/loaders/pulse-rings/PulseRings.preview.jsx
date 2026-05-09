import PulseRings from "./PulseRings.loader";

export default function PulseRingsPreview() {
  return (
    <div
      style={{
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
      }}
    >
      <PulseRings size={85} speed={1.9} color="#4f46e5" ringCount={3} />
      <PulseRings size={75} speed={1.4} color="#ec4899" ringCount={4} />
      <PulseRings size={90} speed={2.2} color="#10b981" ringCount={3} />
    </div>
  );
}
