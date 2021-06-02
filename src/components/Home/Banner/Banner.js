import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Banner.css";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner py-5 my-2">
      <div className="container">
        <div
          className="row align-items-center text-white"
          style={{ height: "500px" }}
        >
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
            <h1 className="banner-header text-uppercase">
              The best fitness Studio in Town
            </h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aspernatur delectus, nam adipisci neque eum numquam.
              Itaque, alias facilis expedita dignissimos.
            </p>
            <Link to="/">
              {" "}
              <button className="join-us">Join us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
