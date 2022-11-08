import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link, useLocation } from "react-router-dom";
import useCheckout from "../../hooks/hooksOrders/useCheckout";

const baseData = {
  first_name: "",
  last_name: "",
  phone_number: "",
  address: "",
  detail_address: "",
  pay_method: "",
};

export default function Checkout() {
  const { state } = useLocation();
  const { checkout } = useCheckout();
  const [data, setData] = useState(baseData);
  const [show, setShow] = useState(false);

  const disabled =
    data.first_name === "" ||
    data.last_name === "" ||
    data.phone_number === "" ||
    data.address === "" ||
    data.detail_address === "" ||
    data.pay_method === "";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCheckout = () =>
    state.dataCartItem?.cart?.map((item) =>
      checkout({
        variables: {
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          address: data.address,
          detail_address: data.detail_address,
          total_price: state.total,
          pay_method: data.pay_method,

          name: item.addToCart.name,
          title: item.addToCart.title,
          price: item.addToCart.price,
          type: item.addToCart.type,
          gender: item.addToCart.gender,
          image1: item.addToCart.image1,
          image2: item.addToCart.image2,
          image3: item.addToCart.image3,
          image4: item.addToCart.image4,
          description: item.addToCart.description,

          size: item.size,
          quantity: item.quantity,

          id_cart: item.id,
        },
      })
    );

  return (
    <section id="checkout">
      <Container>
        <h2 className="text-center mb-5">Checkout</h2>
        <Row className="gy-4">
          <Col lg={7} className="ms-5">
            <h4 className="mb-4">Delivery</h4>
            <h5 className="mb-4">Enter your name and address</h5>

            <Form className="w-75">
              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>First name*</Form.Label>
                <Form.Control
                  name="first_name"
                  value={data.first_name}
                  onChange={handleInput}
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control
                  name="last_name"
                  value={data.last_name}
                  onChange={handleInput}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Phone Number*</Form.Label>
                <Form.Control
                  name="phone_number"
                  value={data.phone_number}
                  onChange={handleInput}
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>

              <Form.Group controlId="floatingInput" className="mb-3">
                <Form.Label>Address*</Form.Label>
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
                <Form.Label>Detail Address*</Form.Label>
                <Form.Control
                  as="textarea"
                  name="detail_address"
                  value={data.detail_address}
                  onChange={handleInput}
                  placeholder="The white house, Floor 20, etc."
                  style={{ height: "100px" }}
                />
              </Form.Group>
            </Form>

            <h4 className="my-4">Payment Methods</h4>

            <Form.Select name="pay_method" className="w-75" value={data.pay_method} onChange={handleInput}>
              <option value="">Choose Method</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="E-Wallet">E-Wallet</option>
            </Form.Select>

            {data.pay_method === "Cash on Delivery" && (
              <Card className="w-75 mt-4">
                <Card.Body>
                  <Card.Title>Payment Information</Card.Title>
                  <hr />
                  <Card.Text>
                    Please prepare exact amount money, our courier service staff will reach your doorstep as soon as
                    possible
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            {data.pay_method === "Bank Transfer" && (
              <Card className="w-75 mt-4">
                <Card.Body>
                  <Card.Title>Payment Information</Card.Title>
                  <hr />
                  <Card.Text className="m-0 fw-semibold">Bank: BNI</Card.Text>
                  <Card.Text className="m-0 fw-semibold">Account Holder: Harie Fairuz Zaki</Card.Text>
                  <Card.Text className="fw-semibold">Account Number: 0827771372</Card.Text>
                  <Card.Text>Send the transfer receipt to harie@gmail.com for confirmation</Card.Text>
                </Card.Body>
              </Card>
            )}
            {data.pay_method === "E-Wallet" && (
              <Card className="w-75 mt-4">
                <Card.Body>
                  <Card.Title>Payment Information</Card.Title>
                  <hr />
                  <Card.Text className="m-0 fw-semibold">Bank: Dana</Card.Text>
                  <Card.Text className="m-0 fw-semibold">Account Holder: Harie Fairuz Zaki</Card.Text>
                  <Card.Text className="fw-semibold">Account Number: 089524376821</Card.Text>
                  <Card.Text>Send the transfer receipt to harie@gmail.com for confirmation</Card.Text>
                </Card.Body>
              </Card>
            )}

            <Button
              type="submit"
              variant="dark"
              className="mt-4"
              onClick={() => {
                handleCheckout();
                handleShow();
              }}
              disabled={disabled}
            >
              Submit
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Nike</Modal.Title>
              </Modal.Header>
              <Modal.Body>Thanks for order!</Modal.Body>
              <Modal.Footer>
                <Button as={Link} to="/profile/order" variant="dark" onClick={handleClose}>
                  Go to see your order
                </Button>
              </Modal.Footer>
            </Modal>
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
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            ) : (
              state.dataCartItem?.cart?.map((item) => (
                <Row className="mb-4" key={item.id}>
                  <Col>
                    <img src={item.addToCart.image1} alt="Nike" className="img-fluid" />
                  </Col>
                  <Col>
                    <p className="m-0">{item.addToCart.name}</p>
                    <p className="m-0">{item.addToCart.title}</p>
                    <p className="text-black-50 m-0">QTY {item.quantity}</p>
                    <p className="text-black-50 m-0">Size {item.size}</p>
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
