// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "@/app/context/AuthContext";
// import { supabase } from "@/app/supabaseClient";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import Link from "next/link";

// // ── Variants ──────────────────────────────────────────────────────────────────
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
//   },
// };
// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 0.35 } },
// };
// const stagger = (d = 0.08) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: d } },
// });

// // ── Icons ─────────────────────────────────────────────────────────────────────
// const Ico = ({ d, size = 18, sw = 1.8 }) => (
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
// const InfoIco = () => (
//   <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zM12 16v-4M12 8h.01" size={20} />
// );
// const UserIco = () => (
//   <Ico
//     d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
//     size={20}
//   />
// );
// const HeartIco = () => (
//   <Ico
//     d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
//     size={20}
//   />
// );
// const StarIco = () => (
//   <Ico
//     d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//     size={20}
//   />
// );
// const EditIco = () => (
//   <Ico
//     d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
//     size={20}
//   />
// );
// const ChevLIco = () => <Ico d="M15 18l-6-6 6-6" size={18} sw={2.2} />;
// const PhoneIco = () => (
//   <Ico
//     d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"
//     size={15}
//   />
// );
// const ClockIco = () => (
//   <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={15} />
// );
// const PinIco = () => (
//   <Ico
//     d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
//     size={15}
//   />
// );
// const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={15} sw={2} />;
// const LogOutIco = () => (
//   <Ico
//     d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
//     size={18}
//   />
// );
// const TrashIco = () => (
//   <Ico
//     d="M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
//     size={15}
//   />
// );
// const XMarkIco = () => <Ico d="M18 6L6 18M6 6l12 12" size={16} sw={2.5} />;
// const CheckIco = () => <Ico d="M20 6L9 17l-5-5" size={14} sw={2.5} />;
// const GridIco = () => (
//   <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" size={18} />
// );
// const ListIco = () => (
//   <Ico d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" size={18} />
// );

// // ── Category colors ───────────────────────────────────────────────────────────
// const CAT_COLORS = {
//   food: { color: "#f59e0b", bg: "#fef3c7" },
//   housing: { color: "#3b82f6", bg: "#dbeafe" },
//   health: { color: "#ec4899", bg: "#fce7f3" },
//   jobs: { color: "#8b5cf6", bg: "#ede9fe" },
//   education: { color: "#06b6d4", bg: "#cffafe" },
//   emergency: { color: "#ef4444", bg: "#fee2e2" },
//   default: { color: "#1B6E4F", bg: "#d3efca" },
// };

// const catStyle = (cat) => CAT_COLORS[cat?.toLowerCase()] || CAT_COLORS.default;

// // ── Stat card ─────────────────────────────────────────────────────────────────
// const StatCard = ({ icon, value, label }) => (
//   <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/15 flex items-center gap-4">
//     <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0cc883]">
//       {icon}
//     </div>
//     <div>
//       <p className="text-white font-black text-xl leading-none">{value}</p>
//       <p className="text-white/50 text-xs font-semibold mt-0.5">{label}</p>
//     </div>
//   </div>
// );

// // ── Resource card (grid view) ─────────────────────────────────────────────────
// const ResourceCard = ({ r, onRemove }) => {
//   const cs = catStyle(r.category);
//   const [removing, setRemoving] = useState(false);

//   const handleRemove = async (e) => {
//     e.stopPropagation();
//     setRemoving(true);
//     await new Promise((res) => setTimeout(res, 300)); // brief animation pause
//     onRemove(r.id);
//   };

//   return (
//     <motion.div
//       layout
//       variants={fadeUp}
//       initial="hidden"
//       animate="show"
//       exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
//       whileHover={{ y: -5, boxShadow: `0 16px 48px ${cs.color}22` }}
//       className="bg-white rounded-2xl overflow-hidden border border-[#e8f5e1] shadow-sm flex flex-col transition-shadow group"
//     >
//       {/* Color accent top bar */}
//       <div
//         className="h-1.5 w-full"
//         style={{
//           background: `linear-gradient(90deg,${cs.color},${cs.color}66)`,
//         }}
//       />

//       <div className="p-5 flex flex-col gap-3 flex-1">
//         {/* Category + remove */}
//         <div className="flex items-center justify-between">
//           <span
//             className="inline-flex items-center text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
//             style={{ background: cs.bg, color: cs.color }}
//           >
//             {r.category || "Resource"}
//           </span>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={handleRemove}
//             disabled={removing}
//             className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
//           >
//             <TrashIco />
//           </motion.button>
//         </div>

//         {/* Name */}
//         <h3 className="font-black text-[#264653] text-base leading-snug">
//           {r.name}
//         </h3>

//         {/* Description */}
//         {r.description && (
//           <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
//             {r.description}
//           </p>
//         )}

//         {/* Meta */}
//         <div className="flex flex-col gap-1.5 mt-1">
//           {r.address && (
//             <span className="flex items-center gap-1.5 text-xs text-gray-400">
//               <PinIco />
//               {r.address}
//             </span>
//           )}
//           {r.hours && (
//             <span className="flex items-center gap-1.5 text-xs text-[#4a7c6a]">
//               <ClockIco />
//               {r.hours}
//             </span>
//           )}
//           {r.phone && (
//             <span className="flex items-center gap-1.5 text-xs text-[#4a7c6a]">
//               <PhoneIco />
//               {r.phone}
//             </span>
//           )}
//         </div>

