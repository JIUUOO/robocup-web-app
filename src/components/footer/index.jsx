import { Container, Row, Col, Image } from "react-bootstrap";
import trade from "../../assets/images/footer/misintry-of-trade-industry-and-energy.jpg";
import tax from "../../assets/images/footer/national-tax-service.jpg";
import civil from "../../assets/images/footer/anti-corruption-and-civil-rights-commission.jpg";
import "./style.css";

export default function Footer() {
  return (
    <div>
      <Container className="mt-5">
        <Row className="institutes mx-auto">
          <Col
            md={4}
            className="d-flex justify-content-start justify-content-md-center align-items-center my-1"
          >
            <Image src={trade} fluid></Image>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-start justify-content-md-center align-items-center my-1"
          >
            <Image src={tax} fluid></Image>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-start justify-content-md-center align-items-center my-1"
          >
            <Image src={civil} fluid></Image>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark">
        <Container className="p-0 mt-3 py-3 py-md-4 text-center text-md-end text-white">
          <p>
            <span className="d-block">
              <strong>한국로보컵협회</strong> | Tel : 070-4247-7485
            </span>
            <span className="d-block">
              주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308
            </span>
            <span className="d-block pt-2">
              Copyright © 한국로보컵협회. All rights reserved.
            </span>
          </p>
        </Container>
      </div>
    </div>
  );
}
