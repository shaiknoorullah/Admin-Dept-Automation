import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";

export default function Navigate() {
  return (
    
  <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </div>
  )
}
