import "./Dots.styles.css";

export default function Dots({ color = "#111", size = 10 }) {
  return (
    <div className="dots">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
}
