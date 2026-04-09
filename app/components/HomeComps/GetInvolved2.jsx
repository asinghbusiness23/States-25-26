"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { MdReport } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";

// ── Variants ──────────────────────────────────────────────────────────────────
const fadeUp  = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:0.55,ease:[0.22,1,0.36,1]}} };
const fadeIn  = { hidden:{opacity:0},      show:{opacity:1,  transition:{duration:0.4}} };
const slideL  = { hidden:{opacity:0,x:-36},show:{opacity:1,x:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} };
const slideR  = { hidden:{opacity:0,x:36}, show:{opacity:1,x:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} };
const stagger = (d=0.1)=>({ hidden:{}, show:{ transition:{ staggerChildren:d }} });

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ico = ({d,size=18,sw=1.8})=>(
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    <path d={d}/>
  </svg>
);
const ArrowIco  = ()=><Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2}/>;
const CheckIco  = ()=><Ico d="M20 6L9 17l-5-5" size={13} sw={2.5}/>;
const UsersIco  = ()=><Ico d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" size={22}/>;

// ── Card data with photos ─────────────────────────────────────────────────────
const CARDS = [
  {
    id:0,
    ReactIcon: MdReport,
    title:"Report an Issue",
    subtitle:"Help keep our data accurate",
    desc:"Notice information wrong or missing? Let us know and help keep our directory accurate for every Chester County resident.",
    cta:"Report Issue",
    link:"/about#form",
    color:"#1B6E4F",
    bg:"#d3efca",
    darkBg:"#155c3f",
    img:"https://plus.unsplash.com/premium_photo-1663047732314-2e286fd8b068?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats:"48hr average fix time",
    bullets:["Wrong phone number or hours?","Closed program still listed?","Missing a key resource?"],
  },
  {
    id:1,
    ReactIcon: CgNotes,
    title:"Submit a Resource",
    subtitle:"Grow the directory",
    desc:"Know an organization we're missing? Help us keep our directory complete and current for the whole community.",
    cta:"Add Listing",
    link:"/about#form",
    color:"#264653",
    bg:"#cfe8e1",
    darkBg:"#1a3640",
    img:"https://images.unsplash.com/photo-1760992795200-52321e30d64c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats:"120+ resources and counting",
    bullets:["Nonprofits & government orgs","Food banks & clinics","Job training programs"],
  },
  {
    id:2,
    ReactIcon: IoChatbubbleOutline,
    title:"Comment",
    subtitle:"Interact with the community",
    desc:"Your experience can inspire and guide others. We'd love to hear what you have to say about the resources.",
    cta:"Comment",
    link:"/resources",
    color:"#2a9d6e",
    bg:"#b7e4c7",
    darkBg:"#1d7050",
    img:"https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats:"Log In to Comment",
    bullets:["How resources helped you","Important information to know","Your experience with local orgs"],
  },
  {
    id:3,
    ReactIcon: BiDonateHeart,
    title:"Donate",
    subtitle:"Keep it free for everyone",
    desc:"Help us maintain and grow free access to resources for every Chester County family. Every dollar goes directly to the platform.",
    cta:"Give Now",
    link:"/donate",
    color:"#0cc883",
    bg:"#d3efca",
    darkBg:"#098c5d",
    img:"https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats:"$18,340 raised so far",
    bullets:["100% goes to Chester Bridge","Keep the directory free","Support new features"],
  },
];

// ── Individual interactive card ───────────────────────────────────────────────
const InvolvedCard = ({ card, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = card.ReactIcon;

  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={()=>setHovered(true)}
      onHoverEnd={()=>setHovered(false)}
      whileHover={{ y:-8 }}
      className="relative rounded-3xl overflow-hidden shadow-sm border border-[#e8f5e1] flex flex-col group cursor-pointer"
      style={{ minHeight:380 }}
    >
      {/* Background photo layer */}
      <div className="absolute inset-0">
        <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
        <motion.div className="absolute inset-0"
          animate={{ background: hovered
            ? `linear-gradient(to top, ${card.darkBg}f0 0%, ${card.darkBg}cc 40%, ${card.darkBg}88 100%)`
            : `linear-gradient(to top, ${card.darkBg}dd 0%, ${card.darkBg}99 50%, ${card.darkBg}44 100%)`
          }}
          transition={{ duration:0.4 }}/>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7">
        {/* Top: icon + stat badge */}
        <div className="flex items-start justify-between mb-auto">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background:"rgba(255,255,255,0.15)", backdropFilter:"blur(8px)", color:"white", border:"1.5px solid rgba(255,255,255,0.2)" }}>
            <Icon/>
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -6 }}
            transition={{ duration:0.3 }}
            className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-full border border-white/20 tracking-wide">
            {card.stats}
          </motion.div>
        </div>

        {/* Bottom: text */}
        <div className="mt-12">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{card.subtitle}</p>
          <h3 className="text-white font-black text-xl mb-3 leading-snug">{card.title}</h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4">{card.desc}</p>

          {/* Bullets — slide up on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
            transition={{ duration:0.35 }}
            className="overflow-hidden mb-4">
            <div className="flex flex-col gap-1.5 pt-1">
              {card.bullets.map((b,i)=>(
                <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <CheckIco/>
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          <Link href={card.link}>
            <motion.div
              whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
              className="w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              style={{
                background: hovered ? "white" : "rgba(255,255,255,0.18)",
                color: hovered ? card.color : "white",
                backdropFilter: "blur(8px)",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}>
              {card.cta} <ArrowIco/>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const GetInvolved2 = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section ref={ref} className="px-6 md:px-20 py-24 bg-[#F1FAEE]">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <motion.div variants={slideL} initial="hidden" animate={inView?"show":"hidden"}>
          <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Make a Difference
          </span>
          <h2 className="text-[#264653] font-black text-4xl md:text-5xl leading-tight">Get Involved</h2>
          <p className="text-gray-400 text-base mt-3 max-w-md leading-relaxed">
            Chester Bridge runs because of people like you. There are many ways to strengthen our community — find yours.
          </p>
        </motion.div>

        {/* Community stats strip */}
        <motion.div variants={slideR} initial="hidden" animate={inView?"show":"hidden"}
          className="flex gap-6 flex-shrink-0">
          {[["312","donors"],["120+","resources"],["50","volunteers"]].map(([n,l])=>(
            <div key={l} className="text-center">
              <p className="text-2xl font-black text-[#1B6E4F]">{n}</p>
              <p className="text-xs text-gray-400 font-semibold mt-0.5">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cards grid */}
      <motion.div variants={stagger(0.09)} initial="hidden" animate={inView?"show":"hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CARDS.map((card,i)=>(
          <InvolvedCard key={card.id} card={card} index={i}/>
        ))}
      </motion.div>

      {/* Bottom community photo strip */}
      <motion.div variants={stagger(0.07)} initial="hidden" animate={inView?"show":"hidden"}
        className="grid grid-cols-3 gap-4 mt-10">
        {[
          { src:"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80", caption:"Spring Resource Fair" },
          { src:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",  caption:"Volunteer Workshop" },
          { src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",  caption:"Community Team" },
        ].map(({ src, caption },i)=>(
          <motion.div key={i} variants={fadeUp}
            whileHover={{ y:-4, boxShadow:"0 14px 40px rgba(27,110,79,0.18)" }}
            className="relative rounded-2xl overflow-hidden h-32 border-4 border-white shadow-sm group cursor-pointer">
            <img src={src} alt={caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/70 to-transparent"/>
            <div className="absolute bottom-3 left-3">
              <p className="text-white font-black text-xs">{caption}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GetInvolved2;
