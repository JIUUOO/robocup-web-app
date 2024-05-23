import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

export default function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand>
          <NavLink to={"/"}>
            <Image src={rckaLogo} className="logo"></Image>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="한국로보컵협회" id="basic-nav-dropdown">
              <NavDropdown.Item>협회 소개</NavDropdown.Item>
              <NavDropdown.Item>역사</NavDropdown.Item>
              <NavDropdown.Item>후원 안내</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
