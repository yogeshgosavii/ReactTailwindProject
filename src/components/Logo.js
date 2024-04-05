import React from 'react'
import payPal from '../assets/paypal.png'
function Logo({...props}) {
  return (
      <img className={`h-7`} src={payPal} alt='logo'/>
  )
}

export default Logo