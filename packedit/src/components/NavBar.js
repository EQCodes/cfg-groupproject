import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div>
      <ul class="ul">
        <li>Contact</li>
        <li>About</li>
        <li>
          <Link to="/your-list">Your List</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
