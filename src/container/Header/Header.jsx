import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="The Best Web and Mobile Apps Development Company" image={images.laptop}/>
      <h1 className="app__header-h1">Your Trusted Development Partner</h1>
      <p className="p__opensans block" style={{margin:'2rem, 0'}}>We deliver web and mobile app development services to global businesses since 1997, with 100% project delivery success. Hire the best programmers at affordable prices. Our design-focused approach and project execution processes help you to deliver the right solutions.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.fff} alt="header img" />
    </div>
  </div>
);

export default Header;
