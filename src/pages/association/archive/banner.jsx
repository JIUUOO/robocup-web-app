import { Image, Row } from "react-bootstrap";
import "./style.css";

export default function Banner({ src }) {
  return (
    <Row className="">
      <Image className="archive-banner-content" src={src} />
    </Row>
  );
}
