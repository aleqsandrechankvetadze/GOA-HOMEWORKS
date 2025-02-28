import React, { useEffect, useState } from 'react'
import img from "./assets/img.png"

export default function App() {
  const [data, setData] = useState([]);  

  useEffect(() => {
    const infoGet = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/users");
        const jsonData = await res.json();
        setData(jsonData); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    infoGet();
  },[])

  return (
    <div className='h-screen w-screen flex items-center justify-evenly bg-blue-600'>
      <div className='p-30 bg-blue-400 rounded-2xl flex flex-col items-center justify-evenly'>
        <h1>tourist data</h1>
        {data.length > 0 ? (
          data.map((user, index) => (
            <p key={index}>{user.name}</p> 
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className='p-30 bg-blue-400 rounded-2xl flex flex-col items-center justify-evenly'>
        {data[2] && <p>{data[3].name}</p>}
        {/* clasterrs/connect ameria moaqvs magram kargad vera*/}
        <img src={img} className='w-40 h-40 rounded-full'/>
      </div>
    </div>
  )
}
