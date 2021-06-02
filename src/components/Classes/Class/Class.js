import React from "react";
import "./Class.css";
import "./Class.scss";
import classes from "../../../images/class.png";
import class1 from "../../../images/class1.jpg";
import class2 from "../../../images/class2.jpg";
import class3 from "../../../images/class3.jpg";
import class4 from "../../../images/class4.jpg";
import class5 from "../../../images/class5.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Class = () => {
  window.title = "classes";
  return (
    <section className="class py-5 my-5 mb-0">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="class-image">
              <img src={classes} className="img-fluid" alt="classImage" />
              <Link to="">
                {" "}
                <button className="class-btn">
                  Physio Training <FaArrowRight className="ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4  ">
            {" "}
            <div className="class-image">
              <img src={class1} className="img-fluid" alt="classImage" />
              <Link to="">
                {" "}
                <button className="class-btn">
                  Self Defense <FaArrowRight className="ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4  ">
            {" "}
            <div className="class-image">
              <img src={class2} className="img-fluid" alt="classImage" />
              <Link to="">
                {" "}
                <button className="class-btn">
                  Advance Gym <FaArrowRight className="ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4  ">
            {" "}
            <div className="class-image">
              <img src={class3} className="img-fluid" alt="classImage" />
              <Link to="">
                {" "}
                <button className="class-btn">
                  Cardio Training <FaArrowRight className="ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4  ">
            {" "}
            <div className="class-image">
              <img src={class4} className="img-fluid" alt="classImage" />
              <button className="class-btn">
                Strength Training <FaArrowRight className="ml-2" />{" "}
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 ">
            {" "}
            <div className="class-image">
              <img src={class5} className="img-fluid" alt="classImage" />
              <Link to="">
                {" "}
                <button className="class-btn">
                  Physical Training <FaArrowRight className="ml-2" />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Class;
