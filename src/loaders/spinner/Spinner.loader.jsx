import "./Spinner.styles.css";

export default function Spinner({ size = 40, color = "#111", speed = 0.8 }) {
  return (
    <div
      className="spinner"
      style={{
        width: size,
        height: size,
        borderTopColor: color,
        animationDuration: `${speed}s`,
      }}
    />
  );
}
