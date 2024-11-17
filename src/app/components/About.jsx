"use client"
import React from 'react'
import Image from 'next/image'
import myImage from "./myImage.png"
import { FaDownload } from 'react-icons/fa'

function About() {
  return (
    <>
      <div id='About'  className='md:py-[2rem] '>
        <h1 className='text-[1.8em] md:text-[2.5em] text-center leading-0 tracking-wider font-[500] mt-4'>About Me.</h1>
        <br />
        <div className='min-h-[50vh] overflow-hidden w-full flex md:flex-row flex-col items-center bg-transparent rounded-[1.5rem] gap-[1.5rem] ' >
       <section className='md:w-1/3 flex flex-col items-center justify-between '>
       <Image alt="myImage" className='md:h-[14em] h-[10em] w-[10em] md:ml-6 md:w-[14em] rounded-full bg-cover object-cover' src={myImage} />
       <br />
       <a href='https://staticresume-phi.vercel.app/' target='main' className='md:px-8 w-max px-5 py-2 md:py-2 cursor-pointer text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] flex items-center gap-3 leading-0 tracking-wide text-white rounded-lg bg-[#FACC15] font-[450]'> <FaDownload className='text-[1rem] md:text-[1.3rem] text-white'/> <span>Download CV</span></a>
       </section>
          <section id='about-left' className='md:w-[60%]  bg-[#77CDFF]/90 rounded-lg  md:min-h-[50vh] p-4  flex items-center justify-center'>
            <p className='md:text-[1.15rem] lg:text-[1.3em] text-[1em] font-[450] tracking-wide md:tracking-wider leading-0 text-white'>I&apos;m Rehan Khan, a frontend web developer skilled in HTML5, CSS, Tailwind CSS, and JavaScript, with a growing knowledge of TypeScript. I am currently enrolled in the <span className='font-[550] text-[1.1em] '>Governor's Sindh IT Program (GIAIC)</span>, where I am advancing my skills in Web 3.0, Metaverse, and AI. I specialize in building responsive and user-friendly web projects, focusing on clean, dynamic interfaces.
              <span className='block mt-2 tracking-wide text-[1rem] md:text-[1.2rem] lg:text-[1.3em]'>Let&apos;s work together to create something great!</span></p>
          </section>
        </div>
      </div>
    </>
  )
}

export default About