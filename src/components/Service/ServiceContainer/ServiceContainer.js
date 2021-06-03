import React from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import BannerService from "../BannerService/BannerService";
import Schedule from "../Schedule/Schedule";

const ServiceContainer = () => {
  return (
    <div>
      <Navbar />
      <BannerService />
      <Schedule />
      <Footer />
    </div>
  );
};

export default ServiceContainer;
