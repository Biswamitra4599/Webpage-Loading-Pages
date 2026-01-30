import BouncingDots from "./BouncingDots.loader";

export default function BouncingDotsPreview() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <BouncingDots size={28} speed={1} color="#555" />
    </div>
  );
}
