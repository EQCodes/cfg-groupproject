import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/styles.css";
import "../../../styles/Home.css";
import NavBar from "../../NavBar";
import "../../../styles/Card.css";
import { Card } from "react-bootstrap";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div class="home-bg">
        <div class="outer-card">
          <h1 class="start-text">Let's get packing!</h1>
          <Card class="card"> Insert 'Create your list' function </Card>
        </div>
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
