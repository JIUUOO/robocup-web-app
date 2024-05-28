import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "../style.css";
import onStageRule from "../../../assets/files/RCJK2024_OnStage_RuleKR.pdf";

export default function Rescue() {
  return (
    <Container className="p-3">
      <Row>
        <CardLg title="RoboCup Junior OnStage" description={[""]} />
      </Row>
      <Row className="justify-content-center">
        <CardSm
          title="Onstage"
          subtitle="무대 공연"
          image={""}
          ruleSrc={onStageRule}
        />
      </Row>
    </Container>
  );
}
