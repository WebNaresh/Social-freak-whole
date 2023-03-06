import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./Component/Chat/Chat";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
