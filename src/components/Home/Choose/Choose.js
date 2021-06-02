import React from "react";
import "./Choose.css";
import "./Choose.scss";
import {
  MdPermContactCalendar,
  MdCardMembership,
  MdSchool,
} from "react-icons/md";
const Choose = () => {
  return (
    <section className="choose ">
      <div className="container">
        <h1 className="text-format mb-3">
          <strong className="format">WHY</strong> Choose Us
        </h1>
        <div className="row  ">
          <div className="col-xs-12 col-sm-12 col-md-4 ">
            <div className="card-one text-center shadow py-5">
              <MdPermContactCalendar
                size="2rem"
                color="purple"
                className="mb-3"
              />
              <h4 className="mb-3">FREE FITNESS TRAINING</h4>
              <small className="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                odit maxime accusantium ratione ut! Minima iste quibusdam hic
                optio eos!
              </small>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 ">
            <div className="card-one text-center shadow py-5">
              <MdSchool size="2rem" color="purple" className="mb-3" />
              <h4 className="mb-3">TONS OF CARDIO & STRENGTH</h4>
              <small className="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                odit maxime accusantium ratione ut! Minima iste quibusdam hic
                optio eos!
              </small>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 d-flex ">
            <div className="card-one text-center shadow py-5">
              <MdCardMembership size="2rem" color="purple" className="mb-3" />
              <h4 className="mb-3"> NO COMMITMENT MEMBERSHIPS</h4>
              <small className="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                odit maxime accusantium ratione ut! Minima iste quibusdam hic
                optio eos!
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
