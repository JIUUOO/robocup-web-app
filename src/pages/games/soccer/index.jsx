import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./style.css";
import "../style.css";
import soccerLW1 from "../../../assets/images/leagues/native/soccer-lw-1.jpg";
import soccerLW2 from "../../../assets/images/leagues/native/soccer-lw-2.JPG";
import soccerRule from "../../../assets/images/RCJK2024_soccer_LW_Open_Rule.pdf";
import { NavLink } from "react-router-dom";

export default function Soccer() {
  return (
    <Container className="">
      <h1 className="mb-4 fw-semibold">RoboCup Soccer</h1>
      <p className="fs-5 mb-4">
        <span className="d-block">
          &nbsp;외부의 조작 없이 경기가 진행되며 공을 드리블하여 상대의 골대
          안으로 넣는 로봇 축구 경기입니다.
        </span>
        <span className="d-block">
          &nbsp;한 팀당 2 대의 로봇을 출전시킬 수 있으며 정해진 로봇 디자인이나
          프로그램은 없습니다.
        </span>
        <span className="d-block">&nbsp;단, 크기와 무게 제한이 있습니다.</span>
      </p>
      <Row>
        <Col lg={6}>
          <h2 className="fw-semibold">Soccer LightWeight</h2>
          <p className="fs-5">&nbsp;적외선 공을 사용하여 경기가 진행됩니다.</p>
          <Image className="soccer-image rounded" src={soccerLW1} />
          <div className="d-flex justify-content-center">
            <Button variant="light" className="border my-3">
              <NavLink to={soccerRule}>규정 살펴보기</NavLink>
            </Button>
          </div>
        </Col>
        <Col lg={6}>
          <h2 className="fw-semibold">Soccer Open</h2>
          <p className="fs-5">
            &nbsp;주황색 플라스틱 공을 사용하여 경기가 진행됩니다.
          </p>
          <Image className="soccer-image rounded" src={soccerLW2} />
          <div className="d-flex justify-content-center">
            <Button variant="light" className="border my-3">
              <NavLink to={soccerRule}>규정 살펴보기</NavLink>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}