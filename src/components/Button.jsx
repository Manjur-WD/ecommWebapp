import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className={props.btnClass}>{props.btnText}</button>
      {
        console.log(props)
      }
    </>
  )
}

export default Button
