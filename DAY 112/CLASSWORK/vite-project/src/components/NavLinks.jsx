import React from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

export default function NavLinks() {
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
      li: "FAQS",
    },
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="bg-black">
      <div className="container flex justify-between text-white">
        <a href="#" className="md:text-2xl text-xl">
          ixvis tolma
        </a>
        <nav>
          <div className="sm:hidden flex text-2xl cursor-pointer">
            <FaBars
              onClick={() => handleClick()}
              className={`${click && "hidden"}`}
            />
            <FaBarsStaggered
              onClick={() => handleClick()}
              className={`${!click && "hidden"}`}
            />
          </div>
          <ul className="sm:flex hidden gap-2 sm:text-2xl text-xl">
            {navLink.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#">{item.li}</a>
                </li>
              );
            })}
          </ul>

          <div className="relative">
            <ul
              className={`z-[99] transition-all ${
                click ? "translate-x-0" : "translate-x-[500px]"
              }sm:hidden flex gap-2 lg:text-2xl text-xl absolute top-0 right-0 text-black flex-col bg-slate-200 p-2`}
            >
              {navLink.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#">{item.li}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
