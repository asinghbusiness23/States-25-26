"use client";
import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { motion, AnimatePresence, useInView, color } from "framer-motion";
import { EMERGENCY, RESOURCESCHAT } from "./data.js";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdEmergency, MdOutlineFastfood } from "react-icons/md";
import Link from "next/link.js";
import { UserAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/supabaseClient";
import { BsStars } from "react-icons/bs";
import { FaHome, FaBriefcase } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiBriefcase4Fill, RiGraduationCapLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";
import { PiHospitalFill, PiHouseFill } from "react-icons/pi";
import { FaBoltLightning } from "react-icons/fa6";

// const handleInsert = async () => {
//   const { data, error } = await supabase
//     .from("resources")
//     .insert(RESOURCESCHAT);

//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Inserted!", data);
//   }
// };
// ─── Animation variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};
const stagger = (d = 0.07) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});
const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Inline SVG icon helper ───────────────────────────────────────────────────
const Ico = ({
  d,
  size = 20,
  sw = 1.8,
  fill = "none",
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={color}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);
const SearchIco = () => (
  <Ico d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" size={20} />
);
const GridIco = () => (
  <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" size={18} />
);
const MapIco = () => (
  <Ico d="M3 7l6-4 6 4 6-4v14l-6 4-6-4-6 4V7z M9 3v14 M15 7v14" size={18} />
);
const PhoneIco = () => (
  <Ico
    d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"
    size={16}
  />
);
const ClockIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={16} />
);
const AlertIco = () => (
  <Ico
    d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"
    size={22}
    sw={2}
  />
);
const XIco = () => <Ico d="M18 6L6 18M6 6l12 12" size={16} sw={2.5} />;
const FilterIco = () => <Ico d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" size={17} />;
const PinIco = () => (
  <Ico
    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
    size={16}
  />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2} />;
const PlusIco = () => <Ico d="M12 5v14M5 12h14" size={20} sw={2.5} />;
const ChevRIco = () => <Ico d="M9 18l6-6-6-6" size={16} sw={2} />;

// ─── Category meta ────────────────────────────────────────────────────────────
const CATS = [
  { id: "all", label: "All", emoji: <BsStars></BsStars>, color: "#1B6E4F" },
  {
    id: "food",
    label: "Food",
    emoji: <CiForkAndKnife></CiForkAndKnife>,
    color: "#f59e0b",
  },
  {
    id: "housing",
    label: "Housing",
    emoji: <FaHome></FaHome>,
    color: "#3b82f6",
  },
  {
    id: "health",
    label: "Health",
    emoji: <MdOutlineHealthAndSafety></MdOutlineHealthAndSafety>,
    color: "#ec4899",
  },
  {
    id: "jobs",
    label: "Jobs",
    emoji: <FaBriefcase></FaBriefcase>,
    color: "#8b5cf6",
  },
  {
    id: "education",
    label: "Education",
    emoji: <RiGraduationCapLine></RiGraduationCapLine>,
    color: "#06b6d4",
  },
];

const URGENCY = [
  { id: "all", label: "All urgency" },
  { id: "immediate", label: "Immediate help" },
  { id: "general", label: "General" },
];
// ─── Resource data ────────────────────────────────────────────────────────────

// ─── Tag pill ─────────────────────────────────────────────────────────────────
const Tag = ({ children, color }) => (
  <span
    className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
    style={{ background: color + "22", color }}
  >
    {children}
  </span>
);
const Tag2 = ({ children, color }) => (
  <span
    className="flex items-center text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
    style={{ background: color + "22", color }}
  >
    {children}
  </span>
);

