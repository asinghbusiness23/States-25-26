"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ── Variants ──────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 18, sw = 1.8 }) => (
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
const ImageIco = () => (
  <Ico
    d="M21 15l-5-5L5 20M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zM9 9a2 2 0 100-4 2 2 0 000 4z"
    size={22}
  />
);
const CheckIco = () => (
  <Ico
    d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
    size={22}
  />
);
const ClipboardIco = () => (
  <Ico
    d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2M9 2h6a1 1 0 010 2H9a1 1 0 010-2z"
    size={22}
  />
);
const CodeIco = () => <Ico d="M16 18l6-6-6-6M8 6l-6 6 6 6" size={22} />;
const BookIco = () => (
  <Ico
    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2 2 0 012-2h14v13H6.5A2.5 2.5 0 004 17z"
    size={22}
  />
);
const LinkIco = () => (
  <Ico
    d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
    size={16}
  />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={15} sw={2} />;
const CalendarIco = () => (
  <Ico
    d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
    size={22}
  />
);
const UsersIco = () => (
  <Ico
    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    size={22}
  />
);

// ── Section card ──────────────────────────────────────────────────────────────
const Section = ({ icon, label, accent, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-7 py-5 text-left group"
      >
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
          style={{ background: `${accent}22`, color: accent }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p
            style={{ color: accent }}
            className="text-[10px] font-black tracking-widest uppercase mb-0.5"
          >
            {label}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/40"
        >
          <Ico d="M6 9l6 6 6-6" size={18} sw={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-7 border-t border-white/10 pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Pill badge ────────────────────────────────────────────────────────────────
const Pill = ({ children, color = "#0cc883" }) => (
  <span
    className="inline-flex items-center text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
    style={{ background: `${color}22`, color }}
  >
    {children}
  </span>
);

// ── Library row ───────────────────────────────────────────────────────────────
const LibRow = ({ name, version, purpose, color = "#0cc883", href }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className="flex items-center gap-4 bg-white/5 rounded-2xl px-4 py-3 border border-white/10 group"
  >
    <div
      className="w-2 h-2 rounded-full flex-shrink-0"
      style={{ background: color }}
    />
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-white font-bold text-sm">{name}</p>
        {version && (
          <span className="text-[10px] font-black text-white/30 bg-white/10 px-1.5 py-0.5 rounded-md">
            {version}
          </span>
        )}
      </div>
      <p className="text-white/50 text-xs mt-0.5">{purpose}</p>
    </div>
    {href && (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-white/20 hover:text-[#0cc883] transition-colors opacity-0 group-hover:opacity-100"
      >
        <LinkIco />
      </a>
    )}
  </motion.div>
);

// ── Checklist item ────────────────────────────────────────────────────────────
const CheckRow = ({ label, checked = true }) => (
  <div className="flex items-start gap-3 py-2.5 border-b border-white/8 last:border-0">
    <div
      className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${checked ? "bg-[#0cc883]" : "bg-white/10 border border-white/20"}`}
    >
      {checked && (
        <svg
          width={11}
          height={11}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </div>
    <p className="text-white/80 text-sm leading-relaxed">{label}</p>
  </div>
);

// ── Plan of work row ──────────────────────────────────────────────────────────
const PlanRow = ({ date, member, task, hours, status }) => {
  const statusColors = {
    Complete: "#0cc883",
    "In Progress": "#f59e0b",
    Planned: "#3b82f6",
  };
  const c = statusColors[status] || "#8b5cf6";
  return (
    <div className="grid grid-cols-[90px_1fr_1fr_50px_90px] gap-3 items-center py-3 border-b border-white/8 last:border-0 text-sm">
      <p className="text-white/40 text-xs font-semibold">{date}</p>
      <p className="text-white/70 text-xs">{member}</p>
      <p className="text-white/80 font-semibold text-xs leading-snug">{task}</p>
      <p className="text-white/50 text-xs text-center">{hours}h</p>
      <span
        className="text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded-full text-center"
        style={{ background: `${c}22`, color: c }}
      >
        {status}
      </span>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// REFERENCES PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function ReferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B6E4F] via-[#165c42] to-[#264653]">
      {/* Decorative bg */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="1100" cy="-80" r="380" fill="white" fillOpacity="0.03" />
        <circle cx="-80" cy="700" r="300" fill="#0cc883" fillOpacity="0.05" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-10">
        {/* ── HEADER ────────────────────────────────── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <motion.p
            variants={fadeUp}
            className="inline-block bg-white/15 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            Chester Bridge
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 mb-2"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(12,200,131,0.35)] flex-shrink-0">
              <BookIco />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
                References
              </h1>
              <p className="text-white/50 text-sm mt-0.5">
                Credits, sources, and project documentation
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── SECTIONS ──────────────────────────────── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          {/* 1 · Image Sources */}
          <Section
            icon={<ImageIco />}
            label="Image & Media Sources"
            accent="#ec4899"
          >
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              All visual media used throughout Chester Bridge has been sourced
              from royalty-free platforms that permit free use for personal and
              educational projects.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                {
                  platform: "Unsplash",
                  url: "https://unsplash.com",
                  license: "Unsplash License",
                  note: "Free to use for commercial and non-commercial purposes. No attribution required.",
                  color: "#ec4899",
                },
                {
                  platform: "Freepik",
                  url: "https://www.freepik.com",
                  license: "Freepik Free License",
                  note: "Free for personal and educational use with attribution to Freepik.",
                  color: "#f59e0b",
                },
              ].map((s) => (
                <div
                  key={s.platform}
                  className="bg-white/5 rounded-2xl p-5 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-white font-black text-base">
                      {s.platform}
                    </p>
                    <Pill color={s.color}>{s.license}</Pill>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed mb-3">
                    {s.note}
                  </p>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0cc883] text-xs font-bold hover:underline"
                  >
                    <LinkIco /> {s.url}
                  </a>
                </div>
              ))}
            </div>
            <div className="bg-[#ec4899]/10 border border-[#ec4899]/25 rounded-2xl px-4 py-3">
              <p className="text-white/70 text-xs leading-relaxed">
                <span className="text-[#ec4899] font-bold">Attribution:</span>{" "}
                Where required by license, attribution is provided in the image
                alt text and/or captions within the application. 
              </p>
            </div>
          </Section>

          {/* 2 · Libraries & Technologies */}
          <Section
            icon={<CodeIco />}
            label="Libraries & Technologies"
            accent="#3b82f6"
          >
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Chester Bridge was built using modern open-source tools. All
              libraries are used under their respective open-source licenses
              (MIT unless noted).
            </p>

            <div className="mb-4">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Frontend Framework
              </p>
              <div className="flex flex-col gap-2">
                <LibRow
                  name="Next.js"
                  version="14"
                  purpose="React framework — routing, SSR, and app directory"
                  color="#ffffff"
                  href="https://nextjs.org"
                />
                <LibRow
                  name="React"
                  version="18"
                  purpose="UI component library and state management"
                  color="#61dafb"
                  href="https://react.dev"
                />
                <LibRow
                  name="Tailwind CSS"
                  version="3"
                  purpose="Utility-first CSS framework for styling"
                  color="#38bdf8"
                  href="https://tailwindcss.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Animation
              </p>
              <div className="flex flex-col gap-2">
                <LibRow
                  name="Framer Motion"
                  version="11"
                  purpose="Production-grade animation and gesture library"
                  color="#ff0055"
                  href="https://www.framer.com/motion/"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Backend & Database
              </p>
              <div className="flex flex-col gap-2">
                <LibRow
                  name="Supabase"
                  version="2"
                  purpose="Authentication, Postgres database, and realtime subscriptions"
                  color="#3ecf8e"
                  href="https://supabase.com"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Icons & UI
              </p>
              <div className="flex flex-col gap-2">
                <LibRow
                  name="React Icons"
                  version="5"
                  purpose="Icon packs including Font Awesome, Material Design, and more"
                  color="#e91e63"
                  href="https://react-icons.github.io/react-icons/"
                />
                <LibRow
                  name="Lucide React"
                  version="latest"
                  purpose="Clean, consistent open-source icon set"
                  color="#f97316"
                  href="https://lucide.dev"
                />
              </div>
            </div>

            <div>
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Deployment
              </p>
              <div className="flex flex-col gap-2">
                <LibRow
                  name="Vercel"
                  purpose="Hosting and continuous deployment platform"
                  color="#ffffff"
                  href="https://vercel.com"
                />
              </div>
            </div>
          </Section>

          {/* 3 · Student Copyright Checklist */}
          <Section
            icon={<CheckIco />}
            label="Student Copyright Checklist"
            accent="#0cc883"
          >
            <div className="flex flex-col">
              <a
                className="text-white/80 text-sm leading-relaxed"
                target="_blank"
                href="https://acrobat.adobe.com/id/urn:aaid:sc:US:7b2ba350-b247-41f6-9110-05ce69948ea3?viewer%21megaVerb=group-discover"
              >
                Student Copyright Checklist
              </a>
            </div>
          </Section>

          {/* 4 · Plan of Work Log */}
          <Section
            icon={<CalendarIco />}
            label="Plan of Work Log"
            accent="#f59e0b"
          >
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:dec71f4e-3181-46c8-8a11-984207419719" target="_blank" className="text-white/80 text-sm leading-relaxed">Plan of Work Log</a>
          </Section>

          {/* 5 · Team & Acknowledgements */}
          <Section
            icon={<UsersIco />}
            label="Team & Acknowledgements"
            accent="#8b5cf6"
          >
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Chester Bridge has been created as a TSA project to help connect Chester County, PA residents
              with local support resources.
            </p>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-4">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Project Purpose
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Chester Bridge is a community resource directory designed to
                consolidate food, housing, health, jobs, and education resources
                across Chester County, PA. This makes them easier to find, save,
                and share for residents who need them most.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-white/40 text-[10px] font-black tracking-widest uppercase mb-3">
                Special Thanks
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                To the organizations, nonprofits, and volunteers across Chester
                County whose work inspired this project. To the open-source
                community whose tools made it possible. And to the TSA advisors
                and judges who make competitions like this a meaningful
                challenge.
              </p>
            </div>
          </Section>

          {/* 6 · External Data Sources */}
          <Section
            icon={<BookIco />}
            label="Data & Content Sources"
            accent="#06b6d4"
            defaultOpen={false}
          >
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Resource information (organization names, addresses, phone
              numbers, hours, and service descriptions) was gathered from the
              following public sources.
            </p>
            <div className="flex flex-col gap-2">
              {[
                {
                  name: "Chester County, PA Official Website",
                  url: "https://www.chesco.org",
                  note: "County departments, health, and social services",
                },
                {
                  name: "211 Southeastern PA",
                  url: "https://211sepa.org",
                  note: "Regional social services directory",
                },
                {
                  name: "Google Maps / Places",
                  url: "https://maps.google.com",
                  note: "Address verification and location data",
                },
                {
                  name: "Individual Organization Websites",
                  url: "#",
                  note: "Phone numbers, hours, and service descriptions verified directly from each organization's official website",
                },
                {
                  name: "Penn Medicine",
                  url: "https://www.pennmedicine.org",
                  note: "Hospital and clinic information",
                },
                {
                  name: "Main Line Health",
                  url: "https://www.mainlinehealth.org",
                  note: "Hospital and outpatient center details",
                },
                {
                  name: "Chester County Food Bank",
                  url: "https://chestercountyfoodbank.org",
                  note: "Food resource partner network",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 border border-white/10"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm">{s.name}</p>
                    <p className="text-white/50 text-xs mt-0.5">{s.note}</p>
                  </div>
                  {s.url !== "#" && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-[#06b6d4] transition-colors flex-shrink-0"
                    >
                      <LinkIco />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        
      </div>
    </div>
  );
}
