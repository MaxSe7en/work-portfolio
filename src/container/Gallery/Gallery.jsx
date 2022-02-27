import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import Card from "../../components/Card/Card";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 1423;
    } else {
      current.scrollLeft += 1423;
    }
  };
  return (
    <div className=" app__bg custom">
      <h1 className="app__header-h1 app__header-h1_font">Our Works</h1>
      <div className="app__gallery-height" ref={scrollRef}>
          <Card backgroundColor={"#542B7E"} />
          <Card backgroundColor={"#ecb212"} />
          <Card backgroundColor={"#54e61a"} />
          <Card backgroundColor={"#eb0b3b"} />
          <Card backgroundColor={"#1461ee"} />
          <Card backgroundColor={"#ec16db"} />
        
      </div>
    </div>
  );
};

export default Gallery;
