"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const QuoteIco = () => (
  <Ico
    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
    sw={1.5}
  />
);

// ── Tag pill ──────────────────────────────────────────────────────────────────
const Tag = ({ children }) => (
  <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
    {children}
  </span>
);

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

const testimonials = [
  {
    name: "Maria G.",
    role: "West Chester Resident",
    quote:
      "Chester Bridge helped me find a food bank within walking distance the same day I reached out. I don't know what I would have done without it.",
    avatar: "MG",
  },
  {
    name: "James T.",
    role: "Coatesville Parent",
    quote:
      "My kids got signed up for after-school tutoring in under 10 minutes. The staff pointed me to three programs I never knew existed.",
    avatar: "JT",
  },
  {
    name: "Priya P.",
    role: "Downingtown Resident",
    quote:
      "After my job loss I needed help fast. Chester Bridge connected me to housing assistance and a job training workshop in the same afternoon.",
    avatar: "PS",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="bg-[#f8faf8] px-20 py-24">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center mb-14"
      >
        <motion.div variants={fadeUp}>
          <Tag>Community Voices</Tag>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-[#264653] font-black text-4xl mt-4"
        >
          Stories from Our Neighbors
        </motion.h2>
      </motion.div>

      <motion.div
        variants={stagger(0.13)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-3 gap-7"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -6,
              boxShadow: "0 16px 40px rgba(27,110,79,0.10)",
            }}
            className="bg-white rounded-2xl p-8 border border-[#d3efca] shadow-sm transition-shadow"
          >
            <div className="text-[#0cc883] mb-5">
              <QuoteIco />
            </div>
            <p className="text-[#264653] text-[15px] leading-[1.8] font-medium italic mb-7">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center text-white font-black text-sm">
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-[#264653] text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
