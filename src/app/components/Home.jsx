'use client'
import React from 'react'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaNpm } from "react-icons/fa";
import Link from 'next/link'
import myImage from './SquareProgrammerImg.png'
function Home() {
  return (
    <div id='Home' className='pt-[8em] md:pt-[22vh]  flex md:flex-row flex-col items-center justify-between'>
      <section key="IntroSection" id='left' className='md:w-[50vw] md:pl-0 pl-[1rem] tracking-wider leading-0'>
        {["Hello! It's me!", "<RehanKhan./>", "Frontend Developer"].map((element, index) => {
          return <>
            <span id="animation" key={index} className={` ${index < 1 ? "italic text-[1.5em] lg:text-[2.3em] md:text-[2em] font-light tracking-wider " : index == 1 ? "text-[2.1em] lg:text-[2.8em] md:text-[2.5em] leading-0  text-[#5C5CCF] tracking-wider font-[550] " : "md:text-[2.2rem] lg:text-[2.7em] text-[7vw] sm:text-[2rem] font-[500] tracking-wide md:tracking-wider"}`} >{element}</span>
            <br />
          </>
        })}
        <div className='flex items-center gap-6 w-1/2 mt-2'>
          <Link href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'} target='main'>          <FaGithub className='text-4xl cursor-pointer rounded-full  ' /></Link>
          <Link href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'} target='main'>
            <FaLinkedin className='text-4xl cursor-pointer rounded-full text-[#0A66C2] ' /></Link>
          <Link href={'https://www.npmjs.com/~rehankhan'} target='main'> <FaNpm className='text-6xl rounded-full cursor-pointer text-[#CC3534] ' /></Link>
        </div>
        <div className='md:mt-4 flex items-center gap-3 md:gap-[2rem]'>
          {
            ["Hire me", "Download CV"].map((value, index) => {
              return <a href={index === 0 ? "#Contact" : 'https://staticresume-phi.vercel.app/'} key={index} className={`rounded-[.5em] cursor-pointer hover:opacity-80 px-[.5rem] md:px-[.8rem] py-2 md:py-[.2em] text-[.9rem] md:text-[1.3em] font-light ${index === 1 ? "bg-[#FE8376] text-white" : "bg-yellow-400 text-white "}`}>{value}</a>
            })
          }
        </div>
      </section>
      <br className='md:hidden block' />
      <section key='ImageSection' className='md:w-[50vw] ' id="right">
        <Image id='image' className='w-[80vw] md:mt-0 mt-[1rem] md:w-[80%]  mb-4 p-4 md:p-0 object-cover bg-cover  rounded-3xl' src={myImage} alt="" />
      </section>
    </div>
  )
}

export default Home