//         {/* Action */}
//         <motion.a
//           href={r.website || "#"}
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.97 }}
//           className="mt-auto flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-bold transition-colors"
//           style={{ background: cs.bg, color: cs.color }}
//         >
//           View Details <ArrowIco />
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// // ── Resource row (list view) ──────────────────────────────────────────────────
// const ResourceRow = ({ r, onRemove }) => {
//   const cs = catStyle(r.category);
//   return (
//     <motion.div
//       layout
//       variants={fadeUp}
//       initial="hidden"
//       animate="show"
//       exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
//       whileHover={{ x: 4 }}
//       className="bg-white rounded-2xl px-5 py-4 border border-[#e8f5e1] shadow-sm flex items-center gap-4 group"
//     >
//       <div
//         className="w-3 h-3 rounded-full flex-shrink-0"
//         style={{ background: cs.color }}
//       />
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2 flex-wrap">
//           <p className="font-bold text-[#264653] text-sm">{r.name}</p>
//           <span
//             className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
//             style={{ background: cs.bg, color: cs.color }}
//           >
//             {r.category}
//           </span>
//         </div>
//         {r.address && (
//           <p className="text-xs text-gray-400 mt-0.5 truncate">{r.address}</p>
//         )}
//       </div>
//       {r.phone && (
//         <p className="text-xs text-[#4a7c6a] hidden md:block flex-shrink-0">
//           {r.phone}
//         </p>
//       )}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         onClick={() => onRemove(r.id)}
//         className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
//       >
//         <XMarkIco />
//       </motion.button>
//     </motion.div>
//   );
// };

// // ── Nav tab ───────────────────────────────────────────────────────────────────
// const Tab = ({ icon, label, active, onClick, badge = null }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${active ? "bg-white text-[#1B6E4F] shadow-md" : "text-white/60 hover:text-white hover:bg-white/10"}`}
//   >
//     {icon} {label}
//     {badge != null && (
//       <span
//         className={`text-[10px] font-black px-2 py-0.5 rounded-full ${active ? "bg-[#d3efca] text-[#1B6E4F]" : "bg-white/20 text-white"}`}
//       >
//         {badge}
//       </span>
//     )}
//   </button>
// );

// // ══════════════════════════════════════════════════════════════════════════════
// // DASHBOARD
// // ══════════════════════════════════════════════════════════════════════════════
// const Dashboard = () => {
//   const { session, signOut } = UserAuth();
//   const router = useRouter();
//   const user = session?.user;

//   const [activeTab, setActiveTab] = useState("overview"); // overview | saved | contributions
//   const [resources, setResources] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewMode, setViewMode] = useState("grid"); // grid | list
//   const [signOutConfirm, setSignOutConfirm] = useState(false);

//   const handleSignOut = async (e) => {
//     e.preventDefault();
//     try {
//       await signOut();
//       router.push("/SignIn");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const [comments, setComments] = useState([]);
//   const [loadingComments, setLoadingComments] = useState(false);

//   useEffect(() => {
//     if (!user?.id) return;
//     const fetchFavorites = async () => {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from("favorites")
//         .select("resource_id")
//         .eq("user_id", user.id);

//       if (error || !data?.length) {
//         setLoading(false);
//         return;
//       }

//       const ids = data.map((f) => f.resource_id);
//       const { data: resourcesData } = await supabase
//         .from("resources")
//         .select("*")
//         .in("id", ids);

//       setResources(resourcesData || []);
//       setLoading(false);
//     };
//     fetchFavorites();

//     const fetchComments = async () => {
//       setLoadingComments(true);
//       const { data, error } = await supabase
//         .from("comments")
//         .select("*, resources(name)") // join to get resource name/category
//         .eq("user_id", user.id)
//         .order("created_at", { ascending: false });

//       if (!error) setComments(data || []);
//       setLoadingComments(false);
//     };
//     fetchComments();
//   }, [user?.id]);

//   const handleRemove = async (id) => {
//     setResources((prev) => prev.filter((r) => r.id !== id));
//     await supabase
//       .from("favorites")
//       .delete()
//       .eq("user_id", user.id)
//       .eq("resource_id", id);
//   };

//   const handleDeleteComment = async (id) => {
//     setComments((prev) => prev.filter((c) => c.id !== id));
//     await supabase.from("comments").delete().eq("id", id);
//   };
//   const firstName = user?.user_metadata?.first_name || "there";
//   const initials =
//     `${user?.user_metadata?.first_name?.[0] || ""}${user?.user_metadata?.last_name?.[0] || ""}`.toUpperCase() ||
//     "U";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#1B6E4F] via-[#165c42] to-[#264653]">
//       {/* ── Decorative bg ─────────────────────────────── */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
//         viewBox="0 0 1200 800"
//         preserveAspectRatio="xMidYMid slice"
//       >
//         <circle cx="1100" cy="-80" r="380" fill="white" fillOpacity="0.03" />
//         <circle cx="-80" cy="700" r="300" fill="#0cc883" fillOpacity="0.05" />
//       </svg>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-10">
//         {/* ── HEADER ────────────────────────────────── */}
//         <motion.div
//           variants={stagger(0.1)}
//           initial="hidden"
//           animate="show"
//           className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10"
//         >
//           <div className="flex items-center gap-5">
//             {/* Avatar */}
//             <motion.div
//               variants={fadeUp}
//               className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white font-black text-xl shadow-[0_4px_20px_rgba(12,200,131,0.35)] flex-shrink-0"
//             >
//               {initials}
//             </motion.div>
//             <motion.div variants={fadeUp}>
//               <p className="text-white/50 text-sm font-semibold">
//                 Welcome back
//               </p>
//               <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
//                 {firstName}
//                 <span className="text-[#0cc883]">.</span>
//               </h1>
//               <p className="text-white/50 text-sm mt-0.5">{user?.email}</p>
//             </motion.div>
//           </div>

