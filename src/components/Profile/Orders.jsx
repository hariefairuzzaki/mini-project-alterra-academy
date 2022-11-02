import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useOrders from "../../hooks/hooksOrders/useOrders";
import { formatRupiah } from "../../lib/formatRupiah";

export default function Orders() {
  const { dataOrders, loadingOrders, errorOrders } = useOrders();
  console.log(dataOrders);

  return (
    <section>
      <Container>
        <Row>
          {errorOrders && <p>Something went wrong ...</p>}
          {loadingOrders ? (
            <p>Loading ...</p>
          ) : (
            dataOrders?.orders.map((item) => (
              <Col lg={4} md={6} key={item.id}>
                <Card className="border-0 mx-auto">
                  <Card.Img variant="top" src={item.checkout.addToCart.image1} />
                  <Card.Body className="p-0 mt-3">
                    <Row>
                      <Col lg={8} md={12}>
                        <Card.Text className="m-0">{item.checkout.addToCart.name}</Card.Text>
                        <Card.Text className="text-black-50">{item.checkout.addToCart.title}</Card.Text>
                      </Col>
                      <Col lg={4} md={12}>
                        <Card.Text className="text-end">{formatRupiah(item.checkout.addToCart.price)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
}
