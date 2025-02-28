import React from 'react';
import lunini from './images/lunini.jpg';
import gsap from 'gsap';

export default function App() {

  const handleClick = () => {
    const tl = gsap.timeline();

    // Move up by 50vh, then move to the right by 50vw
    tl.to(".lunini-rent", {
      duration: 3,
      y: "-21vh"
    }).to(".lunini-rent", {
      duration: 3,
      x: "35vw"
    }).to
  };

  return (
    <div className='bg-blue-950 h-screen w-screen flex items-center justify-center'>
      <div className='lunini-rent bg-blue-900 text-white text-2xl w-[550px] h-[550px] flex flex-col items-center justify-evenly'>
        <h1>Welcome to Lunini Transport</h1>
        <img src={lunini} width={450} height={350} alt="Lunini Transport" />
        <button onClick={handleClick}>Do you want this service?</button>
      </div>
    </div>
  );
}
