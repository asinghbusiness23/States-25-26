// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import Link from "next/link";

// // ── Variants ──────────────────────────────────────────────────────────────────
// const fadeUp   = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:0.55,ease:[0.22,1,0.36,1]}} };
// const fadeIn   = { hidden:{opacity:0},      show:{opacity:1,  transition:{duration:0.4}} };
// const slideL   = { hidden:{opacity:0,x:-36},show:{opacity:1,x:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} };
// const stagger  = (d=0.1)=>({ hidden:{}, show:{ transition:{ staggerChildren:d }} });

// // ── Icons ─────────────────────────────────────────────────────────────────────
// const Ico = ({d,size=18,sw=1.8})=>(
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
//     <path d={d}/>
//   </svg>
// );
// const ClockIco  = ()=><Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={15}/>;
// const PhoneIco  = ()=><Ico d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z" size={15}/>;
// const PinIco    = ()=><Ico d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" size={15}/>;
// const ArrowIco  = ()=><Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2}/>;
// const ChevLIco  = ()=><Ico d="M15 18l-6-6 6-6" size={18} sw={2.2}/>;
// const ChevRIco  = ()=><Ico d="M9 18l6-6-6-6" size={18} sw={2.2}/>;
// const FoodIco   = ()=><Ico d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" size={20}/>;
// const HomeIco   = ()=><Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={20}/>;
// const HeartIco  = ()=><Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" size={20}/>;
// const BookIco   = ()=><Ico d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5" size={20}/>;
// const CheckIco  = ()=><Ico d="M20 6L9 17l-5-5" size={14} sw={2.5}/>;
// const XMarkIco  = ()=><Ico d="M18 6L6 18M6 6l12 12" size={16} sw={2.5}/>;

// // ── Tag pill ──────────────────────────────────────────────────────────────────
// const Tag = ({ children, color="#1B6E4F", bg="#d3efca" }) => (
//   <span className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
//     style={{ background:bg, color }}>
//     {children}
//   </span>
// );

// // ── Resource data with photos ─────────────────────────────────────────────────
// const RESOURCES = [
//   {
//     id:0,
//     tag:"Food",
//     catColor:"#f59e0b",
//     catBg:"#fef3c7",
//     icon:<FoodIco/>,
//     title:"Chester County Food Bank",
//     subtitle:"650 Pennsylvania Dr, Exton PA",
//     desc:"Free groceries and prepared meals for families in need across 6 distribution sites countywide. No income verification required — just bring a photo ID.",
//     hours:"Mon–Fri 9am–5pm",
//     phone:"(610) 873-6000",
//     urgent:true,
//     img:"https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
//     features:["Walk-in pantry available","SNAP enrollment help on-site","Fresh produce when available","No appointment required on Fridays"],
//   },
//   {
//     id:1,
//     tag:"Housing",
//     catColor:"#3b82f6",
//     catBg:"#dbeafe",
//     icon:<HomeIco/>,
//     title:"Coatesville Shelter Network",
//     subtitle:"302 E Lincoln Hwy, Coatesville PA",
//     desc:"Emergency and transitional housing for individuals and families with wraparound case management services. Low-barrier intake — no ID required to access emergency beds.",
//     hours:"24/7 Intake",
//     phone:"(610) 384-6970",
//     urgent:false,
//     img:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
//     features:["Walk-in intake accepted nightly","On-site case managers","Transitional housing referrals","Pet-friendly options available"],
//   },
//   {
//     id:2,
//     tag:"Health",
//     catColor:"#ec4899",
//     catBg:"#fce7f3",
//     icon:<HeartIco/>,
//     title:"Community Health Clinics",
//     subtitle:"Multiple Chester County locations",
//     desc:"Sliding-scale primary care, dental, and mental health services regardless of insurance status. Fees start at $0 for qualifying patients based on household income.",
//     hours:"Mon–Sat 8am–6pm",
//     phone:"(610) 738-3922",
//     urgent:false,
//     img:"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
//     features:["$0 visits for qualifying patients","Mental health & dental included","Accepts Medicaid & Medicare","Same-day urgent slots available"],
//   },
//   {
//     id:3,
//     tag:"Education",
//     catColor:"#06b6d4",
//     catBg:"#cffafe",
//     icon:<BookIco/>,
//     title:"Chester County Library",
//     subtitle:"17 branch locations countywide",
//     desc:"Free tutoring, workforce training, ESL classes, and digital literacy programs across 17 branch locations. No library card required for first visit.",
//     hours:"Daily 9am–8pm",
//     phone:"(610) 280-2600",
//     urgent:false,
//     img:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
//     features:["Free GED prep classes","ESL for all skill levels","1-on-1 adult literacy tutoring","Job search & resume help"],
//   },
// ];

