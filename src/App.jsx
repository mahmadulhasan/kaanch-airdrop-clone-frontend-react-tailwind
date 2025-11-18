import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./Home";
import Navbar from "./navbar";
import Footer from "./footer";
import Bridge from "./Bridge/bridge";
import Leaderboard from "./Leaderboard/leaderboard";
import Earnpoint from "./Earn-point/earn-point";
import Ecosystem from "./Ecosystem/ecosystem";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/bridge" element={<Bridge/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/earn-point" element={<Earnpoint/>} />
        <Route path="/ecosystem" element={<Ecosystem/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
