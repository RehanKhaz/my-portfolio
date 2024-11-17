import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'
function MiniProjects({webData}) {
    return (
        <>
            <div className='project-model justify-between xl:w-[23vw] lg:w-[27vw]  xm:w-[19em] w-full'>
                <h1 className='text-[1.35em] xm:text-[1.4em] text-center font-medium tracking-wider leading-0'>{webData.title}</h1>
                <p className='text-[.91em] xm:text-[.95em] font-medium tracking-wide leading-0'>{webData.description}</p>
                <div className='flex items-center justify-between w-full gap-3'>
                    <a className='px-3 py-1 mb-[2px] rounded-md text-[.95em] xm:text-[.9em] bg-blue-400 text-white w-max cursor-pointer flex items-center gap-2 ' target='main' href={webData.githubRepo}><FaGithub className='md:size-7 size-4 ' /> <span>Github</span></a>
                    <a className='px-3 py-1 mb-[2px] text-[.95em] xm:text-[1em] rounded-md bg-blue-400 text-white w-max cursor-pointer flex items-center gap-2 ' target='main' href={webData.liveSiteUrl}><FaGlobe className='xm:size-7 size-4 ' /> <span>Live Site</span></a>
                </div>
            </div>
        </>
    )
}

export default MiniProjects