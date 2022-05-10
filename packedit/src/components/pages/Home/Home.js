import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/styles.css";
import "../../../styles/Home.css";
import NavBar from "../../NavBar";
import "../../../styles/Card.css";
import Card from "react-bootstrap/Card";
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
          {/* <Card className="card"> */}
            <CreateYourList/>
          {/* </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
