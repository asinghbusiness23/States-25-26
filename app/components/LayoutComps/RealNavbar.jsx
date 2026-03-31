"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allNavbarData = [
  {
    resources: [
      { title: "Food Support", description: "Food banks & meal programs" },
      { title: "Housing", description: "Shelters & rent assistance" },
      { title: "Healthcare", description: "Clinics & therapy" },
      { title: "Youth Programs", description: "Tutoring & after school" },
    ],
    home: [
      {
        title: "Welcome to Chesco Connect",
        description: "Your central hub for community resources.",
      },
    ],
    about: [
      {
        title: "Our Mission",
        description: "Why Chesco Connect Exists",
      },
      {
        title: "Team",
        description: "Meet Our Leadership",
      },
    ],
    blogs: [
      {
        title: "Community Stories",
        description: "Placeholder",
      },
      {
        title: "Volunteer Highlights",
        description: "Placeholder",
      },
    ],
    calendar: [
      {
        title: "Opcoming Evnts",
        description: "Placeholder",
      },
      {
        title: "Workshops",
        description: "Placeholders",
      },
    ],
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div
      className="w-full bg-[#F1FAEE] text-white flex items-center px-6 py-4 top-0 sticky z-1000 shadow-sm"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Logo */}
      <div className="flex">
        {/* Logo */}
        <h1 className="flex flex-col justify-center leading-tight text-[#1B6E4F]">
          <span className="font-bold">Chester</span>
          <span className="font-bold">Bridge</span>
        </h1>
      </div>

      {/* CENTERED NAV LINKS */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-10">
        <button
          onMouseEnter={() => setActiveMenu("home")}
          className="uppercase text-[#1B6E4F] "
        >
          <a href="/">Home</a>
        </button>
        <button
          onMouseEnter={() => setActiveMenu("resources")}
          className="uppercase text-[#1B6E4F] "
        >
          <a href="/resources">Resources</a>
        </button>
        <button
          onMouseEnter={() => setActiveMenu("about")}
          className="uppercase text-[#1B6E4F] "
        >
          <a href="/about">About</a>
        </button>
        <button
          onMouseEnter={() => setActiveMenu("blogs")}
          className="uppercase text-[#1B6E4F]"
        >
          <a href="/blogs">Blogs</a>
        </button>
        <button
          onMouseEnter={() => setActiveMenu("calendar")}
          className="uppercase text-[#1B6E4F]"
        >
          Calendar
        </button>
        FULL WIDTH MEGA MENU
        {/* <AnimatePresence>
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              transition={{ duration: 0.35 }}
              className="absolute left-0 top-11 w-[120%] bg-white text-black shadow-xl z-50 rounded-2xl -translate-x-[10%] border-black border-4"
            >
              <motion.div className="max-w-6xl mx-auto p-8 grid grid-cols-4 gap-8">
                {activeMenu === "resources" &&
                  allNavbarData[0].resources.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-3 hover:-skew-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}

                {activeMenu === "about" &&
                  allNavbarData[0].about.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}

                {activeMenu === "blogs" &&
                  allNavbarData[0].blogs.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}

                {activeMenu === "calendar" &&
                  allNavbarData[0].calendar.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}

                {activeMenu === "home" &&
                  allNavbarData[0].home.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>

      {/* Right Button */}
      <div className="ml-auto">
        <button className="relative overflow-hidden bg-[#1B6E4F] px-4 py-2 rounded-lg text-white font-semibold group">
          <span className="relative z-10">Log In</span>

          {/* Shine effect */}
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-md transform skew-x-12 translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
          </span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
