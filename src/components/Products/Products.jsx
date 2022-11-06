import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link } from "react-router-dom";
import useRetrieveProduct from "../../hooks/hooksProduct/useRetrieveProduct";

export default function Products() {
  const { dataProduct, loadingProduct, errorProduct } = useRetrieveProduct();

  return (
    <section id="products">
      <Container>
        <h3>All Lifestyle({dataProduct?.product.length})</h3>
        <Row className="gy-4 mt-3">
          {errorProduct && <p>Something went wrong ...</p>}

          {loadingProduct ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            dataProduct.product?.map((item) => (
              <Col lg={4} key={item.id}>
                <Link to={`/detail/${item.id}`}>
                  <Card.Img variant="top" src={item.image1} />
                  <Card.Body>
                    <Row>
                      <Card.Text className="m-0">{item.name}</Card.Text>
                      <Card.Text className="text-black-50 m-0">{item.title}</Card.Text>
                      <Card.Text>{formatRupiah(item.price)}</Card.Text>
                    </Row>
                  </Card.Body>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
}
