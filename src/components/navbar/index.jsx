import rckaLogo from "../../images/logo/rcka-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-8">
      <div>
        <img className="" src={rckaLogo}></img>
      </div>
    </nav>
  );
}
