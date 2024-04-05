import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import { text_color } from '../constants/constants'
import BorderedButton from './BorderedButton'
import SideDrawer from './SideDrawer'

function Header() {
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  return (
    <div className='fixed bg-white w-full z-20 py-4 px-4 md:px-6 lg:py-6 lg:px-16 flex flex-row border-b items-center justify-between'>
      <div
      onClick={
        ()=>{
          setshowSideDrawer(!showSideDrawer)
        }
      }
      className={`text-${text_color} lg:hidden w-28 sm:border-2 rounded-full flex flex-row justify-start sm:justify-center py-2 border-${text_color}`}
      
      >
        <svg className={`h-6 `}  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="6" x2="20" y2="6" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="4" y1="18" x2="20" y2="18" /></svg>

      </div>
      <div className='flex items-center'>
        <Logo />
        <SideDrawer setShowDrawer={setshowSideDrawer} showDrawer={showSideDrawer} />
        <ul className={`hidden lg:flex ml-10 text-lg font-medium flex-row gap-12 text-${text_color}`}>
          <li>Personal</li>
          <li>Business</li>
          <li>Developer</li>
          <li>Help</li>

        </ul>
      </div>
      <div className='flex gap-5   lg:w-auto'>
        <BorderedButton className={`w-28  text-blue-800 text-end md:text-center  border-${text_color}`} text={"Log ln"} />
        <Button className={`hidden  bg-blue-800  lg:block`} text={"Signup"}/>

      </div>
      
    </div>
  )
}

export default Header