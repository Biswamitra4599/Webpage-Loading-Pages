export default function ColorControl({ value, onChange }) {
  return (
    <div>
      <label>Color</label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
