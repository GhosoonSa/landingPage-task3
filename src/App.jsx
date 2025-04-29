import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import UseCases from "./pages/UseCases";
import Products from "./pages/Products";
import Developers from "./pages/Developers";
import Jobs from "./pages/Jobs";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Products />} /> */}
        <Route path="/Products" element={<Products />} />
        <Route path="/UseCases" element={<UseCases />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/GetStarted" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;
