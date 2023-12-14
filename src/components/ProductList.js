import React from "react";
import HocProducts from "./Hoc/HocProducts";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";

const ProductList = ({ products, title, isShowMore }) => {
  return (
    <Container>
      <div className="heading py-4  ">
        <div className="title">
          <h1 className="">{title}</h1>
        </div>
        <hr></hr>
      </div>
      <Row className="py-4">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Row>
      {isShowMore && (
        <Row>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HocProducts(ProductList);
