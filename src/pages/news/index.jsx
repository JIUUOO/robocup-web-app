import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function News() {
  return (
    <Container>
      <h1>2024 창의코딩대회 제 n회를 개최합니다.</h1>
      <Row className="mt-4">
        <Col lg="6">
          <p className="fs-5">
            <ul>
              <li>일시: 8월 15일</li>
              <li>장소: 알펜시아 컨벤션 센터</li>
            </ul>
          </p>
        </Col>
        <Col lg="6">
          <div className="d-flex justify-content-center">
            <iframe
              className="news-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6499991126234!2d128.67074412655606!3d37.657431794290524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35618af4a4d08733%3A0x619f3b940306c8a8!2sAlpensia%20Convention%20Centre!5e0!3m2!1sen!2skr!4v1717043664779!5m2!1sen!2skr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
