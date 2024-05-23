import { Container, Accordion } from "react-bootstrap";

export default function Intro() {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>한국로보컵협회는 어떤 단체인가요?</Accordion.Header>
          <Accordion.Body className="fs-6 text-start">
            한국로보컵협회 홈페이지를 방문해주신 여러분께 깊이 감사드립니다.
            로보컵 리그의 설립목적은 양질의 다양한 로봇교육 제공에 있습니다.
            RCKA는 참된 로봇교육에 뜻을 같이 하는 교육관련 종사자와
            자원봉사자들로 구성된 비영리 기관입니다. RCKA는 도전, 협동 및 경쟁
            촉면 등 교육에 필요한 여러가지를 모두 제공합니다. 청소년 학생들의
            경우 RCKA를 통하여 여러 로봇분야-전자, 하드웨어, 소프트웨어 등-에
            대한 기술능력을 직접 키울 수 있는 기회를 제공합니다. 아울러 친구들과
            함께 기술을 공유하면서 팀워크에 대해 배울 수 있는 동기부여를 받고
            특별한 경험을 할 수 있는 새로운 방법을 제시합니다. RCKA는 다양한
            참가자들이 우수한 로봇개발이라는 공동의 목표를 달성할 수 있는 팀으로
            함께 연구할 수 있는 기회를 제공합니다. 여러분의 끊임없는 격려와
            관심으로 성원해주시길 부탁드립니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>로보컵은 어떤 행사인가요?</Accordion.Header>
          <Accordion.Body className="fs-6 text-start">
            초등학생부터 대학생까지 로봇을 연구하는 학생들을 위해 매년 열리는
            로봇대회입니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
