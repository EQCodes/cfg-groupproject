import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/styles.scss";
import "../../../styles/Home.scss";
import NavBar from "../../NavBar";
import CreateYourList from "./CreateYourList";

const Home = () => {
  return (
    <div>
      <div>
        <nav>
          <NavBar />
        </nav>
      </div>
      <div className="home-bg">
        <div className="outer-card">
          <h1 className="start-text">Let's get packing!</h1>
          <CreateYourList />
        </div>
      </div>
    </div>
  );
};

export default Home;
