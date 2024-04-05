import React, { useState, useEffect } from 'react';
import person from '../assets/peoples.png';
import graph from '../assets/graph.png';
import support from '../assets/support.png';
import { text_color } from '../constants/constants';

function Tabs({ tabs, className, selectedTextColor = "#012169", ...props }) {
  // If tabs prop is not provided, use default tabs
  if (!tabs) {
    tabs = [
      {
        tabName: "Personal",
        tabImage: person,
        tabLink: "/personal"
      },
      {
        tabName: "Business help",
        tabImage: graph,
        tabLink: "/business-help"
      },
      {
        tabName: "Technical help",
        tabImage: support,
        tabLink: "/technical-help"
      }
    ];
  }

  // State to keep track of the selected tab index
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [tabWidth, setTabWidth] = useState(0);
  const [tabContainerWidth, setTabContainerWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  // Calculate the width of each tab
  useEffect(() => {
    const containerWidth = document.getElementById("tabsContainer").offsetWidth;
    const calculatedTabWidth = containerWidth / tabs.length;
    setTabWidth(calculatedTabWidth);
    setTabContainerWidth(containerWidth);
  }, [tabs]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the position of the highlight based on the selected tab
  useEffect(() => {
    const highlightPosition = tabWidth * selectedTabIndex;
    const highlightElement = document.getElementById("highlight");
    if (highlightElement) {
      highlightElement.style.transform = `translateX(${highlightPosition-1}px)`;
    }
  }, [selectedTabIndex, tabWidth]);

  return (
    <div className={`bg-gray-100  flex gap-2 justify-between px-2 py-1.5 rounded-full w-full max-w-lg md:max-w-screen-sm relative ${className}`} {...props} id="tabsContainer">
      {tabs.map((tab, index) => (
        <div
          className={`px-8 text-center flex justify-center py-2 z-10 w-1/3 rounded-full cursor-pointer ${selectedTabIndex === index ? `text-${text_color}` : `text-gray-700`}`}
          key={tab.tabName}
          title={tab.tabName}
          onClick={() => setSelectedTabIndex(index)}
        >
          <p className='hidden md:block'>
            {tab.tabName}
          </p>
          <img className='md:hidden h-6 aspect-square ' src={tab.tabImage} alt={tab.tabName}/>
        </div>
      ))}
      
      <div
        id="highlight"
        className="absolute h-[44px] md:h-[44px] top-1 left-[5.5px] md:left-[5px] rounded-full bg-white"
        style={{
          width: `${tabContainerWidth / (screenWidth >= 768 ? 3.13 : 3.27)}px` ,
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </div>
  );
}

export default Tabs;
