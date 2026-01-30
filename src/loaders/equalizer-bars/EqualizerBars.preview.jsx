import "./EqualizerBars.css";

export default function EqualizerBarsPreview() {
  const size = 40;
  const speed = 0.8;
  const color = "#111";
  const barWidth = size / 6;

  return (
    <div
      className="equalizer"
      style={{
        "--bar-width": `${barWidth}px`,
        "--bar-height": `${size}px`,
        "--bar-color": color,
        "--bar-speed": `${speed}s`,
      }}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
