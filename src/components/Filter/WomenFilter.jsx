import React from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link } from "react-router-dom";
import useGetProductByWomen from "../../hooks/hooksFilterGender/useGetProductByWomen";

export default function WomenFilter() {
  const { dataProductByWomen, loadingProductByWomen, errorProductByWomen } = useGetProductByWomen();

  return (
    <section id="womenfilter">
      <Container>
        <h3>Women's Lifestyle({dataProductByWomen?.product?.length})</h3>
        <Row className="gy-4 mt-3">
          {errorProductByWomen && <p>Something went wrong ...</p>}

          {loadingProductByWomen ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            dataProductByWomen.product?.map((item) => (
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
