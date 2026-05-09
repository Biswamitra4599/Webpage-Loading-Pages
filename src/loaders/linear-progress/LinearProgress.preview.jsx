import LinearProgress from "./LinearProgress.loader";

export default function LinearProgressPreview() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearProgress height={8} speed={1.3} color="#4f46e5" />
    </div>
  );
}
