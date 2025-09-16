import React from 'react'

function Button({ onClick, children, variant = 'default', ...rest }) {
  const classNames = ['btn']
  if (variant === 'primary') classNames.push('btn--primary')
  return (
    <button onClick={onClick} className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  )
}

export default Button
