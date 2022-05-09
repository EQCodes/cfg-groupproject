import React from "react";
import "../../styles/Home.css";
import NavBar from '../NavBar';

const Contact = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div class="contact-bg">
        <div class="contact-header-text">
          <h2>Get in touch.</h2>
        </div>
        <div class="contact-body-text">
          <body>
            <p>
              If you have any questions about the project or would just like to
              have a chat, feel free to send us a message at:
            </p>
            <p>packeditteam@gmail.com</p>
          </body>
        </div>
      </div>
    </div>
  );
};

export default Contact;
