import "./CubeSpinner.styles.css";

export default function CubeSpinner({
  size = 80,
  speed = 2.5,
  color = "#4f46e5",
}) {
  return (
    <div
      className="cube-spinner"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <div className="cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
    </div>
  );
}
