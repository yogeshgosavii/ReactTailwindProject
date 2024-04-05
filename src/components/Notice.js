import React, { useState } from 'react';

function Notice({ className,iconColor, icon, ...props }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className={`py-5 flex flex-col text-center sm:text-left sm:flex-row gap-2  px-4 w-full max-w-6xl mt-10 rounded-lg ${className}`}>
          <div className='absolute w-full flex justify-end -translate-y-9 -translate-x-28 sm:hidden'>
            <svg
              onClick={handleClose}
              className={`h-7 bg-green-100 w-fit text-gray-500 p-1.5 rounded-full  cursor-pointer `}
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Close notice"
              role="button"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='flex justify-center'>
            {icon}
          </div>
          {props.children}
          <svg
            onClick={handleClose}
            className={`h-5  w-20 ml-4 cursor-pointer hidden sm:block`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Close notice"
            role="button"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
    </>
  );
}

export default Notice;
