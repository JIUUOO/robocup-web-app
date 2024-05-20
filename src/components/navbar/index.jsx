import rckaLogo from "../../images/logo/rcka-logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <h2>
        <NavLink to={"/"}>RCKA</NavLink>
      </h2>
      <h2>
        <NavLink to={"/association/about"}>About</NavLink>
      </h2>
    </div>
  );
}
