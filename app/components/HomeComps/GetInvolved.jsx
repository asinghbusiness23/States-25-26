"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { MdReport } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

const HomeIco = () => (
  <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
);
const HeartIco = () => (
  <Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
);
const BookIco = () => (
  <Ico d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5" />
);
const ForkIco = () => (
  <Ico d="M3 2v7c0 1.7 1.3 3 3 3h1v10h2V12h1c1.7 0 3-1.3 3-3V2h-2v5H7V2H5v5H4V2H3zm14 0v20h2V2h-2z" />
);
const CalIco = () => (
  <Ico d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
);
const UsersIco = () => (
  <Ico d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
);
const GlobeIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-1.66 2.6-2.5 5.28-2.5 7.5S10.34 14.9 12 17.5c1.66-2.6 2.5-5.28 2.5-7.5S13.66 4.6 12 2zM2.05 12h19.9" />
);
const SunIco = () => (
  <Ico d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 5a7 7 0 100 14A7 7 0 0012 5z" />
);
const QuoteIco = () => (
  <Ico
    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
    sw={1.5}
  />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={17} sw={2} />;
const ChevIco = () => <Ico d="M6 9l6 6 6-6" size={14} sw={2.2} />;
// ── Tag pill ──────────────────────────────────────────────────────────────────
const Tag = ({ children }) => (
  <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
    {children}
  </span>
);
const CountUp = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(end);
  }, [inView, end, motionVal]);

  useEffect(
    () => spring.on("change", (v) => setDisplay(Math.floor(v))),
    [spring],
  );

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};
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
// ── Framer variants ───────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const involved = [
  {
    emoji: <MdReport></MdReport>,
    title: "Report an Issue",
    desc: "Notice information wrong or missing? Let us know and help keep our directory accurate.",
    cta: "Report Issue",
    link: "#",
  },
  {
    emoji: <CgNotes></CgNotes>,
    title: "Submit a Resource",
    desc: "Know an organization we're missing? Help us keep our directory complete and current.",
    cta: "Add Listing",
    link: "#",
  },
  {
    emoji: <IoChatbubbleOutline></IoChatbubbleOutline>,
    title: "Share Your Story",
    desc: "Your experience can inspire others. We'd love to feature community voices on our blog.",
    cta: "Tell Us",
    link: "#",
  },
  {
    emoji: <BiDonateHeart></BiDonateHeart>,
    title: "Donate",
    desc: "Help us maintain and grow free access to resources for every Chester County family.",
    cta: "Give Now",
    link: "/donate",
  },
];

const GetInvolved = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="px-20 py-24 bg-[#F1FAEE]">
      <div className="flex justify-between items-end mb-14">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <Tag>Make a Difference</Tag>
          <h2 className="text-[#264653] font-black text-4xl mt-3">
            Get Involved
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-gray-400 text-sm max-w-[260px] text-right leading-relaxed"
        >
          There are many ways to strengthen our community — find yours.
        </motion.p>
      </div>

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-4 gap-6"
      >
        {involved.map((opt, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 50px rgba(27,110,79,0.16)",
            }}
            className="bg-white rounded-2xl p-7 border border-[#d3efca] shadow-sm flex flex-col gap-3 transition-shadow"
          >
            <span className="text-4xl leading-none">{opt.emoji}</span>
            <h3 className="font-black text-[#264653] text-lg">{opt.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {opt.desc}
            </p>
            <Link
              href={opt.link}
              className=" text-center w-full mt-2 bg-linear-to-br from-[#1B6E4F] to-[#2a9d6e] text-white rounded-xl py-3 font-bold text-sm shadow-[0_2px_12px_rgba(27,110,79,0.22)]"
            >
              {opt.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GetInvolved;
