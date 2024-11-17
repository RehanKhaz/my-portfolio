import React from 'react'
import { SiTypescript } from 'react-icons/si'
function TSproject({ projectData,index }) {
  return (
    <div className='project-model xl:w-[23vw] lg:w-[27vw]  xm:w-[19em] w-full'>
      <h1 className={`text-[1.25em] font-semibold ${index === 1 ? 'xm:text-[1.28em] ':'xm:text-[1.4em]'} text-center font-medium tracking-wider leading-0`}>{projectData.name}</h1>
      <p className='text-[.95em] xm:text-[1em] font-medium tracking-wide leading-0'>{projectData.description}</p>
      <strong className='text-[.95em] tracking-wider leading-0 xm:text-[1.05em]'>{projectData.npxCommand}</strong>    </div>
  )
}

export default TSproject