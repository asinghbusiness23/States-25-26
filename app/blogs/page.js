import React from "react";
import Navbar from "../components/LayoutComps/Navbar";
import Footer from "../components/LayoutComps/Footer";
import BlogsPage from "../components/BlogComps/BlogPage";

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogsPage />
      <Footer />
    </div>
  );
};

export default page;