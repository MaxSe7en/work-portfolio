import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
    <div className="app__aboutus-content_about">
      <h1 className="headtext__cormorant">About Us</h1>
      <img src={images.laptop} alt="about spoon" className="spoon__img" />
      <p className="p__opensans">
      We are digital technologists, multi-platform strategists, and design thinkers who share a passion for creating websites and mobile apps that drive engagement and boosts productivity.
      </p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
    
    <div className="app__aboutus-content_knife flex__center">
      {/* <img src={images.knife} alt="aboutus_knife" /> */}
    </div>
    <div className="app__aboutus-content_history ">
      <h1 className="headtext__cormorant">Our History</h1>
      <img src={images.iphone} alt="about spoon" className="spoon__img" />
      <p className="p__opensans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime,
        quod voluptatem minus velit ipsum consectetur mollitia alias nostrum,
        quasi dolores labore, porro incidunt eos officiis quaerat deserunt!
        Voluptas, vel!
      </p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
    </div>
  </div>
);

export default AboutUs;
