import React from "react";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import BannerClass from "../BannerClass/BannerClass";
import Class from "../Class/Class";

const MainClass = () => {
  document.title = "classes";
  return (
    <div>
      <Navbar />
      <BannerClass />
      <Class />
      <Footer />
    </div>
  );
};

export default MainClass;
