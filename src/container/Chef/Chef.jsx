import React from 'react';
import {images} from '../../constants'
import { SubHeading } from "../../components";
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app
    _img_reverse">
      <img src={images.ggg} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title={'Tech Lead\'s Word'} image={images.iphone}/>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotes" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <p className="p__opensans">adipisicing elit. Possimus excepturi laborum nemo explicabo ipsam ullam accusantium suscipit impedit ipsa, pariatur illum! Corporis velit commodi rerum voluptatem minima non itaque repudiandae!</p>
      </div>
      <div className="app__chef-sign">
        <p>Darko Jackson</p>
        <p className="p__opensans">Tech Lead & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
    {/* <Button image={images.iphone} platform='iOS'/> */}
  </div>
);

export default Chef;
