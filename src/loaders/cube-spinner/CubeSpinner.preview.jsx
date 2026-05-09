import CubeSpinner from "./CubeSpinner.loader";

export default function CubeSpinnerPreview() {
  return (
    <div
      style={{
        height: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
        flexWrap: "wrap",
      }}
    >
      <CubeSpinner size={75} speed={2.8} color="#4f46e5" />
      <CubeSpinner size={65} speed={2.2} color="#ec4899" />
      <CubeSpinner size={85} speed={3.5} color="#10b981" />
    </div>
  );
}
