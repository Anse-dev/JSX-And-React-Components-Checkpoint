import React from "react";
import Image from "./Image";
import Price from "./Price";
import Description from "./Description";
import Name from "./Name";
import { Card, Col } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Col key={product.id}>
      <Card>
        <Image imageUrl={product.image} />
        <Card.Body>
          <Name name={product.name} />
          <Description description={product.description} />
          <Price price={product.price} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
