import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <h4>
            Sign up for our newsletter to receive special offers, news and great
            sales notifications.
          </h4>
          <div className="input__group">
            <input type="text" placeholder="Email address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="line"></div>
        <div className="right">
          <div className="links">
            <span> LINKS</span>
            <ul>
              <li>HOME</li>
              <li>SHOP</li>
              <li>COLLECTIONS</li>
              <li>SEARCH</li>
            </ul>
          </div>
          <div className="links">
            <span>LINKS</span>
            <ul>
              <li>JEWELRY</li>
              <li>WATCHES</li>
              <li>ABOUT</li>
              <li>CONTACTS</li>
            </ul>
          </div>
          <div className="links">
            <span>SOCIALS</span>
            <ul>
              <li>FACEBOOK</li>
              <li>PINTEREST</li>
              <li>INSTAGRAM</li>
              <li>YOUTUBE</li>
            </ul>
          </div>
        </div>
      </div>
      <h5><span>Huseynov © 2022, </span>Powered by Cihanshop</h5>
    </div>
  );
};

export default Footer;
