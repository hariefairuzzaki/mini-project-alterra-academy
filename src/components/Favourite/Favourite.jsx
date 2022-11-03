import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAddToCart from "../../hooks/hooksCart/useAddToCart";
import useFavouriteItem from "../../hooks/hooksFavourites/useFavouriteItem";
import useRemoveFromFavourite from "../../hooks/hooksFavourites/useRemoveFromFavourite";
import { formatRupiah } from "../../lib/formatRupiah";
import ToastAddToCart from "../Toast/ToastAddToCart";
import ToastRemoveProduct from "../Toast/ToastRemoveProduct";
export default function Favourite() {
  const { addToCart } = useAddToCart();
  const { dataFavouriteItem, loadingFavouriteItem, errorFavouriteItem } = useFavouriteItem();
  const { removeFromFavourite } = useRemoveFromFavourite();
  const [showAddCart, setShowAddCart] = useState(false);
  const [showRemoveProduct, setRemoveProduct] = useState(false);

  // handle add to cart
  const handleAddToCart = () => {
    dataFavouriteItem?.favourites?.map(
      (item) =>
        addToCart({
          variables: {
            id: item.addToFavourite.id,
            name: item.addToFavourite.name,
            title: item.addToFavourite.title,
            price: item.addToFavourite.price,
            size: item.addToFavourite.size,
            quantity: item.addToFavourite.quantity,
            type: item.addToFavourite.type,
            gender: item.addToFavourite.gender,
            image1: item.addToFavourite.image1,
            image2: item.addToFavourite.image2,
            image3: item.addToFavourite.image3,
            image4: item.addToFavourite.image4,
            description: item.addToFavourite.description,
          },
        }),
      setShowAddCart(true)
    );
  };

  return (
    <section>
      <Container>
        <h2 className="mb-3">Favourites</h2>

        <Row className="gy-5">
          {errorFavouriteItem && <p>Something went wrong ...</p>}
          {loadingFavouriteItem ? (
            <p>Loading ...</p>
          ) : (
            dataFavouriteItem?.favourites?.map((item) => (
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
                  </Card.Body>
                  <div className="d-flex gap-3">
                    <Button
                      variant="outline-dark"
                      className="mt-3 w-100"
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
                      className="mt-3 w-100"
                      onClick={() => {
                        handleAddToCart();
                      }}
                    >
                      Add to bag
                    </Button>
                  </div>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <ToastAddToCart showAddCart={showAddCart} setShowAddCart={setShowAddCart} />
      <ToastRemoveProduct showRemoveProduct={showRemoveProduct} setRemoveProduct={setRemoveProduct} />
    </section>
  );
}
