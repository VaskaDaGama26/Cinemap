import React from 'react'

const Button = ({label, classes, action}) => {
  return (
    <button onClick={action} className={classes}>{label}</button>
  )
}

export default Button