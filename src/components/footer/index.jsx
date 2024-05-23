import { Container, Row, Col, Image } from "react-bootstrap";
import trade from "../../assets/images/footer/misintry-of-trade-industry-and-energy.jpg";
import tax from "../../assets/images/footer/national-tax-service.jpg";
import civil from "../../assets/images/footer/anti-corruption-and-civil-rights-commission.jpg";
import "./style.css";

export default function Footer() {
  return (
    <Container className="pt-5">
      <Row className="">
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center my-1"
        >
          <Image src={trade} fluid></Image>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center my-1"
        >
          <Image src={tax} fluid></Image>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center my-1"
        >
          <Image src={civil} fluid></Image>
        </Col>
      </Row>
      <Row className="py-3 py-md-5 text-center text-md-end">
        <p>
          <span class="d-block">
            <strong>한국로보컵협회</strong> | Tel : 070-4247-7485
          </span>
          <span class="d-block">
            주소: 서울시 서초구 서운로 13 중앙로얄 오피스텔 1308
          </span>
          <span class="d-block pt-4">
            Copyright © 한국로보컵협회. All rights reserved.
          </span>
        </p>
      </Row>
    </Container>
  );
}
