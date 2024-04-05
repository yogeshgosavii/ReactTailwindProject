import React from 'react';
import logo from '../assets/paypalFullLogo.png';
import flag from '../assets/flag.png';
import { text_color } from '../constants/constants';

function Footer({ className }) {
  return (
    <footer className={`px-6 md:px-20  md:py-8 mt-10 ${className} text-${text_color}`}>
      <div>
        <img className='h-8 md:h-12' src={logo} alt='PayPal Logo'/>
      </div>
      <div className='flex gap-5 mt-6 justify-between py-5 border-b'>
        <nav className='flex gap-4 flex-wrap font-bold'>
          <a href='helpLink'>Help</a>
          <a href='contactLink'>Contact</a>
          <a href='feesLink'>Fees</a>
          <a href='securityLink'>Security</a>
          <a href='appLink'>App</a>
          <a href='shopLink'>Shop</a>
          <a href='enterpriceLink'>Enterprise</a>
          <a href='partnerLink'>Partner</a>
        </nav>
        <img className='h-6 w-6' src={flag} alt='Flag'/>
      </div>
      <div className='flex flex-col xl:flex-row justify-between font-bold gap-12 py-5'>
        <nav className='flex gap-4 flex-wrap'>
          <a href='aboutLink'>About</a>
          <a href='newsRoomLink'>Newsroom</a>
          <a href='jobLink'>Job</a>
          <a href='invertorLink'>Investor Relations</a>
          <a href='actionLink'>Values in Action</a>
          <a href='siteMapLink'>Sitemap</a>
          <a href='policyLink'>Public Policy</a>
        </nav>
        <nav className='flex flex-row flex-wrap gap-4 '>
          <span className='text-gray-600 font-light flex flex-row whitespace-nowrap'>©1999-2022</span>
          <a href='accessibilityLink'>Accessibility</a>
          <a href='privacyLink'>Privacy</a>
          <a href='cookiesLink'>Cookies</a>
          <a href='legalLink'>Legal</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
