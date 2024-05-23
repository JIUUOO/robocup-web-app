import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function Title() {
  return (
    <Container className="title d-flex flex-column justify-content-around">
      <Row className="d-flex justify-content-between">
        <Col xs={12} lg={6}>
          <span className="fs-3">RoboCup Korea Association</span>
          <h1 className="display-3 fw-bolder m-0">한국로보컵협회</h1>
        </Col>
        <Col xs={12} lg={6} className="text-xs-start text-lg-end">
          <h2 className="display-5 fw-semibold m-0">RoboCup Junior</h2>
          <h2 className="display-5 fw-semibold m-0">RoboCup</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mt-3">
        <iframe
          width="705"
          height="500"
          src="https://www.youtube.com/embed/QB5dvHHnSMk"
          title="RoboCup RCAP Pyeongchang 2023"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Row>
      <div>
        <div className="pt-4">
          <p className="fs-4 fw-light">
            <span className="d-lg-block">
              <span className="d-lg-none">&nbsp;</span>
              사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을 위해{" "}
            </span>
            <span className="d-lg-block">
              국가적 및 국제적 로봇 이벤트를 주최하는 프로젝트 중심의 교육 증진
              운동입니다.
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}