//           {/* Sign out */}
//           <motion.div variants={fadeUp} className="flex items-center gap-3">
//             {!signOutConfirm ? (
//               <motion.button
//                 whileHover={{ scale: 1.04 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => setSignOutConfirm(true)}
//                 className="flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 font-bold text-sm px-5 py-3 rounded-xl border border-white/15 hover:bg-white/20 transition-colors"
//               >
//                 <LogOutIco /> Sign Out
//               </motion.button>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex items-center gap-2"
//               >
//                 <p className="text-white/70 text-sm font-semibold">
//                   Are you sure?
//                 </p>
//                 <button
//                   onClick={handleSignOut}
//                   className="bg-red-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-red-600 transition-colors"
//                 >
//                   Yes, sign out
//                 </button>
//                 <button
//                   onClick={() => setSignOutConfirm(false)}
//                   className="bg-white/15 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-white/25 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </motion.div>
//             )}
//           </motion.div>
//         </motion.div>

//         {/* ── STAT STRIP ────────────────────────────── */}
//         <motion.div
//           variants={stagger(0.08)}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
//         >
//           {[
//             {
//               icon: <HeartIco />,
//               value: resources.length,
//               label: "Saved Resources",
//             },
//             {
//               icon: <StarIco />,
//               value: comments.length,
//               label: "Comments Left",
//             },
//             { icon: <UserIco />, value: "Active", label: "Account Status" },
//           ].map((s, i) => (
//             <motion.div key={i} variants={fadeUp}>
//               <StatCard {...s} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ── TAB NAV ───────────────────────────────── */}
//         <motion.div
//           variants={fadeIn}
//           initial="hidden"
//           animate="show"
//           className="flex gap-2 flex-wrap mb-8 bg-white/5 backdrop-blur rounded-2xl p-1.5 border border-white/10 w-fit"
//         >
//           <Tab
//             icon={<GridIco />}
//             label="Overview"
//             active={activeTab === "overview"}
//             onClick={() => setActiveTab("overview")}
//           />
//           <Tab
//             icon={<HeartIco />}
//             label="Saved"
//             active={activeTab === "saved"}
//             onClick={() => setActiveTab("saved")}
//             badge={resources.length}
//           />
//           <Tab
//             icon={<EditIco />}
//             label="Contributions"
//             active={activeTab === "contributions"}
//             onClick={() => setActiveTab("contributions")}
//           />
//         </motion.div>

//         {/* ── CONTENT ───────────────────────────────── */}
//         <AnimatePresence mode="wait">
//           {/* OVERVIEW ─────────────────────────────── */}
//           {activeTab === "overview" && (
//             <motion.div
//               key="overview"
//               variants={stagger(0.09)}
//               initial="hidden"
//               animate="show"
//               exit={{ opacity: 0 }}
//               className="grid md:grid-cols-3 gap-6"
//             >
//               {/* Profile card */}
//               <motion.div
//                 variants={fadeUp}
//                 className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-xl flex flex-col gap-5"
//               >
//                 <div className="flex items-center gap-3 mb-1">
//                   <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
//                     <UserIco />
//                   </div>
//                   <h2 className="text-white font-black text-lg">Profile</h2>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                   <div className="bg-white/10 rounded-xl px-4 py-3">
//                     <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
//                       Email
//                     </p>
//                     <p className="text-white font-semibold text-sm truncate">
//                       {user?.email}
//                     </p>
//                   </div>
//                   <div className="bg-white/10 rounded-xl px-4 py-3">
//                     <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
//                       Name
//                     </p>
//                     <p className="text-white font-semibold text-sm">
//                       {user?.user_metadata?.first_name}{" "}
//                       {user?.user_metadata?.last_name}
//                     </p>
//                   </div>
//                   <div className="bg-white/10 rounded-xl px-4 py-3">
//                     <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
//                       Member since
//                     </p>
//                     <p className="text-white font-semibold text-sm">
//                       {user?.created_at
//                         ? new Date(user.created_at).toLocaleDateString(
//                             "en-US",
//                             { month: "long", year: "numeric" },
//                           )
//                         : "—"}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Saved resources preview */}
//               <motion.div
//                 variants={fadeUp}
//                 className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-xl flex flex-col gap-4"
//               >
//                 <div className="flex items-center gap-3 mb-1">
//                   <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
//                     <HeartIco />
//                   </div>
//                   <h2 className="text-white font-black text-lg">
//                     Saved Resources
//                   </h2>
//                 </div>
//                 {resources.length === 0 ? (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
//                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/30 mb-3">
//                       <HeartIco />
//                     </div>
//                     <p className="text-white/50 text-sm">
//                       No saved resources yet
//                     </p>
//                     <p className="text-white/30 text-xs mt-1">
//                       Browse resources and heart the ones you need
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col gap-2 flex-1">
//                     {resources.slice(0, 3).map((r) => {
//                       const cs = catStyle(r.category);
//                       return (
//                         <div
//                           key={r.id}
//                           className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5"
//                         >
//                           <div
//                             className="w-2 h-2 rounded-full flex-shrink-0"
//                             style={{ background: cs.color }}
//                           />
//                           <p className="text-white text-sm font-semibold truncate flex-1">
//                             {r.name}
//                           </p>
//                           <span
//                             className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
//                             style={{ background: cs.bg + "33", color: "white" }}
//                           >
//                             {r.category}
//                           </span>
//                         </div>
//                       );
//                     })}
//                     {resources.length > 3 && (
//                       <p className="text-white/40 text-xs text-center mt-1">
//                         +{resources.length - 3} more
//                       </p>
//                     )}
//                   </div>
//                 )}
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => setActiveTab("saved")}
//                   className="w-full bg-[#0cc883] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(12,200,131,0.3)] mt-auto"
//                 >
//                   View All Saved <ArrowIco />
//                 </motion.button>
//               </motion.div>

