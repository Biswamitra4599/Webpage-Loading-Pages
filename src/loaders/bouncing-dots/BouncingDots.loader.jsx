import "./BouncingDots.css";

export default function BouncingDots({
  size = 40,
  speed = 0.8,
  color = "#111",
}) {
  return (
    <div
      className="bouncing-dots"
      style={{
        "--dot-size": `${size / 5}px`,
        "--dot-speed": `${1 / speed}s`,
        "--dot-color": color,
      }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
