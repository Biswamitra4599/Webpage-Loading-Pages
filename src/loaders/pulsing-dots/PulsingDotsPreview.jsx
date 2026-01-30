import { useState } from "react";
import PulsingDotsLoader from "./PulsingDotsLoader";

const PulsingDotsPreview = () => {
  const [size, setSize] = useState(12);
  const [color, setColor] = useState("#4f46e5");

  return (
    <div className="loader-preview">
      <h2>Pulsing Dots Loader</h2>

      <div className="loader-box">
        <PulsingDotsLoader size={size} color={color} />
      </div>

      <div className="controls">
        <label>
          Size
          <input
            type="range"
            min="6"
            max="24"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>

        <label>
          Color
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default PulsingDotsPreview;
