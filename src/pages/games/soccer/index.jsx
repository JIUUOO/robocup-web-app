import { Container, Row } from "react-bootstrap";
import CardLg from "../cardlg";
import CardSm from "../cardsm";
import "./style.css";
import "../style.css";
import soccerLW1 from "../../../assets/images/leagues/native/soccer-lw-1.jpg";
import soccerLW2 from "../../../assets/images/leagues/native/soccer-lw-2.JPG";
import soccer from "../../../assets/images/leagues/native/soccer.gif";
import soccerRule from "../../../assets/files/RCJK2024_SoccerLW_Open_RuleKR.pdf";

export default function Soccer() {
  return (
    <Container className="p-3">
      <Row className="justify-content-evenly">
        <CardLg
          col="11"
          title="RoboCup Junior Soccer"
          description={[
            "외부의 조작 없이 로봇 스스로 공을 드리블하여 상대의 골대 안으로 넣는 로봇 축구 경기입니다.",
            "한 팀당 2 대의 로봇을 출전시킬 수 있으며 자유롭게 로봇을 디자인하고 프로그래밍할 수 있습니다.",
            "단, 정해진 최대 크기와 무게 제한이 있습니다.",
            "로봇이 흰색 선 밖으로 이탈하면 패널티를 부여하여 일정 시간동안 경기장에 들어올 수 없습니다.",
            "로봇은 다양한 센서를 사용해 주변의 환경을 탐지해야 합니다.",
          ]}
        />
        <CardSm
          title="Soccer LightWeight"
          description={["적외선 공을 사용하여 경기가 진행됩니다."]}
          image={soccerLW1}
          ruleSrc={soccerRule}
        />
        <CardSm
          title="Soccer Open"
          description={["주황색 플라스틱 공을 사용하여 경기가 진행됩니다."]}
          image={soccerLW2}
          ruleSrc={soccerRule}
        />
      </Row>

      <Row className="justify-content-evenly mt-5">
        <CardLg title="RoboCup Soccer" description={["휴머노이드!"]} />
        <CardSm
          title="Soccer LightWeight"
          description={["축구공!"]}
          image={soccer}
          ruleSrc={""}
        />
      </Row>
    </Container>
  );
}
