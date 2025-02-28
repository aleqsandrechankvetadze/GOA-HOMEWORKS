import React, { useEffect, useState } from 'react'
import relm from './images/relm.jpeg'
import shopping from './images/shopping.webp'
import sms from './images/smsng.webp'

export default function App() {
  const [data, setData] = useState([]);  // State to store fetched data

  useEffect(() => {
    const infoGet = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/users");
        const jsonData = await res.json();
        setData(jsonData);  // Save data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    infoGet();
  },[])

  return (
    <div className='h-screen w-screen flex items-center justify-evenly bg-blue-600'>
      <div className='p-30 bg-blue-400 rounded-2xl flex flex-col items-center justify-evenly'>
        <h1>User Data</h1>
        {data.length > 0 ? (
          data.map((user, index) => (
            <p key={index}>{user.name}</p> 
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className='p-30 bg-blue-400 rounded-2xl flex flex-col items-center justify-evenly'>
        {data[0] && <p>{data[0].name}</p>}
        <img src={relm} alt="Relm" className='w-40 h-40 rounded-full'/>
      </div>

      <div className='p-30 bg-blue-400 rounded-2xl flex flex-col items-center justify-evenly'>
        {data[1] && <p>{data[1].name}</p>}
        <img src={shopping} alt="Shopping" className='w-40 h-40 rounded-full'/>
      </div>
    </div>
  )
}
