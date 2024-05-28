import { Col } from "react-bootstrap";

export default function CardLg({ col = 5, title, description }) {
  const descriptions = description.map((el) => {
    return <span className="d-block py-1">&nbsp;{el}</span>;
  });
  return (
    <Col lg={col} className="shadow-sm border p-3 mt-0 my-lg-2 mb-lg-5 rounded">
      <h1 className="fw-semibold">{title}</h1>
      <p className="fs-5">{descriptions}</p>
    </Col>
  );
}
