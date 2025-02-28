import React, { useEffect } from 'react'
import mouse from './images/mouse.webp'
import keyboard from './images/keyboard.webp'
import mic from './images/mic.webp'
import gsap from 'gsap'

const accessories = {
  mouse1: "mouse",
  keyboard1: "keyboard",
  mic1: "mic"
}

const buttonClass = 'p-3 border-2 rounded-2xl border-black cursor-pointer hover:bg-pink-400 hover:text-white transition-all hover:scale-105'

export default function App() {

  const handleClick = () => {
    gsap.to('.animate-div', {
      duration: 5,
      width: "40vh",
      x: "20vw",
      y: "-21vh",
      scale: 1.1,
      ease: "elastic.inOut(1, 0.3)",
      rotation: 360,
      transformOrigin: '50% 50%',
      stagger: {
        amount: 0.2
      }
    })
  }

  return (
    <div className='h-screen w-screen bg-pink-400 flex items-center justify-evenly'>
      <div className='animate-div p-10 bg-pink-300 rounded-2xl flex flex-col items-center justify-evenly'>
        <p>{accessories.mouse1}</p>
        <img src={mouse} width={300} />
        <button className={buttonClass} onClick={handleClick}>buy now</button>
      </div>
      <div className='animate-div p-12 bg-pink-300 rounded-2xl flex flex-col items-center justify-evenly'>
        <p>{accessories.mic1}</p>
        <img src={mic} width={300} />
        <button className={buttonClass} onClick={handleClick}>buy now</button>
      </div>
      <div className='animate-div p-10 bg-pink-300 rounded-2xl flex flex-col items-center justify-evenly'>
        <p>{accessories.keyboard1}</p>
        <img src={keyboard} width={300} />
        <button className={buttonClass} onClick={handleClick}>buy now</button>
      </div>
    </div>
  )
}
