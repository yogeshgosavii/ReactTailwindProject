import React from 'react';
import SearchInput from './SearchInput';
import Notice from './Notice';
import Services from './Services';
import Tabs from './Tabs';
import Content from './Content';
import peopleIcon from "../assets/peoples.png"; 
import handShakeIcon from "../assets/handshake.png";
import questionMessageIcon from "../assets/questionMessage.png"; // Changed quectionMessageIcon to questionMessageIcon
import Button from './Button';
import { text_color } from '../constants/constants';

function Container({ marginTop = 20 }) {
  const getHelp = [
    {
      icon: peopleIcon,
      link: "",
      text: "Community Forum",
      description: "Find answers or join the conversation" 
    },
    {
      icon: handShakeIcon,
      link: "",
      text: "Resolution Center",
      description: "Resolve transaction or account issue" 
    },
    {
      icon: questionMessageIcon, // Corrected variable name from quectionMessageIcon to questionMessageIcon
      link: "",
      text: "Contact us",
      description: "Contact customer service" 
    }
  ];

  return (
    <div className={`flex flex-1 h-full flex-col px-14  justify-center items-center w-screen py-3 mt-${marginTop} md:mt-${marginTop + 4}`}>
      <p className='text-[#2a82c5] cursor-pointer font-medium w-full text-start lg:pl-24'>Help Center</p>
      <h1 className='text-2xl w-full mt-5 lg:mt-0 text-center'>How can we help?</h1>
      <SearchInput/>
      <Notice 
        className={`bg-[#fff0a8] text-[#86641C]`}
        icon={
          <svg
            className={`h-14 sm:h-6 text-#86641C`} // Removed '#' from class name
            viewBox="0 0 24 24"
            stroke="#fff0a8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#86641C"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        }
      >
        <p className='text-[#86641C] -translate-y-1'>Received a suspicious email, fake invoice, or message? Don't reply, open links, download attachments, or call any listed phone numbers. We'll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <span className='text-[#2a82c5]'>phishing@paypal.com</span> and then delete them.</p>
      </Notice>
      <Services className={"mt-8"}/>  
      <Tabs className={`mt-6`}/>  
      <Content className={'mt-8'}/>

      <p className='mt-16 text-2xl font-light'>More ways to get help</p>
      <div className='mt-10 flex flex-col w-full gap-5 items-center sm:flex-row justify-between max-w-3xl'>
        {
          getHelp.map((help, index) => ( // Added key prop to map function
            <div key={index} className='flex flex-col cursor-pointer max-w-60 md:max-w-40 justify-center items-center'>
              <img className='h-10 w-10' src={help.icon} alt={help.text} />
              <p className='mt-3 text-blue-600 font-semibold'>{help.text}</p>
              <p className='mt-1 text-center'>{help.description}</p>
            </div>
          ))
        }
      </div>
      <div className='bg-gray-100 mt-10 px-10 text-center md:text-start flex-col border flex md:flex-row items-center justify-between py-8 rounded-sm w-full'>
        <div className='w-full'>
          <p className='text-xl'>How are we doing?</p>
          <div className='mt-3'>
            Help improve the <span className='font-bold'>Paypal Help Center Experience</span> with quick message
          </div>
        </div>
        <Button className={`h-fit mt-5 md:mt-0 text whitespace-nowrap bg-${text_color}`} text={"Take the survey"}/>
      </div>
    </div>
  );
}

export default Container;
