import React, { useState } from "react";
import { Col, Row, ToggleButton } from "react-bootstrap";

export default function ButtonSizeShoes() {
  const [radioValue, setRadioValue] = useState("");

  const radios = [
    { name: "38", value: "38" },
    { name: "38.5", value: "38.5" },
    { name: "39", value: "39" },
    { name: "40", value: "40" },
    { name: "40.5", value: "40.5" },
    { name: "42", value: "42" },
    { name: "42.5", value: "42.5" },
    { name: "43", value: "43" },
    { name: "44", value: "44" },
    { name: "44.5", value: "44.5" },
    { name: "45", value: "45" },
  ];

  return (
    <>
      <Row className="gy-3">
        {radios.map((radio, idx) => (
          <Col lg={4} key={idx}>
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
