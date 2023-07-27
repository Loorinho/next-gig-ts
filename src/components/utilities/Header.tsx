import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/mylogo.png";
const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center px-4 py-3">
      <div>
        <Link to={"/home"}>
          <div className="logo flex items-center">
            <img src={Logo} alt="logo" width={60} />

            <p className="text-xl">
              My <span className="text-blue-700">NEXT</span> Gig
            </p>
          </div>
        </Link>
      </div>

      <nav>
        <ul className="flex justify-around items-center gap-3">
          <li>
            {" "}
            <NavLink to={"/home"}>Home</NavLink>
          </li>
          <li>About</li>
          <li>
            <NavLink to={"/gigs"}>Gigs</NavLink>
          </li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
