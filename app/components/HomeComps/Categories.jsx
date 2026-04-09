
// "use client";
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { FaHome, FaBriefcase } from "react-icons/fa";
// import { MdOutlineHealthAndSafety } from "react-icons/md";
// import { RiGraduationCapLine } from "react-icons/ri";
// import { CiForkAndKnife } from "react-icons/ci";

// // ─── Category data ─────────────────────────────────────────────────────────
// const CATEGORIES = [
//   {
//     id: "housing",
//     name: "Housing",
//     emoji: "🏠",
//     accent: "#3b82f6",
//     accentLight: "#eff6ff",
//     icon: <FaHome />,
//     tagline: "Find stable housing & shelter support",
//     description:
//       "Whether you're facing eviction, experiencing homelessness, or need emergency shelter, Chester County has programs designed to help you find safe, stable housing.",
//     details: [
//       "Emergency shelter and transitional housing placements",
//       "Rental assistance and eviction prevention programs",
//       "Utility shutoff prevention and energy assistance",
//       "First-time homebuyer counseling and down payment help",
//       "Affordable housing waitlists and Section 8 vouchers",
//     ],
//     who: "Renters, homeowners at risk, individuals experiencing homelessness, and families in housing crisis.",
//     tryHref: "/resources?cat=housing",
//   },
//   {
//     id: "health",
//     name: "Health",
//     emoji: "🏥",
//     accent: "#ec4899",
//     accentLight: "#fdf2f8",
//     icon: <MdOutlineHealthAndSafety />,
//     tagline: "Access medical, mental health & wellness care",
//     description:
//       "From free clinics to mental health counseling and substance use support, Chester County's health network ensures no one is left without care regardless of insurance status.",
//     details: [
//       "Low-cost and sliding-scale primary care clinics",
//       "Mental health therapy and crisis intervention",
//       "Substance use treatment and recovery support",
//       "Dental and vision assistance programs",
//       "Prescription assistance and medication access",
//     ],
//     who: "Uninsured and underinsured residents, individuals experiencing mental health challenges, and those in recovery.",
//     tryHref: "/resources?cat=health",
//   },
//   {
//     id: "education",
//     name: "Education",
//     emoji: "📚",
//     accent: "#06b6d4",
//     accentLight: "#ecfeff",
//     icon: <RiGraduationCapLine />,
//     tagline: "Learn, grow & unlock new opportunities",
//     description:
//       "Education is the foundation of long-term stability. Chester Bridge connects you to adult literacy programs, GED prep, workforce training, and college access resources throughout Chester County.",
//     details: [
//       "Adult literacy and basic skills programs",
//       "GED and high school equivalency classes",
//       "English as a Second Language (ESL) courses",
//       "Vocational and trade certification programs",
//       "College access, tutoring, and scholarship resources",
//     ],
//     who: "Adults seeking new skills, non-native English speakers, career changers, and students who need academic support.",
//     tryHref: "/resources?cat=education",
//   },
//   {
//     id: "food",
//     name: "Food",
//     emoji: "🍎",
//     accent: "#f59e0b",
//     accentLight: "#fffbeb",
//     icon: <CiForkAndKnife />,
//     tagline: "No one in Chester County should go hungry",
//     description:
//       "Our food resource network connects families, seniors, and individuals with food banks, meal programs, SNAP enrollment help, and community pantries — often with same-day access.",
//     details: [
//       "Food bank locations and pantry hours throughout the county",
//       "Hot meal programs and community kitchens",
//       "SNAP / food stamp enrollment assistance",
//       "WIC (Women, Infants & Children) program access",
//       "Senior meal delivery and nutrition programs",
//     ],
//     who: "Individuals and families facing food insecurity, seniors on fixed incomes, and those who need help enrolling in benefits.",
//     tryHref: "/resources?cat=food",
//   },
//   {
//     id: "jobs",
//     name: "Jobs",
//     emoji: "💼",
//     accent: "#8b5cf6",
//     accentLight: "#f5f3ff",
//     icon: <FaBriefcase />,
//     tagline: "Build a career with real support behind you",
//     description:
//       "From resume workshops and job placement services to small business grants and reentry employment support, Chester Bridge helps you take the next step in your career.",
//     details: [
//       "Resume writing, interview coaching & job placement",
//       "Workforce development and on-the-job training programs",
//       "Unemployment benefits enrollment assistance",
//       "Small business development and micro-grant resources",
//       "Reentry employment support for returning citizens",
//     ],
//     who: "Job seekers, career changers, entrepreneurs, recently incarcerated individuals, and those returning to the workforce.",
//     tryHref: "/resources?cat=jobs",
//   },
// ];

