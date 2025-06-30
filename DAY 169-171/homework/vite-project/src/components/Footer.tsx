import React from 'react'

export default function Footer() {
    const footerArr = [
        {"li": "Creative Tim"},
        {"li": "Simmmple"},
        {"li": "Blog"},
        {"li": "License"},
    ]
    return (
        <div className='w-screen h-12 absolute bottom-0 flex items-center justify-around bg-white'>
            <p className='text-gray-400 *:text-blue-300'>@ 2021, Made with ❤️ by <a href='#'>Creative Tim</a> & <a href="#">Simmmple</a> for a better web</p>
            <ul className='flex gap-8 text-gray-400'>
            {
                footerArr.map((item , index) =>(
                    <li>{item.li}</li>
                ))
            }
            </ul>
        </div>
    )
}