import React from 'react'
import './styles.css';
const Button = ({text, Outlined}) => {
  return (
    <div className={Outlined?'outlined-btn':"btn"} >
      {text}
    </div>
  )
}

export default Button
