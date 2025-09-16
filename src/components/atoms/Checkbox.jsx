import React from 'react'

function Checkbox({ checked, onChange }) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="checkbox-input"
      />
      <span className="checkbox-box" aria-hidden>{checked ? '✓' : ''}</span>
    </label>
  )
}

export default Checkbox
