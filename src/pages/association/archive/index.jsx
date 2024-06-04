import { Container, Row } from "react-bootstrap";
import Banner from "./banner";

import rcOpen2024 from "../../../assets/images/banners/rc-open-2024.png";
import rcap2024_1 from "../../../assets/images/banners/rcap-2023-1.png";
import rcap2024_2 from "../../../assets/images/banners/rcap-2023-2.jpg";
import coding2023 from "../../../assets/images/banners/coding-2023.jpg";

export default function Archive() {
  return (
    <Container>
      <h1 className="mb-4">로보컵 리그 역사를 소개합니다.</h1>
      <Row>
        <Banner src={rcOpen2024} />
        <Banner src={rcap2024_1} />
        <Banner src={rcap2024_2} />
        <Banner src={coding2023} />
      </Row>
    </Container>
  );
}
