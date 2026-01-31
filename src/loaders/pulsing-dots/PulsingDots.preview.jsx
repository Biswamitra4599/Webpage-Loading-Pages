import "./PulsingDots.css";

export default function PulsingDotsPreview() {
  return (
    <div
      className="pulsing-dots"
      style={{
        "--dot-size": "8px",
        "--dot-gap": "6px",
        "--dot-color": "#111",
        "--dot-speed": "1.2s",
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
