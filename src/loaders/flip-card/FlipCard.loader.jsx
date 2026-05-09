import "./FlipCard.styles.css";

export default function FlipCard({
  size = 70,
  speed = 2.2,
  color = "#4f46e5",
}) {
  return (
    <div
      className="flip-card"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front" />
        <div className="flip-card-back" />
      </div>
    </div>
  );
}
