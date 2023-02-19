import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import MainScroll from "./Component/Main/MainScroll";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<MainScroll />} />
    </Routes>
  );
};
export default App;
