import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const CITYNAME = "Tbilisi";
  const APIKEY = "c86e85ac7eb85aec7ed2f58c530cde1f";
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${CITYNAME}&appid=${APIKEY}`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <div className="bg-amber-400">
      <p>{data.name}</p>
      <p>{data?.["main"]?.temp}</p>
    </div>
  );
}
