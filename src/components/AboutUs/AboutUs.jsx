import React from "react";
import "./AboutUs.css";
import lg from "../../images/lg.png"

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center"></div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Ri
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
