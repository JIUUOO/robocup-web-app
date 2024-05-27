import { Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function CardLg({ title, description }) {
  const descriptions = description.map((el) => {
    return <span className="d-block">&nbsp;{el}</span>;
  });
  return (
    <Col className="shadow border p-2 rounded mb-4">
      <h1 className="fw-semibold">{title}</h1>
      <p className="fs-5">{descriptions}</p>
    </Col>
  );
}
