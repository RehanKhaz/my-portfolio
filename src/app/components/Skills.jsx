'use client'
import React, { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";



function Skills() {
    return (
        <>
            <br />
            <div id='Skills' className='min-h-[45vh] p-8 w-full rounded-[1rem] bg-slate-200/70 '>
                <h1 className='font-semibold text-3xl text-black/80 text-center'>Skills</h1>
                <h1 className='font-[400] text-[1.3em] md:text-[1.7em] lg:text-[2em] text-black text-center'>What I am capable of ?</h1>
                <br />
                <div className='h-full w-full flex flex-wrap items-center justify-between gap-y-3 gap-4 md:gap-6 lg:gap-16  '>
                    <div className='relative'>
                        <FaHtml5 className='md:text-[5em] cursor-pointer lg:text-[6em] text-[4em] text-[#E34F26]' />

                    </div>

                    <div className='relative'>  <FaCss3 className='md:text-[5em] cursor-pointer lg:text-[6em] text-[4em] text-[#1572B6]' />
                    </div>
                    <IoLogoJavascript className='md:text-[5em] cursor-pointer lg:text-[6em] text-[4em] text-[#F7DF1E]' />
                    <SiTypescript className='md:text-[5em] cursor-pointer lg:text-[6em] text-[4em] text-[#3178C6]' />
                    <RiTailwindCssFill className='md:text-[5em] cursor-pointer lg:text-[6em] text-[4em] text-[#38BDF8]' />
                    <FaReact className='md:text-[5em] animate-spin-slow hover:animate-none cursor-pointer lg:text-[6em]  text-[4em] text-[#61DAFB]' />
                </div>
            </div>
        </>
    )
}

export default Skills