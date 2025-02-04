import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import me1 from "./pictures/my1.jpg"
import me2 from "./pictures/my2.jpg"

export default function App() {

  const [dark,setDark] = useState(false)

  const handleDarkMode = () => {
    setDark(!dark)
  }
  if(dark){
    document.documentElement.classList.add("dark")
  }else{
    document.documentElement.classList.remove("dark")
  }

  return (
    <div className='min-h-screen bg-amber-100 dark:bg-gray-800'>
      <nav onClick={() => handleDarkMode()} className='flex gap-5 text-2xl items-center justify-evenly w-screen h-[70px] bg-blue-600 dark:bg-cyan-950 text-white'>
      <Moon size={40} className='cursor-pointer hidden dark:block'/>
      <Sun size={40} className='cursor-pointer dark:hidden'/>
      </nav>

      <main className="w-full min-h-[calc(100vh-70px)] flex items-center justify-center">
        <div className='w-[700px] h-[800px] bg-blue-50 rounded-xl dark:bg-gray-600 flex flex-col items-center justify-evenly'>
          <p className='text-[33.5px] text-fuchsia-700 font-bold dark:text-white'>Aleqsandre Chankvetadze</p>
          <div className='flex items-center justify-evenly w-full'>
            <img src={me2} className='w-[300px] h-[250px] rounded-xl'/>
            <img src={me1} className='w-[300px] h-[250px] rounded-xl'/>
          </div>
          <p className='text-xl dark:text-white'>Hello,i am Aleqsanre Chankvetadze,programmist,16 years old.i know python,html,css,js,express,nodejs,react,tailwind.i want to be full-stack developer</p>
          <p className='text-2xl dark:text-white'>this is mini portfolio with dark mode</p>
        </div>
      </main>
    </div>
  )
}
