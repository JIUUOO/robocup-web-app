import { Container } from "react-bootstrap";
import Banner from "./banner";

import rcOpen2024 from "../../../assets/images/banners/rc-open-2024.png";

export default function Archive() {
  return (
    <Container>
      <h1>로보컵 역사를 소개합니다.</h1>
      <Banner src={rcOpen2024} />
    </Container>
  );
}