// // ─── Animation variants ────────────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const stagger = (d = 0.08) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: d } },
// });

// // ─── Modal ─────────────────────────────────────────────────────────────────
// const CategoryModal = ({ cat, onClose }) => (
//   <motion.div
//     key="backdrop"
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     onClick={onClose}
//     className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
//     style={{ background: "rgba(22,40,35,0.6)", backdropFilter: "blur(7px)" }}
//   >
//     <motion.div
//       key="panel"
//       initial={{ opacity: 0, y: 64, scale: 0.96 }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
//       }}
//       exit={{ opacity: 0, y: 40, scale: 0.97, transition: { duration: 0.22 } }}
//       onClick={(e) => e.stopPropagation()}
//       className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
//     >
//       {/* Header */}
//       <div
//         className="px-7 pt-8 pb-6 relative overflow-hidden"
//         style={{
//           background: `linear-gradient(135deg, ${cat.accent}16 0%, ${cat.accent}06 100%)`,
//         }}
//       >
//         <div
//           className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-10 pointer-events-none"
//           style={{ background: cat.accent }}
//         />
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors text-xl font-light"
//           aria-label="Close"
//         >
//           ×
//         </button>

//         <div
//           className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-sm"
//           style={{ background: cat.accentLight, color: cat.accent }}
//         >
//           {cat.icon}
//         </div>

//         <span
//           className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
//           style={{ background: cat.accent + "22", color: cat.accent }}
//         >
//           {cat.emoji} {cat.name}
//         </span>
//         <h2 className="text-[#264653] font-black text-2xl leading-snug mt-1">
//           {cat.tagline}
//         </h2>
//       </div>

//       {/* Body */}
//       <div className="px-7 pb-8 pt-5 flex flex-col gap-5">
//         <p className="text-gray-500 text-sm leading-relaxed">
//           {cat.description}
//         </p>

//         <div>
//           <p className="text-[#264653] font-black text-[10px] uppercase tracking-widest mb-3">
//             What's available
//           </p>
//           <ul className="flex flex-col gap-2">
//             {cat.details.map((d, i) => (
//               <li
//                 key={i}
//                 className="flex items-start gap-2.5 text-sm text-gray-600"
//               >
//                 <span
//                   className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
//                   style={{ background: cat.accent + "22", color: cat.accent }}
//                 >
//                   ✓
//                 </span>
//                 {d}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div
//           className="rounded-2xl px-4 py-3.5 text-sm"
//           style={{ background: cat.accentLight }}
//         >
//           <span className="font-black text-[#264653] text-[10px] uppercase tracking-wider">
//             Who this helps:{" "}
//           </span>
//           <span className="text-gray-500">{cat.who}</span>
//         </div>

//         <div className="flex gap-3 mt-1">
//           <button
//             onClick={onClose}
//             className="flex-1 py-3 rounded-xl border-[1.5px] border-[#e8f5e1] text-gray-400 text-sm font-bold hover:border-[#d3efca] hover:text-[#1B6E4F] transition-colors"
//           >
//             Close
//           </button>
//           <a
//             href={cat.tryHref}
//             className="flex-1 py-3 rounded-xl text-white text-sm font-black text-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
//             style={{
//               background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}bb)`,
//               boxShadow: `0 6px 20px ${cat.accent}44`,
//             }}
//           >
//             Try Now →
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   </motion.div>
// );

// // ─── Card ──────────────────────────────────────────────────────────────────
// const Card = ({ cat, onLearnMore }) => (
//   <motion.div
//     variants={fadeUp}
//     whileHover={{ y: -7, boxShadow: `0 24px 60px ${cat.accent}1e` }}
//     className="group bg-white rounded-2xl p-6 flex flex-col gap-4 border-[1.5px] border-[#e8f5e1] shadow-sm transition-shadow relative overflow-hidden"
//   >
//     {/* Hover glow */}
//     <div
//       className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//       style={{ background: cat.accent + "14" }}
//     />

