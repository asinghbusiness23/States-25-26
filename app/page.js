import Image from "next/image";
import Navbar from "./components/LayoutComps/Navbar";
import Hero from "./components/HomeComps/Hero";
import Categories from "./components/HomeComps/Categories";
import Footer from "./components/LayoutComps/Footer";
import Impact from "./components/HomeComps/Impact";
import FeaturedResources from "./components/HomeComps/FeaturedResources";
import Testimonials from "./components/HomeComps/Testimonials";
import GetInvolved from "./components/HomeComps/GetInvolved";
import MapSection from "./components/HomeComps/Map";
import FeaturedResources2 from "./components/HomeComps/FeaturedResources2";
import Impact2 from "./components/HomeComps/Impact2";
import GetInvolved2 from "./components/HomeComps/GetInvolved2";
import Navbar3 from "./components/LayoutComps/NavbarFinal";

export default function Home() {
  return (
    <div className="bg-[#F1FAEE]">
      <Navbar />
      {/* <Navbar3></Navbar3> */}
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedResources2></FeaturedResources2>
      {/* <Impact /> */}
      <Impact2></Impact2>
      <Testimonials />
      {/* <GetInvolved /> */}
      <GetInvolved2></GetInvolved2>
      <MapSection />
      <Footer></Footer>
    </div>
  );
}
