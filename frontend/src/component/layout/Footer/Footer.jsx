import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="appstore" />
        <img />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2023 &copy; KajuSaikia</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/kaju___saikia/">Instagram</a>
        <a href="https://www.facebook.com/ka.ju.1650">Facebook</a>
        <a href="https://www.linkedin.com/in/kaju-saikia-568354289/">
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
