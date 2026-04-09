// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useInView,
//   useMotionValue,
//   useSpring,
// } from "framer-motion";
// import Link from "next/link";

// // ── Tag pill ──────────────────────────────────────────────────────────────────
// const Tag = ({ children }) => (
//   <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
//     {children}
//   </span>
// );

// // ── Inline SVG icons ──────────────────────────────────────────────────────────
// const Ico = ({ d, size = 22, sw = 1.8 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={sw}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d={d} />
//   </svg>
// );
// // ── Framer variants ───────────────────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 32 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const stagger = (delay = 0.1) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: delay } },
// });
// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.4 } },
// };
// const slideLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const slideRight = {
//   hidden: { opacity: 0, x: 40 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const mapLocs = [
//   {
//     name: "Chester County Food Bank",
//     cat: "Food",
//     addr: "650 Pennsylvania Dr, Exton PA",
//     color: "#f59e0b",
//   },
//   {
//     name: "City Gate",
//     cat: "Housing",
//     addr: "17 N 7th Ave, Coatesville, PA",
//     color: "#3b82f6",
//   },
//   {
//     name: "Chester County Hospital",
//     cat: "Health",
//     addr: "701 E Marshall St, West Chester, PA 19380",
//     color: "#ec4899",
//   },
//   {
//     name: "Chester County Library",
//     cat: "Education",
//     addr: "450 Exton Square Pkwy, Exton, PA 19341",
//     color: "#8b5cf6",
//   },
// ];

// const MapSection = () => {
//   const [active, setActive] = useState(null);
//   const [loc, setLoc] = useState("1");
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <section ref={ref} className="px-20 py-24 bg-[#d3efca]">
//       <motion.div
//         variants={stagger(0.1)}
//         initial="hidden"
//         animate={inView ? "show" : "hidden"}
//         className="text-center mb-12"
//       >
//         <motion.div variants={fadeUp}>
//           <Tag>Find Near You</Tag>
//         </motion.div>
//         <motion.h2
//           variants={fadeUp}
//           className="text-[#264653] font-black text-4xl mt-4"
//         >
//           Resources Across Chester County
//         </motion.h2>
//         <motion.p variants={fadeUp} className="text-gray-500 text-base mt-3">
//           Explore services by location — click a listing to reveal the address.
//         </motion.p>
//       </motion.div>

//       <div className="flex gap-6 h-115">
//         {/* Map */}
//         <motion.div
//           variants={slideLeft}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           className="flex-1 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(27,110,79,0.15)] border-2 border-white"
//         >
//           {loc == 1 ? (
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.481616115338!2d-75.68774092375905!3d40.06466797149842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65eff2f07257b%3A0x6f4e783bb07afb64!2sChester%20County%20Food%20Bank!5e0!3m2!1sen!2sus!4v1774755908719!5m2!1sen!2sus"
//               width="1100"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           ) : loc == 2 ? (
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.24227110913!2d-75.82475651876695!3d39.9833981906222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65be16f8e01db%3A0x49b662461a472efd!2sCity%20Gate!5e0!3m2!1sen!2sus!4v1774754527447!5m2!1sen!2sus"
//               width="1100"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           ) : loc == 3 ? (
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.6125990110772!2d-75.60375372376325!3d39.97241337151459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f15c1d303531%3A0x8111b92e6c468a89!2sChester%20County%20Hospital!5e0!3m2!1sen!2sus!4v1774756079164!5m2!1sen!2sus"
//               width="1100"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           ) : (
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.9398002956473!2d-75.62336592376047!3d40.032123471504036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f49d8aa4dbf9%3A0x19291068fc73c11b!2sChester%20County%20Library!5e0!3m2!1sen!2sus!4v1774756194135!5m2!1sen!2sus"
//               width="1100"
//               height="450"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           )}
//           {/* <iframe
//             title="Chester County Map"
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97777.97!2d-75.7957!3d39.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711000000000"
//             className="w-full h-full border-none"
//             allowFullScreen
//             loading="lazy"
//           /> */}
//         </motion.div>

//         {/* Location list */}
//         <motion.div
//           variants={slideRight}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           className="w-72 flex flex-col gap-3 overflow-y-auto"
//         >
//           {mapLocs.map((loc, i) => (
//             <motion.div
//               key={i}
//               onClick={() => {
//                 setActive(active === i ? null : i);
//                 setLoc(i + 1);
//               }}
//               whileHover={{ scale: 1.02 }}
//               className={`rounded-2xl px-4 py-4 cursor-pointer border-2 transition-all ${active === i ? "bg-white border-[#1B6E4F] shadow-[0_4px_20px_rgba(27,110,79,0.15)]" : "bg-white/70 border-transparent"}`}
//             >
//               <div className="flex items-center gap-2 mb-1.5">
//                 <div
//                   className="w-2.5 h-2.5 rounded-full flex-shrink-0"
//                   style={{ background: loc.color }}
//                 />
//                 <span
//                   className="text-[10px] font-black tracking-widest uppercase"
//                   style={{ color: loc.color }}
//                 >
//                   {loc.cat}
//                 </span>
//               </div>
//               <p className="font-bold text-[#264653] text-sm">{loc.name}</p>
//               <AnimatePresence>
//                 {active === i && (
//                   <motion.p
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="text-xs text-gray-400 mt-1.5 overflow-hidden"
//                   >
//                     {loc.addr}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//           <Link href="/resources">
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="mt-auto w-full bg-[#1B6E4F] text-white rounded-2xl py-3.5 font-bold text-sm shadow-[0_4px_16px_rgba(27,110,79,0.25)]"
//             >
//               View Resources →
//             </motion.button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MapSection;
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

