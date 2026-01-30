import "./StrokeRing.css";

export default function StrokeRingPreview() {
  return (
    <svg
      className="stroke-ring"
      width="48"
      height="48"
      viewBox="0 0 50 50"
      style={{
        "--ring-color": "#111",
        "--ring-speed": "1.2s",
      }}
    >
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </svg>
  );
}
