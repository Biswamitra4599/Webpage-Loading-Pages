export default function StrokeRing({ size = 48, speed = 1, color = "#111" }) {
  const strokeWidth = size / 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        animation: `rotate ${speed}s linear infinite`,
      }}
    >
      <style>
        {`
          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.75}
        strokeLinecap="round"
      />
    </svg>
  );
}
