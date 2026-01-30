import "./BouncingDots.css";

export default function BouncingDots({
  size = 12,
  speed = 0.6,
  color = "#111",
}) {
  const style = {
    "--dot-size": `${size}px`,
    "--dot-color": color,
    "--dot-speed": `${speed}s`,
  };

  return (
    <div className="dots-loader" style={style}>
      <span />
      <span />
      <span />
    </div>
  );
}
