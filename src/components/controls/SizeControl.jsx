export default function SizeControl({ value, onChange }) {
  return (
    <div>
      <label>Size</label>
      <input
        type="range"
        min="20"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
