import React, { useCallback, useState } from "react";
import { MdOutlineBattery6Bar } from "react-icons/md";
import { MdOutlineBattery3Bar } from "react-icons/md";


export default function Headers() {
  const navList = [
    {
      name: "Home",
    },
    {
      name: "about",
    },
    {
      name: "contacts",
    },
    {
      name: "FAQS",
    },
  ];
  const [click, setClick] = useState(!true);

  const clickLogo = () => {
    setClick(!click);
  };

  return (
    <div className="bg-slate-400 sm:py-4">
      <nav className="flex justify-between container sm:items-center">
        <h2 className="py-2 sm:text-2xl">Goa</h2>
        <div onClick={() => handleClick()} className="text-2xl sm:hidden cursor-pointer relative flex items-center">
        <MdOutlineBattery6Bar className={`absolute transition-all ${click ? "opacity-0" : "opacity-1"}`}/>
        <MdOutlineBattery3Bar className={`ab transition-all ${!click ? "opacity-0  " : "opacity-1"}`}/>
        </div>

        <div className={`sm:hidden transition-all absolute right-0 w-screen h-screen ${click ? "opacity-0" : "opacity-1"}`}>
                    <ul className="absolute z-[4] flex flex-col right-0 top-0 h-screen bg-slate-300 px-2 pt-9 sm:hidden gap-2">
                        {navList.map(item => (
                            <li key={item} className=""><a href="#">{item.name}</a></li>
                        ))}
                    </ul>
                    <div onClick={() => handleClick()} className={`${click && "hidden"} w-screen h-screen absolute top-0 right-0 bg-slate-800 opacity-40`} />
                </div>
        <div className={`sm:hidden transition-all absolute right-0 w-screen h-screen ${click ? "opacity-0" : "opacity-1"}`}></div>
      </nav>
      <ul className="sm:flex sm:text-2xl hidden gap-2">
        {navList.map((item) => (
          <li key={item.name}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
