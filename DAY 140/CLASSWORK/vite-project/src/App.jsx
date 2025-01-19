import React from "react";

export default function App() {
  return (
    <div className="p-4 mb-2">
      <button className="px-8 py-2 rounded-md text-white bg-violet-500 hover:Bg-voilet-600 active:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400">
        hover
      </button>

      <br />
      <br />

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-200 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        active
      </button>

      <br />
      <br />

      <form action="">
        <label htmlFor="e1">email</label>
        <input type="email" name="email" id="e1" className="border-2 border-emerald-500 p-4 ml-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald400 text-emerald-400 invalid:border-red-500 invalid:text-red-400 invalid:focus:ring-red-400" />
      </form>
    </div>
  );
}
