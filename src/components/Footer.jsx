import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="bg-dark">
      <Container className="py-5">
        <Row>
          <Col lg={3}>
            <Nav className="d-block">
              <Nav.Link className="link-light">FIND A STORE</Nav.Link>
              <Nav.Link className="link-light">BECOME A MEMBER</Nav.Link>
              <Nav.Link className="link-light">SIGN UP EMAIL</Nav.Link>
              <Nav.Link className="link-light">STUDENT DISCOUNTS</Nav.Link>
              <Nav.Link className="link-light">SEND US FEEDBACK</Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <Nav className="d-block">
              <Nav.Link className="link-light">GET HELP</Nav.Link>
              <Nav.Link className="link-secondary">Order Status</Nav.Link>
              <Nav.Link className="link-secondary">Delivery</Nav.Link>
              <Nav.Link className="link-secondary">Returns</Nav.Link>
              <Nav.Link className="link-secondary">Payment Options</Nav.Link>
              <Nav.Link className="link-secondary">Contact us</Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <Nav className="d-block">
              <Nav.Link className="link-light">ABOUT NIKE</Nav.Link>
              <Nav.Link className="link-secondary">News</Nav.Link>
              <Nav.Link className="link-secondary">Careers</Nav.Link>
              <Nav.Link className="link-secondary">Investors</Nav.Link>
              <Nav.Link className="link-secondary">Sustainability</Nav.Link>
            </Nav>
          </Col>
          <Col lg={3}>
            <Button variant="secondary" className="rounded-circle p-0 me-3" style={{ width: "40px", height: "40px" }}>
              <BsTwitter size="22px" />
            </Button>
            <Button variant="secondary" className="rounded-circle p-0 me-3" style={{ width: "40px", height: "40px" }}>
              <BsFacebook size="22px" />
            </Button>
            <Button variant="secondary" className="rounded-circle p-0 me-3" style={{ width: "40px", height: "40px" }}>
              <BsYoutube size="22px" />
            </Button>
            <Button variant="secondary" className="rounded-circle p-0" style={{ width: "40px", height: "40px" }}>
              <BsInstagram size="22px" />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
