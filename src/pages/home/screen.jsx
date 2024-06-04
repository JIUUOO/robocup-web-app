import { Container } from "react-bootstrap";
import "./style.css";

export default function Screen() {
  return (
    <Container>
      <div className="title-background position-absolute"></div>
      <div>
        <div className="video-container position-absolute d-flex justify-content-center align-items-center">
          <iframe
            className="video-content position-absolute"
            src="https://www.youtube.com/embed/QB5dvHHnSMk?si=H8vYmersBfckFq5m&autoplay=0&mute=1&loop=1&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=18&playlist=QB5dvHHnSMk"
            title="RoboCup RCAP Pyeongchang 2023"
            allow="autoplay;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="title-canvas"></div>
    </Container>
  );
}
