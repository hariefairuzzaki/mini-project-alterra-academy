import React from "react";
import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Navibar() {
  const [searchFilter, setSearchFilter] = useState("");

  const navigate = useNavigate();

  const getDataSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { searchFilter } });
  };

  const handleInput = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Nike
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link as={Link} to="/men" className="fw-semibold">
              Men
            </Nav.Link>
            <Nav.Link as={Link} to="/women" className="fw-semibold">
              Women
            </Nav.Link>
            <Nav.Link as={Link} to="/kids" className="fw-semibold">
              Kids
            </Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={getDataSearch}>
            <Form.Control placeholder="Search" className="me-2" value={searchFilter} onChange={handleInput} />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>

          <Link to="/favourite">
            <AiOutlineHeart size="25px" color="#000000" className="mx-3" />
          </Link>
          <Link to="/cart">
            <AiOutlineShopping size="25px" color="#000000" className="me-3" />
          </Link>
          <Link to="/profile">
            <AiOutlineUser size="25px" color="#000000" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
