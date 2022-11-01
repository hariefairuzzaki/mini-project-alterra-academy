import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Mens from "../../assets/img/mens.png";
import Womens from "../../assets/img/womens.png";
import Kids from "../../assets/img/kids.png";
import { Link } from "react-router-dom";

export default function MoreNike() {
  return (
    <section>
      <Container>
        <h3>More Nike</h3>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <img src={Mens} alt="" className="img-fluid mx-auto" />
            <Button as={Link} to="/men" variant="light" className="position">
              Men's
            </Button>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <img src={Womens} alt="" className="img-fluid mx-auto" />
            <Button as={Link} to="/women" variant="light" className="position">
              Women's
            </Button>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <img src={Kids} alt="" className="img-fluid mx-auto" />
            <Button as={Link} to="/kids" variant="light" className="position">
              Kid's
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
