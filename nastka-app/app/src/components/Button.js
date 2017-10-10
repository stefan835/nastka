import React from 'react'

import './Button.css'

const Button = (props) => {
  return (
    <input className={props.clsName} type="submit" value={props.textContent}/>
  )
};

export default Button