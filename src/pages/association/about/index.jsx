import { Container } from "react-bootstrap";
import "./style.css";

export default function About() {
  return (
    <div>
      <Container>
        <h1 className="mb-4">한국로보컵협회를 소개합니다.</h1>
        <div className="d-flex justify-content-center align-items-center">
          <iframe
            className="about-video"
            src="https://www.youtube.com/embed/OoY9wlojwzQ"
            title="국제 로봇월드컵 개막…“2050년 사람과도 경기할 것” / KBS  2023.12.08."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpplicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
}
