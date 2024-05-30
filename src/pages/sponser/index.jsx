import { Container } from "react-bootstrap";

export default function Sponser() {
  return (
    <Container>
      <h1>후원문의</h1>
      <p className="fs-5">
        <span className="d-block my-1">
          &nbsp;RCKA는 꿈나무 로봇 공학자들을 양성하고 있습니다.
        </span>
        <span className="d-block my-1">
          &nbsp;후원금은 모두 AI, Robotics 교육 증진을 위한 목적의 사업을 위해
          사용됩니다.
        </span>
        <span>
          <ul>
            <li>
              Contact: <a>x_iah@naver.com</a>
            </li>
          </ul>
        </span>
      </p>
    </Container>
  );
}
