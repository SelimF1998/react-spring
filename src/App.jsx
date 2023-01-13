import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import Overview from "./views/overview/Overview.jsx";
import Users from "./views/users/Users.jsx"
import Departments from "./views/departments/Departments.jsx";
import Team from "./views/team/Team.jsx"
import Settings from "./views/settings/Settings.jsx";
import "./App.css";
import Projects from "./views/projects/Projects";

function App() {
  return (
    <div className="App w-screen h-screen overflow-x-hidden ">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}>
            <Route path="" element={<Overview />} />
            <Route path="/users" element={<Users />} />
            <Route path="departments" element={<Departments />} />
            <Route path="team" element={<Team />} />
            <Route path="projects" element={<Projects />} />
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
