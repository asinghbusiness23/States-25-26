// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { UserAuth } from "@/app/context/AuthContext";
// import Link from "next/link";

// const allNavbarData = [
//   {
//     resources: [
//       { title: "Food Support", description: "Food banks & meal programs" },
//       { title: "Housing", description: "Shelters & rent assistance" },
//       { title: "Healthcare", description: "Clinics & therapy" },
//       { title: "Youth Programs", description: "Tutoring & after school" },
//     ],
//     home: [
//       {
//         title: "Welcome to Chesco Connect",
//         description: "Your central hub for community resources.",
//       },
//     ],
//     about: [
//       {
//         title: "Our Mission",
//         description: "Why Chesco Connect Exists",
//       },
//       {
//         title: "Team",
//         description: "Meet Our Leadership",
//       },
//     ],
//     blogs: [
//       {
//         title: "Community Stories",
//         description: "Placeholder",
//       },
//       {
//         title: "Volunteer Highlights",
//         description: "Placeholder",
//       },
//     ],
//     calendar: [
//       {
//         title: "Opcoming Evnts",
//         description: "Placeholder",
//       },
//       {
//         title: "Workshops",
//         description: "Placeholders",
//       },
//     ],
//   },
// ];

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const { session, loading } = UserAuth();
//   console.log("nb session:", session);
//   console.log(UserAuth);
//   console.log("nb loading: ", loading);

//   return (
//     <div className="w-full bg-[#F1FAEE] text-white flex items-center px-6 py-4 top-0 z-1000 shadow-sm">
//       {/* Logo */}
//       <div className="flex mr-auto">
//         {/* Logo */}
//         <h1 className="flex flex-col justify-center leading-tight text-[#1B6E4F]">
//           <span className="font-bold">Chester</span>
//           <span className="font-bold">Bridge</span>
//         </h1>
//       </div>

//       {/* CENTERED NAV LINKS */}
//       <div className="flex gap-10">
//         <button className="uppercase text-[#1B6E4F] hover:">
//           <Link href="/">Home</Link>
//         </button>
//         <button className="uppercase text-[#1B6E4F] ">
//           <Link href="/resources">Resources</Link>
//         </button>
//         <button className="uppercase text-[#1B6E4F] ">
//           <Link href="/about">About</Link>
//         </button>
//         <button className="uppercase text-[#1B6E4F]">
//           <Link href="/blogs">Blogs</Link>
//         </button>
//         <button className="uppercase text-[#1B6E4F]">References</button>
//       </div>

//       {/* Right Button */}
//       {session ? (
//         <div className="ml-auto">
//           <Link
//             className="relative overflow-hidden bg-[#1B6E4F] px-4 py-2 rounded-lg text-white font-semibold group"
//             href="/dashboard"
//           >
//             <span className="relative z-10">My Account</span>

//             {/* Shine effect */}
//             <span className="absolute inset-0 overflow-hidden rounded-lg">
//               <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-md transform skew-x-12 translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
//             </span>
//           </Link>
//         </div>
//       ) : (
//         <div className="ml-auto">
//           <Link
//             className="relative overflow-hidden bg-[#1B6E4F] px-4 py-2 rounded-lg text-white font-semibold group"
//             href="/SignIn"
//           >
//             <span className="relative z-10">Log In</span>

//             {/* Shine effect */}
//             <span className="absolute inset-0 overflow-hidden rounded-lg">
//               <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-md transform skew-x-12 translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
//             </span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Navbar;