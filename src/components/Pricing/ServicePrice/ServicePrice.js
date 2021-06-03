import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ServicePrice.css";
import "./ServicePrice.scss";

const ServicePrice = () => {
  return (
    <div className="ServicePrice py-5 my-5 text-center">
      <h5 className="header-service">
        {" "}
        <strong className="training">Choose the offer </strong> that suits you.
      </h5>
      <small className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ea
        eum explicabo odio atque quos, excepturi eius aliquam iste delectus!
      </small>
      <div className="container">
        <div className="row py-3 m-5 justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-3 first-price m-4">
            <div className="first-section my-3">
              <h4 style={{ color: "yellow" }}>Billed Monthly</h4>
              <h3 className="text-uppercase text-light font-weight-bold">
                Advanced Plan
              </h3>
              <h1 style={{ color: "yellow", fontSize: "50px" }}>$140</h1>
              <div className="check text-light">
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Best Hosting</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">OutStanding</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Free Custom</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">
                  Happy Customers
                </strong> <br /> <br />
                <Link to="/">
                  <button className="join">Purchase</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 second-price m-4">
            <div className="second-section my-3">
              <h4 style={{ color: "yellow" }}>Billed Monthly</h4>
              <h3 className="text-uppercase text-light font-weight-bold">
                Basic Plan
              </h3>
              <h1 style={{ color: "yellow", fontSize: "50px" }}>$120</h1>
              <div className="check text-light">
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Best Hosting</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">OutStanding</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Free Custom</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1">Happy Customers</strong> <br /> <br />
                <Link to="/">
                  <button className="join my-4">Purchase</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 third-price m-4">
            <div className="third-section my-3">
              <h4 style={{ color: "yellow" }}>Billed Monthly</h4>
              <h3 className="text-uppercase text-light font-weight-bold">
                Beginners Plan
              </h3>
              <h1 style={{ color: "yellow", fontSize: "50px" }}>$100</h1>
              <div className="check text-light">
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Best Hosting</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">OutStanding</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">Free Custom</strong>
                <br />
                <FaCheck className=" text-light" />
                <strong className="p-1 py-1">
                  Happy Customers
                </strong> <br /> <br />
                <Link to="/">
                  <button className="join">Purchase</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePrice;
