import "./GearLoader.styles.css";

export default function GearLoader({
  size = 80,
  speed = 2.5,
  color = "#4f46e5",
}) {
  return (
    <div
      className="gear-loader"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <div className="gear gear1" />
      <div className="gear gear2" />
      <div className="gear gear3" />
    </div>
  );
}
