import React, { useState } from "react";

export default function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [theme, setTheme] = useState("")

  function incrementReal() {
    setScore1(score1 + 1);
  }

  function incrementBarca() {
    setScore2(score2 + 1);
  }

  function discrementReal() {
    setScore1(score1 - 1);
  }

  function discrementBarca() {
    setScore2(score2 - 1);
  }

  function resetScoreBoth() {
    setScore1(0);
    setScore2(0);
  }

  
  const handleTheme = (color) => {
    setTheme(theme === color ? "" : color);
  };

  return (
    <div className={`w-screen h-screen ${theme === "blue" ? "bg-blue-500" : ""} ${theme === "red" ? "bg-red-500" : ""} ${theme === "green" ? "bg-green-500" : ""} ${!theme ? "bg-white" : ""}`}>
      <div className="w-screen text-2xl h-[400px] flex items-center justify-evenly">
        <div className="flex flex-col items-center gap-8">
          <p>Real Madrid: {score1}</p>
          <button onClick={incrementReal} className="px-[50px] py-[15px] bg-blue-300 rounded-2xl">
            Goal For Real Madrid
          </button>
          <button onClick={discrementReal} className="px-[50px] py-[15px] bg-blue-300 rounded-2xl">
            Discrement Goal For Real Madrid
          </button>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p>Barcelona: {score2}</p>
          <button onClick={incrementBarca} className="px-[50px] py-[15px] bg-blue-300 rounded-2xl">
            Goal For Barcelona
          </button>
          <button onClick={discrementBarca} className="px-[50px] py-[15px] bg-blue-300 rounded-2xl">
            Discrement Goal For Barcelona
          </button>
        </div>
      </div>

      <button onClick={resetScoreBoth} className="px-[50px] py-[15px] bg-cyan-300 rounded-2xl">
        Reset Score
      </button>

      <main className="my-[50px]">
        <div onClick={() => handleTheme("blue")} className="w-[700px] h-[150px] flex items-center justify-evenly bg-blue-500 cursor-pointer">
          <p className="text-2xl">Click me to change theme to blue:</p>
          <div className="w-[100px] h-[100px] bg-blue-950 rounded-2xl"></div>
        </div>
        <div onClick={() => handleTheme("red")} className="w-[700px] h-[150px] flex items-center justify-evenly bg-red-400 cursor-pointer">
          <p className="text-2xl">Click me to change theme to red:</p>
          <div className="w-[100px] h-[100px] bg-red-500 rounded-2xl"></div>
        </div>
        <div onClick={() => handleTheme("green")} className="w-[700px] h-[150px] flex items-center justify-evenly bg-green-300 cursor-pointer">
          <p className="text-2xl">Click me to change theme to red:</p>
          <div className="w-[100px] h-[100px] bg-green-500 rounded-2xl"></div>
        </div>
      </main>
    </div>
  );
}
