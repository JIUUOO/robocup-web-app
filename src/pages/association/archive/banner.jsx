import { Image, Row } from "react-bootstrap";
import "./style.css";

export default function Banner({ src }) {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Image className="archive-banner-content py-1" src={src} rounded />
    </Row>
  );
}
