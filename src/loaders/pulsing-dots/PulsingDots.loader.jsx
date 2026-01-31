import "./PulsingDots.css";

export default function PulsingDots({
  size = 8,
  gap = 6,
  color = "#111",
  speed = 1.2,
}) {
  return (
    <div
      className="pulsing-dots"
      style={{
        "--dot-size": `${size}px`,
        "--dot-gap": `${gap}px`,
        "--dot-color": color,
        "--dot-speed": `${speed}s`,
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
