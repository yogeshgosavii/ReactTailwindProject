import React from 'react'

function BorderedButton({text,className}) {
  return (
    <button className={`border-2  justify-center items-center p-2 px-7 rounded-3xl ${className}`}>
      {text}
    </button>
  )
}

export default BorderedButton