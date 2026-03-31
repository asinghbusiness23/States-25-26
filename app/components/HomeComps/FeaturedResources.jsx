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

// const HomeIco = () => (
//   <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
// );
// const HeartIco = () => (
//   <Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
// );
// const BookIco = () => (
//   <Ico d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5" />
// );
// const ForkIco = () => (
//   <Ico d="M3 2v7c0 1.7 1.3 3 3 3h1v10h2V12h1c1.7 0 3-1.3 3-3V2h-2v5H7V2H5v5H4V2H3zm14 0v20h2V2h-2z" />
// );
// const CalIco = () => (
//   <Ico d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
// );
// const UsersIco = () => (
//   <Ico d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
// );
// const GlobeIco = () => (
//   <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-1.66 2.6-2.5 5.28-2.5 7.5S10.34 14.9 12 17.5c1.66-2.6 2.5-5.28 2.5-7.5S13.66 4.6 12 2zM2.05 12h19.9" />
// );
// const SunIco = () => (
//   <Ico d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 100 14A7 7 0 0012 5z" />
// );
// const QuoteIco = () => (
//   <Ico
//     d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
//     sw={1.5}
//   />
// );
// const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={17} sw={2} />;
// const ChevIco = () => <Ico d="M6 9l6 6 6-6" size={14} sw={2.2} />;
// // ── Tag pill ──────────────────────────────────────────────────────────────────
// const Tag = ({ children }) => (
//   <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
//     {children}
//   </span>
// );
// const CountUp = ({ end, suffix = "" }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   const motionVal = useMotionValue(0);
//   const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     if (inView) motionVal.set(end);
//   }, [inView, end, motionVal]);

//   useEffect(
//     () => spring.on("change", (v) => setDisplay(Math.floor(v))),
//     [spring],
//   );

//   return (
//     <span ref={ref}>
//       {display.toLocaleString()}
//       {suffix}
//     </span>
//   );
// };
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
// const featuredResources = [
//   {
//     tag: "Food",
//     title: "Chester County Food Bank",
//     desc: "Free groceries and prepared meals for families in need. Serving 6 distribution sites countywide.",
//     hours: "Mon–Fri 9am–5pm",
//     phone: "(610) 873-6000",
//     urgent: true,
//   },
//   {
//     tag: "Housing",
//     title: "Coatesville Shelter Network",
//     desc: "Emergency and transitional housing for individuals and families, with wraparound support services.",
//     hours: "24/7 Intake",
//     phone: "(610) 384-6970",
//     urgent: false,
//   },
//   {
//     tag: "Health",
//     title: "Community Health Clinics",
//     desc: "Sliding-scale primary care, dental, and mental health services regardless of insurance status.",
//     hours: "Mon–Sat 8am–6pm",
//     phone: "(610) 738-3922",
//     urgent: false,
//   },
//   {
//     tag: "Education",
//     title: "Chester County Library",
//     desc: "Free tutoring, workforce training, ESL classes, and digital literacy programs across 17 branches.",
//     hours: "Daily 9am–8pm",
//     phone: "(610) 280-2600",
//     urgent: false,
//   },
// ];

// const FeaturedResources = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   return (
//     <section ref={ref} className="px-20 py-24 bg-[#F1FAEE]">
//       <div className="flex justify-between items-end mb-12">
//         <motion.div
//           variants={slideLeft}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//         >
//           <Tag>Curated for You</Tag>
//           <h2 className="text-[#264653] font-black text-4xl mt-3">
//             Featured Resources
//           </h2>
//         </motion.div>
//         <motion.button
//           variants={fadeIn}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           whileHover={{ x: 4 }}
//           className="flex items-center gap-2 text-[#1B6E4F] font-bold text-sm bg-transparent border-none cursor-pointer"
//         >
//           <Link href = "/resources" className="flex">View All Resources <ArrowIco /></Link>
//         </motion.button>
//       </div>

//       <motion.div
//         variants={stagger(0.1)}
//         initial="hidden"
//         animate={inView ? "show" : "hidden"}
//         className="grid grid-cols-2 gap-6"
//       >
//         {featuredResources.map((r, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             whileHover={{
//               y: -6,
//               boxShadow: r.urgent
//                 ? "0 16px 48px rgba(12,200,131,0.2)"
//                 : "0 16px 48px rgba(27,110,79,0.12)",
//             }}
//             className={`bg-white rounded-2xl p-7 relative overflow-hidden shadow-sm border-[1.5px] transition-shadow ${r.urgent ? "border-[#0cc883]" : "border-[#d3efca]"}`}
//           >
//             {r.urgent && (
//               <span className="absolute top-4 right-4 bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
//                 HIGH NEED
//               </span>
//             )}
//             <Tag>{r.tag}</Tag>
//             <h3 className="text-[#264653] font-black text-lg mt-3 mb-2">
//               {r.title}
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed mb-4">
//               {r.desc}
//             </p>
//             <div className="flex gap-5 text-sm text-[#4a7c6a]">
//               <span>🕐 {r.hours}</span>
//               <span>📞 {r.phone}</span>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="mt-5 bg-[#d3efca] text-[#1B6E4F] text-sm font-bold px-5 py-2.5 rounded-xl"
//             >
//               Get Details →
//             </motion.button>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };
// export default FeaturedResources;
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

