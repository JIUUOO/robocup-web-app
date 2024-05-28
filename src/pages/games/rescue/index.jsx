import { Container, Row } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "../style.css";
import rescueBasic1 from "../../../assets/images/leagues/native/rescue-basic-1.JPG";
import rescueLine1 from "../../../assets/images/leagues/native/rescue-line-1.jpg";
import rescueBasicRule from "../../../assets/files/RCJK2024_RescueBasic_RuleKR.pdf";
import rescueLineRule from "../../../assets/files/RCJK2024_RescueLine_RuleKR.pdf";
import rescueMazeRule from "../../../assets/files/RCJK2024_RescueMazeEntry_RuleKR.pdf";

export default function Rescue() {
  return (
    <Container className="p-3">
      <Row>
        <CardLg
          title="RoboCup Junior Rescue"
          description={[
            "외부의 조작 없이 경기가 진행되며 공을 드리블하여 상대의 골대 안으로 넣는 로봇 축구 경기입니다.",
            "한 팀당 2 대의 로봇을 출전시킬 수 있으며 정해진 로봇 디자인이나 프로그램은 없습니다.",
            "단, 크기와 무게 제한이 있습니다.",
          ]}
        />
      </Row>
      <Row>
        <CardSm
          grid="4"
          title="Rescue Basic"
          subtitle="베이직"
          image={rescueBasic1}
          ruleSrc={rescueBasicRule}
        />
        <CardSm
          grid="4"
          title="Rescue Line"
          subtitle="라인"
          image={rescueLine1}
          ruleSrc={rescueLineRule}
        />
        <CardSm
          grid="4"
          title="Rescue Maze Entry"
          subtitle="미로"
          image={""}
          ruleSrc={rescueMazeRule}
        />
      </Row>
    </Container>
  );
}
