import React, { useState } from 'react';
import CommonQuection from './CommonQuection';
import BorderedButton from './BorderedButton';
import { text_color } from '../constants/constants';

function Content({ className }) {
  const navs = [
    {
      navName: "Common Quections",
      navComponent: <CommonQuection />
    },
    {
      navName: "Paypal Help Guide",
      navComponent: null // Update this line if you have a component for this item
    },
    {
      navName: "Payments & Transfer",
      navComponent: null
    },
    {
      navName: "Disputes & Limitations",
      navComponent: null
    },
    {
      navName: "My account",
      navComponent: null
    },
    {
      navName: "My Wallet ",
      navComponent: null
    },
    {
      navName: "Login and Security",
      navComponent: null
    },
    {
      navName: "Seller Tools",
      navComponent: null
    },
  ];

  const [selectedNav, setSelectedNav] = useState(0);

  return (
    <div className={`${className} flex gap-8 justify-center w-full  max-w-screen-xl`}>
      <div className='w-28 md:w-64'>
        {navs.map((nav, index) => (
          <p
            key={index}
            onClick={() => setSelectedNav(index)}
            className={`cursor-pointer border-l-4 px-3 py-2 ${selectedNav === index ? `bg-blue-100 text-${text_color} font-bold border-${text_color}` : 'border-white'}`}
          >
            {nav.navName}
          </p>
        ))}
      </div>
      <div className='flex-1'>
        {navs[selectedNav].navComponent}
      </div>
      <div className='lg:flex flex-col font-semibold w-64 p-5 rounded-xl h-fit hidden bg-gray-100 text-center items-center justify-center'
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <p>Get customized help with your account and access your message center</p>
        <BorderedButton text={"Log In"} className={`h-8 text-nowrap px-2 w-fit text-center mt-5 flex border-${text_color} text-${text_color}`} />
      </div>
    </div>
  );
}

export default Content;
