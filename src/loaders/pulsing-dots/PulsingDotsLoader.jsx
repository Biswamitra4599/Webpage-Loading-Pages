import "./pulsingDots.css";

const PulsingDotsLoader = ({ size = 12, color = "#4f46e5" }) => {
  return (
    <div className="pulsing-dots">
      {[0, 1, 2].map((i) => (
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
};

export default PulsingDotsLoader;
