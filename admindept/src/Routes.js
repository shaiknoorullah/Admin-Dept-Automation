import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";

export default function Navigate() {
  return (
    
  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/login">
      <Login/>
      </Route>
     <Route path="/signup" exact >
     <Signup/>
     </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}
