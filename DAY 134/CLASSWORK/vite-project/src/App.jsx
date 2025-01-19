import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
        <h1>navbar</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/pages"}>pages</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages" element={<Pages />}>
          <Route path="page1" element={<Pageone />} />
        </Route>
      </Routes>
    </>
  );
}
