import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Badge, Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useCartItem from "../hooks/hooksCart/useCartItem";
import useFavouriteItem from "../hooks/hooksFavourites/useFavouriteItem";

export default function Navibar() {
  const [searchFilter, setSearchFilter] = useState("");
  const { dataCartItem } = useCartItem();
  const { dataFavouriteItem } = useFavouriteItem();

  const navigate = useNavigate();

  const getDataSearch = (e) => {
    e.preventDefault();
    navigate("/search", { state: { searchFilter } });
  };

  const handleInput = (e) => {
    setSearchFilter(e.target.value);
  };

  const qtyCart = dataCartItem?.cart?.length;
  const qtyFav = dataFavouriteItem?.favourites?.length;

  return (
    <Navbar id="navbar" bg="white" expand="lg" className="pt-3">
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

          <Form className="d-flex me-3" onSubmit={getDataSearch}>
            <Form.Control placeholder="Search" className="me-2" value={searchFilter} onChange={handleInput} />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>

          <Button as={Link} to="/favourite" variant="light" className="btn-icon rounded-circle me-3">
            <AiOutlineHeart size="25px" />
            <Badge pill bg="dark" style={{ position: "relative", top: "-45px", left: "15px", fontSize: "11px" }}>
              {qtyFav}
            </Badge>
          </Button>
          <Button as={Link} to="/cart" variant="light" className="btn-icon rounded-circle me-3">
            <AiOutlineShopping size="25px" />
            <Badge pill bg="dark" style={{ position: "relative", top: "-45px", left: "15px", fontSize: "11px" }}>
              {qtyCart}
            </Badge>
          </Button>
          <Button as={Link} to="/profile" variant="light" className="btn-icon rounded-circle">
            <AiOutlineUser size="25px" />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
