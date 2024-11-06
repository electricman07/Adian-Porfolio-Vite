import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function mobileMenu() {
    setShowMenu(!showMenu);
  }

  // Navbar scroll
  useEffect(() => {
    const navbar = document.querySelector(".main-navbar");

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add("nav-active");
      } else {
        navbar.classList.remove("nav-active");
      }
    };
  }, []);

  return (
    <>
      <nav
        className="main-navbar h-12 w-screen flex justify-between items-center sticky top-0 px-5"
        id="navbar"
      >
        <div className="left-section">
          <Link
            className="logo-container flex justify-items-center items-center"
            to="/#home"
          >
            <img src="/assets/images/Logo.png" className="h-10 pl-5" />
            <h2 className="text-xl pl-10 max-sm:hidden">Adrian Popowich</h2>
          </Link>
        </div>

        <div className="nav-wrapper">
          <div
            className={`menu-icon ${showMenu ? "nav-active" : ""}`}
            onClick={mobileMenu}
          >
            <div className={`bar1 ${showMenu ? "bar1-active" : ""}`}></div>
            <div className={`bar2 ${showMenu ? "bar2-active" : ""}`}></div>
            <div className={`bar3 ${showMenu ? "bar3-active" : ""}`}></div>
          </div>
        </div>

        <div
          className={`nav-links-container ${showMenu ? "btn-active" : ""}`}
          onClick={mobileMenu}
        >
          <Link className="nav-link active" to="/#home">
            Home
          </Link>
          <Link className="nav-link" to="/#about">
            About
          </Link>
          <Link className="nav-link" to="/#portfolio">
            Portfolio
          </Link>

          <Link className="nav-link" to="/#contact">
            Contact
          </Link>
          <Link className="nav-link" to="/#sign-in">
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
