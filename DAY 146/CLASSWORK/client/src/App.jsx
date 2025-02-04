import React, { useEffect, useState } from 'react'

export default function App() {

  const [data,setData] = useState([])
  const http = "http://localhost:7050/api/user"
  useEffect(()=>{
    fetch(http)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])
  return (
    <div>
      {data.name}
    </div>
  )
}
