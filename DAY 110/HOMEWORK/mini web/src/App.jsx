import React from 'react'
import mypic from './assets/c5514a21-54c3-436b-b473-56414bc32e11.jpg'

export default function App() {
  return (
    <div className='container w-screen h-screen bg-violet-950 py-8'>
      <h1 className='text-[28px] text-white flex justify-center'>Aleqsandre Chankvetadze</h1>

      <main className='px-10 flex justify-evenly flex-col gap-[30px]'>
        <p className='text-white trans capitalize text-[40px]'>description</p>
        <p className='capitalize text-white text-[24px]'>i am aleqsandre chankvetadze.i am learning programming in GOA.i know proggraming language such as:(python,html,css,java script and now i am in learning process of react and node)</p>

        <p className='capitalize text-white text-[25px]'>i have been studing programming 1.5 years.my second profession is playing football</p>

        <img src={mypic}width={600} ></img>
      </main>
    </div>
  )
}
