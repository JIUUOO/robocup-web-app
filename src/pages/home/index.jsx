import { Container } from "react-bootstrap";
import Title from "./title";

export default function Home() {
  return (
    <section>
      <Container className="">
        <Title />
      </Container>
      <Container className="">
        <div>
          <div class="pt-4">
            <p class="fs-4 fw-light">
              <span class="d-lg-block">
                <span class="d-lg-none">&nbsp;</span>
                사단법인 한국로보컵협회(이하 RCKA)는 로봇을 연구하는 학생들을
                위해{" "}
              </span>
              <span class="d-lg-block">
                국가적 및 국제적 로봇 이벤트를 주최하는 프로젝트 중심의 교육
                증진 운동입니다.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
