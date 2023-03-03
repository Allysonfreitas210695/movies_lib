import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiChevronLeft /> MoviesHunter
        </Link>
      </h2>
    </nav>
  );
};

export default Navbar;
