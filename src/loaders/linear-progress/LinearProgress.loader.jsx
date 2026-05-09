import "./LinearProgress.styles.css";

export default function LinearProgress({
  height = 6,
  speed = 1.2,
  color = "#4f46e5",
}) {
  return (
    <div className="linear-progress" style={{ height: `${height}px` }}>
      <div
        className="linear-progress-bar"
        style={{
          animationDuration: `${speed}s`,
          background: `linear-gradient(90deg, ${color}, #a5b4fc, ${color})`,
        }}
      />
    </div>
  );
}
