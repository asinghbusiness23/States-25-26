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

export default function Home() {
  return (
    <div className="bg-[#F1FAEE]">
      <Navbar />
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedResources />
      <Impact />
      <Testimonials />
      <GetInvolved />
      <MapSection />
      <Footer></Footer>
    </div>
  );
}
