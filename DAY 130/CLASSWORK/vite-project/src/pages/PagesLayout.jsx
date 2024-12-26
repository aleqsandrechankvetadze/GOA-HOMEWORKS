import React from "react";
import { link, Outlet } from "react-router-dom";

export default function pages() {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link to={"/pages/page1"}>page1</Link>
        <Link to={"/pages/page2"}>page2</Link>
        <Link to={"/pages/page3"}>page3</Link>
      </div>
      <Outlet />
    </>
  );
}
