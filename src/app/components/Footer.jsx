"use client"
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    < >
     <footer class=" relative ">
            <p class="text-[0.95rem] mt-4 text-center md:mt-0 md:text-xl font-[400] tracking-wide leading-0 "><span class="text-xl md:text-3xl mt-3  font-bold">© </span>2024 Rehan Khan. All rights reserved.
            </p>
            <p class="font-[400] tracking-wide text-center leading-0 text-[.95rem] md:text-xl">Made by Rehan Khan with <span className='text-red-600 text-3xl'>❤</span>.</p>
            <div onClick={()=> {scrollTo({top:0, behavior:'smooth'})}} className='cursor-pointer absolute right-0 bottom-0 p-3 md:p-4 rounded-full  bg-black/80'>
              <FaArrowUp className="size-5 md:size-7 text-white "/> 
            </div>
        </footer>
    </>
  )
}

export default Footer