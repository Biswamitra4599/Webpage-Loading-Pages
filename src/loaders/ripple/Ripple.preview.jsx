import "./Ripple.css";

export default function RipplePreview() {
  return (
    <div
      className="ripple"
      style={{
        "--ripple-size": "48px",
        "--ripple-color": "#111",
        "--ripple-speed": "1.2s",
      }}
    >
      <span />
      <span />
    </div>
  );
}
