// PulsingDots.jsx
import "./pulsingDots.css";

export default function PulsingDots({ size = 40, speed = 1, color = "#000" }) {
  return (
    <div
      className="pulsing-dots"
      style={{ "--size": `${size}px`, "--color": color, "--speed": speed }}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
