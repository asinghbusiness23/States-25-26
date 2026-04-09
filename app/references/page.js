import React from "react";
import ReferencesPage from "../components/ReferencesComps/References";
import Footer from "../components/LayoutComps/Footer";
import Navbar from "../components/LayoutComps/Navbar";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ReferencesPage></ReferencesPage>
      <Footer></Footer>
    </div>
  );
};

export default page;
