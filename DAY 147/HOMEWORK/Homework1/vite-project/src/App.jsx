import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import Csl from "./pictures/maxresdefault.jpg"
import Bmw from "./pictures/bmw1.jpg"
import Rs from "./pictures/audirs.jpg"
import We from "./pictures/w211.jpg"

export default function App() {
  const cars = [
    {name: "BMW M3 E46 CSL", image:Csl, price: 50000},
    {name: "BMW 815i", image: Bmw, price: 35000 },
    {name: "AUDI RS6", image: Rs, price: 70000 },
    {name: "W211 E55", image: We, price: 30000 },
  ]

  const handleClick = (carName) => {
    if(carName === "W211 E55"){
      alert(`congratulations you bought ${carName} my dream car`)
    }else{
      alert(`congratulations you bought ${carName}`)
    }
  }

  const [dark,setDark] = useState(true)
  const handleDarkMode = () => {
    setDark(!dark)
    console.log(dark)
    if(dark){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }
  return (
    <div className="min-h-screen">
  <nav
    onClick={() => handleDarkMode()}
    className="flex gap-5 text-2xl items-center justify-evenly bg-blue-400 dark:bg-gray-800 dark:text-white w-full h-[50px]">
    <Moon size={30} className="cursor-pointer hidden dark:block" />
    <Sun size={30} className="cursor-pointer dark:hidden" />
  </nav>
  <main className="w-full min-h-[calc(100vh-50px)] flex items-center justify-evenly dark:bg-black">
  {cars.map((car, index) => (
        <div
          key={index}
          onClick={() => handleClick(car.name)}
          className="cursor-pointer w-[300px] h-[300px] bg-cyan-700 dark:bg-gray-800 rounded-xl overflow-hidden flex flex-col items-center justify-evenly">
          <p className="text-white text-2xl">{car.name}</p>
          <img src={car.image} className="w-[200px] h-[200px] rounded-md" />
          <p className="text-white text-2xl">Price: {car.price}$</p>
        </div>
      ))}
  </main>
</div>
  )
}

// doneee!!!