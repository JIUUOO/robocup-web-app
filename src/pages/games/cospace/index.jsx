import { Container, Row } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "../style.css";
import cospaceRescue from "../../../assets/images/leagues/native/cospace-ad.JPG";
import cospaceRescueRule from "../../../assets/files/RCJK2024_CospaceRescue_RuleKR.pdf";
import cospaceAdRule from "../../../assets/files/RCJK2024_AutonomousDriving_RuleKR.pdf";

export default function Cospace() {
  return (
    <Container className="p-3">
      <Row className="justify-content-evenly">
        <CardLg
          title="RoboCup Junior CoSpace"
          description={[
            "주어진 필드에서 실제(Real) 로봇과 가상(Virtual) 로봇으로 진행되는 경기입니다.",
          ]}
        />
      </Row>
      <Row className="justify-content-evenly">
        <CardSm
          title="CoSpace Rescue"
          description={[
            "CoSpace 프로그램에서 실제·가상의 환경에서 오브젝트를 탐색 및 수집하는 경기입니다.",
            "1:1 토너먼트 방식으로 경기가 진행됩니다.",
          ]}
          image={""}
          ruleSrc={cospaceRescueRule}
        />
        <CardSm
          title="CoSpace Autonomous Driving"
          description={["[설명]"]}
          image={cospaceRescue}
          ruleSrc={cospaceAdRule}
        />
      </Row>
    </Container>
  );
}
