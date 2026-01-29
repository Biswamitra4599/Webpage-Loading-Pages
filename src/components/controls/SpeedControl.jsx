export default function SpeedControl({ value, onChange }) {
  return (
    <div>
      <label>Speed</label>
      <input
        type="range"
        min="0.3"
        max="2"
        step="0.1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
