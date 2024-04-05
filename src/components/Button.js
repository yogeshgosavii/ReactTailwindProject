import React from 'react';
function Button({ text, className }) {

  return (
    <button className={` text-white border-current py-2 px-7 rounded-3xl  ${className}`}>
      {text}
    </button>
  );
}

export default Button;
