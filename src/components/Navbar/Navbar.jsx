import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/lg1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#collection">Collection</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About Us</a>
          </li>
          <li className="p__opensans">Best Players</li>
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <TiDeleteOutline
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a onClick={() => setToggleMenu(false)} href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggleMenu(false)} href="#collection">
                    Collection
                  </a>
                </li>
                <li>
                  <a onClick={() => setToggleMenu(false)} href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a c onClick={() => setToggleMenu(false)}>
                    Best Players
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
