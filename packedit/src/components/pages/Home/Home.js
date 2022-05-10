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
      <div class="home-bg">
        <div class="outer-card">
          <h1 class="start-text">Let's get packing!</h1>
          <Card className="card">
            <CreateYourList/>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
