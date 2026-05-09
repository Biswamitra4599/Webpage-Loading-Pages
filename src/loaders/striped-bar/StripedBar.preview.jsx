import StripedBar from "./StripedBar.loader";

export default function StripedBarPreview() {
  return (
    <div
      style={{
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "35px",
      }}
    >
      <StripedBar height={9} speed={1.4} color="#4f46e5" />
      <StripedBar height={7} speed={1.8} color="#ec4899" />
      <StripedBar height={11} speed={1.2} color="#10b981" />
    </div>
  );
}
