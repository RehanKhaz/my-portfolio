'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaNpm, FaUser } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const handleSubmit = async (e) => {
    const form  = e.target;
    e.preventDefault();
    setTimeout(() => {
      toast.success("Form under Progess.")
      toast.success("Contact through Linkedin")
    form.reset()
    }, 3000)
  }



  return (
    <>
      <div className='min-h-screen w-full  md:flex items-center gap-8 rounded-[2em]'>
        <section className='md:w-1/2 '>
          <h1 className='text-[1.8em] mt-4 md:mt-0 md:text-[2.4em] lg:text-[3em] font-semibold text-[#5C67E7]'>Contact Me</h1>
          <p className='text-[0.95rem] md:text-[1.05rem] lg:text-[1.2em] font-[400] tracking-wide leading-0 '>"Let's Connect!"
            <br />
            Thank you for exploring my portfolio! If you have any questions, want to discuss potential collaborations, or simply wish to connect, feel free to reach out. I’m always open to new opportunities and exciting projects. Drop a message, and I’ll get back to you as soon as possible. Looking forward to connecting with you!</p>
          <div className='flex items-center gap-6 w-1/2 mt-2'>
            <Link href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'} target='main'>          <FaGithub className='text-4xl cursor-pointer rounded-full  ' /></Link>
            <Link href={'https://www.linkedin.com/in/rehan-khan-31bb062b4/'} target='main'>
              <FaLinkedin className='text-4xl cursor-pointer rounded-full text-[#0A66C2] ' /></Link>
            <Link target='main' href={'https://www.npmjs.com/~rehankhan'}> <FaNpm className='text-6xl rounded-full cursor-pointer text-[#CC3534] ' /></Link>
          </div>
          <br />
          <div className='flex items-center gap-4'>
            <MdEmail className='text-[1.2rem] md:text-[1.5em]' /> <strong className='font-[400] md:text-xl text-md leading-0 tracking-wider'>rehankhaz3666@gmail.com</strong>
          </div>
          <div className='flex items-center gap-4 mt-2'>
            <BsFillTelephoneFill className='text-[1.2rem] md:text-[1.5em]' /> <strong className='font-[400] text-md md:text-xl leading-0 tracking-widest'>+92232805467</strong>
          </div>
          <div className='flex items-center gap-4 mt-2'>
            <IoLocationSharp className='text-[1.3rem] md:text-[1.6em]' /> <strong className='font-[400] text-md md:text-xl leading-0 tracking-widest'>Karachi, Pakistan</strong>
          </div>
        </section>

        <form
          id="Contact"
          action="https://script.google.com/macros/s/AKfycbyzgSwoSrNBNm2Wq-qR5-kFROssY0m6_pQPg4MAilcUNnV8HZ2CHCdYzdOwYo-JIWB6kA/exec"
          method="post"
          name="contact-form"
          className="md:w-[45%] items-center border-[#FACC15] border-[3px] mt-6 rounded-[1em] rounded-tl-[5rem] px-[1rem] py-[.7rem] flex flex-col gap-y-4 md:px-[1.5rem] md:py-[1.1rem] lg:px-[2rem] lg:py-[1.5rem] md:min-h-[60vh]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[1.5em] md:text-[2.3em] font-[520] tracking-wider leading-0 text-[#5C67E7] text-center">
            Get in Touch
          </h1>
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="text"
              id="input-name"
              className="w-full h-full outline-none placeholder:text-[1rem] placeholder:tracking-wider placeholder:leading-0 md:placeholder:text-lg text-lg font-[450]"
              autoComplete="off"
              spellCheck="false"
              name="Name"
              placeholder="Name"
            />
            <IoPersonAdd className="size-4 md:size-6 lg:size-8" />
          </div>
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="email"
              id="input-email"
              className="w-full h-full outline-none placeholder:text-[1rem] placeholder:tracking-wider placeholder:leading-0 md:placeholder:text-lg text-lg font-[450]"
              autoComplete="off"
              spellCheck="false"
              name="Email"
              placeholder="Email"
            />
            <MdOutlineMarkEmailRead className="size-4 md:size-6 lg:size-8" />
          </div>
          <div className="h-[2.5rem] lg:h-[3rem] bg-white w-full rounded-[.9em] border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <input
              required
              type="text"
              id="input-subject"
              className="w-full h-full outline-none placeholder:text-[1rem] md:placeholder:text-lg text-lg font-[450]"
              spellCheck="false"
              autoComplete="off"
              name="Subject"
              placeholder="Subject"
            />
            <FaRegStar className="size-4 md:size-6 lg:size-8" />
          </div>
          <div className="h-[4rem] md:h-[5rem] lg:h-[7rem] bg-white w-full rounded-lg border-gray-400 border-[2px] px-[1rem] flex items-center justify-between">
            <textarea
              required
              id="input-message"
              className="w-full h-full outline-none placeholder:text-[1rem] md:placeholder:text-lg text-lg font-[450]"
              spellCheck="false"
              name="Message"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="p-3 box-border active:text-blue-500 active:bg-white bg-blue-500 text-[.9rem] md:text-lg tracking-wider leading-0 cursor-pointer text-white flex items-center justify-between gap-3 rounded-md w-max"
          >
            <BsFillSendFill /> Send Message
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </>
  )
}

export default Contact