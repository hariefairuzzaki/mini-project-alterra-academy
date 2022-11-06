import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/img/hero-img.png";

export default function Hero() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={6} md={12}>
          <div>
            <p className="display-4 fw-bold">NIKE HISTORY OF THE WORLDS- FAMOUS BRAND</p>
            <p className="fs-3 fw-semibold text-black-50">Fashion Up Your Look</p>
            <Button as={Link} to="/product" variant="outline-secondary" className="mt-3 me-3 fw-semibold">
              Shop Now
            </Button>
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div>
            <img src={HeroImg} alt="Hero" className="img-fluid" style={{ width: "650px" }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