// ── Inline SVG icons ──────────────────────────────────────────────────────────
const Ico = ({ d, size = 22, sw = 1.8 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={17} sw={2} />;
const ChevLIco = () => <Ico d="M15 18l-6-6 6-6" size={18} sw={2.2} />;
const ChevRIco = () => <Ico d="M9 18l6-6-6-6" size={18} sw={2.2} />;
const PhoneIco = () => (
  <Ico
    d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"
    size={16}
  />
);
// ── Tag pill ──────────────────────────────────────────────────────────────────
const Tag = ({ children }) => (
  <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
    {children}
  </span>
);

// ── Framer variants ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

// ── Data ──────────────────────────────────────────────────────────────────────
const featuredResources = [
  {
    tag: "Food",
    title: "Chester County Food Bank",
    desc: "Free groceries and prepared meals for families in need. Serving 6 distribution sites countywide.",
    hours: "Mon–Fri 9am–5pm",
    phone: "(610) 873-6000",
    urgent: true,
  },
  {
    tag: "Housing",
    title: "Coatesville Shelter Network",
    desc: "Emergency and transitional housing for individuals and families, with wraparound support services.",
    hours: "24/7 Intake",
    phone: "(610) 384-6970",
    urgent: false,
  },
  {
    tag: "Health",
    title: "Community Health Clinics",
    desc: "Sliding-scale primary care, dental, and mental health services regardless of insurance status.",
    hours: "Mon–Sat 8am–6pm",
    phone: "(610) 738-3922",
    urgent: false,
  },
  {
    tag: "Education",
    title: "Chester County Library",
    desc: "Free tutoring, workforce training, ESL classes, and digital literacy programs across 17 branches.",
    hours: "Daily 9am–8pm",
    phone: "(610) 280-2600",
    urgent: false,
  },
];
const ClockIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={16} />
);

// ── Resource Card ─────────────────────────────────────────────────────────────
const ResourceCard = ({ r, active }) => (
  <motion.div
    animate={{
      scale: active ? 1 : 0.93,
      opacity: active ? 1 : 0.5,
    }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-white rounded-2xl p-7 relative overflow-hidden shadow-sm border-[1.5px] flex-shrink-0 w-full ${
      r.urgent ? "border-[#0cc883]" : "border-[#d3efca]"
    }`}
    style={{
      boxShadow: active
        ? r.urgent
          ? "0 20px 56px rgba(12,200,131,0.18)"
          : "0 20px 56px rgba(27,110,79,0.13)"
        : "none",
    }}
  >
    {r.urgent && (
      <span className="absolute top-4 right-4 bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
        HIGH NEED
      </span>
    )}
    <Tag>{r.tag}</Tag>
    <h3 className="text-[#264653] font-black text-xl mt-4 mb-2">{r.title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed mb-5">{r.desc}</p>
    <div className="flex gap-5 text-sm text-[#4a7c6a] mb-6">
      <span className="flex items-center">
        <ClockIco></ClockIco>&nbsp;{r.hours}
      </span>
      <span className="flex items-center">
        <PhoneIco></PhoneIco> &nbsp; {r.phone}
      </span>
    </div>
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-[#d3efca] text-[#1B6E4F] text-sm font-bold px-5 py-2.5 rounded-xl"
    >
      Get Details →
    </motion.button>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
const FeaturedResources = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const startX = useRef(null);
  const total = featuredResources.length;

  const prev = () => setActive((i) => Math.max(i - 1, 0));
  const next = () => setActive((i) => Math.min(i + 1, total - 1));

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    startX.current = null;
  };

  return (
    <section
      ref={ref}
      className="px-6 md:px-20 py-24 bg-[#F1FAEE] overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <Tag>Curated for You</Tag>
          <h2 className="text-[#264653] font-black text-4xl mt-3">
            Featured Resources
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <Link
            href="/resources"
            className="flex items-center gap-2 text-[#1B6E4F] font-bold text-sm hover:gap-3 transition-all"
          >
            View All Resources <ArrowIco />
          </Link>
        </motion.div>
      </div>

      {/* Carousel area */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Track */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Fade edges
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #F1FAEE, transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, #F1FAEE, transparent)",
            }}
          /> */}

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${active * 100}% - ${active * 24}px)` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {featuredResources.map((r, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0"
                  onClick={() => setActive(i)}
                  style={{ cursor: i !== active ? "pointer" : "default" }}
                >
                  <ResourceCard r={r} active={i === active} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <motion.button
            onClick={prev}
            disabled={active === 0}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:bg-[#d3efca]"
          >
            <ChevLIco />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {featuredResources.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 22 : 8,
                  height: 8,
                  background: i === active ? "#1B6E4F" : "#d3efca",
                }}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            disabled={active === total - 1}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:bg-[#d3efca]"
          >
            <ChevRIco />
          </motion.button>
        </div>

        {/* Counter */}
        <p className="text-center text-[#1B6E4F] text-xs font-bold mt-3 tracking-widest opacity-60">
          {active + 1} / {total}
        </p>
      </motion.div>
    </section>
  );
};

export default FeaturedResources;
