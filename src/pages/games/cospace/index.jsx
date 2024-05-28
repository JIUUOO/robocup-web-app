import { Container, Row } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "../style.css";
import cospaceRescue from "../../../assets/images/leagues/native/cospace-ad.JPG";
import cospaceRescueRule from "../../../assets/files/RCJK2024_CospaceRescue_RuleKR.pdf";

export default function Cospace() {
  return (
    <Container className="p-3">
      <Row>
        <CardLg
          title="RoboCup CoSpace"
          description={["가상의 공간에서 주행해요"]}
        />
      </Row>
      <Row className="justify-content-center">
        <CardSm
          title="CoSpace Rescue"
          subtitle="레스큐"
          image={cospaceRescue}
          ruleSrc={cospaceRescueRule}
        />
      </Row>
    </Container>
  );
}
