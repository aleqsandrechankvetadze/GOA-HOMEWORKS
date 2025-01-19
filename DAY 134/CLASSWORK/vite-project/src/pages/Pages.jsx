import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function pages() {
  return (
    <>
     <div>
        <Link to={"/pages/page"}>page1</Link> 
        <Link to={"/pages/page"}>page1</Link> 
        <Link to={"/pages/page"}>page1</Link> 
     </div> 
     <Outlet></Outlet>
    </>
  )
}
