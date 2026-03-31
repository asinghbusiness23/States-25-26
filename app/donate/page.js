import React from "react";
import DonatePage from "../components/DonateComps/donate";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DonatePage></DonatePage>
      <Footer></Footer>
    </div>
  );
};

export default page;
