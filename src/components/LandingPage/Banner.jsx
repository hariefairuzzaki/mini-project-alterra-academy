import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section>
      <Container className="text-center">
        <p className="m-0">Just In: Fast Pack</p>
        <p className="display-4 fw-bold">FIND YOUR FAST</p>
        <p>So many ways to fly. Choose yours.</p>

        <Button as={Link} to="/product" variant="dark">
          Shop All
        </Button>
      </Container>
    </section>
  );
}
