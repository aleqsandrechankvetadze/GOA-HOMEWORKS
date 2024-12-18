import React from 'react'
import cr from './assets/cr.jpeg'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-evenly items-center bg-slate-700'>
      <p className='text-[8px] text-white relative font-serif	top-[15px] capitalize'>Football is a family of team sports that involve,
      to varying degrees, kicking a ball to score a goal.<br></br> Unqualified,
      the word football generally means the form of football that is the most
      popular where the word is used.<br></br>Inside of this text there are all time the best footballers:</p>

      <main className='w-screen h-screen flex justify-evenly items-center'>
      <div className='w-[85px] h-[120px] bg-red-600 rounded-[10px] scale-25 cursor-pointer transition-ease-in-out hover:scale-[1.1] flex flex-col justify-evenly items-center'>
        <p className='text-[7px] text-white font-mono uppercase'>#1st place</p>
        <img src={cr} height={50} width={50}/>
        <p className='capitalize text-[8px] text-white font-thin'>cristiano ronaldo</p>
      </div>

      <div className='w-[85px] h-[120px] bg-green-600 rounded-[10px] scale-25 cursor-pointer transition-ease-in-out hover:scale-[1.1] flex flex-col justify-evenly items-center'>
        <p className='text-[7px] text-white font-mono uppercase'>#2nd place</p>
        {/* <img src=''></img> */}
        <p className='text-[8px] text-white font-thin capitalize'>lionel messi</p>
      </div>

      <div className='w-[85px] h-[120px] bg-blue-700 rounded-[10px] scale-25 cursor-pointer transition-ease-in-out hover:scale-[1.1] flex flex-col justify-evenly items-center'>
      <p className='text-[7px] text-white font-mono uppercase'>#3rd place</p>
        {/* <img src=''></img> */}
        <p className='text-[8px] text-white font-thin capitalize'>neymar junior</p>
      </div>

      <div className='w-[85px] h-[120px] bg-yellow-300 rounded-[10px] cursor-pointer transition-ease-in-out hover:scale-[1.1] flex flex-col justify-evenly items-center'>
      <p className='text-[7px] text-white font-mono uppercase'>#4th place</p>
        {/* <img src=''></img> */}
        <p className='text-[8px] text-white font-thin capitalize'>zinedin zidane</p>
      </div>

      <div className='w-[85px] h-[120px] bg-cyan-400 rounded-[10px] cursor-pointer transition-ease-in-out hover:scale-[1.1] flex flex-col justify-evenly items-center'>
      <p className='text-[7px] text-white font-mono uppercase'>#5th place</p>
        {/* <img src=''></img> */}
        <p className='text-[8px] text-white font-thin capitalize'>diego maradona</p>
        </div>
      </main>
    </div>
  )
}

export default App