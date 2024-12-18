import React from 'react'

const app = () => {
  return (
    /* 
    თუ რამის კუსტიმიერება არ მჭირდება დავწერ -[]
    w- width
    h- 
    m---- margin
    ml-[100px] mb
    mr-[100px] mt

    mx---left right
    my----top bottom
    👇👇👇👇👇👇👇
   👉 p---- padding👈
    👆👆👆👆👆👆👆

    bg-colorname-300 ---- 
    bg-[cstum color]
    bg-slate-500/50 ---- / 0---100 ტრანსფერენტაცია\\  [.5]

    w-screen 
    h-screen
    w-full
    w-full

    flex---- dispaly flex
    👇👇👇👇👇👇👇👇👇
  👉[[start end center]]👈
  👇  👇👇👇👇👇👇👇👇👇    
  👇 justify -----justify content
  👇 item---align items 
  👇  
  👉  text-center ------ ტექსტის მდებარეობა 
  👉  text-green-500 ---- ტექსტის ფერს
    sm tele
    md dedium
    lg large
    xl large xl
    2xl 2 large xl
    4xl 4 large xl
    


    */
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[200px] h-[200px] bg-red-600'></div>
    </div>
  )
}

export default Tailwind