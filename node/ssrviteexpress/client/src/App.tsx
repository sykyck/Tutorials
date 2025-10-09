import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}
