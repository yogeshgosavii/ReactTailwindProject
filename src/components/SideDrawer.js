import React from 'react';
import Button from './Button';

function SideDrawer({ setShowDrawer, showDrawer }) {
  return (
    <div>
      <div
        className={`fixed inset-y-0 left-0 px-8 py-10 z-40 flex flex-col justify-between w-48  sm:w-1/2 lg:w-1/4 bg-blue-50 duration-300 ease-in-out ${
          showDrawer ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between">
          <ul className="flex flex-col text-lg font-medium gap-8 text-blue-500">
            <li>Personal</li>
            <li>Business</li>
            <li>Developer</li>
            <li>Help</li>
          </ul>
          {showDrawer &&
            <svg
            onClick={() => setShowDrawer(false)} // Corrected onClick handler
            className={`h-8 w-28 ml-4 cursor-pointer sm:block translate-x-16 sm:translate-x-32 ${
              showDrawer ? 'block' : 'hidden'
            }`} 
            viewBox="0 0 24 24"
            stroke="#ffffff"
            aria-label="Close drawer"
            role="button"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
          }
          
        </div>
        <Button className="bg-blue-800 w-fit" text="Signup" />
      </div>

      {showDrawer && (
        <div
          className="fixed inset-0 bg-black opacity-30 transition-opacity duration-300 ease-in-out z-20"
          onClick={() => setShowDrawer(false)}
        ></div>
      )}
    </div>
  );
}

export default SideDrawer;
