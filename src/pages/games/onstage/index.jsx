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
        <CardLg
          title="RoboCup Junior OnStage"
          description={[
            "3m𝗑3m 필드 내에서 로봇과 함께 퍼포먼스를 보이는 경기입니다.",
            "독창적이며 창의적인 아이디어로 로봇과 사람간의 상호작용을 표현하는 경기입니다.",
          ]}
        />
        <CardSm
          title="OnStage"
          description={["[설명]"]}
          image={onStage}
          ruleSrc={onStageRule}
        />
      </Row>
    </Container>
  );
}
