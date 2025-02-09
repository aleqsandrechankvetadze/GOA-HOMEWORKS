import React, { useEffect, useState } from "react";
// import forsaj from "./pictures/forsaj.png";
// import matrix from "./pictures/matrix.png";
// import karate from "./pictures/karate.png";

export default function App() {
  const [data, setData] = useState({});
  const http = "http://localhost:3000/api/user";
  useEffect(() => {
    fetch(http)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-screen bg-cyan-950 text-white flex items-center justify-evenly">
      <div className="w-[300px] h-[500px] bg-cyan-900 rounded-lg flex flex-col items-center justify-evenly">
        <h1 className="text-3xl font-bold">{data.video1}</h1>
        <img src={forsaj} className="w[150px] h-[350px] rounded-md overflow-hidden"/>
        <h1 className="text-3xl font-bold">Watch Here</h1>
      </div>
      <div className="w-[300px] h-[500px] bg-cyan-900 rounded-lg flex flex-col items-center justify-evenly">
        <h1 className="text-3xl font-bold">{data.video2}</h1>
        <img src={matrix} className="w[150px] h-[350px] rounded-md overflow-hidden"/>
        <h1 className="text-3xl font-bold">Watch Here</h1>
      </div>
      <div className="w-[300px] h-[500px] bg-cyan-900 rounded-lg flex flex-col items-center justify-evenly">
        <h1 className="text-3xl font-bold">{data.video3}</h1>
        <img src={karate} className="w[150px] h-[350px] rounded-md overflow-hidden"/>
        <h1 className="text-3xl font-bold">Watch Here</h1>
      </div>
    </div>
  );
}
