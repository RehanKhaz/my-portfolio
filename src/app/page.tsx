import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from "./components/Projects"
import "./globals.css"
import Contact from './components/Contact'
import Skills from './components/Skills' 
import Footer from './components/Footer'

function Page() {
  return (
    <>
      <div className='min-h-[100vh] relative flex justify-between flex-col overflow-hidden bg-[#F8F9FA]  py-4 md:px-[5rem] px-6 w-screen'>
        <div className='flex items-center justify-center overflow-hidden w-full'>
          <Header />
        </div>
        <Home />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default Page
