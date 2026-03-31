import React from "react";
import AboutPage from "../components/AboutComps/AboutPage2";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default page;
