import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.PNG";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-5 text-danger text-light text-center mt-5">
      <div className="container">
        <div className="row">
          <div className=" col-xs-12 col-sm-12 col-md-3 footer-img ">
            <Link to="/">
              <img
                src={logo}
                alt="hot-onion-restaurant"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 py-5 mt-4 footer-text">
            <nav>
              <Link to="/" className="footer-text-title">
                Need Help?
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Help center
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Email Support
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Live Chat
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Gift Certificate
              </Link>{" "}
              <br />
              <Link to="/" className="footer-text-title">
                Send Us Feedback
              </Link>
            </nav>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 footer-text py-5 mt-4">
            <nav>
              <Link to="/" className="footer-text-title">
                Digital Resources
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                E-Book
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Articles
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Forums
              </Link>
            </nav>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 footer-text py-5 mt-4">
            <nav>
              <Link to="/" className="footer-text-title">
                Join Our Newsletter
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Get Exclusive News , features and updates
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Loss Academic Free
              </Link>
              <br />
              <Link to="/" className="footer-text-title">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
        <p className="text-center text-light mt-4 mb-0">
          Copyright &copy; {new Date().getFullYear()} Gym Management Training
          Center!
        </p>
        <strong className="text-light mb-0 name">Foyshal Rahman</strong>
      </div>
    </div>
  );
};

export default Footer;
