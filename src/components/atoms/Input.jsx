import React from 'react'

function Input({ value, onChange, placeholder = '', onKeyDown, ...rest }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className="input"
      {...rest}
    />
  )
}

export default Input
