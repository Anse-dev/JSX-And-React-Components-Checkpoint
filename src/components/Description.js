import React from "react";
import { Card } from "react-bootstrap";

const Description = ({ description }) => {
  return <Card.Text>{description}</Card.Text>;
};

export default Description;
