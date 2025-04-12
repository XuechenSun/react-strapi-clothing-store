import React from "react";
import "./index.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in touch with</span>

        <div className="mail">
          <input type="text" placeholder="Enter your e-mail" />
          <button>Join Us</button>
        </div>

        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
