import React from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

export default function Navlinks() {
  const navLink = [
    {
      li: "about",
    },
    {
      li: "contact",
    },
    {
      li: "services",
    },
    {
      li: "blog",
    },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="bg-black text-white">
      <div className="container flex justify-between">
        <a href="#" className="capitalize lg:text-2xl text-xl">
          training on navbar
        </a>
        <nav>
          <div className="sm:hidden flex text-2xl cursor-pointer">
            <FaBars
              onClick={() => handleClick()}
              className={`${!click && "hidden"}`}
            />
            <FaBarsStaggered
              onClick={() => handleClick()}
              className={`${click && "hidden"}`}
            />
          </div>
          {/* desktop */}
          <ul className="sm:flex hidden gap-2 lg:text-2xl text-xl">
            {navLink.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white/50">
                  {item.li}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile */}
          <div className="overflow-x-hidden relative">
          <ul className={`transition-all ${click ? "translate-x-0" : "translate-x-[500px]"} sm:hidden flex gap-2 lg:text-2xl text-xl absolute top-0 right-0 text-black flex-col bg-slate-400 p-2`}>
            {navLink.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-black/70">
                  {item.li}
                </a>
              </li>
            ))}
          </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
