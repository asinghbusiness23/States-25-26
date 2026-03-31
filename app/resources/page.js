import React from "react";
import Navbar from "../components/LayoutComps/Navbar";
import ResourcesPage from "../components/ResourcesComps/kewl2";
import Footer from "../components/LayoutComps/Footer";
const page = () => {
  return (
    <div className="bg-[#F1FAEE]">
      <Navbar></Navbar>
      <ResourcesPage />
      <Footer />
    </div>
  );
};

export default page;
