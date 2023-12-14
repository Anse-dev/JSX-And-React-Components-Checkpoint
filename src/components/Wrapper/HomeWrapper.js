import React from "react";
import { Container, Navbar, Nav, Card, Row, Col, Carousel } from "react-bootstrap";
import Template from "../Template";
import ProductList from "../ProductList";
export default function HomeWrapper({ children }) {
  return (
    <Template>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner-1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Vitara 2023</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner-2.png" alt="First slide" />
          <Carousel.Caption>
            <h3>Suzuki 2022</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/banner-3.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Suzuki 2022</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ProductList title={"Meilleures ventes"} />
      <ProductList title={"En Promotions"} isShowMore={true} />
      <ProductList title={"Meilleure Offres"} isShowMore={true} />
    </Template>
  );
}
