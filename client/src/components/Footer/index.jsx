import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="items">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="items">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="items">
          <h1>About</h1>
          <span>
            Founded with a passion for creativity and quality, our mission is to
            bring you timeless pieces that feel as good as they look. <br />
            We work with our trusted manufacturers and sustainable materials to
            ensure every piece reflects not just style — but values.
          </span>
        </div>
        <div className="items">
          <h1>Contact</h1>
          <span>
            We’d love to hear from you! Whether you have a question about your
            order, need styling advice, or just want to say hello — our team is
            here to help. <br />
            Email: support@hazelstore.com. <br />
            Our customer support is available: <br />
            Mon – Fri | 9:00 AM – 6:00 PM (NZST)
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">HAZELSTORE</span>
          <span className="copyright">
            &copy; 2025 HAZELSTORE. All rights reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
