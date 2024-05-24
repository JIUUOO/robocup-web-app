import { Container, Row, Col } from "react-bootstrap";

export default function Title() {
  return (
    // absolute wrapper
    <div className="title-wrapper position-absolute pt-0">
      <Container>
        <Row className="d-flex justify-content-lg-between">
          <Col xs={12} lg={6} className="">
            <span className="fs-3">RoboCup Korea Association</span>
            <h1 className="display-3 fw-bolder m-0">한국로보컵협회</h1>
          </Col>
          <Col xs={12} lg={6} className="text-xs-start text-lg-end">
            <h2 className="display-5 fw-semibold m-0">RoboCup Junior</h2>
            <h2 className="display-5 fw-semibold m-0">RoboCup</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
