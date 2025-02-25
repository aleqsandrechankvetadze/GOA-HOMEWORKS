import React, { useEffect } from 'react'
import gsap from 'gsap'
import ku1 from './images/ku1.jpeg'
import ku2 from './images/download.jpeg'

export default function App() {

  useEffect(() => {
    gsap.to(".ku1-animation",{
      duration:6.5,
      y:"50vh",
      x:"57vw",
      xPercent:-50,
      yPercent:-50,
      backgroundColor:"red",
    })
  } ,[])

  useEffect(()=>{
    gsap.to(".ku2-animation",{
      duration:2,
      x:"100vw",
      xPercent:-100,
      backgroundColor:"blue",
    })
  },[])

  useEffect(()=>{
    gsap.to(".ku2-animation",{
      duration:2,
      y:"30vh",
      yPercent:-30,
      backgroundColor:"blue",
    })
  },[])

  useEffect(()=>{
    gsap.to(".ku2-animation",{
      duration:2,
      x:"30vw",
      xPercent:-30,
      backgroundColor:"blue",
    })
  },[])

  return (
    <div className='bg-blue-500 block h-screen'>
      <img src={ku1} className='ku1-animation size-40 rounded-2xl'/>
      <img src={ku2} className='ku2-animation size-40 rounded-2xl'/>
    </div>
  )
}
