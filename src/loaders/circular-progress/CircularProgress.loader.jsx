import "./CircularProgress.styles.css";

export default function CircularProgress({
  size = 80,
  speed = 1.6,
  color = "#4f46e5",
}) {
  const radius = size / 2 - 6;
  const circumference = radius * 2 * Math.PI;

  return (
    <svg className="circular-progress" width={size} height={size}>
      <circle className="circle-bg" cx="50%" cy="50%" r={radius} />
      <circle
        className="circle"
        cx="50%"
        cy="50%"
        r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.25}
        style={{
          stroke: color,
          animationDuration: `${speed}s`,
        }}
      />
    </svg>
  );
}
