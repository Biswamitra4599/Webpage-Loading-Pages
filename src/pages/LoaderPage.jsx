import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { loaderRegistry } from "../loaders/registry";

import SizeControl from "../components/controls/SizeControl";
import SpeedControl from "../components/controls/SpeedControl";
import ColorControl from "../components/controls/ColorControl";

import "./LoaderPage.css";

export default function LoaderPage() {
  const { id } = useParams();
  const loader = loaderRegistry.find((l) => l.id === id);

  const [size, setSize] = useState(40);
  const [speed, setSpeed] = useState(0.8);
  const [color, setColor] = useState("#111");
  const [showControls, setShowControls] = useState(false);

  if (!loader) return <h2>Loader not found</h2>;

  const LoaderComponent = loader.Loader;

  return (
    <>
      {/* Header */}
      <div className="loader-header">
        <Link to="/">← Back</Link>
        <strong>{loader.name}</strong>

        <button
          className="controls-btn"
          onClick={() => setShowControls((v) => !v)}
        >
          Controls ⚙
        </button>
      </div>

      <div className="loader-page">
        {/* Preview */}
        <div className="loader-preview">
          <div className="preview-card">
            <LoaderComponent size={size} speed={speed} color={color} />
          </div>
        </div>

        {/* Controls */}
        <div className={`controls-panel ${showControls ? "" : "hidden"}`}>
          <h3>Customize</h3>

          {loader.controls?.size && (
            <SizeControl value={size} onChange={setSize} />
          )}

          {loader.controls?.speed && (
            <SpeedControl value={speed} onChange={setSpeed} />
          )}

          {loader.controls?.color && (
            <ColorControl value={color} onChange={setColor} />
          )}
        </div>
      </div>
    </>
  );
}
