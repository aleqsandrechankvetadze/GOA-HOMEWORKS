import React, { useEffect } from 'react'
import gsap from 'gsap'

export default function App() {
  // useEffect(() => {
  //   gsap.to(".text-animation",{
  //     // duration:1.5,
  //     // x:"50vw",
  //     // xPercent:-50,
  //     // y:"50vh",
  //     // yPercent:-50,
  //     // rotate:360,
  //     // yoyo:true,
  //     // repeat:-1,
  //     // // display:"flex",
  //     // // justifyContent:"center",
  //     // // alignItems:"center",
  //     // backgroundColor:"red",
  //     // borderRadius:"50%",
  //     // stagger:0.5,
  //   })
  // },[])
  useEffect(() => {
    gsap.to(".text-hide",{
      duration:1.5,
      x:"50vw",
      xPercent:-50,
      y:"50vh",
      yPercent:-50,
      rotate:360,
      duration:2,
      opacity:1,
      yoyo:true,
      repeat:-1,
      color:"red"
    })
  },[])
  return (
    <div>
      {/* <div className=' bg-blue-500 h-screen'>
        <div className='text-animation size-50 bg-black rounded-2xl'></div>
        <div className='text-animation size-50 bg-black rounded-2xl'></div>
        <div className='text-animation size-50 bg-black rounded-2xl'></div>
        <div className='text-animation size-50 bg-black rounded-2xl'></div>
      </div>  */}
      <div className='text-hide bg-blue-60 opacity-0 size-50'>
        ეხლა გავაკეთებ ფოკუზს.ტექსტი გაჩნდება და გაქრება:დდ
      </div>
    </div>
  )
}
