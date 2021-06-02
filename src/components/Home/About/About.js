import React from "react";
import imageAbout from "../../../images/about.jpg";
import "./About.css";
import "./About.scss";
const About = () => {
  return (
    <section className="about py-4">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="image-about">
              <img className="img-fluid" src={imageAbout} alt="aboutImage" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center d-flex align-items-center">
            <div className="about-section ">
              <h1 className="about-us">About us</h1>
              <h4 className="dream">we are here to our dream!</h4>
              <h4 className="serve">Our team is here you.</h4>
              <small className="justify font-style-small">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                voluptatem cum et quis odit, id atque cupiditate accusantium nam
                pariatur minima quod inventore quam illo? Nulla excepturi
                voluptate inventore.pariatur minima quod inventore quam illo?
                Nulla excepturi voluptate inventore.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
