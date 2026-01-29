import "./Spinner.styles.css";

export default function Spinner({
  size = "medium",
  color = "#111",
  speed = 0.8,
}) {
  return (
    <div
      className={`spinner ${size}`}
      style={{
        borderTopColor: color,
        animationDuration: `${speed}s`,
      }}
    />
  );
}