//               {/* Contributions */}
//               <motion.div
//                 variants={fadeUp}
//                 className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-xl flex flex-col gap-4"
//               >
//                 <div className="flex items-center gap-3 mb-1">
//                   <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
//                     <EditIco />
//                   </div>
//                   <h2 className="text-white font-black text-lg">
//                     Contributions
//                   </h2>
//                 </div>
//                 {/* Inside the Contributions overview card, replace the empty state div */}
//                 {comments.length === 0 ? (
//                   <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
//                     <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/30 mb-3">
//                       <EditIco />
//                     </div>
//                     <p className="text-white/50 text-sm">
//                       No contributions yet
//                     </p>
//                     <p className="text-white/30 text-xs mt-1">
//                       Comment on a resource
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col gap-2 flex-1">
//                     {comments.slice(0, 3).map((c) => {
//                       const cs = catStyle(c.resources?.category);
//                       return (
//                         <div
//                           key={c.id}
//                           className="flex items-start gap-3 bg-white/10 rounded-xl px-3 py-2.5"
//                         >
//                           <div
//                             className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
//                             style={{ background: cs.color }}
//                           />
//                           <div className="min-w-0 flex-1">
//                             <p className="text-white/50 text-[10px] font-bold truncate">
//                               {c.resources?.name || "Resource"}
//                             </p>
//                             <p className="text-white text-xs font-semibold line-clamp-1">
//                               {c.body}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                     {comments.length > 3 && (
//                       <p className="text-white/40 text-xs text-center mt-1">
//                         +{comments.length - 3} more
//                       </p>
//                     )}
//                   </div>
//                 )}

//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   onClick={() => setActiveTab("contributions")}
//                   className="w-full bg-white/15 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 border border-white/20 mt-auto"
//                 >
//                   View Activity <ArrowIco />
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           )}

