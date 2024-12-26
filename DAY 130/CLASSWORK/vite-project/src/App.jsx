import React from "react";

export default function App() {
  return (
    <>
      <div style={{ style: "flex", alignItems: "center", gap: "2rem" }}>
        <h1>navbari</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>login</Link>
        <Link to={"/pages"}>pages</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pages" element={<PagesLayout />}>
          <Route path=":pageId" element={<Pages />} />
        </Route>
      </Routes>
    </>
  );
}
