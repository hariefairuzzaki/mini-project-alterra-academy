import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <Container id="navs" className="d-flex justify-content-center">
      <Nav as="ul">
        <Nav.Item as="li">
          <Nav.Link as={Link} to="/profile" className="link-dark">
            Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link as={Link} to="order" className="link-dark">
            Orders
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
