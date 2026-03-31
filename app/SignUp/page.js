import React from "react";
import SignUp from "../components/AuthComps/SignUp";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SignUp />
      <Footer />
    </div>
  );
};

export default page;
