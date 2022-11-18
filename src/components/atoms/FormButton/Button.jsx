import React from 'react'
import './Button.scss'

function Button({ children, onClick }) {

  return (
    <div>
      <button className="btn btn-red" onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button