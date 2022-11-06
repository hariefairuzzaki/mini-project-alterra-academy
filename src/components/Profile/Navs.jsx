import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <>
      <Container id="navs" className="mt-3">
        <div className="d-flex justify-content-center">
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/profile" className="link-dark">
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link as={Link} to="/profile/order" className="link-dark">
                Orders
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <hr />
      </Container>
    </>
  );
}