// // ── Detail Modal ──────────────────────────────────────────────────────────────
// const DetailModal = ({ r, onClose }) => {
//   useEffect(()=>{ document.body.style.overflow="hidden"; return()=>{ document.body.style.overflow=""; }; },[]);
//   useEffect(()=>{ const fn=(e)=>{ if(e.key==="Escape") onClose(); }; window.addEventListener("keydown",fn); return()=>window.removeEventListener("keydown",fn); },[onClose]);
//   return (
//     <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
//       className="fixed inset-0 bg-[#264653]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}>
//       <motion.div initial={{opacity:0,y:32,scale:0.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:16,scale:0.97}}
//         transition={{duration:0.4,ease:[0.22,1,0.36,1]}}
//         onClick={e=>e.stopPropagation()}
//         className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)]">
//         {/* Photo header */}
//         <div className="relative h-52 overflow-hidden">
//           <img src={r.img} alt={r.title} className="w-full h-full object-cover"/>
//           <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/80 via-[#1B6E4F]/20 to-transparent"/>
//           <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
//             <XMarkIco/>
//           </button>
//           {r.urgent && (
//             <span className="absolute top-4 left-4 bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full">HIGH NEED</span>
//           )}
//           <div className="absolute bottom-4 left-5">
//             <Tag color={r.catColor} bg="rgba(255,255,255,0.15)">{r.tag}</Tag>
//             <h2 className="text-white font-black text-xl mt-1">{r.title}</h2>
//           </div>
//         </div>
//         {/* Body */}
//         <div className="p-6 flex flex-col gap-4">
//           <div className="flex items-center gap-1.5 text-gray-400 text-xs"><PinIco/>{r.subtitle}</div>
//           <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
//           <div className="grid grid-cols-2 gap-3">
//             <div className="bg-[#f0f9f4] rounded-xl p-3">
//               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Hours</p>
//               <p className="text-[#264653] font-bold text-sm flex items-center gap-1.5"><ClockIco/>{r.hours}</p>
//             </div>
//             <div className="bg-[#f0f9f4] rounded-xl p-3">
//               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone</p>
//               <p className="text-[#264653] font-bold text-sm flex items-center gap-1.5"><PhoneIco/>{r.phone}</p>
//             </div>
//           </div>
//           <div>
//             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">What's available</p>
//             <div className="flex flex-col gap-2">
//               {r.features.map((f,i)=>(
//                 <div key={i} className="flex items-center gap-2.5 text-sm text-gray-500">
//                   <div className="w-4 h-4 rounded-full bg-[#d3efca] flex items-center justify-center flex-shrink-0" style={{color:r.catColor}}><CheckIco/></div>
//                   {f}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex gap-3 mt-2">
//             <Link href="/resources" className="flex-1 bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(27,110,79,0.28)]">
//               View Resources <ArrowIco/>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // ── Main Component ────────────────────────────────────────────────────────────
// const FeaturedResources2 = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [modalRes,  setModalRes]  = useState(null);
//   const ref    = useRef(null);
//   const inView = useInView(ref, { once:true, margin:"-60px" });
//   const startX = useRef(null);

