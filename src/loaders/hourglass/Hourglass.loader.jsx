import "./Hourglass.styles.css";

export default function Hourglass({ size = 90, speed = 3, color = "#4f46e5" }) {
  return (
    <div
      className="hourglass"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <div className="hourglass-frame">
        <div className="sand-upper" />
        <div className="sand-lower" />
      </div>
    </div>
  );
}
