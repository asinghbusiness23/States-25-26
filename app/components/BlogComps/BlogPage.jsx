// "use client";
// import React, { useState, useMemo, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { ALL_POSTS } from "./newData";
// import { LuRefreshCcw } from "react-icons/lu";
// import { CgNotes } from "react-icons/cg";
// import { IoIosAlert } from "react-icons/io";
// import Link from "next/link";
// import { FaLink, FaMapPin } from "react-icons/fa";
// import { PiLadderSimpleFill } from "react-icons/pi";

// // ── Unsplash photo map — free, no API key needed ──────────────────────────────
// // Format: https://images.unsplash.com/photo-{id}?w=800&q=80&auto=format&fit=crop
// const PHOTOS = {
//   food: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop",
//   food2:
//     "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&auto=format&fit=crop",
//   housing:
//     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
//   housing2:
//     "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80&auto=format&fit=crop",
//   health:
//     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
//   health2:
//     "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop",
//   jobs: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
//   education:
//     "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&auto=format&fit=crop",
//   emergency:
//     "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80&auto=format&fit=crop",
//   community:
//     "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80&auto=format&fit=crop",
//   community2:
//     "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80&auto=format&fit=crop",
//   volunteers:
//     "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop",
//   hero: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80&auto=format&fit=crop",
//   meal: "https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?w=800&q=80&auto=format&fit=crop",
//   clinic:
//     "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80&auto=format&fit=crop",
//   all: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80&auto=format&fit=crop",
// };

// const CAT_PHOTO = {
//   food: PHOTOS.food,
//   housing: PHOTOS.housing,
//   health: PHOTOS.health,
//   jobs: PHOTOS.jobs,
//   education: PHOTOS.education,
//   emergency: PHOTOS.emergency,
//   all: PHOTOS.community,
// };

// // ── Variants ──────────────────────────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.4 } },
// };
// const slideL = {
//   hidden: { opacity: 0, x: -32 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const slideR = {
//   hidden: { opacity: 0, x: 32 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const stagger = (d = 0.08) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: d } },
// });

// const InView = ({ children, className = "" }) => {
//   const ref = useRef(null);
//   const v = useInView(ref, { once: true, margin: "-64px" });
//   return (
//     <motion.div
//       ref={ref}
//       variants={stagger(0.09)}
//       initial="hidden"
//       animate={v ? "show" : "hidden"}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // ── Icons ─────────────────────────────────────────────────────────────────────
// const Ico = ({ d, size = 20, sw = 1.8, fill = "none" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill={fill}
//     stroke="currentColor"
//     strokeWidth={sw}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d={d} />
//   </svg>
// );
// const SearchIco = ({ size = 20 }) => (
//   <Ico d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" size={size} />
// );
// const ClockIco = ({ size = 14 }) => (
//   <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={size} />
// );
// const ArrowIco = ({ size = 15 }) => (
//   <Ico d="M5 12h14M12 5l7 7-7 7" size={size} sw={2} />
// );
// const XIco = ({ size = 15 }) => (
//   <Ico d="M18 6L6 18M6 6l12 12" size={size} sw={2.5} />
// );
// const BellIco = ({ size = 18 }) => (
//   <Ico
//     d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
//     size={size}
//   />
// );
// const BookIco = ({ size = 18 }) => (
//   <Ico
//     d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5"
//     size={size}
//   />
// );
// const StarIco = ({ size = 14 }) => (
//   <Ico
//     d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//     size={size}
//     sw={1.5}
//   />
// );
// const PlusIco = ({ size = 18 }) => (
//   <Ico d="M12 5v14M5 12h14" size={size} sw={2.5} />
// );
// const FireIco = ({ size = 14 }) => (
//   <Ico
//     d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"
//     size={size}
//   />
// );
// const ChevLIco = ({ size = 20 }) => (
//   <Ico d="M15 18l-6-6 6-6" size={size} sw={2.5} />
// );
// const HomeIco = ({ size = 22 }) => (
//   <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={size} />
// );
// const HeartIco = ({ size = 22 }) => (
//   <Ico
//     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//     size={size}
//   />
// );
// const FoodIco = ({ size = 22 }) => (
//   <Ico
//     d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
//     size={size}
//   />
// );
// const BriefIco = ({ size = 22 }) => (
//   <Ico
//     d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
//     size={size}
//   />
// );
// const GradIco = ({ size = 22 }) => (
//   <Ico d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" size={size} />
// );
// const ZapIco = ({ size = 22 }) => (
//   <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={size} />
// );
// const CheckIco = ({ size = 16 }) => (
//   <Ico d="M20 6L9 17l-5-5" size={size} sw={2.5} />
// );
// const ExLinkIco = ({ size = 14 }) => (
//   <Ico
//     d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
//     size={size}
//     sw={2}
//   />
// );
// const ImgIco = ({ size = 22 }) => (
//   <Ico
//     d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"
//     size={size}
//   />
// );

// // ── Category config ───────────────────────────────────────────────────────────
// const CATS = [
//   {
//     id: "all",
//     label: "All Topics",
//     Icon: BookIco,
//     color: "#1B6E4F",
//     bg: "#d3efca",
//   },
//   {
//     id: "food",
//     label: "Food Assistance",
//     Icon: FoodIco,
//     color: "#f59e0b",
//     bg: "#fef3c7",
//   },
//   {
//     id: "housing",
//     label: "Housing",
//     Icon: HomeIco,
//     color: "#3b82f6",
//     bg: "#dbeafe",
//   },
//   {
//     id: "health",
//     label: "Health",
//     Icon: HeartIco,
//     color: "#ec4899",
//     bg: "#fce7f3",
//   },
//   {
//     id: "jobs",
//     label: "Jobs",
//     Icon: BriefIco,
//     color: "#8b5cf6",
//     bg: "#ede9fe",
//   },
//   {
//     id: "education",
//     label: "Education",
//     Icon: GradIco,
//     color: "#06b6d4",
//     bg: "#cffafe",
//   },
//   {
//     id: "emergency",
//     label: "Emergency Help",
//     Icon: ZapIco,
//     color: "#ef4444",
//     bg: "#fee2e2",
//   },
// ];

// const UPDATES = [
//   {
//     type: "new",
//     emoji: <CgNotes></CgNotes>,
//     text: "Chester County Cancer Center added",
//     date: "Mar 20",
//   },
//   {
//     type: "alert",
//     emoji: <IoIosAlert></IoIosAlert>,
//     text: "City Bridge temporarily at capacity — call ahead",
//     date: "Mar 19",
//   },
//   {
//     type: "update",
//     emoji: <LuRefreshCcw></LuRefreshCcw>,
//     text: "Brandywine Valley Human SPCA updated hours - corrected",
//     date: "Mar 17",
//   },
//   {
//     type: "new",
//     emoji: <CgNotes></CgNotes>,
//     text: "St. Patrick's Food Cupboard added",
//     date: "Mar 14",
//   },
//   {
//     type: "update",
//     emoji: <LuRefreshCcw></LuRefreshCcw>,
//     text: "Community Health Clinic updated phone number — corrected",
//     date: "Mar 12",
//   },
// ];

