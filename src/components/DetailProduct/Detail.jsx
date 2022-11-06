import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { formatRupiah } from "../../lib/formatRupiah";
import ButtonSizeClothing from "./ButtonSizeClothing";
import ButtonSizeShoes from "./ButtonSizeShoes";
import ToastAddToCart from "../Toast/ToastAddToCart";
import ToastAddToFav from "../Toast/ToastAddToFav";
import ToastAlreadyExist from "../Toast/ToastAlreadyExist";
import useAddToCart from "../../hooks/hooksCart/useAddToCart";
import useAddToFavourite from "../../hooks/hooksFavourites/useAddToFavourite";
import useFavouriteItem from "../../hooks/hooksFavourites/useFavouriteItem";
import useGetProductById from "../../hooks/hooksProduct/useGetProductById";
import useCartItem from "../../hooks/hooksCart/useCartItem";

export default function Detail() {
  const { addToCart } = useAddToCart();
  const { addToFavourite } = useAddToFavourite();
  const { dataCartItem } = useCartItem();
  const { dataFavouriteItem } = useFavouriteItem();
  const { dataProductById, loadingProductById, errorProductById } = useGetProductById();
  const [pickSize, setPickSize] = useState("");
  const [showAddCart, setShowAddCart] = useState(false);
  const [showAddFav, setShowAddFav] = useState(false);
  const [showAlreadyExist, setAlreadyExist] = useState(false);

  // conditional disable button
  const disabled = pickSize === "";

  // id product
  const productItems = dataProductById?.product?.map((item) => item.id) || [];

  // if product already in cart
  const cartItems = dataCartItem?.cart?.map((item) => item.product_id);
  const isInCart = cartItems?.some((item) => item === productItems[0]);

  // if product already in favourite
  const favouriteItems = dataFavouriteItem?.favourites?.map((item) => item.product_id);
  const isInFav = favouriteItems?.some((item) => item === productItems[0]);

  // handle add to favourite
  const handleAddToFav = () => {
    dataProductById?.product?.map(
      (item) =>
        addToFavourite({
          variables: {
            size: pickSize,
            id: item.id,
            name: item.name,
            title: item.title,
            price: item.price,
            type: item.type,
            gender: item.gender,
            image1: item.image1,
            image2: item.image2,
            image3: item.image3,
            image4: item.image4,
            description: item.description,
          },
        }),
      setShowAddFav(true)
    );
  };

  // handle add to cart
  const handleAddToCart = () => {
    dataProductById?.product?.map(
      (item) =>
        addToCart({
          variables: {
            size: pickSize,
            id: item.id,
            name: item.name,
            title: item.title,
            price: item.price,
            type: item.type,
            gender: item.gender,
            image1: item.image1,
            image2: item.image2,
            image3: item.image3,
            image4: item.image4,
            description: item.description,
          },
        }),
      setShowAddCart(true)
    );
  };

  return (
    <section>
      <Container>
        {errorProductById && <p>Something went wrong ...</p>}
        {loadingProductById ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          dataProductById.product?.map((item) => (
            <Row key={item.id} className="gy-4">
              <Col lg={8} md={8}>
                <Row className="gy-4">
                  <Col lg={6}>
                    <img src={item.image1} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image2} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image3} alt="Product" className="img-fluid" />
                  </Col>
                  <Col lg={6}>
                    <img src={item.image4} alt="Product" className="img-fluid" />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4}>
                <h2>{item.name}</h2>
                <p>{item.title}</p>
                <p>{formatRupiah(item.price)}</p>

                <p>Select Size*</p>

                {item.type === "clothing" ? (
                  <ButtonSizeClothing pickSize={pickSize} setPickSize={setPickSize} />
                ) : (
                  <ButtonSizeShoes pickSize={pickSize} setPickSize={setPickSize} />
                )}

                <div className="d-grid gap-2 mt-3">
                  <Button
                    variant="dark"
                    onClick={() => {
                      isInCart ? setAlreadyExist(true) : handleAddToCart();
                    }}
                    disabled={disabled}
                  >
                    Add to bag
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      isInFav ? setAlreadyExist(true) : handleAddToFav();
                    }}
                    disabled={disabled}
                  >
                    Favourite <AiOutlineHeart />
                  </Button>
                </div>

                <p className="mt-3">{item.description}</p>
              </Col>
            </Row>
          ))
        )}
        <ToastAddToCart showAddCart={showAddCart} setShowAddCart={setShowAddCart} />
        <ToastAddToFav showAddFav={showAddFav} setShowAddFav={setShowAddFav} />
        <ToastAlreadyExist showAlreadyExist={showAlreadyExist} setAlreadyExist={setAlreadyExist} />
      </Container>
    </section>
  );
}
