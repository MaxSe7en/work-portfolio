import React from 'react';

import { SubHeading } from "../../components";

import { images } from "../../constants";
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Sweet Dev Services" image={images.laptop}/>
      <h1 className="app__hire_header-h1">Hire the Best Web and Mobile App Developers</h1>
      <p className="p__opensans block" style={{margin:'2rem, 0'}}>IndiaNIC is a top web design agency and software development company with a large pool of software developers available for dedicated and fixed time/cost projects. Hire web developers from IndiaNIC who have proven expertise in trending web technologies like PHP, Laravel, Magento, ReactJS, front-end technologies like AngularJS and back-end technologies like Node.js to develop custom and responsive websites, web apps and eCommerce solutions.

Our Android app, iOS app and cross-platform mobile app developers are adroit in the latest mobile technologies and tools like Android Studio, Xcode, Kotlin, Xamarin, PhoneGap, React Native, etc. to build next-gen mobile applications.</p>
      <button type="button" className="custom__button">Contact Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default SpecialMenu;


// import React, { Component } from 'react';
// import codm from "./gameCODM.png";
// import eball from "./game8BALL.png";
// import ludo from "./gameLUDO.png";
// import pubg from "./gamePUBG.png";
// import "./styles.css"
 
// import HorizontalScroller from 'react-horizontal-scroll-container';
 
// export default class App extends Component {
//   render() {
//     return (

//        <HorizontalScroller>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element"><img src={codm} alt="" /></div>
//           <div className="element">7</div>
//           <div className="element">8</div>
//         </HorizontalScroller> 
      
//     );
//   }
// }
// "dependencies": {
//   "react": "17.0.2",
//   "react-dom": "17.0.2",
//   "react-horizontal-scroll-container": "1.0.1",
//   "react-scripts": "4.0.0",
//   "react-scroll-horizontal": "1.6.6"