import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import navbar from "./components/Navbar";
import Langingpage from "./pages/Langingpage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <navbar />
      <Routes>
        <Route path="./Login" Component={Login} />
        <Route path="/" Component={Langingpage} />
        <Route path="./Profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}
