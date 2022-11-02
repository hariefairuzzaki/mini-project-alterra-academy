import React from "react";
import { useEffect } from "react";
import { Card, Col, Container, Form, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import useSearchProduct from "../../hooks/useSearchProduct";
import { formatRupiah } from "../../lib/formatRupiah";

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
        <div className="d-flex justify-content-end mb-2">
          <p className="me-4">Hide Filters</p>
          <Nav>
            <NavDropdown title="Sort By">
              <NavDropdown.Item href="#">Price: High-Low</NavDropdown.Item>
              <NavDropdown.Item href="#">Price: Low-High</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <Row>
          <Col lg={3}>
            <h5>Gender</h5>
            <Form>
              <Form.Check type="checkbox" label="Men" />
              <Form.Check type="checkbox" label="Women" />
              <Form.Check type="checkbox" label="Kids" />
            </Form>

            <hr />

            <h5>Type</h5>
            <Form>
              <Form.Check type="checkbox" label="Clothing" />
              <Form.Check type="checkbox" label="Shoes" />
            </Form>
          </Col>
          <Col lg={9}>
            <Row className="gy-4">
              {errorSearchProduct && <p>Something went wrong ...</p>}

              {loadingSearchProduct ? (
                <p>Loading ...</p>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
