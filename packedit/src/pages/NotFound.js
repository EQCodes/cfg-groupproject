import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="not-found-bg">
        <div className="not-found-text">
          <p>You seem to be lost!</p>
          <p>
            {" "}
            <a className="a" href="/"> Head home..</a>{" "}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
