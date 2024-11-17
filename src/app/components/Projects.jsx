"use client"
import React, { useState } from 'react'
import TSproject from './TSproject'
import WebClones from './WebClones'
import MiniProjects from "./MiniProjects"
function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const miniProjects = [
    {
      id: 1,
      title: "Static Resume",
      description: "A hackathon project that showcases a professional resume in a sleek, static format. Designed with HTML and styled using Tailwind CSS, this project demonstrates the ability to create a well-organized and visually appealing online resume for personal branding and career purposes.",
      githubRepo: "https://github.com/RehanKhaz/Resume.git",
      liveSiteUrl: "https://staticresume-phi.vercel.app/"
    },
    {
      id: 2,
      title: "Resume Creator",
      description: "A dynamic resume-building application developed during a hackathon. Users can easily input details and generate a customized resume in real-time. This project is crafted using HTML, Tailwind CSS for styling, and JavaScript to handle form inputs and PDF generation, making it both interactive and functional.",
      githubRepo: "https://github.com/RehanKhaz/Resume-Creator..git",
      liveSiteUrl: "https://resume-creator-drab.vercel.app/"
    },
    {
      id: 3,
      title: "Weather App",
      description: "A simple yet effective weather application that allows users to search for and view real-time weather data for their chosen locations. Built with HTML, Core CSS, and JavaScript, this app fetches data from an external API and displays it in an easy-to-read format, making it an essential tool for weather updates.",
      githubRepo: "https://github.com/RehanKhaz/Weather-App-Using-HTML---CSS-and-JS.git",
      liveSiteUrl: "https://weather-app-using-html-css-and-js.vercel.app/"
    },
    {
      id: 4,
      title: "Currency Converter",
      description: "An intuitive currency converter that allows users to input amounts and instantly see the conversion to a different currency. This project uses HTML, Core CSS, and JavaScript to provide a seamless and interactive user experience, utilizing real-time exchange rates to ensure accuracy.",
      githubRepo: "https://github.com/RehanKhaz/CurrencyConvertor-web-app.git",
      liveSiteUrl: "https://currency-convertor-web-app-three.vercel.app/"
    },
    
    {
      id: 5,
      title: "To-Do App",
      description: "A fully interactive to-do list app that enables users to add, remove, and mark tasks as completed. This project, developed with HTML, Core CSS, and JavaScript, provides a smooth user experience for managing tasks, promoting productivity with its easy-to-use design.",
      githubRepo: "https://github.com/RehanKhaz/To-do-App-webDev.git",
      liveSiteUrl: "https://to-do-app-web-dev.vercel.app/"
    },
    {
      id: 6,
      title: "Rock Paper Scissors",
      description: "An engaging rock-paper-scissors game where players can challenge the computer and try their luck against a random choice generator. Created with HTML, Core CSS, and JavaScript, this project provides a fun, nostalgic experience with smooth animations and a responsive design.",
      githubRepo: "https://github.com/RehanKhaz/Rock-Paper-Scissor--Web-Page--Game.git",
      liveSiteUrl: "https://rock-paper-scissor-web-page-game.vercel.app/"
    }
  ];
  
  const webClones = [{
    name: "Governor Initiative",
    image: 'GIAIC',
    description: "A responsive HTML and Tailwind CSS clone of a Governor's website, replicating layout and functionality for all devices.",
    liveSiteURL: "https://governor-initiative.vercel.app/",
    GithubRepo: "https://github.com/RehanKhaz/Governor-Initiative.git"

  }, {
    name: "Netflix",
    image: "Netflix",
    description: "A responsive Netflix clone built with HTML and Tailwind CSS, designed to mimic the popular streaming platform's layout and style. This project includes dynamic elements and a user-friendly interface, optimized for various screen sizes",
    liveSiteURL: "https://netflix-psi-jet.vercel.app/",
    GithubRepo: "https://github.com/RehanKhaz/Netflix.git"
  }]
  const tsProjects = [
    {
      id: 1,
      name: 'Simple Calculator',
      description: 'A basic calculator application built with TypeScript, allowing users to perform arithmetic operations such as addition, subtraction, multiplication, and division. This project demonstrates the use of TypeScript for managing inputs, state, and error handling within a simple UI.',
      npxCommand: 'npx @rehankhan/cmd-calculator'
    },
    {
      id: 2,
      name: 'Number Guessing Game',
      description: 'A fun number guessing game where users try to guess a randomly generated number within a specific range. This project highlights TypeScript’s ability to handle user input validation, game logic, and display hints or results, all while ensuring type safety.',
      npxCommand: 'npx @rehankhan/number-guessing-game'
    },
    {
      id: 3,
      name: 'To-Do List',
      description: 'A to-do list app that allows users to add, edit, and delete tasks while keeping track of completed items. TypeScript is used to manage task properties and application state, making the code more reliable and scalable for potential new features.',
      npxCommand: 'npx @rehankhan/todo-list'
    },
    {
      id: 4,
      name: 'ATM Machine Simulator',
      description: 'An ATM machine simulation app that allows users to check balance, deposit, and withdraw funds. This project showcases TypeScript’s role in handling complex transaction logic, input validation, and user authentication within a simulated financial environment.',
      npxCommand: 'npx @rehankhan/atm-machine'
    },
    {
      id: 5,
      name: 'Currency Converter',
      description: 'A currency converter application that allows users to convert between different currencies based on real-time exchange rates. TypeScript is utilized to handle API requests, manage currency data, and ensure type safety for accurate conversions.',
      npxCommand: 'npx @rehankhan/currency-convertor'
    },
    {
      id: 6,
      name: 'Words Counter',
      description: 'An application that counts words and characters from user input. It helps users quickly analyze text length and structure, with TypeScript ensuring data validation and the smooth handling of input types and large strings.',
      npxCommand: 'npx @rehankhan/words-counter'
    },
    {
      id: 7,
      name: 'Vowel Counter',
      description: 'A simple tool that counts the number of vowels in a given text input. This project utilizes TypeScript to ensure input validation and accuracy in string processing, showcasing how TypeScript can handle string operations effectively.',
      npxCommand: 'npx @rehankhan/vowel-counter'
    }
  ];

  return (
    <>
      <div id='Projects' className='mt-[4rem]'>
        <h1 className='text-[1.7em] md:text-[2.1em] lg:text-[2.5em]  font-[600] leading-0 tracking-wider'>What I have made?</h1>
        <nav className='w-full flex items-center gap-4 md:gap-6 lg:gap-10 justify-center'>
          {["All", "TypeScript", "Website Clone", "Mini Projects"].map((item) => (
            <button onClick={() => setSelectedCategory(`${item}`)} className={`tracking-widest ${selectedCategory === item && "border-b-[2px]"} leading-0 text-[.82em] md:text-[1.1em] lg:text-[1.3em] border-black w-max font-semibold py-2`}>{item}</button>
          ))}
        </nav>
        <div id='Projects' className='overflow-x-scroll h-[22em] px-4  Hiding-ScrollBar w-full lg:mt-4'>
          <div className='flex w-full gap-[2rem] h-[22em]'>
            {(selectedCategory === "TypeScript" || selectedCategory === "All" )  &&
              tsProjects.map((project, index) => (
                <TSproject projectData={project} index={index} />
              ))
            }
            {(selectedCategory === "Website Clone" || selectedCategory === "All" ) &&
          webClones.map((project,index)=> (
            <WebClones index={index} webData={project}/>
          ))
            }
            {(selectedCategory === "Mini Projects" || selectedCategory === "All" ) &&
          miniProjects.map((project,index)=> (
            <MiniProjects index={index} webData={project}/>
          ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects