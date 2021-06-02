import React from "react";
import "./Program.css";
import "./Program.scss";
import program from "../../../images/program.png";
import program1 from "../../../images/program1.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { MdAlarm, MdPeople } from "react-icons/md";
const Program = () => {
  return (
    <section className="program py-4">
      <div className="container">
        <h1 className="training-program">
          TRAINING <strong className="training">PROGRAMS</strong>
        </h1>
        <div className="row my-3 py-3">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="image-left ">
              <img src={program} className="img-fluid" alt="" />
              <Link to="/">
                {" "}
                <button className="training-btn">
                  Yoga Training Program{" "}
                  <FaArrowCircleRight size="2rem" color="purple" />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
            <div className="image-left">
              <img src={program1} className="img-fluid" alt="" />
              <Link to="/">
                {" "}
                <button className="training-btn">
                  Yoga Training Program{" "}
                  <FaArrowCircleRight size="2rem" color="purple" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
