import "./OrbitingDots.styles.css";

export default function OrbitingDots({
  size = 70,
  speed = 1.4,
  color = "#4f46e5",
  dotCount = 4,
}) {
  return (
    <div
      className="orbiting-dots"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <div className="center-dot" />

      {Array.from({ length: dotCount }).map((_, i) => (
        <div
          key={i}
          className="orbiting-dot"
          style={{
            animationDelay: `-${i * (1.2 / dotCount)}s`,
          }}
        />
      ))}
    </div>
  );
}