//   const active = RESOURCES[activeIdx];
//   const total  = RESOURCES.length;

//   const prev = () => setActiveIdx(i=>Math.max(i-1,0));
//   const next = () => setActiveIdx(i=>Math.min(i+1,total-1));

//   const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
//   const onTouchEnd   = (e) => {
//     if(startX.current===null) return;
//     const diff = startX.current - e.changedTouches[0].clientX;
//     if(diff>40) next(); else if(diff<-40) prev();
//     startX.current = null;
//   };

//   return (
//     <>
//       <section ref={ref} className="px-6 md:px-20 py-24 bg-[#F1FAEE] overflow-hidden">
//         {/* Header */}
//         <div className="flex justify-between items-end mb-12">
//           <motion.div variants={slideL} initial="hidden" animate={inView?"show":"hidden"}>
//             <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
//               Curated for You
//             </span>
//             <h2 className="text-[#264653] font-black text-4xl mt-3">Featured Resources</h2>
//           </motion.div>
//           <motion.div variants={fadeIn} initial="hidden" animate={inView?"show":"hidden"}>
//             <Link href="/resources" className="flex items-center gap-2 text-[#1B6E4F] font-bold text-sm hover:gap-3 transition-all">
//               View All Resources <ArrowIco/>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Tab nav */}
//         <motion.div variants={stagger(0.07)} initial="hidden" animate={inView?"show":"hidden"}
//           className="flex gap-3 mb-8 flex-wrap">
//           {RESOURCES.map((r,i)=>(
//             <motion.button key={r.id} variants={fadeUp}
//               onClick={()=>setActiveIdx(i)}
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold border-[1.5px] transition-all ${activeIdx===i ? "text-white border-transparent shadow-lg" : "bg-white border-[#e8f5e1] text-gray-500 hover:border-[#d3efca]"}`}
//               style={activeIdx===i ? { background:r.catColor, boxShadow:`0 4px 18px ${r.catColor}44` } : {}}>
//               <span style={activeIdx===i ? {color:"white"} : {color:r.catColor}}>{r.icon}</span>
//               {r.title}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Main card — split layout */}
//         <motion.div variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}>
//           <AnimatePresence mode="wait">
//             <motion.div key={active.id}
//               initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}
//               transition={{duration:0.4,ease:[0.22,1,0.36,1]}}
//               className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(27,110,79,0.12)] border border-[#e8f5e1]"
//               onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

//               <div className="grid md:grid-cols-[1fr_420px]">
//                 {/* Left: info */}
//                 <div className="p-8 md:p-10 flex flex-col gap-5">
//                   <div className="flex items-center gap-3">
//                     <Tag color={active.catColor} bg={active.catBg}>{active.tag}</Tag>
//                     {active.urgent && (
//                       <span className="bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
//                         HIGH NEED
//                       </span>
//                     )}
//                   </div>

//                   <div>
//                     <h3 className="text-[#264653] font-black text-2xl md:text-3xl leading-snug mb-1">{active.title}</h3>
//                     <p className="text-gray-400 text-sm flex items-center gap-1.5"><PinIco/>{active.subtitle}</p>
//                   </div>

//                   <p className="text-gray-500 text-base leading-relaxed">{active.desc}</p>

//                   {/* Info grid */}
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="bg-[#f0f9f4] rounded-xl p-4">
//                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Hours</p>
//                       <p className="text-[#264653] font-bold text-sm flex items-center gap-1.5"><ClockIco/>{active.hours}</p>
//                     </div>
//                     <div className="bg-[#f0f9f4] rounded-xl p-4">
//                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Phone</p>
//                       <p className="text-[#264653] font-bold text-sm flex items-center gap-1.5"><PhoneIco/>{active.phone}</p>
//                     </div>
//                   </div>

//                   {/* Feature bullets */}
//                   <div className="grid grid-cols-2 gap-2">
//                     {active.features.map((f,i)=>(
//                       <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
//                         <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                           style={{background:active.catBg, color:active.catColor}}><CheckIco/></div>
//                         {f}
//                       </div>
//                     ))}
//                   </div>

//                   {/* Actions */}
//                   <div className="flex gap-3 mt-auto pt-2">
//                     <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
//                       onClick={()=>setModalRes(active)}
//                       className="flex-1 bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold py-3.5 rounded-2xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] flex items-center justify-center gap-2">
//                       Get Details <ArrowIco/>
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* Right: photo */}
//                 <div className="relative h-64 md:h-auto overflow-hidden">
//                   <AnimatePresence mode="wait">
//                     <motion.img key={active.img}
//                       src={active.img} alt={active.title}
//                       initial={{opacity:0,scale:1.06}} animate={{opacity:1,scale:1}} exit={{opacity:0}}
//                       transition={{duration:0.5}}
//                       className="w-full h-full object-cover absolute inset-0"/>
//                   </AnimatePresence>
//                   <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#1B6E4F]/10"/>
//                   {/* Photo caption */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3">
//                       <p className="text-[11px] font-black text-[#264653] tracking-wide">{active.title}</p>
//                       <p className="text-[10px] text-gray-400 mt-0.5">{active.subtitle}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* Carousel dots + arrows */}
//         <div className="flex items-center justify-center gap-5 mt-7">
//           <motion.button onClick={prev} disabled={activeIdx===0}
//             whileHover={{scale:1.08}} whileTap={{scale:0.94}}
//             className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#d3efca] transition-colors">
//             <ChevLIco/>
//           </motion.button>
//           <div className="flex items-center gap-2">
//             {RESOURCES.map((_,i)=>(
//               <button key={i} onClick={()=>setActiveIdx(i)}
//                 className="rounded-full transition-all duration-300"
//                 style={{ width:i===activeIdx?22:8, height:8, background:i===activeIdx?"#1B6E4F":"#d3efca" }}/>
//             ))}
//           </div>
//           <motion.button onClick={next} disabled={activeIdx===total-1}
//             whileHover={{scale:1.08}} whileTap={{scale:0.94}}
//             className="w-10 h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#d3efca] transition-colors">
//             <ChevRIco/>
//           </motion.button>
//         </div>
//         <p className="text-center text-[#1B6E4F] text-xs font-bold mt-2 tracking-widest opacity-50">{activeIdx+1} / {total}</p>

//         {/* Mini preview strip */}
//         <motion.div variants={stagger(0.07)} initial="hidden" animate={inView?"show":"hidden"}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//           {RESOURCES.map((r,i)=>(
//             <motion.button key={r.id} variants={fadeUp}
//               onClick={()=>setActiveIdx(i)}
//               whileHover={{y:-3}}
//               className={`relative rounded-2xl overflow-hidden h-28 group transition-all ${activeIdx===i ? "ring-2 ring-[#1B6E4F] ring-offset-2" : "opacity-70 hover:opacity-100"}`}>
//               <img src={r.img} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
//               <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/70 to-transparent"/>
//               <div className="absolute bottom-2 left-2 right-2">
//                 <p className="text-white font-black text-xs leading-snug">{r.title.split(" ").slice(0,3).join(" ")}</p>
//               </div>
//               {activeIdx===i && (
//                 <div className="absolute top-2 right-2 w-4 h-4 bg-[#1B6E4F] rounded-full flex items-center justify-center">
//                   <CheckIco/>
//                 </div>
//               )}
//             </motion.button>
//           ))}
//         </motion.div>
//       </section>

//       {/* Detail Modal */}
//       <AnimatePresence>
//         {modalRes && <DetailModal r={modalRes} onClose={()=>setModalRes(null)}/>}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FeaturedResources2;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};
const slideL = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

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
const ClockIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={15} />
);
const PhoneIco = () => (
  <Ico
    d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"
    size={15}
  />
);
const PinIco = () => (
  <Ico
    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
    size={15}
  />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2} />;
const ChevLIco = () => <Ico d="M15 18l-6-6 6-6" size={18} sw={2.2} />;
const ChevRIco = () => <Ico d="M9 18l6-6-6-6" size={18} sw={2.2} />;
const FoodIco = () => (
  <Ico
    d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
    size={20}
  />
);
const HomeIco = () => (
  <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={20} />
);
const HeartIco = () => (
  <Ico
    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    size={20}
  />
);
const BookIco = () => (
  <Ico
    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5"
    size={20}
  />
);
const CheckIco = () => <Ico d="M20 6L9 17l-5-5" size={14} sw={2.5} />;
const XMarkIco = () => <Ico d="M18 6L6 18M6 6l12 12" size={16} sw={2.5} />;

const Tag = ({ children, color = "#1B6E4F", bg = "#d3efca" }) => (
  <span
    className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
    style={{ background: bg, color }}
  >
    {children}
  </span>
);

const RESOURCES = [
  {
    id: 0,
    tag: "Food",
    catColor: "#f59e0b",
    catBg: "#fef3c7",
    icon: <FoodIco />,
    title: "Chester County Food Bank",
    subtitle: "650 Pennsylvania Dr, Exton PA",
    desc: "Free groceries and prepared meals for families in need across 6 distribution sites countywide. No income verification required — just bring a photo ID.",
    hours: "Mon–Fri 9am–5pm",
    phone: "(610) 873-6000",
    urgent: true,
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    features: [
      "Walk-in pantry available",
      "SNAP enrollment help on-site",
      "Fresh produce when available",
      "No appointment required on Fridays",
    ],
  },
  {
    id: 1,
    tag: "Housing",
    catColor: "#3b82f6",
    catBg: "#dbeafe",
    icon: <HomeIco />,
    title: "City Gate",
    subtitle: "17 N 7th Ave, Coatesville, PA",
    desc: "Emergency and transitional housing for individuals and families with wraparound case management services. Low-barrier intake — no ID required to access emergency beds.",
    hours: "24/7 Intake",
    phone: "(719) 266-8300",
    urgent: false,
    img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Walk-in intake accepted nightly",
      "On-site case managers",
      "Transitional housing referrals",
      "Pet-friendly options available",
    ],
  },
  {
    id: 2,
    tag: "Health",
    catColor: "#ec4899",
    catBg: "#fce7f3",
    icon: <HeartIco />,
    title: "Chester County Hospital",
    subtitle: "701 E Marshall St, West Chester, PA 19380",
    desc: "Hospital located in Chester County which can aid people who need medical help. Equipped with top notch medical equipment to handle a variety of injuries sustained.",
    hours: "Mon–Sat 8am–6pm",
    phone: "(610) 431-5000",
    urgent: false,
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "$0 visits for qualifying patients",
      "Mental health & dental included",
      "Accepts Medicaid & Medicare",
      "Same-day urgent slots available",
    ],
  },
  {
    id: 3,
    tag: "Education",
    catColor: "#06b6d4",
    catBg: "#cffafe",
    icon: <BookIco />,
    title: "Chester County Library",
    subtitle: "17 branch locations countywide",
    desc: "Free tutoring, workforce training, ESL classes, and digital literacy programs across 17 branch locations. No library card required for first visit.",
    hours: "Daily 9am–8pm",
    phone: "(610) 280-2600",
    urgent: false,
    img: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Free GED prep classes",
      "ESL for all skill levels",
      "1-on-1 adult literacy tutoring",
      "Job search & resume help",
    ],
  },
];

const DetailModal = ({ r, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#264653]/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)] max-h-[92vh] overflow-y-auto"
      >
        <div className="relative h-44 sm:h-52 overflow-hidden">
          <img
            src={r.img}
            alt={r.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/80 via-[#1B6E4F]/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          >
            <XMarkIco />
          </button>
          {r.urgent && (
            <span className="absolute top-4 left-4 bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full">
              HIGH NEED
            </span>
          )}
          <div className="absolute bottom-4 left-5">
            <Tag color={r.catColor} bg="rgba(255,255,255,0.15)">
              {r.tag}
            </Tag>
            <h2 className="text-white font-black text-lg sm:text-xl mt-1">
              {r.title}
            </h2>
          </div>
        </div>
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <PinIco />
            {r.subtitle}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f0f9f4] rounded-xl p-3">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Hours
              </p>
              <p className="text-[#264653] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                <ClockIco />
                {r.hours}
              </p>
            </div>
            <div className="bg-[#f0f9f4] rounded-xl p-3">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Phone
              </p>
              <p className="text-[#264653] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                <PhoneIco />
                {r.phone}
              </p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
              What's available
            </p>
            <div className="flex flex-col gap-2">
              {r.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-gray-500"
                >
                  <div
                    className="w-4 h-4 rounded-full bg-[#d3efca] flex items-center justify-center flex-shrink-0"
                    style={{ color: r.catColor }}
                  >
                    <CheckIco />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <Link
              href="/resources"
              className="flex-1 bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(27,110,79,0.28)]"
            >
              View Resources <ArrowIco />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeaturedResources2 = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalRes, setModalRes] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const startX = useRef(null);

  const active = RESOURCES[activeIdx];
  const total = RESOURCES.length;

  const prev = () => setActiveIdx((i) => Math.max(i - 1, 0));
  const next = () => setActiveIdx((i) => Math.min(i + 1, total - 1));

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
    <>
      <section
        ref={ref}
        className="px-4 sm:px-8 md:px-20 py-14 sm:py-24 bg-[#F1FAEE] overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-between items-end mb-8 sm:mb-12 gap-3">
          <motion.div
            variants={slideL}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
              Curated for You
            </span>
            <h2 className="text-[#264653] font-black text-2xl sm:text-4xl mt-2 sm:mt-3">
              Featured Resources
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="shrink-0"
          >
            <Link
              href="/resources"
              className="flex items-center gap-1.5 text-[#1B6E4F] font-bold text-xs sm:text-sm hover:gap-2.5 transition-all whitespace-nowrap"
            >
              View All <ArrowIco />
            </Link>
          </motion.div>
        </div>

        {/* Tab nav — horizontally scrollable on mobile */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {RESOURCES.map((r, i) => (
            <motion.button
              key={r.id}
              variants={fadeUp}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold border-[1.5px] transition-all whitespace-nowrap shrink-0 ${activeIdx === i ? "text-white border-transparent shadow-lg" : "bg-white border-[#e8f5e1] text-gray-500 hover:border-[#d3efca]"}`}
              style={
                activeIdx === i
                  ? {
                      background: r.catColor,
                      boxShadow: `0 4px 18px ${r.catColor}44`,
                    }
                  : {}
              }
            >
              <span
                style={
                  activeIdx === i ? { color: "white" } : { color: r.catColor }
                }
              >
                {r.icon}
              </span>
              <span className="hidden xs:inline sm:inline">{r.title}</span>
              <span className="sm:hidden">{r.tag}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(27,110,79,0.12)] border border-[#e8f5e1]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Stacked on mobile, side-by-side on md+ */}
              <div className="flex flex-col md:grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px]">
                {/* Photo — top on mobile */}
                <div className="relative h-52 sm:h-64 md:h-auto md:order-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.img}
                      src={active.img}
                      alt={active.title}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-[#1B6E4F]/10" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2 sm:py-3">
                      <p className="text-[11px] font-black text-[#264653] tracking-wide">
                        {active.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {active.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info — below photo on mobile */}
                <div className="p-5 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-5 md:order-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag color={active.catColor} bg={active.catBg}>
                      {active.tag}
                    </Tag>
                    {active.urgent && (
                      <span className="bg-[#0cc883] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">
                        HIGH NEED
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-[#264653] font-black text-xl sm:text-2xl md:text-3xl leading-snug mb-1">
                      {active.title}
                    </h3>
                    <p className="text-gray-400 text-sm flex items-center gap-1.5">
                      <PinIco />
                      {active.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {active.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#f0f9f4] rounded-xl p-3 sm:p-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                        Hours
                      </p>
                      <p className="text-[#264653] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                        <ClockIco />
                        {active.hours}
                      </p>
                    </div>
                    <div className="bg-[#f0f9f4] rounded-xl p-3 sm:p-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 sm:mb-1.5">
                        Phone
                      </p>
                      <p className="text-[#264653] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                        <PhoneIco />
                        {active.phone}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {active.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: active.catBg,
                            color: active.catColor,
                          }}
                        >
                          <CheckIco />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setModalRes(active)}
                      className="flex-1 bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold py-3 sm:py-3.5 rounded-2xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] flex items-center justify-center gap-2"
                    >
                      Get Details <ArrowIco />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel dots + arrows */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mt-6 sm:mt-7">
          <motion.button
            onClick={prev}
            disabled={activeIdx === 0}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#d3efca] transition-colors"
          >
            <ChevLIco />
          </motion.button>
          <div className="flex items-center gap-2">
            {RESOURCES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIdx ? 22 : 8,
                  height: 8,
                  background: i === activeIdx ? "#1B6E4F" : "#d3efca",
                }}
              />
            ))}
          </div>
          <motion.button
            onClick={next}
            disabled={activeIdx === total - 1}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-[1.5px] border-[#d3efca] flex items-center justify-center text-[#1B6E4F] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#d3efca] transition-colors"
          >
            <ChevRIco />
          </motion.button>
        </div>
        <p className="text-center text-[#1B6E4F] text-xs font-bold mt-2 tracking-widest opacity-50">
          {activeIdx + 1} / {total}
        </p>

        {/* Mini preview strip — 2-col on mobile, 4-col on md+ */}
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          {RESOURCES.map((r, i) => (
            <motion.button
              key={r.id}
              variants={fadeUp}
              onClick={() => setActiveIdx(i)}
              whileHover={{ y: -3 }}
              className={`relative rounded-2xl overflow-hidden h-24 sm:h-28 group transition-all ${activeIdx === i ? "ring-2 ring-[#1B6E4F] ring-offset-2" : "opacity-70 hover:opacity-100"}`}
            >
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white font-black text-[10px] sm:text-xs leading-snug">
                  {r.title.split(" ").slice(0, 3).join(" ")}
                </p>
              </div>
              {activeIdx === i && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-[#1B6E4F] rounded-full flex items-center justify-center">
                  <CheckIco />
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>
      </section>
      <AnimatePresence>
        {modalRes && (
          <DetailModal r={modalRes} onClose={() => setModalRes(null)} />
        )}
      </AnimatePresence>
      <div
        className="w-full overflow-hidden -mb-px"
        style={{ background: "#F1FAEE" }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "clamp(40px, 5vw, 80px)" }}
        >
          <path
            d="M0,40 C120,10 240,70 360,40 C480,10 600,70 720,40 C840,10 960,70 1080,40 C1200,10 1320,70 1440,40 L1440,80 L0,80 Z"
            fill="#d3efca"
          />
          <path
            d="M0,48 C120,18 240,78 360,48 C480,18 600,78 720,48 C840,18 960,78 1080,48 C1200,18 1320,78 1440,48"
            fill="none"
            stroke="#d3efca"
            strokeWidth="1.5"
            opacity="0.6"
          />
        </svg>
      </div>
    </>
  );
};

export default FeaturedResources2;
