import "./PulseRings.styles.css";

export default function PulseRings({
  size = 80,
  speed = 1.8,
  color = "#4f46e5",
  ringCount = 3,
}) {
  return (
    <div
      className="pulse-rings"
      style={{
        "--size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      {Array.from({ length: ringCount }).map((_, i) => (
        <div
          key={i}
          className="pulse-ring"
          style={{
            animationDelay: `-${i * 0.4}s`,
            width: `${size - i * 18}px`,
            height: `${size - i * 18}px`,
          }}
        />
      ))}
    </div>
  );
}
