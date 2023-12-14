import React from "react";
import { products } from "../../data/product";
import ProductList from "../ProductList";

const HocProducts = (WrapperComponents) => {
  return (props) => {
    return <WrapperComponents {...props} products={products} />;
  };
};

export default HocProducts;
