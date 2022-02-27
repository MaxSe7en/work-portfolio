import React from 'react'
import './Button.css'

const Button = ({image, platform}) => {
  return (
    <button className="button">
        <img src={image} alt="" className='logos'/>
        <p className='platform'>{platform}</p>
    </button>
  )
}

export default Button