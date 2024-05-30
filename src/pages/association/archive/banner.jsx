import { Image, Row } from "react-bootstrap";
import "./style.css";

export default function Banner({ src }) {
  return (
    <Row className="d-flex justify-content-center align-items-center p-1 my-3 rounded">
      <Image className="archive-banner-content" src={src} rounded />
    </Row>
  );
}
