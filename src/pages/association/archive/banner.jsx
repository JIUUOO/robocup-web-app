import { Image, Row, Col } from "react-bootstrap";
import "./style.css";

export default function Banner({ src }) {
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Image className="archive-banner-content" src={src} rounded />
    </Col>
  );
}
