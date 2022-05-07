import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="app">
      <p>Home</p>
      <nav>
        <Link to="/">Home</Link> | <Link to="/your-list">Your List</Link>
      </nav>
    </div>
  );
};

export default Home;