const Tag = ({ children }) => (
  <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
    {children}
  </span>
);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const mapLocs = [
  {
    name: "Chester County Food Bank",
    cat: "Food",
    addr: "650 Pennsylvania Dr, Exton PA",
    color: "#f59e0b",
  },
  {
    name: "City Gate",
    cat: "Housing",
    addr: "17 N 7th Ave, Coatesville, PA",
    color: "#3b82f6",
  },
  {
    name: "Chester County Hospital",
    cat: "Health",
    addr: "701 E Marshall St, West Chester, PA 19380",
    color: "#ec4899",
  },
  {
    name: "Chester County Library",
    cat: "Education",
    addr: "450 Exton Square Pkwy, Exton, PA 19341",
    color: "#8b5cf6",
  },
];

const EMBEDS = {
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.481616115338!2d-75.68774092375905!3d40.06466797149842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65eff2f07257b%3A0x6f4e783bb07afb64!2sChester%20County%20Food%20Bank!5e0!3m2!1sen!2sus!4v1774755908719!5m2!1sen!2sus",
  2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6114.24227110913!2d-75.82475651876695!3d39.9833981906222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c65be16f8e01db%3A0x49b662461a472efd!2sCity%20Gate!5e0!3m2!1sen!2sus!4v1774754527447!5m2!1sen!2sus",
  3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.6125990110772!2d-75.60375372376325!3d39.97241337151459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f15c1d303531%3A0x8111b92e6c468a89!2sChester%20County%20Hospital!5e0!3m2!1sen!2sus!4v1774756079164!5m2!1sen!2sus",
  4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.9398002956473!2d-75.62336592376047!3d40.032123471504036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f49d8aa4dbf9%3A0x19291068fc73c11b!2sChester%20County%20Library!5e0!3m2!1sen!2sus!4v1774756194135!5m2!1sen!2sus",
};

const MapSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const locIndex = active + 1;

  return (
    <section ref={ref} className="px-4 sm:px-8 md:px-20 py-14 sm:py-24 bg-[#d3efca]">
      {/* Header */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center mb-8 sm:mb-12"
      >
        <motion.div variants={fadeUp}>
          <Tag>Find Near You</Tag>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-[#264653] font-black text-2xl sm:text-4xl mt-3 sm:mt-4"
        >
          Resources Across Chester County
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-3">
          Explore services by location — click a listing to reveal the address.
        </motion.p>
      </motion.div>

      {/* Location pill tabs — mobile only */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 md:hidden scrollbar-hide no-scrollbar"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {mapLocs.map((loc, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 border-[1.5px] transition-all ${
              active === i ? "text-white border-transparent" : "bg-white/70 border-transparent text-gray-500"
            }`}
            style={active === i ? { background: loc.color } : {}}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: active === i ? "rgba(255,255,255,0.7)" : loc.color }}
            />
            {loc.cat}
          </button>
        ))}
      </div>

      {/* Map — full width on mobile, stacked above list */}
      <div className="flex flex-col md:flex-row md:gap-6 md:h-[460px]">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="w-full md:flex-1 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(27,110,79,0.15)] border-2 border-white h-56 sm:h-72 md:h-full"
        >
          <iframe
            key={locIndex}
            src={EMBEDS[locIndex]}
            className="w-full h-full border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Location list — horizontal scroll on mobile, vertical sidebar on md+ */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="
            mt-4 md:mt-0
            flex flex-row md:flex-col
            gap-3
            overflow-x-auto md:overflow-y-auto md:overflow-x-hidden
            pb-1 md:pb-0
            md:w-72
            scrollbar-hide no-scrollbar
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {mapLocs.map((loc, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              className={`
                rounded-2xl px-4 py-4 cursor-pointer border-2 transition-all
                min-w-[200px] sm:min-w-[220px] md:min-w-0 flex-shrink-0 md:flex-shrink
                ${active === i
                  ? "bg-white border-[#1B6E4F] shadow-[0_4px_20px_rgba(27,110,79,0.15)]"
                  : "bg-white/70 border-transparent"
                }
              `}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: loc.color }}
                />
                <span
                  className="text-[10px] font-black tracking-widest uppercase"
                  style={{ color: loc.color }}
                >
                  {loc.cat}
                </span>
              </div>
              <p className="font-bold text-[#264653] text-sm">{loc.name}</p>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-gray-400 mt-1.5 overflow-hidden"
                  >
                    {loc.addr}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* CTA — hidden in horizontal scroll on mobile, shown below on sm+ */}
          <Link href="/resources" className="hidden sm:block md:mt-auto flex-shrink-0 md:flex-shrink">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#1B6E4F] text-white rounded-2xl py-3.5 font-bold text-sm shadow-[0_4px_16px_rgba(27,110,79,0.25)]"
            >
              View Resources →
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* CTA — shown on mobile below everything */}
      <Link href="/resources" className="block sm:hidden mt-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-[#1B6E4F] text-white rounded-2xl py-3.5 font-bold text-sm shadow-[0_4px_16px_rgba(27,110,79,0.25)]"
        >
          View Resources →
        </motion.button>
      </Link>
    </section>
  );
};

export default MapSection;
