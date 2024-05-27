import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Card from "../card";
import "./style.css";
import "../style.css";
import soccerLW1 from "../../../assets/images/leagues/native/soccer-lw-1.jpg";
import soccerLW2 from "../../../assets/images/leagues/native/soccer-lw-2.JPG";
import soccerRule from "../../../assets/files/RCJK2024_SoccerLW_Open_RuleKR.pdf";

export default function Soccer() {
  return (
    <Container className="p-3">
      <Row>
        <Col className="shadow border p-2 rounded mb-4">
          <h1 className="fw-semibold">RoboCup Junior Soccer</h1>
          <p className="fs-5">
            <span className="d-block">
              &nbsp;외부의 조작 없이 경기가 진행되며 공을 드리블하여 상대의 골대
              안으로 넣는 로봇 축구 경기입니다.
            </span>
            <span className="d-block">
              &nbsp;한 팀당 2 대의 로봇을 출전시킬 수 있으며 정해진 로봇
              디자인이나 프로그램은 없습니다.
            </span>
            <span className="d-block">
              &nbsp;단, 크기와 무게 제한이 있습니다.
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Card
          title="Soccer LightWeight"
          subtitle="적외선 공을 사용하여 경기가 진행됩니다."
          image={soccerLW1}
          ruleSrc={soccerRule}
        />
        <Card
          title="Soccer Open"
          subtitle="주황색 플라스틱 공을 사용하여 경기가 진행됩니다."
          image={soccerLW2}
          ruleSrc={soccerRule}
        />
      </Row>
    </Container>
  );
}
