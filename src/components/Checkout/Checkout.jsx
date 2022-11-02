import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useCheckout from "../../hooks/hooksOrders/useCheckout";
import { formatRupiah } from "../../lib/formatRupiah";

const baseData = {
  first_name: "",
  last_name: "",
  phone_number: "",
  address: "",
  detail_address: "",
};

export default function Checkout() {
  const { state } = useLocation();
  const { checkout } = useCheckout();
  const [data, setData] = useState(baseData);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCheckout = () =>
    state.dataCartItem.cart.map((item) =>
      checkout({
        variables: {
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          total_price: state.total,
          address: data.address,
          detail_address: data.detail_address,
          checkout_id: item.id,
          product_id: item.product_id,
          quantity: item.quantity,
        },
      })
    );

  return (
    <section id="checkout">
      <Container>
        <h2 className="text-center mb-5">Checkout</h2>
        <Row>
          <Col lg={7}>
            <h4 className="mb-4">Delivery</h4>
            <h5 className="mb-4">Enter your name and address</h5>

            <Form className="w-75">
              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  name="first_name"
                  value={data.first_name}
                  onChange={handleInput}
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  name="last_name"
                  value={data.last_name}
                  onChange={handleInput}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone_number"
                  value={data.phone_number}
                  onChange={handleInput}
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  value={data.address}
                  onChange={handleInput}
                  placeholder="Enter Adress"
                  style={{ height: "100px" }}
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Detail Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="detail_address"
                  value={data.detail_address}
                  onChange={handleInput}
                  placeholder="the white house, floor 20, etc."
                  style={{ height: "100px" }}
                />
              </Form.Group>
            </Form>

            <h4 className="my-4">Payment</h4>

            <Card className="w-75">
              <Card.Body>
                <Card.Title>Manual Payment</Card.Title>
                <Card.Text className="fw-semibold">BNI | 0827771372 | Harie Fairuz Zaki</Card.Text>
              </Card.Body>
            </Card>

            <Form className="w-75 mt-4">
              <h5>Upload evidence of transfer</h5>
              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Control type="file" />
                <Form.Text className="text-muted">*checking within 1 x 24 hours</Form.Text>
              </Form.Group>
            </Form>

            <Button type="submit" variant="dark" onClick={handleCheckout}>
              Submit
            </Button>
          </Col>

          <Col lg={4}>
            <h4 className="mb-4">Order Summary</h4>
            <Row>
              <Col>
                <p>Subtotal</p>
              </Col>
              <Col>
                <p className="text-end">{formatRupiah(state.total)}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Duties and Taxes</p>
              </Col>
              <Col>
                <p className="text-end">Free</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="m-0">Delivery/shipping</p>
              </Col>
              <Col>
                <p className="m-0 text-end">Free</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <p className="m-0">Total</p>
              </Col>
              <Col>
                <p className="m-0 text-end">{formatRupiah(state.total)}</p>
              </Col>
            </Row>
            <hr />

            {state.errorCartItem && <p>Something went wrong ...</p>}
            {state.loadingCartItem ? (
              <p>Loading ...</p>
            ) : (
              state.dataCartItem.cart.map((item) => (
                <Row className="mb-4" key={item.id}>
                  <Col>
                    <img src={item.addToCart.image1} alt="Nike" className="img-fluid" />
                  </Col>
                  <Col>
                    <p className="m-0">{item.addToCart.name}</p>
                    <p className="m-0">{item.addToCart.title}</p>
                    <p className="text-black-50 m-0">QTY {item.quantity}</p>
                    <p className="text-black-50 m-0">Size {item.addToCart.size}</p>
                    <p className="text-black-50 m-0">{formatRupiah(item.addToCart.price)}</p>
                  </Col>
                </Row>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
