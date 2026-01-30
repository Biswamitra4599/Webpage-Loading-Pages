import "./Ripple.css";

export default function Ripple({ size = 48, color = "#111", speed = 1.2 }) {
  return (
    <div
      className="ripple"
      style={{
        "--ripple-size": `${size}px`,
        "--ripple-color": color,
        "--ripple-speed": `${speed}s`,
      }}
    >
      <span />
      <span />
    </div>
  );
}
