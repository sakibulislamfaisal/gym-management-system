import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Program from "../Program/Program";
import TrainCriteria from "../TrainCriteria/TrainCriteria";

const Home = () => {
  window.title = "Home";
  return (
    <div>
      <Navbar />
      <Banner />
      <TrainCriteria />
      <About />
      <Program />
      <Choose />
      <Footer />
    </div>
  );
};

export default Home;
