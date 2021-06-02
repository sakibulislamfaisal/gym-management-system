import React from "react";
import "./TrainCriteria.css";
import "./TrainCriteria.scss";
import { FaMoneyBill } from "react-icons/fa";
import { MdAlarm, MdPeople } from "react-icons/md";
const TrainCriteria = () => {
  return (
    <div className="train-criteria py-4">
      <div className="container ">
        {" "}
        <div className="row  d-flex justify-content-center ">
          <div className="col-xs-12 col-sm-12 col-md-4  col-lg-12  text-center image-progression">
            <div className="">
              <MdAlarm color="white" size="3rem" className="font-weight-bold" />
              <h1 className="progression text-light">Progression</h1>
              <p className="justify text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam rem provident dolorem, ipsum veritatis voluptas ex
                tempora pariatur officia nesciunt?
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12   text-center image-workout">
            <div>
              <FaMoneyBill color="yellow" size="3rem" />
              <h1 className="workout">Workout</h1>
              <p className="justify text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam rem provident dolorem, ipsum veritatis voluptas ex
                tempora pariatur officia nesciunt?
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12  text-center image-nutrition">
            <div>
              <MdPeople
                color="white"
                size="3rem"
                className="font-weight-bold"
              />
              <h1 className="nutrition text-light">Nutrition</h1>
              <p className="justify text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam rem provident dolorem, ipsum veritatis voluptas ex
                tempora pariatur officia nesciunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainCriteria;
