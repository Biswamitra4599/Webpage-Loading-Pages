// import { useParams } from "react-router-dom";
// import { loaderRegistry } from "../loaders/registry";

// export default function LoaderPage() {
//   const { id } = useParams();
//   const loader = loaderRegistry.find((l) => l.id === id);

//   if (!loader) {
//     return <h2>Loader not found</h2>;
//   }

//   const LoaderComponent = loader.Loader;

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "1rem",
//       }}
//     >
//       <h2>{loader.name}</h2>
//       <LoaderComponent size="large" />
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useState } from "react";
import { loaderRegistry } from "../loaders/registry";

import SizeControl from "../components/controls/SizeControl";
import SpeedControl from "../components/controls/SpeedControl";
import ColorControl from "../components/controls/ColorControl";

export default function LoaderPage() {
  const { id } = useParams();
  const loader = loaderRegistry.find((l) => l.id === id);

  const [size, setSize] = useState(40);
  const [speed, setSpeed] = useState(0.8);
  const [color, setColor] = useState("#111");

  if (!loader) return <h2>Loader not found</h2>;

  const LoaderComponent = loader.Loader;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {/* Loader display */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <h2>{loader.name}</h2>

        <LoaderComponent size={size} speed={speed} color={color} />
      </div>

      {/* Controls panel */}
      <div
        style={{
          borderLeft: "1px solid #ddd",
          paddingLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h3>Controls</h3>
        <SizeControl value={size} onChange={setSize} />
        <SpeedControl value={speed} onChange={setSpeed} />
        <ColorControl value={color} onChange={setColor} />
      </div>
    </div>
  );
}
