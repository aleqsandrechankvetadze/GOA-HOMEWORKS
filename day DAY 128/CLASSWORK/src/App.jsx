import React from 'react'
import Navbar from './components/Navbar'
import {Link, Route,Routes} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import BooksModule from './page/BooksModule'


export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/BooksModule" element={<BooksModule />} />
        <Route path="/BookNewPage" element={<BookNewPage/>}/>
      </Routes>
    </div>
  )
}
