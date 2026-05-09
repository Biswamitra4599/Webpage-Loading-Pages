import "./TypingDots.styles.css";

export default function TypingDots({
  speed = 1.2,
  color = "#4f46e5",
  size = 18,
}) {
  return (
    <div
      className="typing-dots"
      style={{
        "--dot-size": `${size}px`,
        "--speed": `${speed}s`,
        "--color": color,
      }}
    >
      <span />
      <span />
      <span />
      <span className="typing-text">Loading</span>
    </div>
  );
}
