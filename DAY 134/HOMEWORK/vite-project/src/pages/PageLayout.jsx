import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";


export default function PageLayout() {
  return (
    <>
      <div style={{display:"flex",alignItems:"center",gap:"1rem",}}>
        <Link to={"/pages/0"}>page1</Link>
        <Link to={"/pages/1"}>page2</Link>
        <Link to={"/pages/2"}>page3</Link>
      </div>
      <Outlet />
    </>
  )
}
