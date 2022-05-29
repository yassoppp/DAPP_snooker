import React from "react";
import { Card, Col, Row } from "antd";
import image from "../images/logo.png";

export default function CarteForm() {
  const cryptos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            {/* Note: Change currency.id to currency.uuid  */}
            <Card
              title="carte"
              hoverable
              extra={<img className="crypto-image" src={image} />}
            >
              <p>Price: </p>
              <p>Market Cap: </p>
              <p>Daily Change:</p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
