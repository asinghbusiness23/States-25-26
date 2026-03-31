import React from "react";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import Display from "../components/AuthComps/Display";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Display></Display>
      <Footer></Footer>
    </div>
  );
};

export default page;
