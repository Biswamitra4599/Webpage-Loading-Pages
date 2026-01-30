import "./StrokeRing.css";

export default function StrokeRing({
  size = 48,
  stroke = 4,
  color = "#111",
  speed = 1.2,
}) {
  return (
    <svg
      className="stroke-ring"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{
        "--ring-color": color,
        "--ring-speed": `${speed}s`,
      }}
    >
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth={stroke} />
    </svg>
  );
}
