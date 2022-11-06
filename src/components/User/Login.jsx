import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
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
          <Row>
            <Col lg={5}>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Keep me sign in"
                  className="text-black-50 fw-semibold"
                  style={{ fontSize: "13px" }}
                />
              </Form.Group>
            </Col>
            <Col lg={7} className="text-end">
              <Link to="#" className="link-secondary fw-semibold" style={{ fontSize: "13px" }}>
                Forgotten your password?
              </Link>
            </Col>
          </Row>
          <Button variant="dark" type="submit" className="w-100">
            Sign in
          </Button>
          <p className="text-center text-black-50 mt-3" style={{ fontSize: "13px" }}>
            Not a member?{" "}
            <Link to="/register" className="link-dark">
              Join us
            </Link>
          </p>
        </Form>
      </Container>
    </section>
  );
}
