import React from "react";
import SignIn from "../components/AuthComps/SignIn";
import Navbar from "../components/LayoutComps/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <SignIn />
    </div>
  );
};

export default page;
