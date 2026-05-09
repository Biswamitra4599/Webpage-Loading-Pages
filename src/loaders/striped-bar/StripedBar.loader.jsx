import "./StripedBar.styles.css";

export default function StripedBar({
  height = 10,
  speed = 1.5,
  color = "#4f46e5",
}) {
  return (
    <div className="striped-bar" style={{ height: `${height}px` }}>
      <div
        className="striped-bar-fill"
        style={{
          "--color": color,
          animationDuration: `${speed}s`,
        }}
      />
    </div>
  );
}
