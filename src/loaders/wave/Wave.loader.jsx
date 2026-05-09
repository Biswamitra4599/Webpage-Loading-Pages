import "./Wave.styles.css";

export default function Wave({
  size = 80,
  speed = 1.2,
  color = "#4f46e5",
  amplitude = 8,
}) {
  return (
    <div
      className="wave-loader"
      style={{
        "--wave-size": `${size}px`,
        "--wave-speed": `${speed}s`,
        "--wave-color": color,
        "--wave-amplitude": `${amplitude}px`,
      }}
    >
      <div className="wave-container">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
    </div>
  );
}
