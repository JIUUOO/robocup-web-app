import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function Title() {
  return (
    <Container>
      <Row className="title-text d-flex justify-content-lg-between">
        <Col xs={12} lg={6}>
          <span className="fs-3">RoboCup Korea Association</span>
          <h1 className="display-3 fw-bolder m-0">한국로보컵협회</h1>
        </Col>
        <Col xs={12} lg={6} className="text-xs-start text-lg-end">
          <h2 className="display-5 fw-semibold m-0">RoboCup Junior</h2>
          <h2 className="display-5 fw-semibold m-0">RoboCup</h2>
        </Col>
      </Row>
      <div>
        {/* <div className="pt-3 d-none">
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
        </div> */}
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/QB5dvHHnSMk?si=H8vYmersBfckFq5m&autoplay=0&mute=1&loop=1&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=18&playlist=QB5dvHHnSMk"
            title="RoboCup RCAP Pyeongchang 2023"
            allow="autoplay;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="title-canvas"></div>
    </Container>
  );
}
