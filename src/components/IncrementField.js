import React from "react";
import "./IncrementField.css";

export default function IncrementField({
  id,
  min,
  max,
  increment,
  value,
  onChange
}) {
  function incrementUp() {
    onChange(value => value + increment);
  }

  function incrementDown() {
    if (value - increment >= min) {
      onChange(value => value - increment);
    }
  }

  return (
    <div className="field-wrap">
      <button type="button" className="increment plus" onClick={incrementDown}>
        -
      </button>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={increment}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="button" className="increment minus" onClick={incrementUp}>
        +
      </button>
    </div>
  );
}
