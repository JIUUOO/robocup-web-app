import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar shadow" fixed="top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <Image src={rckaLogo} className="logo"></Image>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <NavDropdown title="한국로보컵협회" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/association/about"
                href="/association/about"
              >
                소개
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/association/committee"
                href="/association/committee"
              >
                위원회
              </NavDropdown.Item>
              <NavDropdown.Item>역사</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="로보컵 종목" id="basic-nav-dropdown">
              <NavDropdown.Item>Soccer</NavDropdown.Item>
              <NavDropdown.Item>Rescue</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="로보컵 대회" id="basic-nav-dropdown">
              <NavDropdown.Item>일정</NavDropdown.Item>
              <NavDropdown.Item>장소</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>공지사항</Nav.Link>
            <Nav.Link>후원문의</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