//           {/* SAVED RESOURCES ──────────────────────── */}
//           {activeTab === "saved" && (
//             <motion.div
//               key="saved"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {/* Toolbar */}
//               <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
//                 <div>
//                   <h2 className="text-white font-black text-2xl">
//                     Saved Resources
//                   </h2>
//                   <p className="text-white/50 text-sm mt-0.5">
//                     {resources.length} resource
//                     {resources.length !== 1 ? "s" : ""} saved
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   {/* View toggle */}
//                   <div className="flex items-center bg-white/10 rounded-xl border border-white/15 p-1">
//                     {[
//                       { id: "grid", icon: <GridIco /> },
//                       { id: "list", icon: <ListIco /> },
//                     ].map((v) => (
//                       <button
//                         key={v.id}
//                         onClick={() => setViewMode(v.id)}
//                         className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${viewMode === v.id ? "bg-white text-[#1B6E4F] shadow-sm" : "text-white/50 hover:text-white"}`}
//                       >
//                         {v.icon}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {loading ? (
//                 <div className="flex items-center justify-center py-20">
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1.2,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-10 h-10 rounded-full border-4 border-white/20 border-t-[#0cc883]"
//                   />
//                 </div>
//               ) : resources.length === 0 ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="flex flex-col items-center justify-center py-20 text-center"
//                 >
//                   <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-5">
//                     <HeartIco />
//                   </div>
//                   <h3 className="text-white font-black text-xl mb-2">
//                     No saved resources yet
//                   </h3>
//                   <p className="text-white/50 text-sm max-w-xs mb-6">
//                     Browse our directory and tap the heart icon on any resource
//                     to save it here.
//                   </p>
//                   <motion.a
//                     href="/resources"
//                     whileHover={{ scale: 1.04 }}
//                     whileTap={{ scale: 0.97 }}
//                     className="bg-[#0cc883] text-white font-bold px-7 py-3 rounded-xl text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(12,200,131,0.3)]"
//                   >
//                     Browse Resources <ArrowIco />
//                   </motion.a>
//                 </motion.div>
//               ) : viewMode === "grid" ? (
//                 <motion.div
//                   variants={stagger(0.07)}
//                   initial="hidden"
//                   animate="show"
//                   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//                 >
//                   <AnimatePresence>
//                     {resources.map((r) => (
//                       <ResourceCard key={r.id} r={r} onRemove={handleRemove} />
//                     ))}
//                   </AnimatePresence>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   variants={stagger(0.05)}
//                   initial="hidden"
//                   animate="show"
//                   className="flex flex-col gap-3"
//                 >
//                   <AnimatePresence>
//                     {resources.map((r) => (
//                       <ResourceRow key={r.id} r={r} onRemove={handleRemove} />
//                     ))}
//                   </AnimatePresence>
//                 </motion.div>
//               )}
//             </motion.div>
//           )}

//           {/* CONTRIBUTIONS ────────────────────────── */}
//           {/* {activeTab === "contributions" && (
//             <motion.div
//               key="contributions"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <div className="mb-6">
//                 <h2 className="text-white font-black text-2xl">
//                   Your Contributions
//                 </h2>
//                 <p className="text-white/50 text-sm mt-0.5">
//                   Blogs, comments, and resources you've submitted
//                 </p>
//               </div>
//               <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-3xl border border-white/10">
//                 <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-5">
//                   <EditIco />
//                 </div>
//                 <h3 className="text-white font-black text-xl mb-2">
//                   Nothing yet
//                 </h3>
//                 <p className="text-white/50 text-sm max-w-xs mb-6">
//                   Comment on a resource to see your comments here.
//                 </p>
//                 <div className="flex gap-3 flex-wrap justify-center">
//                   <Link href="/about#form">
//                     <motion.button
//                       whileHover={{ scale: 1.04 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="bg-[#0cc883] text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
//                     >
//                       Submit a Resource <ArrowIco />
//                     </motion.button>
//                   </Link>

//                   <Link href="/resources">
//                     <motion.button
//                       href="/blogs"
//                       whileHover={{ scale: 1.04 }}
//                       whileTap={{ scale: 0.97 }}
//                       className="bg-white/15 text-white font-bold px-6 py-3 rounded-xl text-sm border border-white/20 flex items-center gap-2"
//                     >
//                       View Resources <ArrowIco />
//                     </motion.button>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           )} */}
//           {activeTab === "contributions" && (
//             <motion.div
//               key="contributions"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <div className="mb-6">
//                 <h2 className="text-white font-black text-2xl">
//                   Your Contributions
//                 </h2>
//                 <p className="text-white/50 text-sm mt-0.5">
//                   Comments you've left on resources
//                 </p>
//               </div>

//               {loadingComments ? (
//                 <div className="flex items-center justify-center py-20">
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1.2,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-10 h-10 rounded-full border-4 border-white/20 border-t-[#0cc883]"
//                   />
//                 </div>
//               ) : comments.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-3xl border border-white/10">
//                   <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-5">
//                     <EditIco />
//                   </div>
//                   <h3 className="text-white font-black text-xl mb-2">
//                     Nothing yet
//                   </h3>
//                   <p className="text-white/50 text-sm max-w-xs mb-6">
//                     Comment on a resource to see your activity here.
//                   </p>
//                   <div className="flex gap-3 flex-wrap justify-center">
//                     <Link href="/about#form">
//                       <motion.button
//                         whileHover={{ scale: 1.04 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="bg-[#0cc883] text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
//                       >
//                         Submit a Resource <ArrowIco />
//                       </motion.button>
//                     </Link>
//                     <Link href="/resources">
//                       <motion.button
//                         whileHover={{ scale: 1.04 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="bg-white/15 text-white font-bold px-6 py-3 rounded-xl text-sm border border-white/20 flex items-center gap-2"
//                       >
//                         View Resources <ArrowIco />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//               ) : (
//                 <motion.div
//                   variants={stagger(0.07)}
//                   initial="hidden"
//                   animate="show"
//                   className="flex flex-col gap-4"
//                 >
//                   <AnimatePresence>
//                     {comments.map((c) => {
//                       const cs = catStyle(c.resources?.category);
//                       return (
//                         <motion.div
//                           key={c.id}
//                           layout
//                           variants={fadeUp}
//                           exit={{
//                             opacity: 0,
//                             scale: 0.95,
//                             transition: { duration: 0.2 },
//                           }}
//                           className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 group shadow-xl"
//                         >
//                           {/* Left: resource info */}
//                           <div className="flex-shrink-0 flex flex-col gap-2 sm:w-48">
//                             <span
//                               className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full w-fit"
//                               style={{ background: cs.bg, color: cs.color }}
//                             >
//                               {c.resources?.category || "Resource"}
//                             </span>
//                             <p className="text-white font-bold text-sm leading-snug">
//                               {c.resources?.name || "Unknown Resource"}
//                             </p>
//                             {c.created_at && (
//                               <p className="text-white/30 text-[10px] font-semibold">
//                                 {new Date(c.created_at).toLocaleDateString(
//                                   "en-US",
//                                   {
//                                     month: "short",
//                                     day: "numeric",
//                                     year: "numeric",
//                                   },
//                                 )}
//                               </p>
//                             )}
//                           </div>

//                           {/* Divider */}
//                           <div className="hidden sm:block w-px bg-white/10 flex-shrink-0" />

//                           {/* Right: comment text */}
//                           <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
//                             <p className="text-white/80 text-sm leading-relaxed">
//                               {c.body || c.content || c.text || "—"}
//                             </p>
//                             <div className="flex items-center justify-between flex-wrap gap-2">
//                               <Link
//                                 href="/resources"
//                                 className="text-[#0cc883] text-xs font-bold flex items-center gap-1 hover:underline"
//                               >
//                                 View Resource <ArrowIco />
//                               </Link>
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => handleDeleteComment(c.id)}
//                                 className="flex items-center gap-1.5 text-xs text-white/30 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
//                               >
//                                 <TrashIco /> Delete
//                               </motion.button>
//                             </div>
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </AnimatePresence>
//                 </motion.div>
//               )}
//               </motion.div>
//           )}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             className="mb-8 bg-white/10 backdrop-blur-xl border mt-10 border-[#0cc883]/40 rounded-3xl p-5 sm:p-6 shadow-xl"
//           >
//             <div className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-xl bg-[#0cc883]/20 flex items-center justify-center text-[#0cc883] flex-shrink-0 mt-0.5">
//                 <InfoIco />
//               </div>
//               <div>
//                 <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase mb-1">
//                   TSA Judge Demo Note
//                 </p>
//                 <h3 className="text-white font-black text-base sm:text-lg mb-2">
//                   About This User Dashboard
//                 </h3>
//                 <p className="text-white/70 text-sm leading-relaxed mb-3">
//                   Here, users can submit inquirires (general, resource, or
//                   issues) which are forwarded to the admin account (credentials
//                   on the log-in page) and the admin is able to review them
//                 </p>
//                 <p className="text-white/70 text-sm leading-relaxed mb-3">
//                   <span className="text-white font-bold">
//                     *IMPORTANT INFO* :
//                   </span>{" "}
//                   When navigating the website while logged in, be sure not to
//                   click out of the page. If you do accidentally click out of the
//                   page, please refresh and open a page other than the Account
//                   Page or Resources Page as in order to get real time updates
//                   using Supabase, there was a paywall for real time updating
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/supabaseClient";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};
const stagger = (d = 0.08) => ({
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
const InfoIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zM12 16v-4M12 8h.01" size={20} />
);
const UserIco = () => (
  <Ico
    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
    size={20}
  />
);
const HeartIco = () => (
  <Ico
    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    size={20}
  />
);
const StarIco = () => (
  <Ico
    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    size={20}
  />
);
const EditIco = () => (
  <Ico
    d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
    size={20}
  />
);
const PhoneIco = () => (
  <Ico
    d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.07 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"
    size={15}
  />
);
const ClockIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2" size={15} />
);
const PinIco = () => (
  <Ico
    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
    size={15}
  />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={15} sw={2} />;
const LogOutIco = () => (
  <Ico
    d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
    size={18}
  />
);
const TrashIco = () => (
  <Ico
    d="M3 6h18M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
    size={15}
  />
);
const XMarkIco = () => <Ico d="M18 6L6 18M6 6l12 12" size={16} sw={2.5} />;
const CheckIco = () => <Ico d="M20 6L9 17l-5-5" size={14} sw={2.5} />;
const GridIco = () => (
  <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" size={18} />
);
const ListIco = () => (
  <Ico d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" size={18} />
);

const CAT_COLORS = {
  food: { color: "#f59e0b", bg: "#fef3c7" },
  housing: { color: "#3b82f6", bg: "#dbeafe" },
  health: { color: "#ec4899", bg: "#fce7f3" },
  jobs: { color: "#8b5cf6", bg: "#ede9fe" },
  education: { color: "#06b6d4", bg: "#cffafe" },
  emergency: { color: "#ef4444", bg: "#fee2e2" },
  default: { color: "#1B6E4F", bg: "#d3efca" },
};
const catStyle = (cat) => CAT_COLORS[cat?.toLowerCase()] || CAT_COLORS.default;

const StatCard = ({ icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 sm:px-5 py-4 border border-white/15 flex items-center gap-3 sm:gap-4">
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0cc883] flex-shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-white font-black text-lg sm:text-xl leading-none">
        {value}
      </p>
      <p className="text-white/50 text-[11px] font-semibold mt-0.5">{label}</p>
    </div>
  </div>
);

const ResourceCard = ({ r, onRemove }) => {
  const cs = catStyle(r.category);
  const [removing, setRemoving] = useState(false);
  const handleRemove = async (e) => {
    e.stopPropagation();
    setRemoving(true);
    await new Promise((res) => setTimeout(res, 300));
    onRemove(r.id);
  };
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      whileHover={{ y: -5, boxShadow: `0 16px 48px ${cs.color}22` }}
      className="bg-white rounded-2xl overflow-hidden border border-[#e8f5e1] shadow-sm flex flex-col transition-shadow group"
    >
      <div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg,${cs.color},${cs.color}66)`,
        }}
      />
      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span
            className="inline-flex items-center text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{ background: cs.bg, color: cs.color }}
          >
            {r.category || "Resource"}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRemove}
            disabled={removing}
            className="w-7 h-7 rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
          >
            <TrashIco />
          </motion.button>
        </div>
        <h3 className="font-black text-[#264653] text-sm sm:text-base leading-snug">
          {r.name}
        </h3>
        {r.description && (
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
            {r.description}
          </p>
        )}
        <div className="flex flex-col gap-1.5 mt-1">
          {r.address && (
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <PinIco />
              {r.address}
            </span>
          )}
          {r.hours && (
            <span className="flex items-center gap-1.5 text-xs text-[#4a7c6a]">
              <ClockIco />
              {r.hours}
            </span>
          )}
          {r.phone && (
            <span className="flex items-center gap-1.5 text-xs text-[#4a7c6a]">
              <PhoneIco />
              {r.phone}
            </span>
          )}
        </div>
        <motion.a
          href={r.website || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs font-bold transition-colors"
          style={{ background: cs.bg, color: cs.color }}
        >
          View Details <ArrowIco />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ResourceRow = ({ r, onRemove }) => {
  const cs = catStyle(r.category);
  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
      whileHover={{ x: 4 }}
      className="bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 border border-[#e8f5e1] shadow-sm flex items-center gap-3 sm:gap-4 group"
    >
      <div
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ background: cs.color }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-bold text-[#264653] text-sm">{r.name}</p>
          <span
            className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ background: cs.bg, color: cs.color }}
          >
            {r.category}
          </span>
        </div>
        {r.address && (
          <p className="text-xs text-gray-400 mt-0.5 truncate">{r.address}</p>
        )}
      </div>
      {r.phone && (
        <p className="text-xs text-[#4a7c6a] hidden md:block flex-shrink-0">
          {r.phone}
        </p>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => onRemove(r.id)}
        className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
      >
        <XMarkIco />
      </motion.button>
    </motion.div>
  );
};

const Tab = ({ icon, label, active, onClick, badge = null }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
      active
        ? "bg-white text-[#1B6E4F] shadow-md"
        : "text-white/60 hover:text-white hover:bg-white/10"
    }`}
  >
    {icon}
    <span className="hidden xs:inline sm:inline">{label}</span>
    {badge != null && (
      <span
        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${active ? "bg-[#d3efca] text-[#1B6E4F]" : "bg-white/20 text-white"}`}
      >
        {badge}
      </span>
    )}
  </button>
);

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const router = useRouter();
  const user = session?.user;

  const [activeTab, setActiveTab] = useState("overview");
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [signOutConfirm, setSignOutConfirm] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      router.push("/SignIn");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user?.id) return;
    const fetchFavorites = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("favorites")
        .select("resource_id")
        .eq("user_id", user.id);
      if (error || !data?.length) {
        setLoading(false);
        return;
      }
      const ids = data.map((f) => f.resource_id);
      const { data: resourcesData } = await supabase
        .from("resources")
        .select("*")
        .in("id", ids);
      setResources(resourcesData || []);
      setLoading(false);
    };
    fetchFavorites();

    const fetchComments = async () => {
      setLoadingComments(true);
      const { data, error } = await supabase
        .from("comments")
        .select("*, resources(name)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (!error) setComments(data || []);
      setLoadingComments(false);
    };
    fetchComments();
  }, [user?.id]);

  const handleRemove = async (id) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
    await supabase
      .from("favorites")
      .delete()
      .eq("user_id", user.id)
      .eq("resource_id", id);
  };

  const handleDeleteComment = async (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
    await supabase.from("comments").delete().eq("id", id);
  };

  const firstName = user?.user_metadata?.first_name || "there";
  const initials =
    `${user?.user_metadata?.first_name?.[0] || ""}${user?.user_metadata?.last_name?.[0] || ""}`.toUpperCase() ||
    "U";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B6E4F] via-[#165c42] to-[#264653]">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="1100" cy="-80" r="380" fill="white" fillOpacity="0.03" />
        <circle cx="-80" cy="700" r="300" fill="#0cc883" fillOpacity="0.05" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        {/* ── HEADER ── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-4">
            <motion.div
              variants={fadeUp}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-[0_4px_20px_rgba(12,200,131,0.35)] flex-shrink-0"
            >
              {initials}
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-white/50 text-xs sm:text-sm font-semibold">
                Welcome back
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                {firstName}
                <span className="text-[#0cc883]">.</span>
              </h1>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5 truncate max-w-[200px] sm:max-w-none">
                {user?.email}
              </p>
            </motion.div>
          </div>

          {/* Sign out */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 self-start sm:self-auto"
          >
            {!signOutConfirm ? (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSignOutConfirm(true)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 font-bold text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-white/15 hover:bg-white/20 transition-colors"
              >
                <LogOutIco /> <span className="hidden xs:inline">Sign Out</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <p className="text-white/70 text-sm font-semibold hidden sm:block">
                  Are you sure?
                </p>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white text-sm font-bold px-3 sm:px-4 py-2.5 rounded-xl hover:bg-red-600 transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => setSignOutConfirm(false)}
                  className="bg-white/15 text-white text-sm font-bold px-3 sm:px-4 py-2.5 rounded-xl hover:bg-white/25 transition-colors"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* ── STAT STRIP ── */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 sm:mb-8"
        >
          {[
            {
              icon: <HeartIco />,
              value: resources.length,
              label: "Saved Resources",
            },
            {
              icon: <StarIco />,
              value: comments.length,
              label: "Comments Left",
            },
            { icon: <UserIco />, value: "Active", label: "Account Status" },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={i === 2 ? "col-span-2 sm:col-span-1" : ""}
            >
              <StatCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── TAB NAV ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="flex gap-1 sm:gap-2 mb-6 sm:mb-8 bg-white/5 backdrop-blur rounded-2xl p-1 sm:p-1.5 border border-white/10 w-fit overflow-x-auto max-w-full"
        >
          <Tab
            icon={<GridIco />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <Tab
            icon={<HeartIco />}
            label="Saved"
            active={activeTab === "saved"}
            onClick={() => setActiveTab("saved")}
            badge={resources.length}
          />
          <Tab
            icon={<EditIco />}
            label="Contributions"
            active={activeTab === "contributions"}
            onClick={() => setActiveTab("contributions")}
          />
        </motion.div>

        {/* ── CONTENT ── */}
        <AnimatePresence mode="wait">
          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              variants={stagger(0.09)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            >
              {/* Profile card */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col gap-4 sm:gap-5"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <UserIco />
                  </div>
                  <h2 className="text-white font-black text-base sm:text-lg">
                    Profile
                  </h2>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4">
                  {[
                    { label: "Email", value: user?.email },
                    {
                      label: "Name",
                      value:
                        `${user?.user_metadata?.first_name || ""} ${user?.user_metadata?.last_name || ""}`.trim(),
                    },
                    {
                      label: "Member since",
                      value: user?.created_at
                        ? new Date(user.created_at).toLocaleDateString(
                            "en-US",
                            { month: "long", year: "numeric" },
                          )
                        : "—",
                    },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="bg-white/10 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3"
                    >
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Saved resources preview */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <HeartIco />
                  </div>
                  <h2 className="text-white font-black text-base sm:text-lg">
                    Saved Resources
                  </h2>
                </div>
                {resources.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/30 mb-3">
                      <HeartIco />
                    </div>
                    <p className="text-white/50 text-sm">
                      No saved resources yet
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      Browse resources and heart the ones you need
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 flex-1">
                    {resources.slice(0, 3).map((r) => {
                      const cs = catStyle(r.category);
                      return (
                        <div
                          key={r.id}
                          className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: cs.color }}
                          />
                          <p className="text-white text-sm font-semibold truncate flex-1">
                            {r.name}
                          </p>
                          <span
                            className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: cs.bg + "33", color: "white" }}
                          >
                            {r.category}
                          </span>
                        </div>
                      );
                    })}
                    {resources.length > 3 && (
                      <p className="text-white/40 text-xs text-center mt-1">
                        +{resources.length - 3} more
                      </p>
                    )}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab("saved")}
                  className="w-full bg-[#0cc883] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(12,200,131,0.3)] mt-auto"
                >
                  View All Saved <ArrowIco />
                </motion.button>
              </motion.div>

              {/* Contributions preview */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-7 shadow-xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <EditIco />
                  </div>
                  <h2 className="text-white font-black text-base sm:text-lg">
                    Contributions
                  </h2>
                </div>
                {comments.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/30 mb-3">
                      <EditIco />
                    </div>
                    <p className="text-white/50 text-sm">
                      No contributions yet
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      Comment on a resource
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 flex-1">
                    {comments.slice(0, 3).map((c) => {
                      const cs = catStyle(c.resources?.category);
                      return (
                        <div
                          key={c.id}
                          className="flex items-start gap-3 bg-white/10 rounded-xl px-3 py-2.5"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: cs.color }}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-white/50 text-[10px] font-bold truncate">
                              {c.resources?.name || "Resource"}
                            </p>
                            <p className="text-white text-xs font-semibold line-clamp-1">
                              {c.body}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                    {comments.length > 3 && (
                      <p className="text-white/40 text-xs text-center mt-1">
                        +{comments.length - 3} more
                      </p>
                    )}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab("contributions")}
                  className="w-full bg-white/15 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 border border-white/20 mt-auto"
                >
                  View Activity <ArrowIco />
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* SAVED RESOURCES */}
          {activeTab === "saved" && (
            <motion.div
              key="saved"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-start sm:items-center justify-between mb-5 sm:mb-6 flex-wrap gap-3">
                <div>
                  <h2 className="text-white font-black text-xl sm:text-2xl">
                    Saved Resources
                  </h2>
                  <p className="text-white/50 text-sm mt-0.5">
                    {resources.length} resource
                    {resources.length !== 1 ? "s" : ""} saved
                  </p>
                </div>
                <div className="flex items-center bg-white/10 rounded-xl border border-white/15 p-1">
                  {[
                    { id: "grid", icon: <GridIco /> },
                    { id: "list", icon: <ListIco /> },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setViewMode(v.id)}
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${viewMode === v.id ? "bg-white text-[#1B6E4F] shadow-sm" : "text-white/50 hover:text-white"}`}
                    >
                      {v.icon}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 rounded-full border-4 border-white/20 border-t-[#0cc883]"
                  />
                </div>
              ) : resources.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-16 sm:py-20 text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-4 sm:mb-5">
                    <HeartIco />
                  </div>
                  <h3 className="text-white font-black text-lg sm:text-xl mb-2">
                    No saved resources yet
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs mb-5 sm:mb-6">
                    Browse our directory and tap the heart icon on any resource
                    to save it here.
                  </p>
                  <motion.a
                    href="/resources"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#0cc883] text-white font-bold px-6 sm:px-7 py-3 rounded-xl text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(12,200,131,0.3)]"
                  >
                    Browse Resources <ArrowIco />
                  </motion.a>
                </motion.div>
              ) : viewMode === "grid" ? (
                <motion.div
                  variants={stagger(0.07)}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                >
                  <AnimatePresence>
                    {resources.map((r) => (
                      <ResourceCard key={r.id} r={r} onRemove={handleRemove} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  variants={stagger(0.05)}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-3"
                >
                  <AnimatePresence>
                    {resources.map((r) => (
                      <ResourceRow key={r.id} r={r} onRemove={handleRemove} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* CONTRIBUTIONS */}
          {activeTab === "contributions" && (
            <motion.div
              key="contributions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-5 sm:mb-6">
                <h2 className="text-white font-black text-xl sm:text-2xl">
                  Your Contributions
                </h2>
                <p className="text-white/50 text-sm mt-0.5">
                  Comments you've left on resources
                </p>
              </div>

              {loadingComments ? (
                <div className="flex items-center justify-center py-20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 rounded-full border-4 border-white/20 border-t-[#0cc883]"
                  />
                </div>
              ) : comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center bg-white/5 rounded-3xl border border-white/10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-4 sm:mb-5">
                    <EditIco />
                  </div>
                  <h3 className="text-white font-black text-lg sm:text-xl mb-2">
                    Nothing yet
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs mb-5 sm:mb-6">
                    Comment on a resource to see your activity here.
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Link href="/about#form">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-[#0cc883] text-white font-bold px-5 sm:px-6 py-3 rounded-xl text-sm flex items-center gap-2"
                      >
                        Submit a Resource <ArrowIco />
                      </motion.button>
                    </Link>
                    <Link href="/resources">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-white/15 text-white font-bold px-5 sm:px-6 py-3 rounded-xl text-sm border border-white/20 flex items-center gap-2"
                      >
                        View Resources <ArrowIco />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={stagger(0.07)}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-4"
                >
                  <AnimatePresence>
                    {comments.map((c) => {
                      const cs = catStyle(c.resources?.category);
                      return (
                        <motion.div
                          key={c.id}
                          layout
                          variants={fadeUp}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2 },
                          }}
                          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 group shadow-xl"
                        >
                          {/* Left: resource info */}
                          <div className="flex sm:flex-col gap-3 sm:gap-2 sm:w-44 flex-shrink-0">
                            <span
                              className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full w-fit"
                              style={{ background: cs.bg, color: cs.color }}
                            >
                              {c.resources?.category || "Resource"}
                            </span>
                            <div>
                              <p className="text-white font-bold text-sm leading-snug">
                                {c.resources?.name || "Unknown Resource"}
                              </p>
                              {c.created_at && (
                                <p className="text-white/30 text-[10px] font-semibold mt-1">
                                  {new Date(c.created_at).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    },
                                  )}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="hidden sm:block w-px bg-white/10 flex-shrink-0" />

                          {/* Right: comment */}
                          <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
                            <p className="text-white/80 text-sm leading-relaxed">
                              {c.body || c.content || c.text || "—"}
                            </p>
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <Link
                                href="/resources"
                                className="text-[#0cc883] text-xs font-bold flex items-center gap-1 hover:underline"
                              >
                                View Resource <ArrowIco />
                              </Link>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleDeleteComment(c.id)}
                                className="flex items-center gap-1.5 text-xs text-white/30 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <TrashIco /> Delete
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Info banner — always visible below tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 sm:mt-10 bg-white/10 backdrop-blur-xl border border-[#0cc883]/40 rounded-3xl p-4 sm:p-6 shadow-xl"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0cc883]/20 flex items-center justify-center text-[#0cc883] flex-shrink-0 mt-0.5">
                <InfoIco />
              </div>
              <div>
                <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase mb-1">
                  TSA Judge Demo Note
                </p>
                <h3 className="text-white font-black text-sm sm:text-base md:text-lg mb-2">
                  About This User Dashboard
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  Here, users can submit inquiries (general, resource, or
                  issues) which are forwarded to the admin account (credentials
                  on the log-in page) and the admin is able to review them.
                </p>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  <span className="text-white font-bold">
                    *IMPORTANT INFO*:{" "}
                  </span>
                  When navigating the website while logged in, be sure not to
                  click out of the page. If you do accidentally click out of the
                  page, please refresh and open a page other than the Account
                  Page or Resources Page as in order to get real time updates
                  using Supabase, there was a paywall for real time updating.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
