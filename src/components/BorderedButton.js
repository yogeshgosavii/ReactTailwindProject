import React from 'react'

function BorderedButton({text,className}) {
  return (
    <div className={`sm:border-2 p-2  rounded-3xl ${className}`}>
      <p className=' text-end sm:text-center  w-full'>
      {text}
      </p>

    </div>
  )
}

export default BorderedButton