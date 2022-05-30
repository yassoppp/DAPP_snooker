import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Fin.css";

const Fin = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">92 Paris, 62 Grenoble</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">All Rights are not reserved.</p>
    </div>
  </div>
);

export default Fin;
