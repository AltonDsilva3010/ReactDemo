import React, { useState } from "react";
import "./App.css";

import CoursesAvailable from "./Components/CoursesAvailable";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUp";
import ErrorPage from "./Components/ErrorPage";
import Requests from "./Components/Requests";

const Home = () => {
  return (
    <div className="courses-available">
      <h2>Courses Available</h2>
      <CoursesAvailable />
    </div>
  );
};

const App = () => {
  const [role, setRole] = useState("admin");
  const [currentId, setCurrentId] = useState("");
  const [loginState, setLoginState] = useState(false);

  return (
    <Router>
      <Header role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/requests" element={<Requests role={role} />} />
        <Route path="/login" element={<LoginPage loginState={loginState} />} />
        <Route
          path="/signup"
          element={<SignUpPage loginState={loginState} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
