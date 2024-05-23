import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function Title() {
  return (
    <div className="title">
      <Row className="d-flex justify-content-between my-3">
        <Col xs={12} lg={6}>
          <span className="fs-4">RoboCup Korea Association</span>
          <h1 className="fw-bolder m-0">한국로보컵협회</h1>
        </Col>
        <Col xs={12} lg={6} className="text-xs-start text-lg-end">
          <h2 className="m-0">RoboCup Junior</h2>
          <h2 className="m-0">RoboCup</h2>
        </Col>
      </Row>
      <Row className="video mt-2">
        <iframe
          width="705"
          height="500"
          src="https://www.youtube.com/embed/QB5dvHHnSMk"
          title="RoboCup RCAP Pyeongchang 2023"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Row>
    </div>
  );
}
