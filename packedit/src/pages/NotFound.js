import React from "react";
import NavBar from '../components/NavBar';

const NotFound = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="not-found-bg" >
        <div className="not-found-text">
          <h1>Sorry you look lost, this page can't be found!</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
