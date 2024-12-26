import React from 'react'
import download from '../assets/download.jpeg'
import asds from '../assets/asds.jpeg'

export default function About() {
  return (
    <div>
      <main className='px-[20px] py-[20px]'>
        <p className='text-xl'>შუა ქალაქი არის ქართული იუმორისტული სერიალი,რომელიც თითქმის ყველა ქართველი ადამიანის ფავორიტი სერიალია.</p>
        <br />
        <h2 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur eos nihil repellendus excepturi reprehenderit, nostrum modi adipisci enim quo ab dolores, doloribus assumenda molestiae illum, possimus necessitatibus repellat impedit?</h2>
        <br />
        <div className='flex justify-evenly items-center'>
        <img src={download} width={350} />
        <img src={asds} width={350}/>
        </div>
      </main>
    </div>
  )
}
