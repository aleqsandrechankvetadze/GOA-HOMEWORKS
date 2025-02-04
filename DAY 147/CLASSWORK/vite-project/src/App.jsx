import React, { useState } from 'react'
import {Moon, Sun, MoonStar, SunMoon} from "lucide-react"
export default function App() {
  const [isDark, setIsDark] = useState(true)
  const handleDarkMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
    if (isDark){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }
  return (
    <div className='h-screen bg-blue-500 dark:bg-black dark:text-white text-2xl flex flx-col justify-between'>
      <p>lomi</p>
      <div onClick={() => handleDarkMode()} className='cursor-pointer relative'>
        <Moon size={30} color='white' className='top-0 right-0 absolute hidden dark:block' />
        <Sun size={30} className='dark:hidden' />
      </div>
    </div>
  )
}