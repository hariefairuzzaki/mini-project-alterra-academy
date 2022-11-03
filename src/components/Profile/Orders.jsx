import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useOrders from "../../hooks/hooksOrders/useOrders";
import { formatRupiah } from "../../lib/formatRupiah";
import moment from "moment";

export default function Orders() {
  const { dataOrders, loadingOrders, errorOrders } = useOrders();

  return (
    <section className="mt-5">
      <Container>
        <Row>
          <h3 className="mb-3">Your Orders</h3>
          {errorOrders && <p>Something went wrong ...</p>}
          {loadingOrders ? (
            <p>Loading ...</p>
          ) : (
            dataOrders?.orders?.map((item) => (
              <Col lg={4} md={6} key={item.id}>
                <Card className="border-0 mx-auto">
                  <Card.Img variant="top" src={item.order.image1} />
                  <Card.Body className="p-0 mt-3">
                    <Row>
                      <Col lg={8} md={12}>
                        <Card.Text className="m-0">{item.order.name}</Card.Text>
                        <Card.Text className="text-black-50">{item.order.title}</Card.Text>
                      </Col>
                      <Col lg={4} md={12}>
                        <Card.Text className="text-end">{formatRupiah(item.order.price)}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text className="text-black-50">Purchase time</Card.Text>
                      </Col>
                      <Col>
                        <Card.Text className="text-end text-black-50">
                          {moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                        </Card.Text>
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
