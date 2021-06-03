import React from "react";
import "./Schedule.css";
import "./Schedule.scss";
import class2 from "../../../images/class2.jpg";
import { FaCheckCircle } from "react-icons/fa";
const Schedule = () => {
  return (
    <div className="schedule py-4">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-7">
            <div className="image-service">
              <img src={class2} alt="serviceImage" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 text-center">
            <h2>Class Schedule</h2>
            <div className="row py-4">
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Monday</h5>
                  <small className="text-warning font-weight-bold">
                    8.00 AM - 9.00 AM
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Tuesday</h5>
                  <small className="text-warning font-weight-bold">
                    9.00 AM - 11.00 AM
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Sunday</h5>
                  <small className="text-warning font-weight-bold">
                    12.00 PM - 3.00 PM
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Wednesday</h5>
                  <small className="text-warning font-weight-bold">
                    2.00 PM - 4.00 PM
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Thursday</h5>
                  <small className="text-warning font-weight-bold">
                    5.00 PM - 7.00 PM
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 p-3">
                <div className="schedule-all shadow p-3">
                  <h5 className="mb-0">Friday</h5>
                  <small className="text-warning font-weight-bold">
                    8.00 PM - 10.00 PM
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <p className="text-justify text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              temporibus similique, excepturi veniam cumque repellat! Odit
              eligendi possimus quibusdam, corrupti commodi vel officia ea
              asperiores, mollitia doloremque autem ut natus odio? Quidem nemo
              eligendi neque aut vitae, recusandae consectetur numquam! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              temporibus similique, excepturi veniam cumque repellat! Odit
              eligendi possimus quibusdam, corrupti commodi vel officia ea
              asperiores, mollitia doloremque autem ut natus odio? Quidem nemo
              eligendi neque aut vitae, recusandae consectetur numquam!
            </p>
            <div className="package-area">
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Stronger Human Body</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Increased MetaBolism</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Increased Muscular Endurance</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Maximum Results in few Times</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Getting 6 packs package</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Stronger Muscles</h5>
              </div>
              <div className="single-package d-flex p-3">
                <FaCheckCircle className="mt-1" />
                <h5 className="mb-0 ml-4">Stronger Fitness</h5>
              </div>
            </div>
            <div className="float-right">
              <button className="join">Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
