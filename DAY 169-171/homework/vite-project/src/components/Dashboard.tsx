import React from 'react'

export default function Header() {
    const navbar = [
        {li: "Dashboard"},
        {li: "Profile"},
        {li: "Sign up"},
        {li: "Sign in"},
    ]
    return (
        <div className='w-[80%] h-20 flex items-center justify-around text-white absolute pt-5'>
            <h1>Argon | Chakra</h1>
            <ul className='flex gap-8'>
            {
                navbar.map((item , index) =>(
                    <li className='list-none' key={index}>{item.li}</li>
                ))
            }
            </ul>
            <button className='bg-white w-40 h-12 rounded-xl text-black'>Free Download</button>
        </div>
    )
}