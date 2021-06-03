import React from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import ServicePrice from "../ServicePrice/ServicePrice";
const PriceContainer = () => {
  return (
    <div>
      <Navbar />
      <ServicePrice />
      <Footer />
    </div>
  );
};

export default PriceContainer;
