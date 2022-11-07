import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import { useNavigate } from "react-router-dom";
import ToastAddToFav from "../Toast/ToastAddToFav";
import ToastAlreadyExist from "../Toast/ToastAlreadyExist";
import ToastRemoveProduct from "../Toast/ToastRemoveProduct";
import useAddToFavourite from "../../hooks/hooksFavourites/useAddToFavourite";
import useCartItem from "../../hooks/hooksCart/useCartItem";
import useFavouriteItem from "../../hooks/hooksFavourites/useFavouriteItem";
import useRemoveFromCart from "../../hooks/hooksCart/useRemoveFromCart";

export default function Cart() {
  const { dataCartItem, loadingCartItem, errorCartItem } = useCartItem();
  const { addToFavourite } = useAddToFavourite();
  const { dataFavouriteItem } = useFavouriteItem();
  const { removeFromCart } = useRemoveFromCart();
  const [showAddFav, setShowAddFav] = useState(false);
  const [showRemoveProduct, setRemoveProduct] = useState(false);
  const [showAlreadyExist, setAlreadyExist] = useState(false);

  // conditional disable button
  const disabled = dataCartItem?.cart?.length === 0;

  // calculate total price
  const prices = [];
  dataCartItem?.cart?.map((item) => prices.push(item.addToCart.price));
  const total = prices?.reduce((prevPrice, currPrice) => prevPrice + currPrice, 0);

  // checkout
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout", { state: { dataCartItem, loadingCartItem, errorCartItem, total } });
  };

  // initial product_id & size item in the favourites
  const productInFav = dataFavouriteItem?.favourites?.map((item) => item);

  return (
    <section>
      <Container>
        <Row className="gx-5 gy-5">
          <Col lg={8}>
            <h3 className="mb-4">Bag</h3>
            {errorCartItem && <p>Something went wrong ...</p>}
            {loadingCartItem && (
              <div className="text-center">
                <Spinner animation="border" />
              </div>
            )}
            {dataCartItem?.cart.length === 0 && (
              <h3 className="text-center pt-5">Items added to your cart will be saved here.</h3>
            )}
            {dataCartItem?.cart?.map((item) => (
              <Row key={item.id} className="mb-4">
                <Col lg={3}>
                  <img src={item.addToCart.image1} alt="Air Force" className="img-fluid" />
                </Col>
                <Col lg={9}>
                  <Row>
                    <Col>
                      <p className="m-0">{item.addToCart.name}</p>
                      <p className="m-0 text-black-50">{item.addToCart.title}</p>
                      <div className="d-flex gap-3">
                        <p className="text-black-50">Size {item.size}</p>
                        <p className="text-black-50 mx-2">QTY {item.quantity}</p>
                      </div>
                      <div>
                        <Button
                          variant="light"
                          className="btn-icon rounded-circle me-3"
                          onClick={() => {
                            productInFav?.some(
                              (element) => element.product_id === item.product_id && element.size === item.size
                            )
                              ? setAlreadyExist(true)
                              : addToFavourite({
                                  variables: {
                                    size: item.size,
                                    id: item.addToCart.id,
                                    name: item.addToCart.name,
                                    title: item.addToCart.title,
                                    price: item.addToCart.price,
                                    type: item.addToCart.type,
                                    gender: item.addToCart.gender,
                                    image1: item.addToCart.image1,
                                    image2: item.addToCart.image2,
                                    image3: item.addToCart.image3,
                                    image4: item.addToCart.image4,
                                    description: item.addToCart.description,
                                  },
                                }) && setShowAddFav(true);
                          }}
                        >
                          <AiOutlineHeart size="25px" />
                        </Button>

                        <Button
                          variant="light"
                          className="btn-icon rounded-circle"
                          onClick={() => {
                            removeFromCart({
                              variables: { id: item.id },
                            });
                            setRemoveProduct(true);
                          }}
                        >
                          <AiOutlineDelete size="25px" />
                        </Button>
                      </div>
                    </Col>
                    <Col>
                      <p className="text-end">{formatRupiah(item.addToCart.price)}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>

          <Col lg={4}>
            <h3 className="mb-4">Summary</h3>
            <Row>
              <Col lg={8}>
                <p className="m-0">Subtotal</p>
              </Col>
              <Col lg={4}>
                <p className="text-end">{formatRupiah(total)}</p>
              </Col>
            </Row>

            <Row>
              <Col lg={8}>
                <p className="m-0">Estimated Delivery & Handling</p>
              </Col>
              <Col lg={4}>
                <p className="text-end">Free</p>
              </Col>
            </Row>

            <Row>
              <Col lg={8}>
                <p className="m-0">Estimated Duties and Taxes </p>
              </Col>
              <Col lg={4}>
                <p className="text-end">Free</p>
              </Col>
              <hr />
            </Row>

            <Row>
              <Col lg={8}>
                <p className="m-0">Total</p>
              </Col>
              <Col lg={4}>
                <p className="text-end">{formatRupiah(total)}</p>
              </Col>
              <hr />
            </Row>

            <Button variant="dark" className="w-100" onClick={handleCheckout} disabled={disabled}>
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
      <ToastRemoveProduct showRemoveProduct={showRemoveProduct} setRemoveProduct={setRemoveProduct} />
      <ToastAddToFav showAddFav={showAddFav} setShowAddFav={setShowAddFav} />
      <ToastAlreadyExist showAlreadyExist={showAlreadyExist} setAlreadyExist={setAlreadyExist} />
    </section>
  );
}
