import rckaLogo from "../../assets/images/logo/robocup-korea-association.png";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar shadow fs-6"
      fixed="top"
    >
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
              <NavDropdown.Item
                as={NavLink}
                to="/association/archive"
                href="/association/archive"
              >
                역사
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="로보컵 종목" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/games/soccer"
                href="/games/soccer"
              >
                Soccer
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/games/rescue"
                href="/games/rescue"
              >
                Rescue
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/games/cospace"
                href="/games/cospace"
              >
                CoSpace
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/games/onstage"
                href="/games/onstage"
              >
                OnStage
              </NavDropdown.Item>
              {/* <NavDropdown.Item>Spike</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="로보컵 리그" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/news" href="/news">
                새로운 소식
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={NavLink}
                to="https://junior.robocup.org/"
                href="https://junior.robocup.org/"
                target="_blank"
              >
                RoboCup Junior
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="https://www.robocup.org/"
                href="https://www.robocup.org/"
                target="_blank"
              >
                RoboCup
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/notice" href="/#/notice">
              공지사항
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sponser" href="/#/sponser">
              후원문의
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
