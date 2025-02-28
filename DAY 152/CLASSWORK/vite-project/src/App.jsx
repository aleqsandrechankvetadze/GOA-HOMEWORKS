import React, { useEffect, useState } from 'react'

const originalUser = {
  name:"alex",
  age: 17,
  email: "davit@gmail.com",
  phone: "0987654321"
}

export default function App() {

  const [user,setUser] = useState({})
  const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {

    
    
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("users")) || []
      if(user.length === 0){
      setIsLoading(true)
    }else{
      setUser(user)
      setIsLoading(false)
    }
    }, 2000);
    setUser(user)
  },[user,setUser])

  function handleUser(){
    

    localStorage.setItem("users",JSON.stringify([originalUser]))

    
  }

  
  return (
    <div className='h-screen w-screen flex justify-center items-center flex-col '>
      <div className='bg-purple-900 h-80 w-80 rounded-2xl flex flex-col items-center justify-evenly'>
      <h1 className='font-bold text-2xl text-purple-200'>card</h1>
      <button onClick={() => handleUser()} className='p-4 cursor-pointer text-2xl border-1 bg-purple-500 rounded-2xl border-black text-pink-200 hover:bg-purple-400/[0.8] hover:text-white transition-all'>add user</button>
      </div>
      <div className='bg-purple-900 h-80 w-80 rounded-2xl flex flex-col items-center justify-evenly'>
        {!isLoading ? ( 
          <div>
            <h1 className='font-bold text-2xl text-purple-200'>card</h1>
        <h2 className='text-purple-200'>name: {user.name}</h2>
        <h2 className='text-purple-200'>age: {user.age}</h2>
        <h2 className='text-purple-200'>email: {user.email}</h2>
        <h2 className='text-purple-200'>phone: {user.phone}</h2>
          </div>
        ) : <div className='size-30 border-5 border-t-blue-500 rounded-full animate-spin'/>}
        
      </div>

    </div>
  )
}
