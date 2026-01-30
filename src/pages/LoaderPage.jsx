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
    <div className="loader-page-wrapper">
      {/* Page toolbar */}
      <div className="loader-header">
        <Link to="/" className="back-link">
          ← Back
        </Link>

        <div className="page-title">
          <span className="page-eyebrow">Loader Styles in Work</span>
          <h1>{loader.name}</h1>
        </div>

        <button
          className="controls-btn"
          onClick={() => setShowControls((v) => !v)}
        >
          Controls ⚙
        </button>
      </div>

      {/* Main body */}
      <div className="loader-page">
        <div className="loader-preview">
          <div className="preview-card">
            <LoaderComponent size={size} speed={speed} color={color} />
          </div>
        </div>
        <div className="loader-writeup">
          <p className="loader-intro">{loader.writeup.intro}</p>

          <div className="writeup-grid">
            <div>
              <h4>Use cases</h4>
              <ul>
                {loader.writeup.useCases.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Advantages</h4>
              <ul>
                {loader.writeup.advantages.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Limitations</h4>
              <ul>
                {loader.writeup.limitations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
    </div>
  );
}
