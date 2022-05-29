import React from 'react';

import './Header.css';
import bg from "../../images/bg2.png"
const Header = () => (
  <div className="app__header app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Snooker paradise</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">
        connect Wallet
      </button>
    </div>
  </div>
);

export default Header;