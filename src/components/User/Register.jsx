import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section>
      <Container className="justify-content-center w-25">
        <div className="text-center mb-5">
          <p className="fw-bold">Nike</p>
          <h4 className="fw-bold">YOUR ACCOUNT FOR EVERYTHING NIKE</h4>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Number Phone" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Country/Region" />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 fw-semibold">
            JOIN US
          </Button>
          <p className="text-center text-black-50 mt-3" style={{ fontSize: "13px" }}>
            Already a member?{" "}
            <Link to="/login" className="link-dark">
              Sign In
            </Link>
          </p>
        </Form>
      </Container>
    </section>
  );
}