//     {/* Icon */}
//     <div
//       className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl relative z-10 transition-transform duration-300 group-hover:scale-105"
//       style={{ background: cat.accentLight, color: cat.accent }}
//     >
//       {cat.icon}
//     </div>

//     {/* Text */}
//     <div className="relative z-10 flex-1">
//       <h3 className="font-black text-[#264653] text-lg mb-1.5">{cat.name}</h3>
//       <p className="text-gray-400 text-xs leading-relaxed">{cat.tagline}</p>
//     </div>

//     {/* Actions */}
//     <div className="flex gap-2 relative z-10">
//       <button
//         onClick={() => onLearnMore(cat)}
//         className="flex-1 text-xs font-bold py-2.5 rounded-xl border-[1.5px] border-[#e8f5e1] text-gray-500 hover:border-[#d3efca] hover:text-[#1B6E4F] transition-colors"
//       >
//         Learn More
//       </button>
//       <a
//         href={cat.tryHref}
//         className="flex-1 text-xs font-black py-2.5 rounded-xl text-white text-center transition-transform hover:scale-[1.03] active:scale-[0.97]"
//         style={{
//           background: `linear-gradient(135deg, ${cat.accent}ee, ${cat.accent}aa)`,
//           boxShadow: `0 4px 14px ${cat.accent}33`,
//         }}
//       >
//         Try Now →
//       </a>
//     </div>
//   </motion.div>
// );
// const Tag = ({ children }) => (
//   <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
//     {children}
//   </span>
// );

// // ─── Main export ───────────────────────────────────────────────────────────
// const Categories = () => {
//   const [activeModal, setActiveModal] = useState(null);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <>
//       <section
//         ref={ref}
//         className="bg-[#F1FAEE] py-20 px-6 md:px-20 relative overflow-hidden"
//       >
//         {/* Subtle dot grid texture */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-[0.35]"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, #1B6E4F20 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//           }}
//         />

//         {/* Header */}
//         <motion.div
//           variants={stagger(0.1)}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           className="text-center mb-14 relative z-10"
//         >
//           <motion.div
//             variants={fadeUp}
//             className="text-center text-[#264653] text-sm uppercase mb-3"
//           >
//             <Tag>Browse By Category</Tag>
//           </motion.div>
//           <motion.h2
//             variants={fadeUp}
//             className="text-center text-[#264653] font-semibold text-4xl mb-12"
//           >
//             What do you need help with?
//           </motion.h2>
//           <motion.p
//             variants={fadeUp}
//             className="text-gray-400 text-base max-w-md mx-auto"
//           >
//             Browse our five core categories — instantly find the right support
//             for you.
//           </motion.p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={stagger(0.07)}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto"
//         >
//           {CATEGORIES.map((cat) => (
//             <Card key={cat.id} cat={cat} onLearnMore={setActiveModal} />
//           ))}
//         </motion.div>
//       </section>

//       <AnimatePresence>
//         {activeModal && (
//           <CategoryModal
//             cat={activeModal}
//             onClose={() => setActiveModal(null)}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Categories;
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";

