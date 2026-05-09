import TypingDots from "./TypingDots.loader";

export default function TypingDotsPreview() {
  return (
    <div
      style={{
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <TypingDots speed={1.1} color="#4f46e5" size={16} />
      <TypingDots speed={1.6} color="#ec4899" size={14} />
      <TypingDots speed={1.3} color="#10b981" size={18} />
    </div>
  );
}
