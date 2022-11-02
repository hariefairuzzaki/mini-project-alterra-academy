import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonSizeClothing from "./ButtonSizeClothing";
import ButtonSizeShoes from "./ButtonSizeShoes";
import useGetProductById from "../../hooks/useGetProductById";
import { formatRupiah } from "../../lib/formatRupiah";
import useAddToCart from "../../hooks/hooksCart/useAddToCart";
import useAddToFavourite from "../../hooks/hooksFavourites/useAddToFavourite";

export default function Detail() {
  const { dataProductById, loadingProductById, errorProductById } = useGetProductById();
  const { addToCart } = useAddToCart();
  const { addToFavourite } = useAddToFavourite();

  return (
    <section>
      <Container>
        {errorProductById && <p>Something went wrong ...</p>}
        {loadingProductById ? (
          <p>Loading ...</p>
        ) : (
          dataProductById.product?.map((item) => (
            <Row key={item.id}>
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

                <p>Select Size</p>

                {item.type === "clothing" ? <ButtonSizeClothing /> : <ButtonSizeShoes />}

                <div className="d-grid gap-2 mt-3">
                  <Button
                    variant="dark"
                    onClick={() => {
                      addToCart({
                        variables: {
                          id: item.id,
                          name: item.name,
                          title: item.title,
                          price: item.price,
                          size: item.size,
                          quantity: item.quantity,
                          type: item.type,
                          gender: item.gender,
                          image1: item.image1,
                          image2: item.image2,
                          image3: item.image3,
                          image4: item.image4,
                          description: item.description,
                        },
                      });
                    }}
                  >
                    Add to bag
                  </Button>
                  <Button
                    variant="outline-dark"
                    onClick={() => {
                      addToFavourite({
                        variables: {
                          id: item.id,
                          name: item.name,
                          title: item.title,
                          price: item.price,
                          size: item.size,
                          quantity: item.quantity,
                          type: item.type,
                          gender: item.gender,
                          image1: item.image1,
                          image2: item.image2,
                          image3: item.image3,
                          image4: item.image4,
                          description: item.description,
                        },
                      });
                    }}
                  >
                    Favourite <AiOutlineHeart />
                  </Button>
                </div>

                <p className="mt-3">{item.description}</p>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </section>
  );
}
