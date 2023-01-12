import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Home from "./views/home/Home.jsx";
import Profile from "./views/profile/Profile.jsx";
import Settings from "./views/settings/Settings.jsx";
import "./App.css";

function App() {
  return (
    <div className="App w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
            <Route path="" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
