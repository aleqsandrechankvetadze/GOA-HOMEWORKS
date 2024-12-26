import React from 'react'
import download from '../assets/download.jpeg'


export default function Home() {
  return (
    <div>
      <main className='py-[80px] '>
        <h1 className='text-center font-sans text-2xl'>შუა ქალაქში</h1>
        <br />
        <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, at, voluptas unde asperiores praesentium voluptates a minus esse, quia laboriosam illo porro accusantium minima ipsum eius architecto quod sunt vitae.</p>
        <br />
        <br />
        <p className='text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam, fugit eligendi sapiente dolorum ratione quisquam obcaecati cupiditate beatae optio soluta nesciunt assumenda deleniti incidunt laboriosam iste voluptatem perferendis eius?
        </p>
        <br />
        <div className='flex justify-center items-center'>
        <img src={download} width={650} />
        </div>
        <br />
        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium possimus eaque suscipit numquam facere eligendi quis animi voluptate est, hic provident officia. Modi, vitae numquam. Temporibus voluptatibus porro veniam.</p>
      </main>
    </div>
  )
}
