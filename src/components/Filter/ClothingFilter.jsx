import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link } from "react-router-dom";
import useGetProductByClothing from "../../hooks/hooksFilterType/useGetProductByClothing";

export default function ClothingFilter() {
  const { dataProductByClothing, loadingProductByClothing, errorProductByClothing } = useGetProductByClothing();

  return (
    <section id="clothingfilter">
      <Container>
        <h3>Clothing Lifestyle({dataProductByClothing?.product?.length})</h3>
        <Row className="gy-4 mt-3">
          {errorProductByClothing && <p>Something went wrong ...</p>}

          {loadingProductByClothing ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            dataProductByClothing.product?.map((item) => (
              <Col lg={4} key={item.id}>
                <Card className="border-0">
                  <Link to={`/detail/${item.id}`}>
                    <Card.Img variant="top" src={item.image1} />
                    <Card.Body className="p-0 mt-3">
                      <Row>
                        <Card.Text className="m-0">{item.name}</Card.Text>
                        <Card.Text className="text-black-50 m-0">{item.title}</Card.Text>
                        <Card.Text>{formatRupiah(item.price)}</Card.Text>
                      </Row>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
}
