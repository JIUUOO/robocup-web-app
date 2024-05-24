import { Container } from "react-bootstrap";
import Screen from "./screen";
import Title from "./title";
import Intro from "./intro";

export default function Home() {
  return (
    <div>
      <Title />
      <Screen />
      <Intro />
    </div>
  );
}
