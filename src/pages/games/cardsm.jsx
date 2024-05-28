import { Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CardSm({ grid, title, subtitle, image, ruleSrc }) {
  return (
    <Col lg={grid} className="shadow border p-2 rounded mb-4">
      <h2 className="fw-semibold">{title}</h2>
      <p className="fs-5">&nbsp;{subtitle}</p>
      <Image className="leaguesImage rounded" src={image} fluid />
      <div className="d-flex justify-content-center">
        <Button variant="light" className="border my-3">
          <NavLink
            to={"https://jiuuoo.github.io" + ruleSrc}
            target="_blank"
            className="text-decoration-none text-black fs-6"
          >
            규정 살펴보기
          </NavLink>
        </Button>
      </div>
    </Col>
  );
}