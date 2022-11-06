import React from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { Link, useLocation } from "react-router-dom";
import useSearchProduct from "../../hooks/hooksProduct/useSearchProduct";

export default function SearchFilter() {
  const { state } = useLocation();

  const { executeSearch, dataSearchProduct, loadingSearchProduct, errorSearchProduct } = useSearchProduct();

  useEffect(() => {
    executeSearch({
      variables: {
        name: `%${state.searchFilter}%`,
      },
    });
  }, [executeSearch, state]);

  return (
    <section id="shoesfilter">
      <Container>
        <h3>Search Result({dataSearchProduct?.product?.length})</h3>
        <Row className="gy-4 mt-3">
          {errorSearchProduct && <p>Something went wrong ...</p>}

          {loadingSearchProduct ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            dataSearchProduct?.product?.map((item) => (
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
