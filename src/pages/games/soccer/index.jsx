import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import soccerLW1 from "../../../assets/images/leagues/native/soccer-lw-1.jpg";
import soccerLW2 from "../../../assets/images/leagues/native/soccer-lw-2.JPG";

export default function Soccer() {
  return (
    <Container>
      <h1>RoboCup Soccer</h1>
      <Row>
        <Col lg={6}>
          <Image className="soccer-image rounded" src={soccerLW1} />
        </Col>
        <Col lg={6}>
          <Image className="soccer-image rounded" src={soccerLW2} />
        </Col>
      </Row>
    </Container>
  );
}
