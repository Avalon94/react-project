import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
var locale = require("./locales/ru_Ru");

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />

      {/* <footer className='footer'>{locale.Footer_text}</footer> */}
    </div>
  );
};

export default App;
