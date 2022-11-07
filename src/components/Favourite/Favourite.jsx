import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import ToastAddToCart from "../Toast/ToastAddToCart";
import ToastAlreadyExist from "../Toast/ToastAlreadyExist";
import ToastRemoveProduct from "../Toast/ToastRemoveProduct";
import useAddToCart from "../../hooks/hooksCart/useAddToCart";
import useCartItem from "../../hooks/hooksCart/useCartItem";
import useFavouriteItem from "../../hooks/hooksFavourites/useFavouriteItem";
import useRemoveFromFavourite from "../../hooks/hooksFavourites/useRemoveFromFavourite";
export default function Favourite() {
  const { addToCart } = useAddToCart();
  const { dataCartItem } = useCartItem();
  const { dataFavouriteItem, loadingFavouriteItem, errorFavouriteItem } = useFavouriteItem();
  const { removeFromFavourite } = useRemoveFromFavourite();
  const [showAddCart, setShowAddCart] = useState(false);
  const [showAlreadyExist, setAlreadyExist] = useState(false);
  const [showRemoveProduct, setRemoveProduct] = useState(false);

  // initial product_id in the cart
  const productInCart = dataCartItem?.cart?.map((item) => item);

  return (
    <section>
      <Container>
        <h2 className="mb-3">Favourites</h2>

        <Row className="gy-5">
          {errorFavouriteItem && <p>Something went wrong ...</p>}
          {loadingFavouriteItem && (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          )}
          {dataFavouriteItem?.favourites.length === 0 && (
            <h3 className="text-center py-5">Items added to your Favourites will be saved here.</h3>
          )}
          {dataFavouriteItem?.favourites?.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <Card className="border-0 mx-auto">
                <Card.Img variant="top" src={item.addToFavourite.image1} />
                <Card.Body className="p-0 mt-3">
                  <Row>
                    <Col lg={8} md={12}>
                      <Card.Text className="m-0">{item.addToFavourite.name}</Card.Text>
                      <Card.Text className="text-black-50">{item.addToFavourite.title}</Card.Text>
                    </Col>
                    <Col lg={4} md={12}>
                      <Card.Text className="text-end">{formatRupiah(item.addToFavourite.price)}</Card.Text>
                    </Col>
                  </Row>
                  <div className="d-flex gap-3">
                    <p className="text-black-50">Size {item.size}</p>
                    <p className="text-black-50">QTY {item.quantity}</p>
                  </div>
                </Card.Body>
                <div className="d-flex gap-3">
                  <Button
                    variant="outline-dark"
                    className="w-100"
                    onClick={() => {
                      removeFromFavourite({
                        variables: { id: item.id },
                      });
                      setRemoveProduct(true);
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="dark"
                    className="w-100"
                    onClick={() => {
                      productInCart?.some(
                        (element) => element.product_id === item.addToFavourite.id && element.size === item.size
                      )
                        ? setAlreadyExist()
                        : addToCart({
                            variables: {
                              size: item.size,
                              id: item.addToFavourite.id,
                              name: item.addToFavourite.name,
                              title: item.addToFavourite.title,
                              price: item.addToFavourite.price,
                              type: item.addToFavourite.type,
                              gender: item.addToFavourite.gender,
                              image1: item.addToFavourite.image1,
                              image2: item.addToFavourite.image2,
                              image3: item.addToFavourite.image3,
                              image4: item.addToFavourite.image4,
                              description: item.addToFavourite.description,
                            },
                          }) && setShowAddCart(true);
                    }}
                  >
                    Add to bag
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastAddToCart showAddCart={showAddCart} setShowAddCart={setShowAddCart} />
      <ToastAlreadyExist showAlreadyExist={showAlreadyExist} setAlreadyExist={setAlreadyExist} />
      <ToastRemoveProduct showRemoveProduct={showRemoveProduct} setRemoveProduct={setRemoveProduct} />
    </section>
  );
}
