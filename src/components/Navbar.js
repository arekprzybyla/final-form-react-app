import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-menu">
          <Link to="/findagym" className="navbar-find-a-gym">
            FIND A GYM
          </Link>
          <Link to="/memberships" className="navbar-memberships">
            MEMBERSHIPS
          </Link>
        </div>

        <Link to="/" className="navbar-logo">
          <img className="logo" src="images/FINALFORM.png" alt="" />
        </Link>

        <div className="off_screen_menu" id={openLinks ? "open" : "closed"}>
          <ul>
            <Link
              to="/login"
              onClick={toggleNavbar}
              className="off_screen_menu_links"
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              onClick={toggleNavbar}
              className="off_screen_menu_links"
            >
              SIGN UP
            </Link>
            <Link
              to="/findagym"
              onClick={toggleNavbar}
              className="off_screen_menu_links"
            >
              FIND A GYM
            </Link>
            <Link
              to="/memberships"
              onClick={toggleNavbar}
              className="off_screen_menu_links"
            >
              MEMBERSHIPS
            </Link>
          </ul>
        </div>

        <div className="nav-profile">
          <Link to="/signup" className="navbar-join-us">
            SIGN UP
          </Link>
          <Link to="/login" className="navbar-login">
            LOGIN
          </Link>
        </div>
        <div
          class="ham_menu"
          id={openLinks ? "open" : "closed"}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
