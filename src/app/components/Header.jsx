"use client"
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Header() {
  const [sideBarDisplay, setSideBarDisplay] = useState(false)
  let openingTag = "<"
  let logo = "RehanKhan."
  let closingTag = "/>"
  
  return (
    <>
      <header id='header' className='md:w-[38em] h-16 fixed z-50 w-[80vw] sm:w-[24em] top-10 px-4 md:px-6   rounded-[1.4rem] shadow-[2px_2px_7px] bg-white shadow-slate-800 flex items-center justify-between'>
        <div className='text-[1.3rem] font-[600] tracking-wider leading-0 text-yellow-500' id="logo">
          <span className=''>{openingTag}</span>
          <span className='text-black font-[400]'>{logo}</span>
          <span className=''>{closingTag}</span>
        </div>
        <navbar >
        <ul className="md:flex hidden  items-center gap-[.67rem] ">
          {
            ["Home", "About","Skills", "Projects", "Contact"].map((value, index) => {
              return <li  key={index} className={`font-[420] hover:text-[#5c5ccf] leading-0 tracking-wider text-[1.1rem] ${index == 4 ? "bg-yellow-400 cursor-pointer hover:bg-[#5c5ccf] hover:text-white px-[.6rem] rounded-md py-1 text-white" : null}`}>
                <a href={`#${value}`}>{value}</a>
              </li>
            })
          }</ul>
        </navbar>
        { sideBarDisplay && <sidebar className={`flex absolute bg-slate-100 text-white top-1/2 left-1/2 translate-y-12 rounded-2xl -translate-x-1/2  flex-col items-center justify-between  px-[1.5rem] gap-8 py-[2rem] z-[999] min-h-[60vh] w-[15em]`}>
        
         <div className='w-full relative '>
         <RxCross1 onClick={()=> setSideBarDisplay(!sideBarDisplay)} className='top-1/2 right-0 size-6 cusor-pointer rounded-full text-black border-box'/>
         </div>
        {
          ["Home", "About", "Projects", "Skills", "Contact"].map((value, index) => {
              return <a onClick={()=> setSideBarDisplay(!sideBarDisplay)} href={`#${value}`} key={index} className={`font-[500]  hover:text-[#5c5ccf] text-black leading-0 tracking-wider text-[1.1rem] ${index == 4 ? "bg-yellow-400 px-[.6rem] rounded-md py-1 " : null}`}>{value}</a>
            })
          }
        </sidebar>}
        <GiHamburgerMenu onClick={()=> setSideBarDisplay(!sideBarDisplay) } className='text-xl cursor-pointer text-black md:hidden ' />

      </header>
    </>
  )
}

export default Header