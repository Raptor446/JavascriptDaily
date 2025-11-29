export function Counter({ value, step = 1, min, max, onChange }) {
  const clamp = (v) => {
    if (typeof min === "number" && v < min) return min;
    if (typeof max === "number" && v > max) return max;
    return v;
  };

  const update = (delta) => {
    const next = clamp(value + delta);
    if (next !== value) onChange?.(next);
  };

  return (
    <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <button type="button" onClick={() => update(-step)}>
        -
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => update(step)}>
        +
      </button>
    </div>
  );
}
