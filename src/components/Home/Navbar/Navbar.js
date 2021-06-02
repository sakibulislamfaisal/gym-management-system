import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.PNG";
import "./Navbar.css";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg fixed-top navbar-dark bg-dark text-center ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* POWER <strong className="text-yellow">X</strong> */}
          <img src={logo} alt="power-x/gym" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-Link header-title " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link header-title " to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link header-title " to="/classes">
                Our Classes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link header-title " to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link header-title " to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link header-title " to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-Link header-title" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
