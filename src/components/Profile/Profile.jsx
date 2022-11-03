import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Profile() {
  return (
    <section>
      <Container className="justify-content-center w-50">
        <h3>Account Details</h3>
        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email address" className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number Phone</Form.Label>
            <Form.Control type="number" placeholder="Number Phone" className="p-3" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Address" className="p-3 mb-3" />
            <Form.Control type="text" placeholder="Detail Address" className="p-3" />
          </Form.Group>
        </Form>

        <hr />
        <Row>
          <Col>
            <p className="m-0">Delete Account</p>
          </Col>
          <Col className="text-end">
            <Button variant="outline-dark">Delete</Button>
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
