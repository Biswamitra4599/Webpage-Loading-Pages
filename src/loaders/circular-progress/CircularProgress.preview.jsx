import CircularProgress from "./CircularProgress.loader";

export default function CircularProgressPreview() {
  return (
    <div
      style={{
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <CircularProgress size={70} speed={1.6} color="#4f46e5" />
      <CircularProgress size={50} speed={1.2} color="#ec4899" />
      <CircularProgress size={85} speed={2} color="#10b981" />
    </div>
  );
}
