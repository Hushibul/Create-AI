import Classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <section className="container">
      <div className={`${Classes.navbar} d-flex`}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="d-none  d-lg-flex align-items-center gap-5 pt-2">
          <li className="labels">
            <Link to="">Brows</Link>
          </li>
          <li className="labels">
            <Link to="">All-Access Pass</Link>
          </li>
          <li className="labels">
            <Link to="">Coded Template</Link>
          </li>
          <li className="labels">
            <Link to="">3D Assist</Link>
          </li>
          <li className="labels">
            <Link to="">Tool</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-5 ms-auto pt-2">
          <Link to="" className="labels">
            Log in
          </Link>
          <Link to="" className={`${Classes.btn} labels`}>
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