// // ── Article Modal ─────────────────────────────────────────────────────────────
// const ArticleModal = ({ post, onClose }) => {
//   const cat = CATS.find((c) => c.id === post.category) || CATS[0];
//   const CatIcon = cat.Icon;

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   useEffect(() => {
//     const fn = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", fn);
//     return () => window.removeEventListener("keydown", fn);
//   }, [onClose]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         key="backdrop"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-[#264653]/70 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-8 px-4"
//         onClick={onClose}
//       >
//         <motion.div
//           key="modal"
//           initial={{ opacity: 0, y: 40, scale: 0.97 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 24, scale: 0.97 }}
//           transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//           onClick={(e) => e.stopPropagation()}
//           className="bg-[#F1FAEE] rounded-3xl w-full max-w-2xl shadow-[0_32px_80px_rgba(0,0,0,0.3)] overflow-hidden"
//         >
//           {/* Hero photo */}
//           {post.photo && (
//             <div className="relative h-52 overflow-hidden">
//               <img
//                 src={post.photo}
//                 alt={post.title}
//                 className="w-full h-full object-cover"
//               />
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to bottom, rgba(27,110,79,0.3) 0%, rgba(38,70,83,0.85) 100%)",
//                 }}
//               />
//               <button
//                 onClick={onClose}
//                 className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
//               >
//                 <ChevLIco size={14} /> Back
//               </button>
//               <div className="absolute bottom-5 left-6 right-6">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div
//                     className="w-7 h-7 rounded-lg flex items-center justify-center"
//                     style={{
//                       background: "rgba(255,255,255,0.2)",
//                       color: "white",
//                     }}
//                   >
//                     <CatIcon size={14} />
//                   </div>
//                   <span className="text-white/80 text-[10px] font-black tracking-widest uppercase">
//                     {cat.label}
//                   </span>
//                 </div>
//                 <h1 className="text-white font-black text-xl md:text-2xl leading-snug">
//                   {post.title}
//                 </h1>
//                 <div className="flex items-center gap-4 text-white/60 text-xs font-semibold mt-2">
//                   <span className="flex items-center gap-1">
//                     <ClockIco size={11} /> {post.readTime} min read
//                   </span>
//                   <span>{post.date}</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Resources cited */}
//           <div className="mx-6 mt-5 bg-white rounded-2xl border border-[#d3efca] px-4 py-3">
//             <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase mb-1">
//               Resources referenced
//             </p>
//             <p className="text-gray-500 text-xs leading-relaxed font-medium">
//               {post.resource}
//             </p>
//           </div>

//           {/* Body */}
//           <div className="px-6 py-6 flex flex-col gap-4">
//             {post.content.map((block, i) => {
//               if (block.type === "intro")
//                 return (
//                   <p
//                     key={i}
//                     className="text-[#264653] text-base leading-[1.85] font-medium border-l-4 border-[#1B6E4F] pl-4"
//                   >
//                     {block.text}
//                   </p>
//                 );
//               if (block.type === "h2")
//                 return (
//                   <h2
//                     key={i}
//                     className="text-[#264653] font-black text-xl mt-3 leading-snug"
//                   >
//                     {block.text}
//                   </h2>
//                 );
//               if (block.type === "p")
//                 return (
//                   <p key={i} className="text-gray-600 text-sm leading-[1.9]">
//                     {block.text}
//                   </p>
//                 );
//               if (block.type === "tip")
//                 return (
//                   <div
//                     key={i}
//                     className="bg-[#d3efca] border-l-4 border-[#1B6E4F] rounded-r-xl px-5 py-4 flex gap-3"
//                   >
//                     <span className="text-[#1B6E4F] flex-shrink-0 mt-0.5">
//                       <CheckIco size={16} />
//                     </span>
//                     <p className="text-[#1B6E4F] text-sm leading-relaxed font-medium">
//                       {block.text}
//                     </p>
//                   </div>
//                 );
//               if (block.type === "list")
//                 return (
//                   <ul key={i} className="flex flex-col gap-2.5 pl-1">
//                     {block.items.map((item, j) => (
//                       <li
//                         key={j}
//                         className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
//                       >
//                         <div className="w-5 h-5 rounded-full bg-[#d3efca] flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <CheckIco size={11} />
//                         </div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 );
//               return null;
//             })}

//             {/* Footer */}
//             <div className="mt-4 pt-5 border-t border-[#d3efca]">
//               <div className="bg-white rounded-2xl border border-[#d3efca] p-4 mb-4">
//                 <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
//                   Find these resources on Chester Bridge
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {post.resource.split(", ").map((r) => (
//                     <span
//                       key={r}
//                       className="flex items-center gap-1.5 text-xs font-semibold text-[#1B6E4F] bg-[#d3efca] px-3 py-1.5 rounded-full"
//                     >
//                       {r} <ExLinkIco size={11} />
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <button
//                 onClick={onClose}
//                 className="w-full bg-[#1B6E4F] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#2a9d6e] transition-colors"
//               >
//                 <ChevLIco size={16} /> Back to all articles
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// // ── Category tag pill ─────────────────────────────────────────────────────────
// const CatTag = ({ catId, small = false }) => {
//   const c = CATS.find((x) => x.id === catId) || CATS[0];
//   const Icon = c.Icon;
//   return (
//     <span
//       className={`inline-flex items-center gap-1.5 font-black tracking-widest uppercase rounded-full ${small ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}
//       style={{ background: c.bg, color: c.color }}
//     >
//       <Icon size={small ? 10 : 12} /> {c.label}
//     </span>
//   );
// };

// // ── Featured card — magazine style with photo ─────────────────────────────────
// const FeaturedCard = ({ post, large = false, onClick }) => {
//   const catColor = CATS.find((c) => c.id === post.category)?.color || "#1B6E4F";
//   const CatIcon = CATS.find((c) => c.id === post.category)?.Icon || BookIco;

//   return (
//     <motion.div
//       variants={fadeUp}
//       whileHover={{ y: -6, boxShadow: `0 24px 64px ${catColor}28` }}
//       onClick={onClick}
//       className={`rounded-3xl overflow-hidden border-[1.5px] border-[#e8f5e1] shadow-sm flex flex-col transition-shadow cursor-pointer bg-white ${large ? "md:col-span-2" : ""}`}
//     >
//       {/* Photo */}
//       <div className={`relative overflow-hidden ${large ? "h-64" : "h-48"}`}>
//         <img
//           src={post.photo || CAT_PHOTO[post.category]}
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)`,
//           }}
//         />
//         {/* Category badge on photo */}
//         <div className="absolute top-4 left-4">
//           <CatTag catId={post.category} />
//         </div>
//         {/* Featured badge */}
//         <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#fef3c7] px-2.5 py-1 rounded-full">
//           <StarIco size={11} />
//           <span className="text-[9px] text-[#d97706] font-black tracking-widest">
//             FEATURED
//           </span>
//         </div>
//         {/* Read time overlay */}
//         <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80 text-xs font-semibold">
//           <ClockIco size={12} /> {post.readTime} min read · {post.date}
//         </div>
//       </div>

//       {/* Card body */}
//       <div className="p-6 flex flex-col gap-3 flex-1">
//         <h3
//           className={`font-black text-[#264653] leading-snug ${large ? "text-xl" : "text-lg"}`}
//         >
//           {post.title}
//         </h3>
//         <p className="text-gray-400 text-sm leading-relaxed flex-1">
//           {post.summary}
//         </p>
//         <motion.button
//           whileHover={{ x: 3 }}
//           whileTap={{ scale: 0.97 }}
//           className="flex items-center gap-1.5 font-bold text-sm self-start mt-1"
//           style={{ color: catColor }}
//           onClick={(e) => {
//             e.stopPropagation();
//             onClick();
//           }}
//         >
//           Read Article <ArrowIco />
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// // ── Regular blog card — photo strip on top ────────────────────────────────────
// const BlogCard = ({ post, onClick }) => {
//   const catColor = CATS.find((c) => c.id === post.category)?.color || "#1B6E4F";
//   return (
//     <motion.div
//       layout
//       variants={fadeUp}
//       initial="hidden"
//       animate="show"
//       exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
//       whileHover={{ y: -5, boxShadow: `0 16px 44px ${catColor}1a` }}
//       onClick={onClick}
//       className="bg-white rounded-2xl overflow-hidden border border-[#e8f5e1] shadow-sm flex flex-col transition-shadow cursor-pointer group"
//     >
//       {/* Photo */}
//       <div className="relative h-40 overflow-hidden">
//         <img
//           src={post.photo || CAT_PHOTO[post.category]}
//           alt={post.title}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//         <div className="absolute top-3 left-3">
//           <CatTag catId={post.category} small />
//         </div>
//         <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/80 text-[10px] font-semibold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
//           <ClockIco size={10} /> {post.readTime} min
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-5 flex flex-col gap-2.5 flex-1">
//         <div className="flex items-center justify-between">
//           <span className="text-[10px] text-gray-300 font-semibold">
//             {post.date}
//           </span>
//         </div>
//         <h3 className="font-black text-[#264653] text-base leading-snug">
//           {post.title}
//         </h3>
//         <p className="text-gray-400 text-sm leading-relaxed flex-1">
//           {post.summary}
//         </p>
//         <div className="flex items-center justify-end pt-2 border-t border-[#f0f9f0] mt-auto">
//           <motion.button
//             whileHover={{ x: 3 }}
//             className="flex items-center gap-1 text-xs font-black"
//             style={{ color: catColor }}
//           >
//             Read More <ArrowIco />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ── Community photo strip ─────────────────────────────────────────────────────
// const PhotoStrip = () => {
//   const photos = [
//     { src: PHOTOS.community, label: "Community Support" },
//     { src: PHOTOS.volunteers, label: "Volunteers" },
//     { src: PHOTOS.food, label: "Food Access" },
//     { src: PHOTOS.community2, label: "Neighbors Helping Neighbors" },
//   ];
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section ref={ref} className="px-6 md:px-20 py-16 bg-white overflow-hidden">
//       <motion.div
//         variants={stagger(0.08)}
//         initial="hidden"
//         animate={inView ? "show" : "hidden"}
//       >
//         <motion.div
//           variants={fadeUp}
//           className="flex items-end justify-between mb-8"
//         >
//           <div>
//             <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
//               Our Community
//             </span>
//             <h2 className="text-[#264653] font-black text-3xl">
//               Chester County in action
//             </h2>
//             <p className="text-gray-400 text-sm mt-1 max-w-sm">
//               Real people, real programs, real impact — happening every day
//               across the county.
//             </p>
//           </div>
//         </motion.div>
//         <motion.div
//           variants={stagger(0.07)}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {photos.map((p, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               whileHover={{ scale: 1.03 }}
//               className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
//             >
//               <img
//                 src={p.src}
//                 alt={p.label}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/60 to-transparent" />
//               <span className="absolute bottom-3 left-3 text-white text-xs font-black">
//                 {p.label}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// // ══════════════════════════════════════════════════════════════════════════════
// // BLOGS PAGE
// // ══════════════════════════════════════════════════════════════════════════════
// export default function BlogsPage() {
//   const [query, setQuery] = useState("");
//   const [activeCat, setActiveCat] = useState("all");
//   const [openPost, setOpenPost] = useState(null);

//   const featured = ALL_POSTS.filter((p) => p.featured);
//   const regular = useMemo(
//     () =>
//       ALL_POSTS.filter((p) => {
//         if (p.featured) return false;
//         const mQ =
//           !query ||
//           p.title.toLowerCase().includes(query.toLowerCase()) ||
//           p.summary.toLowerCase().includes(query.toLowerCase());
//         const mC = activeCat === "all" || p.category === activeCat;
//         return mQ && mC;
//       }),
//     [query, activeCat],
//   );

//   const updatesRef = useRef(null);
//   const updatesInView = useInView(updatesRef, { once: true, margin: "-60px" });
//   const ctaRef = useRef(null);
//   const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

//   return (
//     <div className="min-h-screen bg-[#F1FAEE]">
//       {/* ── HERO with real photo overlay ─────────────────────────────────── */}
//       <section className="relative px-6 md:px-20 pt-20 pb-36 overflow-hidden flex justify-center">
//         {/* Background photo */}
//         <div className="absolute inset-0">
//           <img
//             src={PHOTOS.hero}
//             alt="Chester County community"
//             className="w-full h-full object-cover"
//           />
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(135deg, rgba(27,110,79,0.92) 0%, rgba(38,70,83,0.88) 100%)",
//             }}
//           />
//         </div>

//         {/* Decorative circles */}
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           viewBox="0 0 1200 500"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <circle cx="1050" cy="-60" r="340" fill="white" fillOpacity="0.03" />
//           <circle cx="-60" cy="420" r="280" fill="#0cc883" fillOpacity="0.07" />
//         </svg>

//         <motion.div
//           variants={stagger(0.11)}
//           initial="hidden"
//           animate="show"
//           className="relative z-10 max-w-3xl text-center"
//         >
//           <motion.span
//             variants={fadeUp}
//             className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-6"
//           >
//             Chester County · Community Blog
//           </motion.span>
//           <motion.h1
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight mb-6"
//           >
//             Community
//             <br />
//             <span className="text-[#0cc883]">Insights</span>
//           </motion.h1>
//           <motion.p
//             variants={fadeUp}
//             className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10 mx-auto"
//           >
//             Practical guides, local updates, and step-by-step help for
//             navigating resources in Chester County.
//           </motion.p>
//           <motion.div
//             variants={fadeUp}
//             className="flex gap-10 mt-8 justify-center"
//           >
//             {[
//               [ALL_POSTS.length, "Guides"],
//               [CATS.length - 1, "Topics"],
//               ["Browse", "Now"],
//             ].map(([n, l]) => (
//               <div key={l} className="text-center">
//                 <p className="text-2xl font-black text-white">{n}</p>
//                 <p className="text-xs text-white/50 font-semibold mt-0.5">
//                   {l}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//           <div className="flex justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex items-center mt-8 gap-2 bg-[#F1FAEE] text-[#264653] font-bold px-10 py-4 rounded-xl text-lg shadow-[0_4px_16px_rgba(27,110,79,0.28)]"
//             >
//               Browse Blogs <ArrowIco size={18} />
//             </motion.button>
//           </div>
//         </motion.div>

//         <div className="absolute bottom-0 left-0 right-0">
//           <svg
//             viewBox="0 0 1440 60"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full"
//           >
//             <path
//               d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
//               fill="#F1FAEE"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* ── FEATURED POSTS — magazine grid ───────────────────────────────── */}
//       <section className="px-6 md:px-20 py-20 bg-[#F1FAEE]">
//         <InView>
//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <motion.div variants={fadeUp}>
//                 <span className="inline-flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
//                   <FireIco /> Featured
//                 </span>
//               </motion.div>
//               <motion.h2
//                 variants={fadeUp}
//                 className="text-[#264653] font-black text-3xl md:text-4xl mt-3"
//               >
//                 Start here
//               </motion.h2>
//               <motion.p
//                 variants={fadeUp}
//                 className="text-gray-400 text-base mt-2 max-w-lg"
//               >
//                 The most important guides for getting help in Chester County —
//                 written to be actionable, not just informative.
//               </motion.p>
//             </div>
//             <motion.p
//               variants={fadeIn}
//               className="text-xs text-gray-300 font-semibold hidden md:block"
//             >
//               Click any card to read the full article
//             </motion.p>
//           </div>
//           <motion.div
//             variants={stagger(0.1)}
//             className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           >
//             {featured.map((p, i) => (
//               <FeaturedCard
//                 key={p.id}
//                 post={p}
//                 large={i === 0}
//                 onClick={() => setOpenPost(p)}
//               />
//             ))}
//           </motion.div>
//         </InView>
//       </section>

//       {/* ── COMMUNITY PHOTO STRIP ────────────────────────────────────────── */}
//       <PhotoStrip />

//       {/* ── SEARCH ───────────────────────────────────────────────────────── */}
//       <section className="flex flex-col items-center w-full bg-[#d3efca] pb-8">
//         <motion.h2
//           variants={fadeUp}
//           className="text-[#264653] font-black text-3xl md:text-4xl py-8"
//         >
//           Search Resources
//         </motion.h2>
//         <motion.div
//           variants={fadeUp}
//           className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.18)] w-full max-w-xl mx-6"
//         >
//           <span className="text-[#1B6E4F] shrink-0">
//             <SearchIco />
//           </span>
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search guides, topics, resources…"
//             className="flex-1 bg-transparent text-[#264653] placeholder-gray-300 font-semibold text-sm outline-none py-1"
//           />
//           {query && (
//             <motion.button
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               onClick={() => setQuery("")}
//               className="text-gray-300 hover:text-gray-500 transition-colors"
//             >
//               <XIco />
//             </motion.button>
//           )}
//         </motion.div>
//       </section>

//       {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
//       <section className="bg-[#d3efca] px-6 md:px-20 pt-2 pb-14">
//         <InView>
//           <motion.p
//             variants={fadeUp}
//             className="text-[#1B6E4F] font-black text-xs tracking-[0.14em] uppercase mb-3"
//           >
//             Browse by topic
//           </motion.p>
//           <motion.div variants={stagger(0.06)} className="flex flex-wrap gap-3">
//             {CATS.map((cat) => {
//               const CIcon = cat.Icon;
//               return (
//                 <motion.button
//                   key={cat.id}
//                   variants={fadeUp}
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.96 }}
//                   onClick={() => setActiveCat(cat.id)}
//                   className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-black border-[1.5px] transition-all ${activeCat === cat.id ? "text-white border-transparent shadow-lg" : "bg-white border-white text-gray-500 hover:border-[#d3efca]"}`}
//                   style={
//                     activeCat === cat.id
//                       ? {
//                           background: cat.color,
//                           boxShadow: `0 4px 20px ${cat.color}40`,
//                         }
//                       : {}
//                   }
//                 >
//                   <CIcon size={18} />
//                   {cat.label}
//                   <span
//                     className={`text-xs font-bold px-2 py-0.5 rounded-full ${activeCat === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}
//                   >
//                     {cat.id === "all"
//                       ? ALL_POSTS.length
//                       : ALL_POSTS.filter((p) => p.category === cat.id).length}
//                   </span>
//                 </motion.button>
//               );
//             })}
//           </motion.div>
//         </InView>
//       </section>

//       {/* ── BLOG GRID ────────────────────────────────────────────────────── */}
//       <section className="px-6 md:px-20 py-20 bg-[#F1FAEE]">
//         <InView>
//           <div className="flex items-center justify-between mb-8">
//             <motion.div variants={fadeUp}>
//               <h2 className="text-[#264653] font-black text-2xl">
//                 {activeCat === "all"
//                   ? "All Guides"
//                   : CATS.find((c) => c.id === activeCat)?.label}
//                 <span className="text-gray-300 font-medium text-lg ml-3">
//                   {regular.length} posts
//                 </span>
//               </h2>
//             </motion.div>
//             {(query || activeCat !== "all") && (
//               <motion.button
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 onClick={() => {
//                   setQuery("");
//                   setActiveCat("all");
//                 }}
//                 className="flex items-center gap-1.5 bg-[#d3efca] text-[#1B6E4F] text-xs font-bold px-3 py-1.5 rounded-full"
//               >
//                 <XIco /> Clear filters
//               </motion.button>
//             )}
//           </div>

//           <AnimatePresence mode="wait">
//             {regular.length === 0 ? (
//               <motion.div
//                 key="empty"
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 className="flex flex-col items-center justify-center py-20 text-center"
//               >
//                 <div className="w-16 h-16 bg-[#d3efca] rounded-2xl flex items-center justify-center text-[#1B6E4F] mb-4">
//                   <BookIco size={32} />
//                 </div>
//                 <p className="text-[#264653] font-black text-xl mb-2">
//                   No posts found
//                 </p>
//                 <p className="text-gray-400 text-sm mb-6 max-w-xs">
//                   Try a different topic or clear your search to see all guides.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setQuery("");
//                     setActiveCat("all");
//                   }}
//                   className="bg-[#d3efca] text-[#1B6E4F] font-bold px-6 py-3 rounded-xl text-sm"
//                 >
//                   Show all posts
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="grid"
//                 variants={stagger(0.07)}
//                 initial="hidden"
//                 animate="show"
//                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               >
//                 <AnimatePresence>
//                   {regular.map((p) => (
//                     <BlogCard
//                       key={p.id}
//                       post={p}
//                       onClick={() => setOpenPost(p)}
//                     />
//                   ))}
//                 </AnimatePresence>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </InView>
//       </section>

//       {/* ── COMMUNITY UPDATES with side photo ────────────────────────────── */}
//       <section ref={updatesRef} className="bg-[#f8faf8] px-6 md:px-20 py-20">
//         <motion.div
//           variants={stagger(0.1)}
//           initial="hidden"
//           animate={updatesInView ? "show" : "hidden"}
//           className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start"
//         >
//           <div>
//             <motion.div variants={fadeUp}>
//               <span className="inline-flex items-center gap-2 bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
//                 <BellIco /> Live Updates
//               </span>
//             </motion.div>
//             <motion.h2
//               variants={fadeUp}
//               className="text-[#264653] font-black text-3xl md:text-4xl leading-tight mb-4"
//             >
//               What's new
//               <br />
//               in the county
//             </motion.h2>
//             <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-base leading-relaxed mb-5"
//             >
//               New resources, policy changes, schedule updates, and local events
//               — updated as we learn about them.
//             </motion.p>

//             {/* Photo beside the updates section */}
//             <motion.div
//               variants={fadeUp}
//               className="relative rounded-2xl overflow-hidden h-44 mb-6 shadow-md"
//             >
//               <img
//                 src={PHOTOS.volunteers}
//                 alt="Community volunteers"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/60 to-transparent" />
//               <div className="absolute bottom-3 left-4">
//                 <p className="text-white font-black text-sm">
//                   Chester County Volunteers
//                 </p>
//                 <p className="text-white/70 text-xs">
//                   Making a difference every day
//                 </p>
//               </div>
//             </motion.div>
//           </div>

//           <motion.div variants={stagger(0.09)} className="flex flex-col gap-3">
//             {UPDATES.map((u, i) => {
//               const badge =
//                 u.type === "new"
//                   ? { bg: "#d3efca", color: "#1B6E4F", label: "New" }
//                   : u.type === "alert"
//                     ? { bg: "#fee2e2", color: "#ef4444", label: "Alert" }
//                     : u.type === "event"
//                       ? { bg: "#dbeafe", color: "#3b82f6", label: "Event" }
//                       : { bg: "#fef3c7", color: "#d97706", label: "Update" };
//               return (
//                 <motion.div
//                   key={i}
//                   variants={fadeUp}
//                   whileHover={{ x: 4 }}
//                   className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-[#e8f5e1] shadow-sm transition-all"
//                 >
//                   <span className="text-xl flex-shrink-0 mt-0.5">
//                     {u.emoji}
//                   </span>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-[#264653] font-semibold text-sm leading-snug">
//                       {u.text}
//                     </p>
//                     <p className="text-gray-300 text-xs mt-1">{u.date}</p>
//                   </div>
//                   <span
//                     className="text-[10px] font-black px-2.5 py-1 rounded-full flex-shrink-0 self-start"
//                     style={{ background: badge.bg, color: badge.color }}
//                   >
//                     {badge.label}
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ── WRITING PHILOSOPHY ───────────────────────────────────────────── */}
//       <section className="px-6 md:px-20 py-16 bg-[#F1FAEE]">
//         <InView className="max-w-6xl mx-auto">
//           <motion.div
//             variants={fadeUp}
//             className="bg-gradient-to-br from-[#264653] to-[#1B6E4F] rounded-3xl overflow-hidden relative"
//           >
//             {/* Large photo inset */}
//             <div className="grid md:grid-cols-[1.2fr_1fr]">
//               <div className="relative h-64 md:h-auto min-h-[300px]">
//                 <img
//                   src={PHOTOS.community2}
//                   alt="Chester County community"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(to right, transparent 60%, rgba(38,70,83,0.95) 100%)",
//                   }}
//                 />
//                 <div className="absolute bottom-6 left-6 md:hidden">
//                   <p className="text-white font-black text-xl">
//                     Every guide is built to
//                   </p>
//                   <p className="text-[#0cc883] font-black text-xl">
//                     actually help you act.
//                   </p>
//                 </div>
//               </div>
//               <div className="p-10 relative z-10">
//                 <span className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-5">
//                   Our writing philosophy
//                 </span>
//                 <h3 className="text-white font-black text-2xl md:text-3xl leading-snug mb-6 hidden md:block">
//                   Every guide is built to
//                   <br />
//                   <span className="text-[#0cc883]">actually help you act.</span>
//                 </h3>
//                 <div className="flex flex-col gap-4">
//                   {[
//                     {
//                       icon: <FaMapPin className="text-red-400"></FaMapPin>,
//                       title: "Location-specific",
//                       desc: "Every guide is written for Chester County — not generic advice.",
//                     },
//                     {
//                       icon: (
//                         <PiLadderSimpleFill className="text-orange-900"></PiLadderSimpleFill>
//                       ),
//                       title: "Step-by-step",
//                       desc: "We break down the process so nothing is left to guesswork.",
//                     },
//                     {
//                       icon: <FaLink className="text-gray-400"></FaLink>,
//                       title: "Linked to resources",
//                       desc: "Every article links directly to the programs it talks about.",
//                     },
//                   ].map(({ icon, title, desc }) => (
//                     <div
//                       key={title}
//                       className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 border border-white/10"
//                     >
//                       <span className="text-2xl flex-shrink-0">{icon}</span>
//                       <div>
//                         <p className="text-white font-black text-sm mb-0.5">
//                           {title}
//                         </p>
//                         <p className="text-white/55 text-xs leading-relaxed">
//                           {desc}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() =>
//                     window.scrollTo({ top: 0, behavior: "smooth" })
//                   }
//                   className="mt-6 shrink-0 bg-[#0cc883] text-white font-black px-7 py-3.5 rounded-2xl text-sm flex items-center gap-2 shadow-[0_4px_24px_rgba(12,200,131,0.4)]"
//                 >
//                   <BookIco /> Browse all guides
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         </InView>
//       </section>

//       {/* ── CTA STRIP ────────────────────────────────────────────────────── */}
//       <section ref={ctaRef} className="bg-[#d3efca] px-6 md:px-20 py-16">
//         <motion.div
//           variants={stagger(0.1)}
//           initial="hidden"
//           animate={ctaInView ? "show" : "hidden"}
//           className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
//         >
//           <motion.div variants={slideL} className="text-center md:text-left">
//             <h2 className="text-[#264653] font-black text-2xl md:text-3xl leading-snug">
//               Ready to find real help?
//             </h2>
//             <p className="text-[#4a7c6a] text-base mt-2">
//               These guides exist to point you in the right direction — but the
//               resources are waiting for you right now.
//             </p>
//           </motion.div>
//           <motion.div
//             variants={slideR}
//             className="flex flex-col sm:flex-row gap-3 shrink-0"
//           >
//             <Link
//               // whileHover={{
//               //   scale: 1.05,
//               //   boxShadow: "0 8px 28px rgba(27,110,79,0.3)",
//               // }}
//               href="/resources"
//               className="focus:scale-[0.97] hover:scale-[1.05] hover:shadow-[0, 8px. 28px, rgba(27,110,79,0.3)] flex items-center gap-2 bg-[#1B6E4F] text-white font-bold px-7 py-4 rounded-xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] duration-200"
//             >
//               Browse Resources <ArrowIco />
//             </Link>
//             <Link href="/resources#form">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="flex items-center gap-2 bg-white text-[#1B6E4F] font-bold px-7 py-4 rounded-xl text-sm border-2 border-white"
//               >
//                 <PlusIco /> Submit a Resource
//               </motion.button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ── ARTICLE MODAL ────────────────────────────────────────────────── */}
//       <AnimatePresence>
//         {openPost && (
//           <ArticleModal post={openPost} onClose={() => setOpenPost(null)} />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ALL_POSTS } from "./newData";
import { LuRefreshCcw } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { IoIosAlert } from "react-icons/io";
import Link from "next/link";
import { FaLink, FaMapPin } from "react-icons/fa";
import { PiLadderSimpleFill } from "react-icons/pi";

const PHOTOS = {
  food: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&auto=format&fit=crop",
  food2:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&auto=format&fit=crop",
  housing:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop",
  housing2:
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80&auto=format&fit=crop",
  health:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
  health2:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop",
  jobs: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
  education:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&auto=format&fit=crop",
  emergency:
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80&auto=format&fit=crop",
  community:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80&auto=format&fit=crop",
  community2:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80&auto=format&fit=crop",
  volunteers:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop",
  hero: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80&auto=format&fit=crop",
  meal: "https://images.unsplash.com/photo-1536010305525-f7aa0834e2c7?w=800&q=80&auto=format&fit=crop",
  clinic:
    "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80&auto=format&fit=crop",
  all: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80&auto=format&fit=crop",
};

const CAT_PHOTO = {
  food: PHOTOS.food,
  housing: PHOTOS.housing,
  health: PHOTOS.health,
  jobs: PHOTOS.jobs,
  education: PHOTOS.education,
  emergency: PHOTOS.emergency,
  all: PHOTOS.community,
};

// ── Variants ──────────────────────────────────────────────────────────────────
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
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideR = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

const InView = ({ children, className = "" }) => {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger(0.09)}
      initial="hidden"
      animate={v ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 20, sw = 1.8, fill = "none" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);
const SearchIco = ({ size = 20 }) => (
  <Ico d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" size={size} />
);
const ClockIco = ({ size = 14 }) => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={size} />
);
const ArrowIco = ({ size = 15 }) => (
  <Ico d="M5 12h14M12 5l7 7-7 7" size={size} sw={2} />
);
const XIco = ({ size = 15 }) => (
  <Ico d="M18 6L6 18M6 6l12 12" size={size} sw={2.5} />
);
const BellIco = ({ size = 18 }) => (
  <Ico
    d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
    size={size}
  />
);
const BookIco = ({ size = 18 }) => (
  <Ico
    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5"
    size={size}
  />
);
const StarIco = ({ size = 14 }) => (
  <Ico
    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    size={size}
    sw={1.5}
  />
);
const PlusIco = ({ size = 18 }) => (
  <Ico d="M12 5v14M5 12h14" size={size} sw={2.5} />
);
const FireIco = ({ size = 14 }) => (
  <Ico
    d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"
    size={size}
  />
);
const ChevLIco = ({ size = 20 }) => (
  <Ico d="M15 18l-6-6 6-6" size={size} sw={2.5} />
);
const HomeIco = ({ size = 22 }) => (
  <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={size} />
);
const HeartIco = ({ size = 22 }) => (
  <Ico
    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    size={size}
  />
);
const FoodIco = ({ size = 22 }) => (
  <Ico
    d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
    size={size}
  />
);
const BriefIco = ({ size = 22 }) => (
  <Ico
    d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
    size={size}
  />
);
const GradIco = ({ size = 22 }) => (
  <Ico d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" size={size} />
);
const ZapIco = ({ size = 22 }) => (
  <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={size} />
);
const CheckIco = ({ size = 16 }) => (
  <Ico d="M20 6L9 17l-5-5" size={size} sw={2.5} />
);
const ExLinkIco = ({ size = 14 }) => (
  <Ico
    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
    size={size}
    sw={2}
  />
);

// ── Category config ───────────────────────────────────────────────────────────
const CATS = [
  {
    id: "all",
    label: "All Topics",
    Icon: BookIco,
    color: "#1B6E4F",
    bg: "#d3efca",
  },
  {
    id: "food",
    label: "Food Assistance",
    Icon: FoodIco,
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    id: "housing",
    label: "Housing",
    Icon: HomeIco,
    color: "#3b82f6",
    bg: "#dbeafe",
  },
  {
    id: "health",
    label: "Health",
    Icon: HeartIco,
    color: "#ec4899",
    bg: "#fce7f3",
  },
  {
    id: "jobs",
    label: "Jobs",
    Icon: BriefIco,
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
  {
    id: "education",
    label: "Education",
    Icon: GradIco,
    color: "#06b6d4",
    bg: "#cffafe",
  },
  {
    id: "emergency",
    label: "Emergency Help",
    Icon: ZapIco,
    color: "#ef4444",
    bg: "#fee2e2",
  },
];

const UPDATES = [
  {
    type: "new",
    emoji: <CgNotes />,
    text: "Chester County Cancer Center added",
    date: "Mar 20",
  },
  {
    type: "alert",
    emoji: <IoIosAlert />,
    text: "City Bridge temporarily at capacity — call ahead",
    date: "Mar 19",
  },
  {
    type: "update",
    emoji: <LuRefreshCcw />,
    text: "Brandywine Valley Human SPCA updated hours - corrected",
    date: "Mar 17",
  },
  {
    type: "new",
    emoji: <CgNotes />,
    text: "St. Patrick's Food Cupboard added",
    date: "Mar 14",
  },
  {
    type: "update",
    emoji: <LuRefreshCcw />,
    text: "Community Health Clinic updated phone number — corrected",
    date: "Mar 12",
  },
];

// ── Article Modal ─────────────────────────────────────────────────────────────
const ArticleModal = ({ post, onClose }) => {
  const cat = CATS.find((c) => c.id === post.category) || CATS[0];
  const CatIcon = cat.Icon;

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

  // ── Each item in post.links is { "Label": "https://..." }
  // Flatten them into [{label, href}] for rendering
  const linkItems = (post.links || []).flatMap((obj) =>
    Object.entries(obj).map(([label, href]) => ({ label, href })),
  );

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#264653]/70 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto py-4 sm:py-8 px-3 sm:px-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F1FAEE] rounded-3xl w-full max-w-2xl shadow-[0_32px_80px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Hero photo */}
          {post.photo && (
            <div className="relative h-44 sm:h-52 overflow-hidden">
              <img
                src={post.photo}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(27,110,79,0.3) 0%, rgba(38,70,83,0.85) 100%)",
                }}
              />
              <button
                onClick={onClose}
                className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold transition-colors bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <ChevLIco size={14} /> Back
              </button>
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      color: "white",
                    }}
                  >
                    <CatIcon size={14} />
                  </div>
                  <span className="text-white/80 text-[10px] font-black tracking-widest uppercase">
                    {cat.label}
                  </span>
                </div>
                <h1 className="text-white font-black text-lg sm:text-xl md:text-2xl leading-snug">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 sm:gap-4 text-white/60 text-xs font-semibold mt-2">
                  <span className="flex items-center gap-1">
                    <ClockIco size={11} /> {post.readTime} min read
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          )}

          {/* Resources cited */}
          <div className="mx-4 sm:mx-6 mt-4 sm:mt-5 bg-white rounded-2xl border border-[#d3efca] px-4 py-3">
            <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase mb-1">
              Resources referenced
            </p>
            <p className="text-gray-500 text-xs leading-relaxed font-medium">
              {post.resource}
            </p>
          </div>

          {/* Body */}
          <div className="px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-4">
            {post.content.map((block, i) => {
              if (block.type === "intro")
                return (
                  <p
                    key={i}
                    className="text-[#264653] text-sm sm:text-base leading-[1.85] font-medium border-l-4 border-[#1B6E4F] pl-4"
                  >
                    {block.text}
                  </p>
                );
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="text-[#264653] font-black text-lg sm:text-xl mt-3 leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "p")
                return (
                  <p key={i} className="text-gray-600 text-sm leading-[1.9]">
                    {block.text}
                  </p>
                );
              if (block.type === "tip")
                return (
                  <div
                    key={i}
                    className="bg-[#d3efca] border-l-4 border-[#1B6E4F] rounded-r-xl px-4 sm:px-5 py-4 flex gap-3"
                  >
                    <span className="text-[#1B6E4F] flex-shrink-0 mt-0.5">
                      <CheckIco size={16} />
                    </span>
                    <p className="text-[#1B6E4F] text-sm leading-relaxed font-medium">
                      {block.text}
                    </p>
                  </div>
                );
              if (block.type === "list")
                return (
                  <ul key={i} className="flex flex-col gap-2.5 pl-1">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#d3efca] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckIco size={11} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return null;
            })}

            {/* Footer links — THE FIX: iterate Object.entries on each link object */}
            <div className="mt-4 pt-5 border-t border-[#d3efca]">
              {linkItems.length > 0 && (
                <div className="bg-white rounded-2xl border border-[#d3efca] p-4 mb-4">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
                    Find these resources on Chester Bridge
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {linkItems.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#1B6E4F] bg-[#d3efca] hover:bg-[#b8e4ac] px-3 py-1.5 rounded-full transition-colors"
                      >
                        {label} <ExLinkIco size={11} />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={onClose}
                className="w-full bg-[#1B6E4F] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#2a9d6e] transition-colors"
              >
                <ChevLIco size={16} /> Back to all articles
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Category tag pill ─────────────────────────────────────────────────────────
const CatTag = ({ catId, small = false }) => {
  const c = CATS.find((x) => x.id === catId) || CATS[0];
  const Icon = c.Icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-black tracking-widest uppercase rounded-full ${small ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}
      style={{ background: c.bg, color: c.color }}
    >
      <Icon size={small ? 10 : 12} /> {c.label}
    </span>
  );
};

// ── Featured card ─────────────────────────────────────────────────────────────
const FeaturedCard = ({ post, large = false, onClick }) => {
  const catColor = CATS.find((c) => c.id === post.category)?.color || "#1B6E4F";
  const CatIcon = CATS.find((c) => c.id === post.category)?.Icon || BookIco;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, boxShadow: `0 24px 64px ${catColor}28` }}
      onClick={onClick}
      className={`rounded-3xl overflow-hidden border-[1.5px] border-[#e8f5e1] shadow-sm flex flex-col transition-shadow cursor-pointer bg-white ${large ? "md:col-span-2" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${large ? "h-56 sm:h-64" : "h-44 sm:h-48"}`}
      >
        <img
          src={post.photo || CAT_PHOTO[post.category]}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div className="absolute top-4 left-4">
          <CatTag catId={post.category} />
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#fef3c7] px-2.5 py-1 rounded-full">
          <StarIco size={11} />
          <span className="text-[9px] text-[#d97706] font-black tracking-widest">
            FEATURED
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80 text-xs font-semibold">
          <ClockIco size={12} /> {post.readTime} min read · {post.date}
        </div>
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
        <h3
          className={`font-black text-[#264653] leading-snug ${large ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}
        >
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {post.summary}
        </p>
        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-1.5 font-bold text-sm self-start mt-1"
          style={{ color: catColor }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Read Article <ArrowIco />
        </motion.button>
      </div>
    </motion.div>
  );
};

// ── Regular blog card ─────────────────────────────────────────────────────────
const BlogCard = ({ post, onClick }) => {
  const catColor = CATS.find((c) => c.id === post.category)?.color || "#1B6E4F";
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
      whileHover={{ y: -5, boxShadow: `0 16px 44px ${catColor}1a` }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden border border-[#e8f5e1] shadow-sm flex flex-col transition-shadow cursor-pointer group"
    >
      <div className="relative h-36 sm:h-40 overflow-hidden">
        <img
          src={post.photo || CAT_PHOTO[post.category]}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <CatTag catId={post.category} small />
        </div>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/80 text-[10px] font-semibold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
          <ClockIco size={10} /> {post.readTime} min
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col gap-2.5 flex-1">
        <span className="text-[10px] text-gray-300 font-semibold">
          {post.date}
        </span>
        <h3 className="font-black text-[#264653] text-sm sm:text-base leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {post.summary}
        </p>
        <div className="flex items-center justify-end pt-2 border-t border-[#f0f9f0] mt-auto">
          <motion.button
            whileHover={{ x: 3 }}
            className="flex items-center gap-1 text-xs font-black"
            style={{ color: catColor }}
          >
            Read More <ArrowIco />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// ── Community photo strip ─────────────────────────────────────────────────────
const PhotoStrip = () => {
  const photos = [
    { src: PHOTOS.community, label: "Community Support" },
    { src: PHOTOS.volunteers, label: "Volunteers" },
    { src: PHOTOS.food, label: "Food Access" },
    { src: PHOTOS.community2, label: "Neighbors Helping Neighbors" },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section
      ref={ref}
      className="px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-white overflow-hidden"
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between mb-6 sm:mb-8"
        >
          <div>
            <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-3">
              Our Community
            </span>
            <h2 className="text-[#264653] font-black text-2xl sm:text-3xl">
              Chester County in action
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-sm">
              Real people, real programs, real impact — happening every day
              across the county.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={stagger(0.07)}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {photos.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md"
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/60 to-transparent" />
              <span className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white text-[10px] sm:text-xs font-black">
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// BLOGS PAGE
// ══════════════════════════════════════════════════════════════════════════════
export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [openPost, setOpenPost] = useState(null);

  const featured = ALL_POSTS.filter((p) => p.featured);
  const regular = useMemo(
    () =>
      ALL_POSTS.filter((p) => {
        if (p.featured) return false;
        const mQ =
          !query ||
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.summary.toLowerCase().includes(query.toLowerCase());
        const mC = activeCat === "all" || p.category === activeCat;
        return mQ && mC;
      }),
    [query, activeCat],
  );

  const updatesRef = useRef(null);
  const updatesInView = useInView(updatesRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative px-4 sm:px-8 md:px-20 pt-14 sm:pt-20 pb-28 sm:pb-36 overflow-hidden flex justify-center">
        <div className="absolute inset-0">
          <img
            src={PHOTOS.hero}
            alt="Chester County community"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,110,79,0.92) 0%, rgba(38,70,83,0.88) 100%)",
            }}
          />
        </div>
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="1050" cy="-60" r="340" fill="white" fillOpacity="0.03" />
          <circle cx="-60" cy="420" r="280" fill="#0cc883" fillOpacity="0.07" />
        </svg>
        <motion.div
          variants={stagger(0.11)}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5 sm:mb-6"
          >
            Chester County · Community Blog
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.06] tracking-tight mb-4 sm:mb-6"
          >
            Community
            <br />
            <span className="text-[#0cc883]">Insights</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10 mx-auto"
          >
            Practical guides, local updates, and step-by-step help for
            navigating resources in Chester County.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex gap-6 sm:gap-10 mt-6 sm:mt-8 justify-center"
          >
            {[
              [ALL_POSTS.length, "Guides"],
              [CATS.length - 1, "Topics"],
              ["Browse", "Now"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-xl sm:text-2xl font-black text-white">{n}</p>
                <p className="text-xs text-white/50 font-semibold mt-0.5">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mt-6 sm:mt-8 gap-2 bg-[#F1FAEE] text-[#264653] font-bold px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_16px_rgba(27,110,79,0.28)]"
            >
              Browse Blogs <ArrowIco size={18} />
            </motion.button>
          </div>
        </motion.div>
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

      {/* ── FEATURED POSTS ───────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 md:px-20 py-12 sm:py-20 bg-[#F1FAEE]">
        <InView>
          <div className="flex items-end justify-between mb-8 sm:mb-10 flex-wrap gap-4">
            <div>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-1.5 bg-[#fef3c7] text-[#d97706] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                  <FireIco /> Featured
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-[#264653] font-black text-2xl sm:text-3xl md:text-4xl mt-3"
              >
                Start here
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 text-sm sm:text-base mt-2 max-w-lg"
              >
                The most important guides for getting help in Chester County —
                written to be actionable, not just informative.
              </motion.p>
            </div>
            <motion.p
              variants={fadeIn}
              className="text-xs text-gray-300 font-semibold hidden md:block"
            >
              Click any card to read the full article
            </motion.p>
          </div>
          <motion.div
            variants={stagger(0.1)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          >
            {featured.map((p, i) => (
              <FeaturedCard
                key={p.id}
                post={p}
                large={i === 0}
                onClick={() => setOpenPost(p)}
              />
            ))}
          </motion.div>
        </InView>
      </section>

      {/* ── COMMUNITY PHOTO STRIP ────────────────────────────────────────── */}
      <PhotoStrip />

      {/* ── SEARCH ───────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center w-full bg-[#d3efca] pb-6 sm:pb-8 px-4">
        <motion.h2
          variants={fadeUp}
          className="text-[#264653] font-black text-2xl sm:text-3xl md:text-4xl py-6 sm:py-8"
        >
          Search Resources
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 bg-white rounded-2xl px-4 sm:px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.18)] w-full max-w-xl"
        >
          <span className="text-[#1B6E4F] shrink-0">
            <SearchIco />
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, topics, resources…"
            className="flex-1 bg-transparent text-[#264653] placeholder-gray-300 font-semibold text-sm outline-none py-1"
          />
          {query && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setQuery("")}
              className="text-gray-300 hover:text-gray-500 transition-colors"
            >
              <XIco />
            </motion.button>
          )}
        </motion.div>
      </section>

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section className="bg-[#d3efca] px-4 sm:px-8 md:px-20 pt-2 pb-10 sm:pb-14">
        <InView>
          <motion.p
            variants={fadeUp}
            className="text-[#1B6E4F] font-black text-xs tracking-[0.14em] uppercase mb-3"
          >
            Browse by topic
          </motion.p>
          <motion.div
            variants={stagger(0.06)}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {CATS.map((cat) => {
              const CIcon = cat.Icon;
              return (
                <motion.button
                  key={cat.id}
                  variants={fadeUp}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black border-[1.5px] transition-all ${activeCat === cat.id ? "text-white border-transparent shadow-lg" : "bg-white border-white text-gray-500 hover:border-[#d3efca]"}`}
                  style={
                    activeCat === cat.id
                      ? {
                          background: cat.color,
                          boxShadow: `0 4px 20px ${cat.color}40`,
                        }
                      : {}
                  }
                >
                  <CIcon size={16} />
                  <span className="hidden xs:inline sm:inline">
                    {cat.label}
                  </span>
                  <span className="xs:hidden sm:hidden">
                    {cat.label.split(" ")[0]}
                  </span>
                  <span
                    className={`text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded-full ${activeCat === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}
                  >
                    {cat.id === "all"
                      ? ALL_POSTS.length
                      : ALL_POSTS.filter((p) => p.category === cat.id).length}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </InView>
      </section>

      {/* ── BLOG GRID ────────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 md:px-20 py-12 sm:py-20 bg-[#F1FAEE]">
        <InView>
          <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
            <motion.div variants={fadeUp}>
              <h2 className="text-[#264653] font-black text-xl sm:text-2xl">
                {activeCat === "all"
                  ? "All Guides"
                  : CATS.find((c) => c.id === activeCat)?.label}
                <span className="text-gray-300 font-medium text-base sm:text-lg ml-3">
                  {regular.length} posts
                </span>
              </h2>
            </motion.div>
            {(query || activeCat !== "all") && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => {
                  setQuery("");
                  setActiveCat("all");
                }}
                className="flex items-center gap-1.5 bg-[#d3efca] text-[#1B6E4F] text-xs font-bold px-3 py-1.5 rounded-full"
              >
                <XIco /> Clear filters
              </motion.button>
            )}
          </div>
          <AnimatePresence mode="wait">
            {regular.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 sm:py-20 text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#d3efca] rounded-2xl flex items-center justify-center text-[#1B6E4F] mb-4">
                  <BookIco size={28} />
                </div>
                <p className="text-[#264653] font-black text-lg sm:text-xl mb-2">
                  No posts found
                </p>
                <p className="text-gray-400 text-sm mb-6 max-w-xs">
                  Try a different topic or clear your search to see all guides.
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCat("all");
                  }}
                  className="bg-[#d3efca] text-[#1B6E4F] font-bold px-6 py-3 rounded-xl text-sm"
                >
                  Show all posts
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                variants={stagger(0.07)}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                <AnimatePresence>
                  {regular.map((p) => (
                    <BlogCard
                      key={p.id}
                      post={p}
                      onClick={() => setOpenPost(p)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </InView>
      </section>

      {/* ── COMMUNITY UPDATES ────────────────────────────────────────────── */}
      <section
        ref={updatesRef}
        className="bg-[#f8faf8] px-4 sm:px-8 md:px-20 py-12 sm:py-20"
      >
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={updatesInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 sm:gap-16 items-start"
        >
          <div>
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                <BellIco /> Live Updates
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-[#264653] font-black text-2xl sm:text-3xl md:text-4xl leading-tight mb-4"
            >
              What's new
              <br />
              in the county
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5"
            >
              New resources, policy changes, schedule updates, and local events
              — updated as we learn about them.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden h-40 sm:h-44 mb-6 shadow-md"
            >
              <img
                src={PHOTOS.volunteers}
                alt="Community volunteers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B6E4F]/60 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-white font-black text-sm">
                  Chester County Volunteers
                </p>
                <p className="text-white/70 text-xs">
                  Making a difference every day
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div variants={stagger(0.09)} className="flex flex-col gap-3">
            {UPDATES.map((u, i) => {
              const badge =
                u.type === "new"
                  ? { bg: "#d3efca", color: "#1B6E4F", label: "New" }
                  : u.type === "alert"
                    ? { bg: "#fee2e2", color: "#ef4444", label: "Alert" }
                    : u.type === "event"
                      ? { bg: "#dbeafe", color: "#3b82f6", label: "Event" }
                      : { bg: "#fef3c7", color: "#d97706", label: "Update" };
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 sm:gap-4 bg-white rounded-2xl px-4 sm:px-5 py-4 border border-[#e8f5e1] shadow-sm transition-all"
                >
                  <span className="text-lg sm:text-xl flex-shrink-0 mt-0.5">
                    {u.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#264653] font-semibold text-sm leading-snug">
                      {u.text}
                    </p>
                    <p className="text-gray-300 text-xs mt-1">{u.date}</p>
                  </div>
                  <span
                    className="text-[10px] font-black px-2.5 py-1 rounded-full flex-shrink-0 self-start"
                    style={{ background: badge.bg, color: badge.color }}
                  >
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* ── WRITING PHILOSOPHY ───────────────────────────────────────────── */}
      <section className="px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-[#F1FAEE]">
        <InView className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            className="bg-gradient-to-br from-[#264653] to-[#1B6E4F] rounded-3xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
              <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[300px]">
                <img
                  src={PHOTOS.community2}
                  alt="Chester County community"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 60%, rgba(38,70,83,0.95) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 md:hidden">
                  <p className="text-white font-black text-lg sm:text-xl">
                    Every guide is built to
                  </p>
                  <p className="text-[#0cc883] font-black text-lg sm:text-xl">
                    actually help you act.
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-10 relative z-10">
                <span className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4 sm:mb-5">
                  Our writing philosophy
                </span>
                <h3 className="text-white font-black text-xl sm:text-2xl md:text-3xl leading-snug mb-5 sm:mb-6 hidden md:block">
                  Every guide is built to
                  <br />
                  <span className="text-[#0cc883]">actually help you act.</span>
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {[
                    {
                      icon: <FaMapPin className="text-red-400" />,
                      title: "Location-specific",
                      desc: "Every guide is written for Chester County — not generic advice.",
                    },
                    {
                      icon: <PiLadderSimpleFill className="text-orange-900" />,
                      title: "Step-by-step",
                      desc: "We break down the process so nothing is left to guesswork.",
                    },
                    {
                      icon: <FaLink className="text-gray-400" />,
                      title: "Linked to resources",
                      desc: "Every article links directly to the programs it talks about.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 bg-white/10 rounded-2xl p-3 sm:p-4 border border-white/10"
                    >
                      <span className="text-xl sm:text-2xl flex-shrink-0">
                        {icon}
                      </span>
                      <div>
                        <p className="text-white font-black text-sm mb-0.5">
                          {title}
                        </p>
                        <p className="text-white/55 text-xs leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="mt-5 sm:mt-6 shrink-0 bg-[#0cc883] text-white font-black px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-sm flex items-center gap-2 shadow-[0_4px_24px_rgba(12,200,131,0.4)]"
                >
                  <BookIco /> Browse all guides
                </motion.button>
              </div>
            </div>
          </motion.div>
        </InView>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────── */}
      <section
        ref={ctaRef}
        className="bg-[#d3efca] px-4 sm:px-8 md:px-20 py-12 sm:py-16"
      >
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={ctaInView ? "show" : "hidden"}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10"
        >
          <motion.div variants={slideL} className="text-center md:text-left">
            <h2 className="text-[#264653] font-black text-xl sm:text-2xl md:text-3xl leading-snug">
              Ready to find real help?
            </h2>
            <p className="text-[#4a7c6a] text-sm sm:text-base mt-2">
              These guides exist to point you in the right direction — but the
              resources are waiting for you right now.
            </p>
          </motion.div>
          <motion.div
            variants={slideR}
            className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto"
          >
            <Link
              href="/resources"
              className="flex items-center justify-center gap-2 bg-[#1B6E4F] text-white font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] hover:scale-[1.05] transition-transform duration-200"
            >
              Browse Resources <ArrowIco />
            </Link>
            <Link href="/resources#form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 bg-white text-[#1B6E4F] font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm border-2 border-white w-full sm:w-auto"
              >
                <PlusIco /> Submit a Resource
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── ARTICLE MODAL ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {openPost && (
          <ArticleModal post={openPost} onClose={() => setOpenPost(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
