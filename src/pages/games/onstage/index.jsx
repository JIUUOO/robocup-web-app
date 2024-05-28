import { Container, Row } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "../style.css";
import onStage from "../../../assets/images/leagues/native/onstage.jpg";
import onStageRule from "../../../assets/files/RCJK2024_OnStage_RuleKR.pdf";

export default function Rescue() {
  return (
    <Container className="p-3">
      <Row className="justify-content-evenly">
        <CardLg title="RoboCup Junior OnStage" description={[""]} />
        <CardSm
          title="OnStage"
          description={[""]}
          image={onStage}
          ruleSrc={onStageRule}
        />
      </Row>
    </Container>
  );
}
