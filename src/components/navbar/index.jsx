import rckaLogo from "../../images/logo/rcka-logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center h-16 mx-auto px-5 shadow-md ">
      <div>
        <NavLink to={"/"}>
          <img className="h-14" src={rckaLogo}></img>
        </NavLink>
      </div>
    </nav>
  );
}
