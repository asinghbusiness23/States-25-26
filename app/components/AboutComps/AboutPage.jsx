"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45 } },
};
const slideL = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideR = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

// ── useInView section wrapper ─────────────────────────────────────────────────
const InView = ({ children, className = "", delay = 0, once = true }) => {
  const ref = useRef(null);
  const visible = useInView(ref, { once, margin: "-72px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger(0.1)}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── SVG icons ─────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 20, sw = 1.8 }) => (
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
const SearchIco = () => (
  <Ico d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
);
const FilterIco = () => <Ico d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />;
const ZapIco = () => <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />;
const MapIco = () => (
  <Ico d="M3 7l6-4 6 4 6-4v14l-6 4-6-4-6 4V7z M9 3v14 M15 7v14" />
);
const HeartIco = () => (
  <Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
);
const UsersIco = () => (
  <Ico d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
);
const BriefIco = () => (
  <Ico d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
);
const ShieldIco = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const GlobeIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0c-1.66 2.6-2.5 5.28-2.5 7.5S10.34 14.9 12 17.5c1.66-2.6 2.5-5.28 2.5-7.5S13.66 4.6 12 2zM2.05 12h19.9" />
);
const EditIco = () => (
  <Ico d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
);
const AlertIco = () => (
  <Ico d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
);
const MailIco = () => (
  <Ico d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />
);
const PlusIco = () => <Ico d="M12 5v14M5 12h14" sw={2.5} />;
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2} />;
const CheckIco = () => <Ico d="M20 6L9 17l-5-5" sw={2.5} size={16} />;
const QuoteIco = () => (
  <Ico
    d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
    sw={1.5}
  />
);

// ── Reusable pill tag ─────────────────────────────────────────────────────────
const Tag = ({ children, light = false }) => (
  <span
    className={`inline-block text-[11px] font-black tracking-[0.12em] uppercase px-3 py-1 rounded-full ${
      light ? "bg-white/20 text-white" : "bg-[#d3efca] text-[#1B6E4F]"
    }`}
  >
    {children}
  </span>
);

// ── Section heading ───────────────────────────────────────────────────────────
const SectionHead = ({ tag, title, sub, light = false, center = false }) => (
  <div className={center ? "text-center" : ""}>
    <motion.div variants={fadeUp}>
      <Tag light={light}>{tag}</Tag>
    </motion.div>
    <motion.h2
      variants={fadeUp}
      className={`font-black text-3xl md:text-4xl mt-4 leading-tight ${light ? "text-white" : "text-[#264653]"}`}
    >
      {title}
    </motion.h2>
    {sub && (
      <motion.p
        variants={fadeUp}
        className={`mt-4 text-base leading-relaxed max-w-xl ${center ? "mx-auto" : ""} ${light ? "text-white/60" : "text-gray-400"}`}
      >
        {sub}
      </motion.p>
    )}
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// ABOUT PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function AboutPage() {
  const [formState, setFormState] = useState({
    type: "submit",
    name: "",
    email: "",
    msg: "",
    sent: false,
  });

  const handleSend = (e) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, sent: true }));
  };

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* ── 1. MISSION HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 pt-20 pb-28 overflow-hidden">
        {/* Decorative arcs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="900" cy="-80" r="380" fill="white" fillOpacity="0.03" />
          <circle
            cx="1100"
            cy="500"
            r="260"
            fill="#0cc883"
            fillOpacity="0.06"
          />
          <circle cx="-80" cy="400" r="300" fill="white" fillOpacity="0.04" />
        </svg>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <Tag light>Chester County, PA · Est. 2020</Tag>
          </motion.div>

          {/* Big quote */}
          <motion.div
            variants={fadeUp}
            className="mt-8 mb-6 flex justify-center text-[#0cc883]/40"
          >
            <QuoteIco size={40} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white leading-[1.08] tracking-tight"
          >
            We connect Chester County
            <br />
            residents to{" "}
            <span className="text-[#0cc883]">free, accessible</span>
            <br />
            resources.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Food, housing, health, jobs, and more — all in one place, built by
            the people who live here.
          </motion.p>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto"
          >
            {[
              ["200+", "Resources"],
              ["12,000+", "Residents helped"],
              ["Free", "Always"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="bg-white/10 backdrop-blur rounded-2xl py-5 px-3 border border-white/10"
              >
                <p className="text-2xl md:text-3xl font-black text-white">
                  {n}
                </p>
                <p className="text-xs text-white/50 font-semibold mt-1 tracking-wide">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
              fill="#F1FAEE"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. WHY THIS EXISTS ──────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-24 bg-[#F1FAEE]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <InView>
            <SectionHead
              tag="The Problem"
              title={"Help exists.\nFinding it doesn't."}
              sub="Chester County has dozens of amazing nonprofits, clinics, food banks, and shelters. But if you don't know where to look — or who to ask — getting help can feel impossible."
            />
            <motion.div
              variants={stagger(0.1)}
              className="mt-10 flex flex-col gap-4"
            >
              {[
                {
                  icon: <AlertIco />,
                  text: "People in crisis don't know where to turn first",
                },
                {
                  icon: <GlobeIco />,
                  text: "Resources are scattered across dozens of websites",
                },
                {
                  icon: <UsersIco />,
                  text: "Not everyone has a caseworker or social network to guide them",
                },
              ].map(({ icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-[#e8f5e1] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d3efca] flex items-center justify-center text-[#1B6E4F] flex-shrink-0">
                    {icon}
                  </div>
                  <p className="text-[#264653] font-semibold text-sm leading-relaxed pt-1.5">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </InView>

          <InView>
            <motion.div
              variants={slideR}
              className="relative bg-linear-to-br from-[#1B6E4F] to-[#264653] rounded-3xl p-10 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0cc883]/10 rounded-full blur-2xl" />
              <p className="text-[#0cc883] text-xs font-black tracking-widest uppercase mb-6">
                Our answer
              </p>
              <h3 className="text-2xl font-black leading-snug mb-6">
                One place.
                <br />
                Every resource.
                <br />
                No barriers.
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Search by what you need — not by who provides it",
                  "Filter instantly by category, urgency, and location",
                  "See everything on an interactive map",
                  "No login. No fee. No friction.",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0cc883] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIco />
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── 3. WHAT YOU CAN DO HERE ─────────────────────────────────────── */}
      <section className="bg-[#d3efca] px-6 md:px-20 py-24">
        <InView className="max-w-6xl mx-auto">
          <SectionHead
            tag="Features"
            title="What you can do here"
            sub="Chester Bridge translates a complicated landscape of services into a simple, human tool."
            center
          />

          <motion.div
            variants={stagger(0.08)}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <SearchIco />,
                title: "Search Resources",
                desc: "Type what you need — food, housing, mental health, jobs — and get results instantly from 200+ local organizations.",
                color: "#1B6E4F",
              },
              {
                icon: <FilterIco />,
                title: "Filter by Need",
                desc: "Narrow by category, urgency level, and location. Find immediate help or plan ahead — whatever fits your situation.",
                color: "#3b82f6",
              },
              {
                icon: <ZapIco />,
                title: "Immediate Help",
                desc: "A dedicated section surfaces shelters, food banks open today, and 24/7 crisis lines so urgent needs are never buried.",
                color: "#f59e0b",
              },
              {
                icon: <MapIco />,
                title: "Map View",
                desc: "Switch to an interactive map of Chester County and see exactly where resources are located — zoomable, pannable, clickable.",
                color: "#ec4899",
              },
            ].map(({ icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 40px rgba(27,110,79,0.14)",
                }}
                className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm border border-white transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: color + "18", color }}
                >
                  {icon}
                </div>
                <h3 className="font-black text-[#264653] text-base">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <motion.button
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#1B6E4F] mt-auto"
                >
                  Try it <ArrowIco />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </InView>
      </section>

      {/* ── 4. WHO IT'S FOR ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-24 bg-[#F1FAEE]">
        <InView className="max-w-6xl mx-auto">
          <SectionHead
            tag="Who It's For"
            title="Chester Bridge is for everyone"
            sub="Whether you're in crisis, helping a neighbor, or doing professional outreach — this tool was built with you in mind."
          />

          <motion.div
            variants={stagger(0.1)}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {[
              {
                emoji: "🏠",
                title: "Individuals & Families",
                color: "#1B6E4F",
                bg: "#d3efca",
                points: [
                  "Anyone facing food insecurity",
                  "Families in housing crisis",
                  "People navigating medical or mental health needs",
                  "Job seekers needing workforce support",
                ],
              },
              {
                emoji: "💼",
                title: "Case & Social Workers",
                color: "#3b82f6",
                bg: "#dbeafe",
                points: [
                  "Professionals connecting clients to services",
                  "Outreach workers in the field",
                  "School counselors and community liaisons",
                  "Healthcare navigators",
                ],
              },
              {
                emoji: "🤝",
                title: "Community Members",
                color: "#8b5cf6",
                bg: "#ede9fe",
                points: [
                  "Neighbors helping neighbors",
                  "Volunteers looking for where help is needed",
                  "Faith communities supporting congregation",
                  "Anyone who knows someone in need",
                ],
              },
            ].map(({ emoji, title, color, bg, points }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${color}22` }}
                className="bg-white rounded-2xl p-7 border-[1.5px] shadow-sm transition-all"
                style={{ borderColor: color + "33" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 flex-shrink-0"
                  style={{ background: bg }}
                >
                  {emoji}
                </div>
                <h3 className="font-black text-[#264653] text-lg mb-4">
                  {title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed"
                    >
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: bg }}
                      >
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </InView>
      </section>

      {/* ── 5. DATA SOURCING / TRUST ─────────────────────────────────────── */}
      <section className="bg-[#f8faf8] px-6 md:px-20 py-24">
        <InView className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHead
                tag="Our Data"
                title="Where the information comes from"
                sub="We take accuracy seriously. Every listing on Chester Bridge comes from a verified, public, or community-sourced origin."
              />

              <motion.div
                variants={stagger(0.09)}
                className="mt-10 flex flex-col gap-5"
              >
                {[
                  {
                    icon: <ShieldIco />,
                    color: "#1B6E4F",
                    bg: "#d3efca",
                    title: "Public Organizations",
                    desc: "County government agencies, hospital systems, registered nonprofits, and established community programs.",
                  },
                  {
                    icon: <UsersIco />,
                    color: "#8b5cf6",
                    bg: "#ede9fe",
                    title: "Community Submissions",
                    desc: "Any resident or professional can submit a resource. We review submissions before publishing to ensure accuracy.",
                  },
                  {
                    icon: <EditIco />,
                    color: "#f59e0b",
                    bg: "#fef3c7",
                    title: "Regular Updates",
                    desc: "We review listings on a rolling basis. If hours or contact info change, we want to know — and we update fast.",
                  },
                ].map(({ icon, color, bg, title, desc }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 bg-white rounded-2xl px-6 py-5 border border-[#e8f5e1] shadow-sm"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: bg, color }}
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="font-black text-[#264653] text-sm mb-1">
                        {title}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Disclaimer + accuracy pledge */}
            <motion.div variants={slideR} className="flex flex-col gap-6 mt-2">
              {/* Disclaimer box */}
              <div className="bg-[#fff8f0] border-[1.5px] border-[#fde68a] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#fef3c7] rounded-xl flex items-center justify-center text-[#d97706]">
                    <AlertIco />
                  </div>
                  <p className="font-black text-[#264653] text-sm">
                    Important Disclaimer
                  </p>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <strong className="text-[#264653]">
                    Chester Bridge does not provide services directly.
                  </strong>{" "}
                  We are a directory and discovery tool. All services,
                  eligibility requirements, and availability are determined by
                  the individual organizations listed. Please contact them
                  directly to confirm current information before visiting.
                </p>
              </div>

              {/* Accuracy pledge */}
              <div className="bg-white border border-[#d3efca] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-[#d3efca] rounded-xl flex items-center justify-center text-[#1B6E4F]">
                    <HeartIco />
                  </div>
                  <p className="font-black text-[#264653] text-sm">
                    Our Accuracy Pledge
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    "We verify every new listing before it goes live",
                    "We aim to update changed info within 48 hours of being notified",
                    "We mark listings as unverified if we can't confirm them",
                    "We remove listings that are no longer active",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-500"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#d3efca] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIco />
                      </div>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </InView>
      </section>

      {/* ── 6. COMMUNITY ANGLE ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1B6E4F] to-[#264653] px-6 md:px-20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="200" cy="400" r="300" fill="white" fillOpacity="0.03" />
            <circle
              cx="1000"
              cy="100"
              r="250"
              fill="#0cc883"
              fillOpacity="0.06"
            />
          </svg>
        </div>

        <InView className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHead
                tag="Community First"
                title={"Built by the\ncommunity,\nfor the community."}
                sub="Chester Bridge exists because of Chester County residents — people who saw a need and decided to do something about it."
                light
              />
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-4"
              >
                {[
                  {
                    icon: "📋",
                    text: "Anyone can submit a resource — no account needed",
                  },
                  {
                    icon: "✏️",
                    text: "Report incorrect info and we'll fix it fast",
                  },
                  {
                    icon: "🔄",
                    text: "We aim to keep every listing accurate and up to date",
                  },
                  {
                    icon: "💬",
                    text: "Community feedback shapes what we build next",
                  },
                ].map(({ icon, text }, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl px-5 py-4 border border-white/10"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <p className="text-white/80 text-sm font-medium leading-relaxed">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Team card */}
            <motion.div variants={slideR} className="flex flex-col gap-5">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/15">
                <p className="text-[#0cc883] text-xs font-black tracking-widest uppercase mb-5">
                  The Team
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      initials: "CB",
                      name: "Chester Bridge Team",
                      role: "Founders & Developers",
                      desc: "A group of Chester County residents who saw the gap and built the bridge.",
                    },
                    {
                      initials: "CC",
                      name: "Chester County Partners",
                      role: "Community Collaborators",
                      desc: "Local nonprofits, county agencies, and volunteers who help keep our data accurate.",
                    },
                  ].map(({ initials, name, role, desc }, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                        {initials}
                      </div>
                      <div>
                        <p className="text-white font-black text-sm">{name}</p>
                        <p className="text-[#0cc883] text-xs font-semibold mb-1">
                          {role}
                        </p>
                        <p className="text-white/55 text-xs leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners strip */}
              <div className="bg-white/10 backdrop-blur rounded-2xl px-6 py-5 border border-white/15">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">
                  Community Partners
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Chester Co. Government",
                    "United Way",
                    "PA 211",
                    "Catholic Social Services",
                    "Chester County Library",
                  ].map((p) => (
                    <span
                      key={p}
                      className="text-[11px] font-semibold text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </InView>
      </section>

      {/* ── 7. CONTACT / CONTRIBUTE ─────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-24 bg-[#F1FAEE]">
        <InView className="max-w-6xl mx-auto">
          <SectionHead
            tag="Get in Touch"
            title="Help us help everyone"
            sub="Whether you want to submit a resource, flag an error, or just say hello — we want to hear from you."
            center
          />

          {/* Action cards */}
          <motion.div
            variants={stagger(0.08)}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                emoji: "📋",
                title: "Submit a Resource",
                desc: "Know an organization, program, or service we're missing? Add it in under 2 minutes.",
                cta: "Submit Now",
                color: "#1B6E4F",
                bg: "#d3efca",
              },
              {
                emoji: "⚠️",
                title: "Report Incorrect Info",
                desc: "Spot outdated hours, wrong phone numbers, or a closed program? Let us know and we'll fix it.",
                cta: "Report an Issue",
                color: "#f59e0b",
                bg: "#fef3c7",
              },
              {
                emoji: "✉️",
                title: "General Contact",
                desc: "Questions, feedback, partnership inquiries, or anything else — reach out and a real person will respond.",
                cta: "Send a Message",
                color: "#8b5cf6",
                bg: "#ede9fe",
              },
            ].map(({ emoji, title, desc, cta, color, bg }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: `0 16px 48px ${color}1a` }}
                className="bg-white rounded-2xl p-7 border-[1.5px] shadow-sm flex flex-col gap-4 transition-all"
                style={{ borderColor: color + "33" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl text-3xl flex items-center justify-center flex-shrink-0"
                  style={{ background: bg }}
                >
                  {emoji}
                </div>
                <h3 className="font-black text-[#264653] text-base">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                  style={{ background: color, color: "white" }}
                >
                  {cta} <ArrowIco />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            className="bg-white rounded-3xl border border-[#d3efca] shadow-sm overflow-hidden max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#1B6E4F] to-[#2a9d6e] px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <MailIco />
                </div>
                <div>
                  <p className="text-white font-black text-base">
                    Send us a message
                  </p>
                  <p className="text-white/60 text-xs">
                    We read every message and respond within 2 business days.
                  </p>
                </div>
              </div>

              {/* Type toggle */}
              <div className="flex gap-2 mt-5">
                {[
                  { id: "submit", label: "Submit Resource" },
                  { id: "report", label: "Report Issue" },
                  { id: "general", label: "General" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() =>
                      setFormState((s) => ({ ...s, type: t.id, sent: false }))
                    }
                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                      formState.type === t.id
                        ? "bg-white text-[#1B6E4F]"
                        : "bg-white/15 text-white/70 hover:bg-white/25"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {formState.sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="px-8 py-12 flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 bg-[#d3efca] rounded-full flex items-center justify-center text-[#1B6E4F]">
                    <CheckIco size={28} />
                  </div>
                  <h3 className="font-black text-[#264653] text-xl">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    We'll review your message and get back to you within 2
                    business days.
                  </p>
                  <button
                    onClick={() =>
                      setFormState((s) => ({
                        ...s,
                        sent: false,
                        name: "",
                        email: "",
                        msg: "",
                      }))
                    }
                    className="text-[#1B6E4F] font-bold text-sm underline underline-offset-2 mt-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key={formState.type}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSend}
                  className="px-8 py-8 flex flex-col gap-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 tracking-wide">
                        Your name
                      </label>
                      <input
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        placeholder="Jane Smith"
                        className="bg-[#f8faf8] border border-[#e8f5e1] rounded-xl px-4 py-3 text-sm text-[#264653] placeholder-gray-300 outline-none focus:border-[#1B6E4F] transition-colors font-medium"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-500 tracking-wide">
                        Email address
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="jane@example.com"
                        className="bg-[#f8faf8] border border-[#e8f5e1] rounded-xl px-4 py-3 text-sm text-[#264653] placeholder-gray-300 outline-none focus:border-[#1B6E4F] transition-colors font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-500 tracking-wide">
                      {formState.type === "submit"
                        ? "Resource details (name, address, hours, phone)"
                        : formState.type === "report"
                          ? "What's wrong and which listing?"
                          : "Your message"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.msg}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, msg: e.target.value }))
                      }
                      placeholder={
                        formState.type === "submit"
                          ? "Organization name, address, what they offer, contact info..."
                          : formState.type === "report"
                            ? "E.g. 'Chester County Food Bank — phone number is wrong, should be...'"
                            : "Tell us what's on your mind..."
                      }
                      className="bg-[#f8faf8] border border-[#e8f5e1] rounded-xl px-4 py-3 text-sm text-[#264653] placeholder-gray-300 outline-none focus:border-[#1B6E4F] transition-colors font-medium resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 6px 24px rgba(27,110,79,0.28)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-black py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md"
                  >
                    <PlusIco /> Send Message
                  </motion.button>
                  <p className="text-center text-xs text-gray-300">
                    Or email us directly at{" "}
                    <a
                      href="mailto:hello@chesterbridge.org"
                      className="text-[#1B6E4F] font-semibold underline underline-offset-2"
                    >
                      hello@chesterbridge.org
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </InView>
      </section>

      {/* ── BOTTOM CTA STRIP ────────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-14 bg-[#d3efca]">
        <InView className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div variants={slideL}>
            <p className="text-[#1B6E4F] font-black text-xl md:text-2xl">
              Ready to find help — or help someone else find it?
            </p>
            <p className="text-[#4a7c6a] text-sm mt-2">
              Search 200+ resources across Chester County, right now.
            </p>
          </motion.div>
          <motion.div variants={slideR} className="flex gap-3 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1B6E4F] text-white font-bold px-7 py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.3)] flex items-center gap-2"
            >
              Find Resources <ArrowIco />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#1B6E4F] font-bold px-7 py-3.5 rounded-xl text-sm border-2 border-white flex items-center gap-2"
            >
              Submit a Resource <PlusIco />
            </motion.button>
          </motion.div>
        </InView>
      </section>
    </div>
  );
}
