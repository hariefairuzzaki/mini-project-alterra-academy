import React, { useState } from "react";
import { Col, Row, ToggleButton } from "react-bootstrap";

export default function ButtonSizeClothing() {
  const [radioValue, setRadioValue] = useState("");

  const radios = [
    { name: "S", value: "S" },
    { name: "M", value: "M" },
    { name: "L", value: "L" },
    { name: "Xl", value: "XL" },
    { name: "2XL", value: "XXL" },
  ];

  return (
    <>
      <Row className="gx-3">
        {radios.map((radio, idx) => (
          <Col key={idx}>
            <ToggleButton
              id={`size-${radio.name}`}
              type="radio"
              name="size-radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
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
