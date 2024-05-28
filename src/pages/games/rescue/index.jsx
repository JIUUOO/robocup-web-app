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
      <Row className="justify-content-evenly">
        <CardLg
          title="RoboCup Junior Rescue"
          description={[
            "이 지역은 사람이 직접 부상자에게 접근하기 어려운 지형입니다.",
            "사람의 도움 없이 자율주행하는 로봇으로 부상자를 구조하는 경기입니다.",
            "시간과 미션 수행 점수로 순위가 정해집니다.",
          ]}
        />
        <CardSm
          title="Rescue Basic"
          description={[
            "평지 지형에서 교차로, 장애물을 통과하여 구역으로 이동해야 합니다.",
          ]}
          image={rescueBasic1}
          ruleSrc={rescueBasicRule}
        />
        <CardSm
          title="Rescue Line"
          description={[
            "우선 언덕, 교차로, 장애물이 있는 지형을 통과하여 부상자가 있는 대피구역으로 이동해야 합니다.",
            "대피구역에 도달하면 구급상자 운반하고 부상자를 안전한 대피소로 옮겨야 합니다.",
            "대피구역을 빠져나와 도착지까지 이동하면 게임이 종료됩니다.",
          ]}
          image={rescueLine1}
          ruleSrc={rescueLineRule}
        />
        <CardSm
          title="Rescue Maze Entry"
          description={["미로"]}
          image={""}
          ruleSrc={rescueMazeRule}
        />
      </Row>
    </Container>
  );
}
