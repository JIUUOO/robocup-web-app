import { Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CardSm({
  col = 5,
  title,
  description,
  image,
  ruleSrc,
}) {
  const descriptions = description.map((el) => {
    return <span className="d-block py-1">&nbsp;{el}</span>;
  });
  return (
    <Col lg={col} className="shadow-sm border p-3 my-2 mb-lg-5 rounded">
      <h2 className="fw-semibold">{title}</h2>
      <p className="fs-5">{descriptions}</p>
      <Image className="leaguesImage rounded" src={image} fluid />
      <div className="d-flex justify-content-center">
        <Button variant="white" className="border my-3">
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
