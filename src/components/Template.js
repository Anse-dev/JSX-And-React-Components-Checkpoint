import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Footer from "../Footer";

const Template = ({ children }) => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Store App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#boutique">Boutique</Nav.Link>
              <Nav.Link href="#home">temoignage</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Template;
