import React from "react";
// import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logoPath from '../styles/Images/Logos/Green-graphic-only.png'

// **Non Bootstrap NavBar**
// function NavBar() {
//   return (
//     <div>
//       <ul class="ul">
//         <li class="li">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li class="li">
//           <Link to="/about">About</Link>
//         </li>
//         <li class="li">
//           <Link to="/your-list">Your List</Link>
//         </li>
//         <li class="li">
//           <Link to="/">Home</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

//Bootstrap NavBar
function NavBar() {
  return (
    <div class="position-absolute top-0">
      <Navbar bg="light" expand="lg" fixed="top">
        <div>
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logoPath}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="PackedIt Logo"
              />
            </Navbar.Brand>
          </Container>
        </div>
        <div class="position-absolute end-0">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/your-list">Your List</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar;

// <nav class="navbar navbar-expand-md bg-dark navbar-dark" id="navigationID">
