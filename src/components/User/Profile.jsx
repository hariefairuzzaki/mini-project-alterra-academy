import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Profile() {
  return (
    <section>
      <Container className="justify-content-center w-25">
        <h3>Account Details</h3>
        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Number Phone" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Country/Region" />
          </Form.Group>
        </Form>

        <hr />
        <Row>
          <Col>
            <p className="m-0">Delete Account</p>
          </Col>
          <Col className="text-end">
            <Button variant="outline-dark" size="sm">
              Delete
            </Button>
          </Col>
        </Row>
        <hr />

        <div className="text-end">
          <Button variant="dark">Save</Button>
        </div>
      </Container>
    </section>
  );
}
