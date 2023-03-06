import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({link, query=""}) => {
  return (
    <nav id="navbar">
      <h2>
        <Link to={`${link}?q=${query}`}>
          <BiChevronLeft /> MovieHunter
        </Link>
      </h2>
    </nav>
  );
};

export default Navbar;
