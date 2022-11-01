import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FreeMode, Keyboard, Mousewheel, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import useGetProductByShoes from "../../hooks/hooksFilterType/useGetProductByShoes";
import { formatRupiah } from "../../lib/formatRupiah";

export default function Shoes() {
  const { dataProductByShoes, loadingProductByShoes, errorProductByShoes } = useGetProductByShoes();

  if (errorProductByShoes) return <p>Something went wrong ...</p>;

  return (
    <section id="shoes">
      <Container>
        <Row>
          <Col>
            <h3>Shoes</h3>
          </Col>
          <Col>
            <div className="text-end mb-3">
              <Button as={Link} to="/shoes" variant="outline-light" className="text-black me-3">
                Shop All
              </Button>
              <Button
                className="prev rounded-circle border-0 me-3"
                style={{ backgroundColor: "#D9D9D9", width: "40px", height: "40px" }}
              >
                <BsChevronLeft color="#000000" />
              </Button>
              <Button
                className="next rounded-circle border-0"
                style={{ backgroundColor: "#D9D9D9", width: "40px", height: "40px" }}
              >
                <BsChevronRight color="#000000" />
              </Button>
            </div>
          </Col>
        </Row>
        <Swiper
          freeMode={true}
          direction="horizontal"
          spaceBetween={20}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          mousewheel={{
            forceToAxis: true,
          }}
          keyboard={{
            enabled: true,
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            hide: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Keyboard, Mousewheel, Navigation, Scrollbar]}
          className="mySwiper"
        >
          {loadingProductByShoes ? (
            <p>Loading ...</p>
          ) : (
            dataProductByShoes.product?.map((item) => (
              <SwiperSlide key={item.id}>
                <Card className="border-0" style={{ width: "25rem" }}>
                  <Link to={`detail/${item.id}`}>
                    <Card.Img variant="top" src={item.image1} />
                    <Card.Body className="p-0 mt-3">
                      <Row>
                        <Col lg={8} md={12}>
                          <Card.Text className="m-0">{item.name}</Card.Text>
                          <Card.Text className="text-black-50">{item.title}</Card.Text>
                        </Col>
                        <Col lg={4} md={12}>
                          <Card.Text className="text-end">{formatRupiah(item.price)}</Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Link>
                </Card>
              </SwiperSlide>
            ))
          )}
          <div className="swiper-scrollbar mt-5"></div>
        </Swiper>
      </Container>
    </section>
  );
}
