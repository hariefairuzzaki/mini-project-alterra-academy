import React from "react";
import { useEffect } from "react";
import { Card, Col, Container, Nav, NavDropdown, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import useSearchProduct from "../../hooks/useSearchProduct";
import { formatRupiah } from "../../lib/formatRupiah";

export default function SearchFilter() {
  const location = useLocation();

  const { executeSearch, dataSearchProduct, loadingSearchProduct, errorSearchProduct } = useSearchProduct();

  useEffect(() => {
    executeSearch({
      variables: {
        name: `%${location.state.searchFilter}%`,
      },
    });
  }, [executeSearch, location]);

  return (
    <section id="shoesfilter">
      <Container>
        <h3>Search Result({dataSearchProduct?.product?.length})</h3>
        <div className="d-flex justify-content-end mb-2">
          <p className="me-4">Hide Filters</p>
          <Nav>
            <NavDropdown title="Sort By">
              <NavDropdown.Item href="#">Featured</NavDropdown.Item>
              <NavDropdown.Item href="#">Newest</NavDropdown.Item>
              <NavDropdown.Item href="#">Price: High-Low</NavDropdown.Item>
              <NavDropdown.Item href="#">Price: Low-High</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
        <Row>
          <Col lg={3}>
            <Nav id="sortby" className="d-block">
              <Nav.Link className="link-dark mb-3">Lifestyle</Nav.Link>
              <Nav.Link className="link-dark mb-3">Jordan</Nav.Link>
              <Nav.Link className="link-dark mb-3">Running</Nav.Link>
              <Nav.Link className="link-dark mb-3">Basketball</Nav.Link>
              <Nav.Link className="link-dark mb-3">Football</Nav.Link>
              <Nav.Link className="link-dark mb-3">Training & Gym</Nav.Link>
              <Nav.Link className="link-dark mb-3">Skateboarding</Nav.Link>
              <Nav.Link className="link-dark mb-3">Golf</Nav.Link>
              <Nav.Link className="link-dark mb-3">Tennis</Nav.Link>
              <Nav.Link className="link-dark mb-3">Athletics</Nav.Link>
              <Nav.Link className="link-dark mb-3">Walking</Nav.Link>
            </Nav>
          </Col>
          <Col lg={9}>
            <Row className="gy-4">
              {errorSearchProduct && <p>Something went wrong ...</p>}

              {loadingSearchProduct ? (
                <p>Loading ...</p>
              ) : (
                dataSearchProduct?.product?.map((item) => (
                  <Col lg={4} key={item.id}>
                    <Card className="border-0" style={{ width: "17rem" }}>
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
