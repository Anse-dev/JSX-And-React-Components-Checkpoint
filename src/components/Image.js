import React from "react";
import { Card } from "react-bootstrap";

const Image = ({ imageUrl }) => {
  return <Card.Img variant="top" src={imageUrl} />;
};

export default Image;
