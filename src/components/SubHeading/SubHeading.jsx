import React from 'react';
import { AiOutlineMobile } from "react-icons/ai";
import { images } from '../../constants';
const SubHeading = ({title, image}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    <img src={image} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
