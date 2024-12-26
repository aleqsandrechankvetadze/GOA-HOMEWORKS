import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const navList = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/signup", name: "Sign up/log in" },
  ];
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="bg-orange-600 text-white sm:py-4">
      <nav className="flex justify-between container sm:items-center">
        <h2 className="py-2 sm:text-2xl">GOA</h2>

        {/* Hamburger Icon for Mobile */}
        <div
          onClick={handleClick}
          className="text-2xl sm:hidden z-[9] cursor-pointer font-bold relative flex items-center"
        >
          <AiOutlineMenuUnfold
            className={`absolute transition-all ${
              click ? "opacity-0" : "opacity-1"
            }`}
          />
          <AiOutlineMenuFold
            className={`absolute transition-all ${
              !click ? "opacity-0" : "opacity-1"
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all absolute right-0 w-screen h-screen ${
            click ? "hidden" : "block"
          }`}
        >
          <ul className="absolute z-[4] flex flex-col right-0 top-0 h-screen bg-orange-600 px-2 pt-9 gap-5">
            {navList.map((item, index) => (
              <li key={`_navlinks_mobile_${index}`}>
                <Link to={item.path} onClick={handleClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={handleClick}
            className="w-screen h-screen absolute top-0 right-0 bg-slate-800 opacity-40"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="sm:flex sm:text-2xl hidden gap-5">
          {navList.map((item, index) => (
            <li key={`_navlinks_desktop_${index}`}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
