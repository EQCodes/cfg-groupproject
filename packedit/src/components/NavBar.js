import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div>
      <ul class="ul">
        <li class="li-contact">Contact</li>
        <li class="li">About</li>
        <li class="li">
          <Link to="/your-list">Your List</Link>
        </li>
        <li class="li">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