// ─── Resource Card ────────────────────────────────────────────────────────────
const ResourceCard = ({
  r,
  delay = 0,
  user,
  isFavorited,
  toggleFavorite,
  profile,
}) => {
  const catMeta = CATS.find((c) => c.id === r.category);
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ delay }}
      whileHover={{ y: -5, boxShadow: "0 18px 48px rgba(27,110,79,0.14)" }}
      className={`bg-white rounded-2xl p-5 flex flex-col gap-3 border-[1.5px] shadow-sm transition-shadow relative overflow-hidden ${r.high_need ? "border-[#0cc883]" : "border-[#e8f5e1]"}`}
    >
      {r.high_need && (
        <span className="absolute top-3 right-3 bg-[#0cc883] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full tracking-widest">
          HIGH NEED
        </span>
      )}
      <div className="flex items-start gap-2 flex-wrap">
        <Tag2 color={catMeta?.color || "#1B6E4F"}>
          {catMeta?.emoji} &nbsp; {catMeta?.label}
        </Tag2>
      </div>
      <h3 className="font-black text-[#264653] text-base leading-snug pr-16">
        {r.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        {r.description}
      </p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4a7c6a] mt-1">
        <span className="flex items-center gap-1">
          <ClockIco />
          {r.hours}
        </span>
        <span className="flex items-center gap-1">
          <PhoneIco />
          {r.phone}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={r.website}
          target="_blank"
          className="flex-1 bg-[#d3efca] text-[#1B6E4F] text-xs font-bold py-2.5 rounded-xl text-center"
        >
          Open Website
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          // href = {}
          className="cursor-pointer px-3 py-2.5 rounded-xl border border-[#d3efca] text-[#1B6E4F] text-xs font-bold flex items-center gap-1"
        >
          <PinIco /> Map
        </motion.a>
      </div>
      <div className="flex items-center gap-2 mt-0.5">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={r.website}
          target="_blank"
          className="flex-1 bg-[#d3efca] text-[#1B6E4F] text-xs font-bold py-2.5 rounded-xl text-center"
        >
          Comment
        </motion.button>
        {/* Favorite Button*/}

        {!user || profile?.role == "admin" ? (
          <div></div>
        ) : isFavorited ? (
          <motion.button
            onClick={() => toggleFavorite(r.id, isFavorited)}
            className="cursor-pointer px-3 py-2.5 rounded-xl border border-[#d3efca] flex items-center justify-center"
          >
            <FaHeart className="text-red-500 text-xl" />
          </motion.button>
        ) : (
          <motion.button
            onClick={() => toggleFavorite(r.id, isFavorited)}
            className="cursor-pointer px-3 py-2.5 rounded-xl border border-[#d3efca] flex items-center justify-center"
          >
            <CiHeart className="text-xl" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
{
  /* <motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="cursor-pointer px-3 py-2.5 rounded-xl border border-[#d3efca] text-[#1B6E4F] text-xs font-bold flex items-center gap-1 text-"
>
  <CiHeart className="text-2xl"></CiHeart>
</motion.button>; */
}
// ══════════════════════════════════════════════════════════════════════════════
// RESOURCES PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [urgency, setUrgency] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "map"

  //User
  //User
  const { session, signOut, loading, profile } = UserAuth();
  const user = session?.user;

  useEffect(() => {
    if (loading || !user?.id) return;

    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from("favorites")
        .select("resource_id")
        .eq("user_id", user.id);

      if (!error && data) {
        setFavorites(new Set(data.map((f) => f.resource_id)));
      }
    };

    fetchFavorites();
  }, [user?.id]);
  // useEffect(() => {
  //   setTimeout(async () => {
  //     const { data } = await supabase
  //       .from("favorites")
  //       .select("resource_id")
  //       .eq("user_id", user.id);

  //     setFavorites(new Set(data.map((f) => f.resource_id)));
  //   });
  // }, [user]);
  const emergencyRef = useRef(null);
  const emergencyInView = useInView(emergencyRef, {
    once: true,
    margin: "-60px",
  });
  const submitRef = useRef(null);
  const submitInView = useInView(submitRef, { once: true, margin: "-60px" });
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = async (resourceId, isFav) => {
    if (!user?.id) return;
    if (isFav) {
      await supabase
        .from("favorites")
        .delete()
        .match({ user_id: user.id, resource_id: resourceId });

      setFavorites((prev) => {
        const next = new Set(prev);
        next.delete(resourceId);
        return next;
      });
    } else {
      await supabase
        .from("favorites")
        .upsert({ user_id: user.id, resource_id: resourceId });

      setFavorites((prev) => new Set(prev).add(resourceId));
    }
  };
  // Filtered results
  const filtered = useMemo(() => {
    return RESOURCESCHAT.filter((r) => {
      const matchQ =
        !query ||
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase());
      const matchCat = activeCat === "all" || r.category === activeCat;
      const matchUrg = urgency === "all" || r.urgency === urgency;
      return matchQ && matchCat && matchUrg;
    });
  }, [query, activeCat, urgency]);

  const clearFilters = () => {
    setQuery("");
    setActiveCat("all");
    setUrgency("all");
  };
  const hasFilters = query || activeCat !== "all" || urgency !== "all";

  // Quick-filter buttons
  const quickFilters = [
    {
      label: "Find Food",
      cat: "food",
      emoji: <MdOutlineFastfood></MdOutlineFastfood>,
      color: "#f59e0b",
    },
    {
      label: "Find Housing",
      cat: "housing",
      emoji: <PiHouseFill></PiHouseFill>,
      color: "#3b82f6",
    },
    {
      label: "Find Health",
      cat: "health",
      emoji: <PiHospitalFill></PiHospitalFill>,
      color: "#ec4899",
    },
    {
      label: "Find Jobs",
      cat: "jobs",
      emoji: <RiBriefcase4Fill></RiBriefcase4Fill>,
      color: "#8b5cf6",
    },
    {
      label: "Immediate Help",
      cat: "all",
      urg: "immediate",
      emoji: <FaBoltLightning></FaBoltLightning>,
      color: "#E76F51",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* ── HERO / SEARCH ────────────────────────────────────────────────── */}
      <section className="bg-linear-to-br from-[#1B6E4F] via-[#1a5c42] to-[#264653] px-6 md:px-20 pt-16 pb-20 relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0cc883]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="inline-block bg-white/15 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            Chester County Resource Directory
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
          >
            What do you need
            <br />
            <span className="text-[#0cc883]">help with?</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg mb-10">
            {RESOURCESCHAT.length} resources across Chester County — find yours
            instantly.
          </motion.p>

          {/* Search bar */}
          <motion.div
            variants={fadeUp}
            className="relative bg-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.2)] flex items-center gap-3 px-5 py-3 mb-6"
          >
            <span className="text-[#1B6E4F] flex-shrink-0">
              <SearchIco />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search food banks, shelters, clinics…"
              className="flex-1 bg-transparent text-[#264653] placeholder-gray-300 font-semibold text-base outline-none py-1"
            />
            {query && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setQuery("")}
                className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0"
              >
                <XIco />
              </motion.button>
            )}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-br from-[#1B6E4F] to-[#0cc883] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md flex-shrink-0"
            >
              Search
            </motion.button>
          </motion.div>

          {/* Filters row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {/* Urgency select */}
            <div className="relative">
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="appearance-none bg-white/15 backdrop-blur text-white text-sm font-semibold px-4 py-2.5 pr-8 rounded-xl border border-white/20 outline-none cursor-pointer"
              >
                {URGENCY.map((u) => (
                  <option key={u.id} value={u.id} className="text-[#264653]">
                    {u.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                ▾
              </span>
            </div>
            {/* Location badge */}
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur text-white text-sm font-semibold px-4 py-2.5 rounded-xl border border-white/20">
              <PinIco /> Chester County, PA
            </div>
          </motion.div>

          {/* Quick-filter buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2.5 mt-5"
          >
            {quickFilters.map((qf) => (
              <motion.button
                key={qf.label}
                whileHover={{
                  scale: 1.06,
                  backgroundColor: "rgba(255,255,255,0.22)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveCat(qf.cat);
                  if (qf.urg) setUrgency(qf.urg);
                }}
                className="flex items-center gap-1.5 bg-white/12 backdrop-blur text-white text-xs font-bold px-4 py-2 rounded-full border border-white/20 transition-colors"
              >
                <span style={{ color: qf.color }}>{qf.emoji}</span> {qf.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CATEGORY QUICK-NAV ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e8f5e1] px-6 md:px-20 py-5">
        <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {CATS.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap border-[1.5px] transition-all shrink-0 ${
                activeCat === cat.id
                  ? "text-white border-transparent shadow-md"
                  : "border-[#e8f5e1] bg-white hover:border-[#d3efca]"
              }`}
              style={
                activeCat === cat.id
                  ? {
                      background: cat.color,
                      boxShadow: `0 4px 16px ${cat.color}44`,
                    }
                  : {
                      color: `${cat.color}`,
                    }
              }
            >
              <span>{cat.emoji}</span> {cat.label}
            </motion.button>
          ))}
          <Link
            href="#emergency"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap border-[2.5px] transition-all shrink-0 hover:border-[#E76F51]  bg-[#E76F51] text-white"
          >
            {" "}
            <MdEmergency></MdEmergency>Need Help Now?
          </Link>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-7 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <p className="text-[#264653] font-black text-lg">
              {filtered.length}{" "}
              <span className="text-gray-400 font-medium text-base">
                resource{filtered.length !== 1 ? "s" : ""} found
              </span>
            </p>
            {hasFilters && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={clearFilters}
                className="flex items-center gap-1 text-[#1B6E4F] text-xs font-bold px-3 py-1.5 rounded-full bg-[#d3efca]"
              >
                <XIco /> Clear filters
              </motion.button>
            )}
          </div>
        </div>

        {/* Active filter chips */}
        <AnimatePresence>
          {hasFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 mb-6 overflow-hidden"
            >
              {query && (
                <FilterChip
                  label={`"${query}"`}
                  onRemove={() => setQuery("")}
                />
              )}
              {activeCat !== "all" && (
                <FilterChip
                  label={CATS.find((c) => c.id === activeCat)?.label}
                  onRemove={() => setActiveCat("all")}
                />
              )}
              {urgency !== "all" && (
                <FilterChip
                  label={URGENCY.find((u) => u.id === urgency)?.label}
                  onRemove={() => setUrgency("all")}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIST VIEW */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" && (
            <motion.div
              key="grid"
              variants={stagger(0.06)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              {filtered.length === 0 ? (
                <motion.div
                  variants={fadeUp}
                  className="col-span-3 flex flex-col items-center justify-center py-20 text-center"
                >
                  <span className="text-5xl mb-4">🔍</span>
                  <p className="text-[#264653] font-black text-xl mb-2">
                    No resources found
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    Try adjusting your search or clearing the filters.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    onClick={clearFilters}
                    className="bg-[#d3efca] text-[#1B6E4F] font-bold px-6 py-3 rounded-xl text-sm"
                  >
                    Clear all filters
                  </motion.button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((r, i) => (
                    <ResourceCard
                      key={r.id}
                      r={r}
                      isFavorited={favorites.has(r.id)}
                      toggleFavorite={toggleFavorite}
                      delay={i * 0.04}
                      user={user}
                      profile={profile}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── NEED HELP FAST ───────────────────────────────────────────────── */}
      <section
        ref={emergencyRef}
        className="px-6 md:px-20 py-16 bg-linear-to-br from-[#fff8f0] to-[#fff3eb]"
      >
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={emergencyInView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-2"
          >
            <div className="text-[#f59e0b]">
              <AlertIco />
            </div>
            <span
              id="emergency"
              className="inline-block bg-[#fef3c7] text-[#d97706] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
            >
              Emergency Resources
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[#264653] font-black text-3xl md:text-4xl mb-2"
          >
            Need Help <span className="text-[#f59e0b]">Fast?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-base mb-10">
            These resources are available right now — no appointment needed.
          </motion.p>

          <motion.div
            variants={stagger(0.08)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {EMERGENCY.map((e, i) => (
              <motion.div
                key={i}
                variants={slideUp}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 48px rgba(245,158,11,0.18)",
                }}
                className="bg-white rounded-2xl p-6 border-[1.5px] border-[#fde68a] shadow-sm flex flex-col gap-3 transition-shadow"
              >
                <span className="text-4xl leading-none">{e.emoji}</span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d97706] bg-[#fef3c7] px-2 py-0.5 rounded-full">
                    {e.cat}
                  </span>
                </div>
                <h3 className="font-black text-[#264653] text-base">
                  {e.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {e.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-[#fef3c7] text-[#d97706] font-bold text-sm py-2.5 rounded-xl mt-1"
                >
                  <PhoneIco /> {e.phone}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── SUBMIT RESOURCE CTA ──────────────────────────────────────────── */}
      <section ref={submitRef} className="px-6 md:px-20 py-20 bg-[#F1FAEE]">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={submitInView ? "show" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#1B6E4F] to-[#264653] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* bg decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0cc883]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />

            <div className="flex-shrink-0 w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center relative z-10">
              <span className="text-4xl">📋</span>
            </div>

            <div className="flex-1 relative z-10 text-center md:text-left">
              <p className="text-[#0cc883] text-xs font-black tracking-widest uppercase mb-2">
                Community Sourced
              </p>
              <h2 className="text-white font-black text-2xl md:text-3xl leading-snug mb-3">
                Know a resource
                <br className="hidden md:block" /> we missed?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Chester Bridge is built by the community, for the community. If
                you know of an organization, program, or service that should be
                listed here, let us know — it takes less than 2 minutes.
              </p>
            </div>

            <Link
              href="/about#form"
              className="shrink-0 bg-[#0cc883] text-white font-black text-sm px-8 py-4 rounded-2xl flex items-center gap-2 shadow-lg relative z-10 whitespace-nowrap"
            >
              <PlusIco /> Submit a Resource
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

// ─── Filter chip ──────────────────────────────────────────────────────────────
const FilterChip = ({ label, onRemove }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    className="flex items-center gap-1.5 bg-[#d3efca] text-[#1B6E4F] text-xs font-bold px-3 py-1.5 rounded-full"
  >
    {label}
    <button
      onClick={onRemove}
      className="hover:text-[#0d4e33] transition-colors"
    >
      <XIco />
    </button>
  </motion.div>
);
