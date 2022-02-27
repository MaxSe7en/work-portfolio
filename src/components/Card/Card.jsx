import React from "react";
import "./Card.css";

import { images } from "../../constants";
const Card = ({backgroundColor}) => {
  return (
    <div className="app__card-container">
      <div className="app__gallery app__card" style={{ background: `${backgroundColor}` }}>
        <div className="app__sample_work01">
          <h2 className="app__header-h2">Lorem ipsum</h2>
          <p className="app__p-big">
            A web-based booking platform to book your own taxi
          </p>
        </div>
        <img className="app__works-img" src={images.df} alt="works" />
      </div>
    </div>
  );
};

export default Card;
