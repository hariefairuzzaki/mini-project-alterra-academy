import React from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link } from "react-router-dom";
import moment from "moment";
import useGetOrderById from "../../hooks/hooksOrders/useGetOrderById";

export default function DetailOrder() {
  const { dataOrderById, loadingOrderById, errorOrderById } = useGetOrderById();

  return (
    <section>
      <Container>
        {errorOrderById && <p>Something went wrong ...</p>}
        {loadingOrderById ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          dataOrderById.orders?.map((item) => (
            <Row key={item.id}>
              <Col lg={8} md={8}>
                <Row className="gy-4">
                  <Col lg={6}>
                    <img src={item.image1} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image2} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image3} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image4} alt="Product" className="img-fluid" />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4}>
                <h4>{item.name}</h4>
                <p className="m-0 text-black-50">{item.title}</p>
                <p className="m-0 text-black-50">Price {formatRupiah(item.price)}</p>
                <div className="d-flex gap-3">
                  <p className="m-0 text-black-50">Size {item.size}</p>
                  <p className="m-0 text-black-50">QTY {item.quantity}</p>
                </div>

                <hr />

                <h4>Order By</h4>
                <p className="m-0 text-black-50">
                  {item.first_name} {item.last_name}
                </p>
                <p className="m-0 text-black-50">0{item.phone_number}</p>
                <p className="m-0 text-black-50">Payment Method: {item.pay_method}</p>

                <hr />

                <h4>Shipping Address</h4>
                <p className="m-0 text-black-50">{item.address}</p>
                <p className="m-0 text-black-50">{item.detail_address}</p>
                <p className="m-0 text-black-50">Purchase time: {moment(item.created_at).format("LLL")}</p>

                <hr />

                <Button as={Link} to="/profile/order" variant="dark">
                  Go Back To Orders
                </Button>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </section>
  );
}
