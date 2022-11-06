import React from "react";
import { Col, Row, ToggleButton } from "react-bootstrap";

export default function ButtonSizeClothing({ pickSize, setPickSize }) {
  const size = [
    { name: "S", value: "S" },
    { name: "M", value: "M" },
    { name: "L", value: "L" },
    { name: "XL", value: "XL" },
    { name: "2XL", value: "XXL" },
  ];

  return (
    <>
      <Row className="gx-3">
        {size.map((radio, idx) => (
          <Col key={idx}>
            <ToggleButton
              id={`size-${radio.name}`}
              type="radio"
              name="size-radio"
              value={radio.value}
              checked={pickSize === radio.value}
              onChange={(e) => setPickSize(e.currentTarget.value)}
              variant="outline-dark"
              className="w-100"
            >
              {radio.name}
            </ToggleButton>
          </Col>
        ))}
      </Row>
    </>
  );
}
