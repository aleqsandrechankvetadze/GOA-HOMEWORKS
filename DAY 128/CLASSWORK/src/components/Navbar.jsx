import React from 'react'
import {link} from 'react-router-dom'

export default function Navbar() {

    const navList = [
        {
            Path:'/',
            name:"Home"
        },
        {
            path:"/about",
            name:"About"
        },
        {
            path:"/BooksModule",
            name:"Book Module"
        },
        {
            path:"/BooksNewPage",
            name:"Books new page"
        },
    ]

  return (
    <div>
      <ul>
        {navList.map((item,index)=>(
            <li key={`_navlinks_${index}`}>
                <Link to={item.path}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}
