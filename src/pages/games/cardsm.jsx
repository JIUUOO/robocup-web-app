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
    <Col
      lg={col}
      className="shadow border p-0 bg-dark my-2 mb-lg-5 rounded overflow-hidden"
    >
      <div className="p-3 py-2 text-white">
        <h2 className="fw-semibold">{title}</h2>
      </div>
      <div className="rounded p-3 pt-2 bg-light h-100">
        <p className="fs-5">
          <span className="fs-5--description">{descriptions}</span>
        </p>
        <Image className="leaguesImage rounded" src={image} fluid />
        <div className="d-flex justify-content-center">
          <Button variant="light" className="border border-dark my-3">
            <NavLink
              to={"https://jiuuoo.github.io" + ruleSrc}
              target="_blank"
              className="text-decoration-none text-black fs-6"
            >
              규정 살펴보기
            </NavLink>
          </Button>
        </div>
      </div>
    </Col>
  );
}
