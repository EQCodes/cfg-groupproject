import React from "react";
import "../../styles/Home.scss";
// import "../../styles/styles.scss";
import NavBar from '../NavBar';

const About = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="about-head-text">
        <h2>Hi!</h2>
      </div>
      <div className="about-body-text">
          <p>We are Grace, Laura, Michelle & Eilidh.</p>
          <p>
            We are aspiring software developers and this website is our final
            project at the Code First Girls Bootcamp!
          </p>
          <p>
            PackedIt makes trip planning easier by allowing users to make an
            organised list.
          </p>
          <p>No more forgetting any essentials! So, have you PackedIt yet?</p>
      </div>
    </div>
  );
};

export default About;