const CATEGORIES = [
  {
    id: "housing",
    name: "Housing",
    emoji: "🏠",
    accent: "#3b82f6",
    accentLight: "#eff6ff",
    icon: <FaHome />,
    tagline: "Find stable housing & shelter support",
    description:
      "Whether you're facing eviction, experiencing homelessness, or need emergency shelter, Chester County has programs designed to help you find safe, stable housing.",
    details: [
      "Emergency shelter and transitional housing placements",
      "Rental assistance and eviction prevention programs",
      "Utility shutoff prevention and energy assistance",
      "First-time homebuyer counseling and down payment help",
      "Affordable housing waitlists and Section 8 vouchers",
    ],
    who: "Renters, homeowners at risk, individuals experiencing homelessness, and families in housing crisis.",
    tryHref: "/resources?cat=housing",
  },
  {
    id: "health",
    name: "Health",
    emoji: "🏥",
    accent: "#ec4899",
    accentLight: "#fdf2f8",
    icon: <MdOutlineHealthAndSafety />,
    tagline: "Access medical, mental health & wellness care",
    description:
      "From free clinics to mental health counseling and substance use support, Chester County's health network ensures no one is left without care regardless of insurance status.",
    details: [
      "Low-cost and sliding-scale primary care clinics",
      "Mental health therapy and crisis intervention",
      "Substance use treatment and recovery support",
      "Dental and vision assistance programs",
      "Prescription assistance and medication access",
    ],
    who: "Uninsured and underinsured residents, individuals experiencing mental health challenges, and those in recovery.",
    tryHref: "/resources?cat=health",
  },
  {
    id: "education",
    name: "Education",
    emoji: "📚",
    accent: "#06b6d4",
    accentLight: "#ecfeff",
    icon: <RiGraduationCapLine />,
    tagline: "Learn, grow & unlock new opportunities",
    description:
      "Education is the foundation of long-term stability. Chester Bridge connects you to adult literacy programs, GED prep, workforce training, and college access resources throughout Chester County.",
    details: [
      "Adult literacy and basic skills programs",
      "GED and high school equivalency classes",
      "English as a Second Language (ESL) courses",
      "Vocational and trade certification programs",
      "College access, tutoring, and scholarship resources",
    ],
    who: "Adults seeking new skills, non-native English speakers, career changers, and students who need academic support.",
    tryHref: "/resources?cat=education",
  },
  {
    id: "food",
    name: "Food",
    emoji: "🍎",
    accent: "#f59e0b",
    accentLight: "#fffbeb",
    icon: <CiForkAndKnife />,
    tagline: "No one in Chester County should go hungry",
    description:
      "Our food resource network connects families, seniors, and individuals with food banks, meal programs, SNAP enrollment help, and community pantries — often with same-day access.",
    details: [
      "Food bank locations and pantry hours throughout the county",
      "Hot meal programs and community kitchens",
      "SNAP / food stamp enrollment assistance",
      "WIC (Women, Infants & Children) program access",
      "Senior meal delivery and nutrition programs",
    ],
    who: "Individuals and families facing food insecurity, seniors on fixed incomes, and those who need help enrolling in benefits.",
    tryHref: "/resources?cat=food",
  },
  {
    id: "jobs",
    name: "Jobs",
    emoji: "💼",
    accent: "#8b5cf6",
    accentLight: "#f5f3ff",
    icon: <FaBriefcase />,
    tagline: "Build a career with real support behind you",
    description:
      "From resume workshops and job placement services to small business grants and reentry employment support, Chester Bridge helps you take the next step in your career.",
    details: [
      "Resume writing, interview coaching & job placement",
      "Workforce development and on-the-job training programs",
      "Unemployment benefits enrollment assistance",
      "Small business development and micro-grant resources",
      "Reentry employment support for returning citizens",
    ],
    who: "Job seekers, career changers, entrepreneurs, recently incarcerated individuals, and those returning to the workforce.",
    tryHref: "/resources?cat=jobs",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

const CategoryModal = ({ cat, onClose }) => (
  <motion.div
    key="backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
    style={{ background: "rgba(22,40,35,0.6)", backdropFilter: "blur(7px)" }}
  >
    <motion.div
      key="panel"
      initial={{ opacity: 0, y: "100%", scale: 1 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.44, ease: [0.22, 1, 0.36, 1] },
      }}
      exit={{ opacity: 0, y: "100%", transition: { duration: 0.22 } }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
    >
      {/* Header */}
      <div
        className="px-5 sm:px-7 pt-6 sm:pt-8 pb-5 sm:pb-6 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${cat.accent}16 0%, ${cat.accent}06 100%)`,
        }}
      >
        {/* drag handle on mobile */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4 sm:hidden" />
        <div
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-10 pointer-events-none"
          style={{ background: cat.accent }}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-4 sm:right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors text-xl font-light"
          aria-label="Close"
        >
          ×
        </button>

        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl shadow-sm"
          style={{ background: cat.accentLight, color: cat.accent }}
        >
          {cat.icon}
        </div>

        <span
          className="text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-2 sm:mb-3"
          style={{ background: cat.accent + "22", color: cat.accent }}
        >
          {cat.emoji} {cat.name}
        </span>
        <h2 className="text-[#264653] font-black text-xl sm:text-2xl leading-snug mt-1">
          {cat.tagline}
        </h2>
      </div>

      {/* Body */}
      <div className="px-5 sm:px-7 pb-8 pt-4 sm:pt-5 flex flex-col gap-4 sm:gap-5">
        <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>

        <div>
          <p className="text-[#264653] font-black text-[10px] uppercase tracking-widest mb-3">
            What's available
          </p>
          <ul className="flex flex-col gap-2">
            {cat.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-black"
                  style={{ background: cat.accent + "22", color: cat.accent }}
                >
                  ✓
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl px-4 py-3.5 text-sm"
          style={{ background: cat.accentLight }}
        >
          <span className="font-black text-[#264653] text-[10px] uppercase tracking-wider">
            Who this helps:{" "}
          </span>
          <span className="text-gray-500">{cat.who}</span>
        </div>

        <div className="flex gap-3 mt-1">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border-[1.5px] border-[#e8f5e1] text-gray-400 text-sm font-bold hover:border-[#d3efca] hover:text-[#1B6E4F] transition-colors"
          >
            Close
          </button>
          <a
            href={cat.tryHref}
            className="flex-1 py-3 rounded-xl text-white text-sm font-black text-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}bb)`,
              boxShadow: `0 6px 20px ${cat.accent}44`,
            }}
          >
            Try Now →
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Card = ({ cat, onLearnMore }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -7, boxShadow: `0 24px 60px ${cat.accent}1e` }}
    className="group bg-white rounded-2xl p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 border-[1.5px] border-[#e8f5e1] shadow-sm transition-shadow relative overflow-hidden"
  >
    <div
      className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: cat.accent + "14" }}
    />

    <div
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-xl sm:text-2xl relative z-10 transition-transform duration-300 group-hover:scale-105"
      style={{ background: cat.accentLight, color: cat.accent }}
    >
      {cat.icon}
    </div>

    <div className="relative z-10 flex-1">
      <h3 className="font-black text-[#264653] text-base sm:text-lg mb-1">{cat.name}</h3>
      <p className="text-gray-400 text-xs leading-relaxed">{cat.tagline}</p>
    </div>

    <div className="flex gap-2 relative z-10">
      <button
        onClick={() => onLearnMore(cat)}
        className="flex-1 text-xs font-bold py-2.5 rounded-xl border-[1.5px] border-[#e8f5e1] text-gray-500 hover:border-[#d3efca] hover:text-[#1B6E4F] transition-colors"
      >
        Learn More
      </button>
      <a
        href={cat.tryHref}
        className="flex-1 text-xs font-black py-2.5 rounded-xl text-white text-center transition-transform hover:scale-[1.03] active:scale-[0.97]"
        style={{
          background: `linear-gradient(135deg, ${cat.accent}ee, ${cat.accent}aa)`,
          boxShadow: `0 4px 14px ${cat.accent}33`,
        }}
      >
        Try Now →
      </a>
    </div>
  </motion.div>
);

const Tag = ({ children }) => (
  <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
    {children}
  </span>
);

const Categories = () => {
  const [activeModal, setActiveModal] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section
        ref={ref}
        className="bg-[#F1FAEE] py-14 sm:py-20 px-4 sm:px-8 md:px-20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1B6E4F20 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-10 sm:mb-14 relative z-10"
        >
          <motion.div variants={fadeUp} className="text-center text-[#264653] text-sm uppercase mb-3">
            <Tag>Browse By Category</Tag>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-center text-[#264653] font-semibold text-3xl sm:text-4xl mb-4 sm:mb-12"
          >
            What do you need help with?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-base max-w-md mx-auto">
            Browse our five core categories — instantly find the right support for you.
          </motion.p>
        </motion.div>

        {/* Cards: 1-col → 2-col → 3-col → 5-col */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 max-w-7xl mx-auto"
        >
          {CATEGORIES.map((cat) => (
            <Card key={cat.id} cat={cat} onLearnMore={setActiveModal} />
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {activeModal && (
          <CategoryModal cat={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Categories;
