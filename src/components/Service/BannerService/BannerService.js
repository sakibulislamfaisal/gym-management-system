import React from "react";
import { Link } from "react-router-dom";
import "./BannerService.css";
import "./BannerService.scss";

const BannerService = () => {
  return (
    <section className="banner py-5 my-2 text-center">
      <div className="container ">
        <div
          className="row justify-content-center align-content-center our-class text-white"
          style={{ height: "350px" }}
        >
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
            <h1 className="banner-header text-uppercase">Our Services</h1>
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

export default BannerService;
