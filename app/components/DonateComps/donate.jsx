// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence, useInView } from "framer-motion";
// import { BiTestTube } from "react-icons/bi";
// import { IoMdLock } from "react-icons/io";
// import { CiReceipt, CiSquareCheck } from "react-icons/ci";
// import { FaReceipt } from "react-icons/fa";

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
// const stagger = (d = 0.09) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: d } },
// });
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
// const HeartIco = () => (
//   <Ico d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
// );
// const LockIco = () => (
//   <Ico d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4" />
// );
// const CheckIco = () => <Ico d="M20 6L9 17l-5-5" sw={2.5} size={18} />;
// const ShieldIco = () => (
//   <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={16} />
// );
// const StarIco = () => (
//   <Ico
//     d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
//     size={14}
//   />
// );
// const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={16} sw={2} />;
// const UsersIco = () => (
//   <Ico
//     d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
//     size={22}
//   />
// );
// const HomeIco = () => (
//   <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={22} />
// );
// const MealIco = () => (
//   <Ico
//     d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
//     size={22}
//   />
// );
// const BookIco = () => (
//   <Ico
//     d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5"
//     size={22}
//   />
// );
// const AlertIco = () => (
//   <Ico
//     d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"
//     size={16}
//   />
// );

// // ── Stripe test card numbers ──────────────────────────────────────────────────
// const TEST_CARDS = {
//   visa: "4242 4242 4242 4242",
//   mastercard: "5555 5555 5555 4444",
//   amex: "3714 496353 98431",
//   decline: "4000 0000 0000 0002",
// };

// // ── Detect card brand from number ─────────────────────────────────────────────
// function detectBrand(num) {
//   const n = num.replace(/\s/g, "");
//   if (n.startsWith("4")) return "visa";
//   if (/^5[1-5]/.test(n)) return "mastercard";
//   if (/^3[47]/.test(n)) return "amex";
//   if (n.startsWith("6")) return "discover";
//   return null;
// }

// function formatCard(val) {
//   const digits = val.replace(/\D/g, "").slice(0, 16);
//   return digits.replace(/(.{4})/g, "$1 ").trim();
// }

// function formatExpiry(val) {
//   const d = val.replace(/\D/g, "").slice(0, 4);
//   if (d.length >= 3) return d.slice(0, 2) + "/" + d.slice(2);
//   return d;
// }

// // ── Card brand logo SVGs ──────────────────────────────────────────────────────
// const VisaSVG = () => (
//   <svg viewBox="0 0 50 16" width="40" height="13">
//     <text x="0" y="13" fontSize="14" fontWeight="bold" fill="#1A1F71">
//       VISA
//     </text>
//   </svg>
// );
// const McSVG = () => (
//   <svg viewBox="0 0 38 24" width="34" height="21">
//     <circle cx="14" cy="12" r="10" fill="#EB001B" />
//     <circle cx="24" cy="12" r="10" fill="#F79E1B" />
//     <path
//       d="M19 4.8A9.96 9.96 0 0122.6 12 9.96 9.96 0 0119 19.2 9.96 9.96 0 0115.4 12 9.96 9.96 0 0119 4.8z"
//       fill="#FF5F00"
//     />
//   </svg>
// );

// // ── Donation amounts ──────────────────────────────────────────────────────────
// const AMOUNTS = [10, 25, 50, 100, 250, 500];

// const IMPACT = [
//   {
//     amount: 10,
//     icon: <MealIco />,
//     label: "Provides 8 meals",
//     desc: "through the Chester County Food Bank",
//   },
//   {
//     amount: 25,
//     icon: <BookIco />,
//     label: "Funds 1 tutoring session",
//     desc: "for a student through the library program",
//   },
//   {
//     amount: 50,
//     icon: <HomeIco />,
//     label: "Covers 1 night of shelter",
//     desc: "at the Chester County Night Shelter",
//   },
//   {
//     amount: 100,
//     icon: <UsersIco />,
//     label: "Supports 3 families",
//     desc: "with emergency food boxes for a week",
//   },
//   {
//     amount: 250,
//     icon: <HeartIco />,
//     label: "Sponsors a health clinic visit",
//     desc: "for someone without insurance",
//   },
//   {
//     amount: 500,
//     icon: <HeartIco />,
//     label: "Funds a month of outreach",
//     desc: "connecting residents to critical services",
//   },
// ];

// // ── Progress bar data ─────────────────────────────────────────────────────────
// const GOAL = 25000;
// const RAISED = 18340;
// const DONORS = 312;

// export default function DonatePage() {
//   const [amount, setAmount] = useState(25);
//   const [custom, setCustom] = useState("");
//   const [isCustom, setIsCustom] = useState(false);
//   const [freq, setFreq] = useState("once"); // "once" | "monthly"

//   // form fields
//   const [card, setCard] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [zip, setZip] = useState("");
//   const [agreed, setAgreed] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState("form"); // "form" | "processing" | "success" | "error"
//   const [errorMsg, setErrorMsg] = useState("");

//   const finalAmount = isCustom ? parseFloat(custom) || 0 : amount;
//   const brand = detectBrand(card);
//   const impactItem = IMPACT.reduce((prev, curr) =>
//     Math.abs(curr.amount - finalAmount) < Math.abs(prev.amount - finalAmount)
//       ? curr
//       : prev,
//   );

//   // simulate Stripe test mode charge
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!agreed) return;
//     if (finalAmount < 1) {
//       setErrorMsg("Minimum donation is $1.");
//       setStep("error");
//       return;
//     }

//     const raw = card.replace(/\s/g, "");

//     // Simulate test card outcomes
//     if (raw === "4000000000000002") {
//       setStep("processing");
//       await delay(1800);
//       setErrorMsg(
//         "Your card was declined. This is a Stripe test card — try 4242 4242 4242 4242.",
//       );
//       setStep("error");
//       return;
//     }

//     setStep("processing");
//     await delay(2200);
//     setStep("success");
//   };

//   const reset = () => {
//     setStep("form");
//     setCard("");
//     setExpiry("");
//     setCvc("");
//     setName("");
//     setEmail("");
//     setZip("");
//     setAgreed(false);
//     setAmount(25);
//     setCustom("");
//     setIsCustom(false);
//     setErrorMsg("");
//   };

//   const pct = Math.min(100, (RAISED / GOAL) * 100);

//   const impactRef = useRef(null);
//   const impactInView = useInView(impactRef, { once: true, margin: "-60px" });

//   return (
//     <div className="min-h-screen bg-[#F1FAEE]">
//       {/* ── HERO ───────────────────────────────────────────────── */}
//       <section className="relative bg-gradient-to-br from-[#1B6E4F] via-[#165c42] to-[#264653] px-6 md:px-20 pt-16 pb-28 overflow-hidden">
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           viewBox="0 0 1200 500"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <circle cx="1000" cy="-60" r="340" fill="white" fillOpacity="0.03" />
//           <circle cx="-60" cy="420" r="280" fill="#0cc883" fillOpacity="0.06" />
//         </svg>

//         <motion.div
//           variants={stagger(0.11)}
//           initial="hidden"
//           animate="show"
//           className="relative z-10 max-w-3xl mx-auto text-center"
//         >
//           <motion.div variants={fadeUp}>
//             <span className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-6">
//               Support Chester Bridge
//             </span>
//           </motion.div>
//           <motion.div
//             variants={fadeUp}
//             className="flex justify-center mb-4 text-[#0cc883]"
//           >
//             <HeartIco size={40} />
//           </motion.div>
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-5"
//           >
//             Help us keep every
//             <br />
//             <span className="text-[#0cc883]">resource free</span> for everyone.
//           </motion.h1>
//           <motion.p
//             variants={fadeUp}
//             className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10"
//           >
//             Chester Bridge runs entirely on community support. Your donation
//             keeps the directory free, accurate, and growing for every resident
//             who needs it.
//           </motion.p>

//           {/* Progress bar */}
//           <motion.div
//             variants={fadeUp}
//             className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15 text-left"
//           >
//             <div className="flex items-end justify-between mb-3">
//               <div>
//                 <p className="text-white font-black text-3xl">
//                   ${RAISED.toLocaleString()}
//                 </p>
//                 <p className="text-white/50 text-xs font-semibold mt-0.5">
//                   raised of ${GOAL.toLocaleString()} goal
//                 </p>
//               </div>
//               <div className="text-right">
//                 <p className="text-[#0cc883] font-black text-xl">{DONORS}</p>
//                 <p className="text-white/50 text-xs font-semibold mt-0.5">
//                   donors
//                 </p>
//               </div>
//             </div>
//             <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${pct}%` }}
//                 transition={{
//                   delay: 0.8,
//                   duration: 1.2,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="h-full rounded-full bg-gradient-to-r from-[#0cc883] to-[#2a9d6e]"
//               />
//             </div>
//             <p className="text-white/40 text-xs mt-2 text-right">
//               {pct.toFixed(0)}% of goal reached
//             </p>
//           </motion.div>
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

//       {/* ── MAIN: FORM + SIDEBAR ───────────────────────────────── */}
//       <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#F1FAEE]">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-10 items-start">
//           {/* ── LEFT: DONATION FORM ─────────────────────────── */}
//           <div>
//             <AnimatePresence mode="wait">
//               {/* PROCESSING */}
//               {step === "processing" && (
//                 <motion.div
//                   key="processing"
//                   initial={{ opacity: 0, scale: 0.96 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.96 }}
//                   className="bg-white rounded-3xl border border-[#d3efca] shadow-sm p-16 flex flex-col items-center justify-center text-center min-h-[500px]"
//                 >
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1.2,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-16 h-16 rounded-full border-4 border-[#d3efca] border-t-[#1B6E4F] mb-8"
//                   />
//                   <h3 className="font-black text-[#264653] text-xl mb-2">
//                     Processing donation…
//                   </h3>
//                   <p className="text-gray-400 text-sm">
//                     Securely connecting to Stripe Test Mode
//                   </p>
//                   <div className="flex items-center gap-2 mt-6 text-xs text-gray-300">
//                     <LockIco size={13} /> 256-bit SSL encryption
//                   </div>
//                 </motion.div>
//               )}

//               {/* SUCCESS */}
//               {step === "success" && (
//                 <motion.div
//                   key="success"
//                   initial={{ opacity: 0, y: 24 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white rounded-3xl border border-[#d3efca] shadow-sm p-12 flex flex-col items-center text-center min-h-[500px] justify-center"
//                 >
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 18,
//                       delay: 0.1,
//                     }}
//                     className="w-20 h-20 bg-[#d3efca] rounded-full flex items-center justify-center text-[#1B6E4F] mb-6"
//                   >
//                     <CheckIco size={36} />
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
//                       Test Mode — No charge made
//                     </span>
//                     <h2 className="text-[#264653] font-black text-3xl mb-3">
//                       Thank you! 💚
//                     </h2>
//                     <p className="text-gray-400 text-base mb-2">
//                       Your{" "}
//                       <strong className="text-[#264653]">
//                         ${finalAmount.toFixed(2)}
//                       </strong>{" "}
//                       {freq === "monthly" ? "monthly donation" : "donation"} was
//                       successfully processed in Stripe test mode.
//                     </p>
//                     <p className="text-gray-300 text-sm mb-8">
//                       A confirmation receipt would be sent to{" "}
//                       <strong className="text-gray-400">{email}</strong> in
//                       reality.
//                     </p>

//                     {/* Impact summary */}
//                     <div className="bg-[#f0f9f4] rounded-2xl p-5 mb-8 text-left border border-[#d3efca]">
//                       <p className="text-xs font-black text-[#1B6E4F] uppercase tracking-widest mb-2">
//                         Your impact
//                       </p>
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-[#d3efca] rounded-xl flex items-center justify-center text-[#1B6E4F]">
//                           {impactItem.icon}
//                         </div>
//                         <div>
//                           <p className="font-black text-[#264653] text-sm">
//                             {impactItem.label}
//                           </p>
//                           <p className="text-gray-400 text-xs">
//                             {impactItem.desc}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <motion.button
//                       whileHover={{ scale: 1.04 }}
//                       whileTap={{ scale: 0.97 }}
//                       onClick={reset}
//                       className="bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold px-8 py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] flex items-center gap-2 mx-auto"
//                     >
//                       Make Another Donation <ArrowIco />
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               )}

//               {/* ERROR */}
//               {step === "error" && (
//                 <motion.div
//                   key="error"
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className="bg-white rounded-3xl border border-[#fde68a] shadow-sm p-10 flex flex-col items-center text-center min-h-[300px] justify-center"
//                 >
//                   <div className="w-16 h-16 bg-[#fee2e2] rounded-full flex items-center justify-center text-[#ef4444] mb-5">
//                     <AlertIco size={28} />
//                   </div>
//                   <h3 className="font-black text-[#264653] text-xl mb-2">
//                     Payment failed
//                   </h3>
//                   <p className="text-gray-400 text-sm mb-6 max-w-sm">
//                     {errorMsg}
//                   </p>
//                   <button
//                     onClick={() => setStep("form")}
//                     className="bg-[#d3efca] text-[#1B6E4F] font-bold px-6 py-3 rounded-xl text-sm"
//                   >
//                     Try Again
//                   </button>
//                 </motion.div>
//               )}

//               {/* FORM */}
//               {step === "form" && (
//                 <motion.div
//                   key="form"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 >
//                   <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//                     {/* ─ Step 1: Frequency ─────────────────────── */}
//                     <Card label="01" title="Donation Frequency">
//                       <div className="flex gap-3">
//                         {[
//                           { id: "once", label: "Give Once" },
//                           { id: "monthly", label: "Give Monthly 💚" },
//                         ].map((f) => (
//                           <button
//                             type="button"
//                             key={f.id}
//                             onClick={() => setFreq(f.id)}
//                             className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${freq === f.id ? "bg-[#1B6E4F] text-white border-[#1B6E4F] shadow-[0_4px_16px_rgba(27,110,79,0.25)]" : "bg-white text-gray-500 border-[#e8f5e1] hover:border-[#1B6E4F]"}`}
//                           >
//                             {f.label}
//                           </button>
//                         ))}
//                       </div>
//                       {freq === "monthly" && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 8 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="bg-[#d3efca] rounded-xl px-4 py-3 flex items-center gap-2 mt-2"
//                         >
//                           <HeartIco size={16} />
//                           <p className="text-[#1B6E4F] text-xs font-semibold">
//                             Monthly donors make up 70% of our sustained funding.
//                             Thank you!
//                           </p>
//                         </motion.div>
//                       )}
//                     </Card>

//                     {/* ─ Step 2: Amount ────────────────────────── */}
//                     <Card label="02" title="Select Amount">
//                       <div className="grid grid-cols-3 gap-3">
//                         {AMOUNTS.map((a) => (
//                           <motion.button
//                             type="button"
//                             key={a}
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.97 }}
//                             onClick={() => {
//                               setAmount(a);
//                               setIsCustom(false);
//                               setCustom("");
//                             }}
//                             className={`py-3 rounded-xl font-black text-base border-2 transition-all ${!isCustom && amount === a ? "bg-[#1B6E4F] text-white border-[#1B6E4F] shadow-[0_4px_16px_rgba(27,110,79,0.22)]" : "bg-white text-[#264653] border-[#e8f5e1] hover:border-[#1B6E4F]"}`}
//                           >
//                             ${a}
//                           </motion.button>
//                         ))}
//                       </div>

//                       {/* Custom amount */}
//                       <div
//                         className={`flex items-center gap-3 bg-white border-2 rounded-xl px-4 py-3 transition-colors ${isCustom ? "border-[#1B6E4F]" : "border-[#e8f5e1]"}`}
//                       >
//                         <span className="text-gray-400 font-black text-lg">
//                           $
//                         </span>
//                         <input
//                           value={custom}
//                           onChange={(e) => {
//                             const v = e.target.value.replace(/[^0-9.]/g, "");
//                             setCustom(v);
//                             setIsCustom(true);
//                           }}
//                           onFocus={() => setIsCustom(true)}
//                           placeholder="Custom amount"
//                           className="flex-1 bg-transparent text-[#264653] font-bold text-base outline-none placeholder-gray-300"
//                         />
//                         {isCustom && custom && (
//                           <span className="text-[#1B6E4F] text-xs font-black">
//                             ✓
//                           </span>
//                         )}
//                       </div>

//                       {/* Impact preview */}
//                       {finalAmount >= 1 && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           className="bg-[#f0f9f4] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#d3efca] overflow-hidden"
//                         >
//                           <div className="w-9 h-9 bg-[#d3efca] rounded-lg flex items-center justify-center text-[#1B6E4F] flex-shrink-0">
//                             {impactItem.icon}
//                           </div>
//                           <p className="text-[#264653] text-sm font-semibold leading-snug">
//                             <strong>${finalAmount}</strong> → {impactItem.label}{" "}
//                             <span className="text-gray-400 font-normal">
//                               {impactItem.desc}
//                             </span>
//                           </p>
//                         </motion.div>
//                       )}
//                     </Card>

//                     {/* ─ Step 3: Personal Info ─────────────────── */}
//                     <Card label="03" title="Your Information">
//                       <div className="grid grid-cols-2 gap-4">
//                         <Field label="Full name" required>
//                           <input
//                             required
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             placeholder="Jane Smith"
//                             className={inputCls}
//                           />
//                         </Field>
//                         <Field label="Email address" required>
//                           <input
//                             required
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="jane@example.com"
//                             className={inputCls}
//                           />
//                         </Field>
//                       </div>
//                     </Card>

//                     {/* ─ Step 4: Payment ───────────────────────── */}
//                     <Card label="04" title="Payment Details">
//                       <div className="bg-[#fef3c7] border border-[#fde68a] rounded-xl px-4 py-3 mb-4 flex items-start gap-2.5">
//                         <AlertIco />
//                         <div>
//                           <p className="text-[#92400e] font-black text-xs mb-1">
//                             Stripe Test Mode — No real charge
//                           </p>
//                           <p className="text-[#92400e] text-xs leading-relaxed">
//                             Use{" "}
//                             <code className="bg-[#fde68a] px-1 rounded font-mono">
//                               4242 4242 4242 4242
//                             </code>{" "}
//                             · Any future MM/YY · Any 3-digit CVC
//                           </p>
//                         </div>
//                       </div>

//                       {/* Card number */}
//                       <Field label="Card number" required>
//                         <div className="relative">
//                           <input
//                             required
//                             value={card}
//                             onChange={(e) =>
//                               setCard(formatCard(e.target.value))
//                             }
//                             placeholder="1234 5678 9012 3456"
//                             maxLength={19}
//                             className={`${inputCls} pr-16`}
//                           />
//                           <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                             {brand === "visa" && <VisaSVG />}
//                             {brand === "mastercard" && <McSVG />}
//                             {!brand && (
//                               <div className="w-9 h-6 bg-gray-100 rounded border border-gray-200" />
//                             )}
//                           </div>
//                         </div>
//                       </Field>

//                       <div className="grid grid-cols-2 gap-4">
//                         <Field label="Expiry date" required>
//                           <input
//                             required
//                             value={expiry}
//                             onChange={(e) =>
//                               setExpiry(formatExpiry(e.target.value))
//                             }
//                             placeholder="MM/YY"
//                             maxLength={5}
//                             className={inputCls}
//                           />
//                         </Field>
//                         <Field label="CVC" required>
//                           <input
//                             required
//                             value={cvc}
//                             onChange={(e) =>
//                               setCvc(
//                                 e.target.value.replace(/\D/g, "").slice(0, 4),
//                               )
//                             }
//                             placeholder="•••"
//                             maxLength={4}
//                             className={inputCls}
//                           />
//                         </Field>
//                       </div>

//                       <Field label="Billing ZIP code">
//                         <input
//                           value={zip}
//                           onChange={(e) =>
//                             setZip(
//                               e.target.value.replace(/\D/g, "").slice(0, 5),
//                             )
//                           }
//                           placeholder="19380"
//                           maxLength={5}
//                           className={inputCls}
//                         />
//                       </Field>

//                       {/* Saved test cards helper */}
//                       {/* <div className="bg-white border border-[#e8f5e1] rounded-xl p-4 mt-2">
//                         <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">
//                           Quick-fill test cards
//                         </p>
//                         <div className="flex flex-col gap-2">
//                           {[
//                             { brand: "Visa (succeeds)", num: TEST_CARDS.visa },
//                             { brand: "Mastercard", num: TEST_CARDS.mastercard },
//                             {
//                               brand: "Visa (declined)",
//                               num: TEST_CARDS.decline,
//                             },
//                           ].map((tc) => (
//                             <button
//                               type="button"
//                               key={tc.num}
//                               onClick={() => setCard(tc.num)}
//                               className="flex items-center justify-between text-xs px-3 py-2 rounded-lg bg-[#f8faf8] hover:bg-[#d3efca] border border-[#e8f5e1] transition-colors text-left"
//                             >
//                               <span className="font-semibold text-[#264653]">
//                                 {tc.brand}
//                               </span>
//                               <code className="text-gray-400 font-mono">
//                                 {tc.num}
//                               </code>
//                             </button>
//                           ))}
//                         </div>
//                       </div> */}
//                     </Card>

//                     {/* ─ Agree + Submit ────────────────────────── */}
//                     <div className="bg-white rounded-2xl border border-[#d3efca] p-6 flex flex-col gap-5 shadow-sm">
//                       <label className="flex items-start gap-3 cursor-pointer">
//                         <div
//                           onClick={() => setAgreed(!agreed)}
//                           className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${agreed ? "bg-[#1B6E4F] border-[#1B6E4F]" : "border-gray-300 bg-white"}`}
//                         >
//                           {agreed && <CheckIco size={12} />}
//                         </div>
//                         <p className="text-gray-400 text-sm leading-relaxed">
//                           I understand this is a{" "}
//                           <strong className="text-[#264653]">
//                             Stripe test mode demo
//                           </strong>{" "}
//                           — no real money will be charged. Realistically, this
//                           would process a real donation to support Chester
//                           Bridge.
//                         </p>
//                       </label>

//                       <motion.button
//                         type="submit"
//                         disabled={!agreed || finalAmount < 1}
//                         whileHover={
//                           agreed && finalAmount >= 1
//                             ? {
//                                 scale: 1.02,
//                                 boxShadow: "0 8px 32px rgba(27,110,79,0.35)",
//                               }
//                             : {}
//                         }
//                         whileTap={
//                           agreed && finalAmount >= 1 ? { scale: 0.98 } : {}
//                         }
//                         className={`w-full py-4 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all ${agreed && finalAmount >= 1 ? "bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white shadow-[0_4px_20px_rgba(27,110,79,0.3)] cursor-pointer" : "bg-gray-100 text-gray-300 cursor-not-allowed"}`}
//                       >
//                         <LockIco size={18} />
//                         {freq === "monthly"
//                           ? `Donate $${finalAmount || 0}/mo securely`
//                           : `Donate $${finalAmount || 0} securely`}
//                       </motion.button>

//                       <div className="flex items-center justify-center gap-5 text-xs text-gray-300">
//                         <span className="flex items-center gap-1">
//                           <ShieldIco /> SSL Secured
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <LockIco size={12} /> Stripe Encrypted
//                         </span>
//                         <span className="flex items-center">
//                           <BiTestTube className="text-xl"></BiTestTube> &nbsp;
//                           Test Mode
//                         </span>
//                       </div>
//                     </div>
//                   </form>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* ── RIGHT SIDEBAR ───────────────────────────────── */}
//           <motion.div
//             variants={stagger(0.1)}
//             initial="hidden"
//             animate="show"
//             className="flex flex-col gap-5 lg:sticky lg:top-6"
//           >
//             {/* Summary card */}
//             <motion.div
//               variants={fadeUp}
//               className="bg-gradient-to-br from-[#1B6E4F] to-[#264653] rounded-2xl p-6 text-white"
//             >
//               <p className="text-[#0cc883] text-xs font-black tracking-widest uppercase mb-4">
//                 Donation Summary
//               </p>
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-white/70 text-sm">
//                   {freq === "monthly"
//                     ? "Monthly donation"
//                     : "One-time donation"}
//                 </span>
//                 <span className="text-white font-black text-xl">
//                   ${finalAmount || "—"}
//                 </span>
//               </div>
//               {freq === "monthly" && (
//                 <div className="flex justify-between items-center mb-3 text-xs text-white/50">
//                   <span>Annual total</span>
//                   <span>${((finalAmount || 0) * 12).toFixed(0)}/year</span>
//                 </div>
//               )}
//               <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
//                 <span className="text-white/70 text-sm">
//                   Total charged today
//                 </span>
//                 <span className="text-[#0cc883] font-black text-xl">
//                   ${finalAmount || "0"}
//                 </span>
//               </div>
//               <p className="text-white/30 text-[10px] mt-2 text-center">
//                 Stripe Test Mode — $0 real charge
//               </p>
//             </motion.div>

//             {/* Trust badges */}
//             <motion.div
//               variants={fadeUp}
//               className="bg-white rounded-2xl border border-[#d3efca] p-5 shadow-sm"
//             >
//               <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
//                 Why donate here?
//               </p>
//               <div className="flex flex-col gap-3">
//                 {[
//                   {
//                     icon: <IoMdLock></IoMdLock>,
//                     text: "Payments secured by Stripe via bank-level encryption",
//                   },
//                   {
//                     icon: (
//                       <CiSquareCheck className="text-green-400"></CiSquareCheck>
//                     ),
//                     text: "100% goes to supporting Chester County resources",
//                   },
//                   {
//                     icon: <FaReceipt className="text-blue-400"/>,
//                     text: "Can be used for tax records",
//                   },
//                 ].map(({ icon, text }, i) => (
//                   <div
//                     key={i}
//                     className="flex items-start gap-3 text-sm text-gray-500"
//                   >
//                     <span className="text-base flex-shrink-0 mt-0.5">
//                       {icon}
//                     </span>
//                     <span className="leading-snug">{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Recent donors */}
//             <motion.div
//               variants={fadeUp}
//               className="bg-white rounded-2xl border border-[#d3efca] p-5 shadow-sm"
//             >
//               <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">
//                 Recent Supporters
//               </p>
//               <div className="flex flex-col gap-3">
//                 {[
//                   {
//                     name: "Sarah M.",
//                     amount: 50,
//                     time: "2 min ago",
//                     msg: "Keep up the great work!",
//                   },
//                   {
//                     name: "Anonymous",
//                     amount: 100,
//                     time: "14 min ago",
//                     msg: "",
//                   },
//                   {
//                     name: "James & Linda",
//                     amount: 25,
//                     time: "1 hr ago",
//                     msg: "So glad this exists.",
//                   },
//                   {
//                     name: "Dr. K. Patel",
//                     amount: 250,
//                     time: "3 hrs ago",
//                     msg: "This fills a real need.",
//                   },
//                 ].map(({ name, amount, time, msg }, i) => (
//                   <div key={i} className="flex items-start gap-3">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center text-white font-black text-xs flex-shrink-0">
//                       {name[0]}
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center justify-between">
//                         <p className="font-bold text-[#264653] text-xs">
//                           {name}
//                         </p>
//                         <p className="text-[#1B6E4F] font-black text-xs">
//                           ${amount}
//                         </p>
//                       </div>
//                       {msg && (
//                         <p className="text-gray-400 text-[11px] italic mt-0.5 truncate">
//                           "{msg}"
//                         </p>
//                       )}
//                       <p className="text-gray-300 text-[10px] mt-0.5">{time}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Stripe branding */}
//             <motion.div
//               variants={fadeUp}
//               className="flex items-center justify-center gap-2 text-gray-300 text-xs py-2"
//             >
//               <LockIco size={13} />
//               <span>Powered by</span>
//               <span className="font-black text-[#635BFF]">Stripe</span>
//               <span className="bg-[#fef3c7] text-[#d97706] text-[9px] font-black px-1.5 py-0.5 rounded">
//                 TEST
//               </span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── IMPACT SECTION ─────────────────────────────────────── */}
//       <section ref={impactRef} className="bg-[#d3efca] px-6 md:px-20 py-20">
//         <motion.div
//           variants={stagger(0.09)}
//           initial="hidden"
//           animate={impactInView ? "show" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           <motion.div variants={fadeUp} className="text-center mb-12">
//             <span className="inline-block bg-[#1B6E4F] text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
//               Your Impact
//             </span>
//             <h2 className="text-[#264653] font-black text-3xl md:text-4xl">
//               Every dollar makes a difference
//             </h2>
//             <p className="text-gray-500 text-base mt-3 max-w-lg mx-auto">
//               Here's exactly where your donation goes — no overhead fluff, just
//               direct community impact.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={stagger(0.07)}
//             className="grid grid-cols-2 md:grid-cols-3 gap-5"
//           >
//             {IMPACT.map(({ amount, icon, label, desc }, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 whileHover={{
//                   y: -5,
//                   boxShadow: "0 16px 40px rgba(27,110,79,0.16)",
//                 }}
//                 onClick={() => {
//                   setAmount(amount);
//                   setIsCustom(false);
//                   setCustom("");
//                   window.scrollTo({ top: 0, behavior: "smooth" });
//                 }}
//                 className="bg-white rounded-2xl p-5 border border-white shadow-sm cursor-pointer transition-shadow"
//               >
//                 <div className="w-11 h-11 bg-[#d3efca] rounded-xl flex items-center justify-center text-[#1B6E4F] mb-4">
//                   {icon}
//                 </div>
//                 <p className="text-[#1B6E4F] font-black text-xl mb-1">
//                   ${amount}
//                 </p>
//                 <p className="text-[#264653] font-bold text-sm mb-1">{label}</p>
//                 <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
//                 <p className="text-[#1B6E4F] text-xs font-bold mt-3 flex items-center gap-1">
//                   Donate ${amount} <ArrowIco />
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

// // ── Helpers ───────────────────────────────────────────────────────────────────
// const delay = (ms) => new Promise((r) => setTimeout(r, ms));
// const inputCls =
//   "w-full bg-[#f8faf8] border border-[#e8f5e1] rounded-xl px-4 py-3 text-sm text-[#264653] placeholder-gray-300 outline-none focus:border-[#1B6E4F] transition-colors font-medium";

// const Card = ({ label, title, children }) => (
//   <motion.div
//     variants={fadeUp}
//     className="bg-white rounded-2xl border border-[#d3efca] shadow-sm overflow-hidden"
//   >
//     <div className="bg-gradient-to-r from-[#f0f9f4] to-white px-6 py-4 border-b border-[#e8f5e1] flex items-center gap-3">
//       <span className="w-7 h-7 rounded-lg bg-[#1B6E4F] text-white text-[11px] font-black flex items-center justify-center">
//         {label}
//       </span>
//       <h3 className="font-black text-[#264653] text-base">{title}</h3>
//     </div>
//     <div className="p-6 flex flex-col gap-4">{children}</div>
//   </motion.div>
// );

// const Field = ({ label, required = false, children }) => (
//   <div className="flex flex-col gap-1.5">
//     <label className="text-xs font-bold text-gray-500 tracking-wide">
//       {label}
//       {required && <span className="text-[#1B6E4F] ml-0.5">*</span>}
//     </label>
//     {children}
//   </div>
// );
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { BiTestTube } from "react-icons/bi";
import { IoMdLock } from "react-icons/io";
import { CiSquareCheck } from "react-icons/ci";
import { FaReceipt } from "react-icons/fa";

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
const stagger = (d = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

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
const HeartIco = ({ size = 20 }) => (
  <Ico
    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
    size={size}
  />
);
const LockIco = ({ size = 20 }) => (
  <Ico
    d="M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4"
    size={size}
  />
);
const CheckIco = ({ size = 18 }) => (
  <Ico d="M20 6L9 17l-5-5" sw={2.5} size={size} />
);
const ShieldIco = ({ size = 16 }) => (
  <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={size} />
);
const ArrowIco = ({ size = 16 }) => (
  <Ico d="M5 12h14M12 5l7 7-7 7" size={size} sw={2} />
);
const UsersIco = ({ size = 22 }) => (
  <Ico
    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    size={size}
  />
);
const HomeIco = ({ size = 22 }) => (
  <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" size={size} />
);
const MealIco = ({ size = 22 }) => (
  <Ico
    d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
    size={size}
  />
);
const BookIco = ({ size = 22 }) => (
  <Ico
    d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 004 17V5a1 1 0 011-1h14a1 1 0 011 1v12H6.5"
    size={size}
  />
);
const AlertIco = ({ size = 16 }) => (
  <Ico
    d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"
    size={size}
  />
);

// ── Stripe test helpers ───────────────────────────────────────────────────────
function detectBrand(num) {
  const n = num.replace(/\s/g, "");
  if (n.startsWith("4")) return "visa";
  if (/^5[1-5]/.test(n)) return "mastercard";
  if (/^3[47]/.test(n)) return "amex";
  return null;
}
function formatCard(val) {
  return val
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}
function formatExpiry(val) {
  const d = val.replace(/\D/g, "").slice(0, 4);
  if (d.length >= 3) return d.slice(0, 2) + "/" + d.slice(2);
  return d;
}
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const VisaSVG = () => (
  <svg viewBox="0 0 50 16" width="40" height="13">
    <text x="0" y="13" fontSize="14" fontWeight="bold" fill="#1A1F71">
      VISA
    </text>
  </svg>
);
const McSVG = () => (
  <svg viewBox="0 0 38 24" width="34" height="21">
    <circle cx="14" cy="12" r="10" fill="#EB001B" />
    <circle cx="24" cy="12" r="10" fill="#F79E1B" />
    <path
      d="M19 4.8A9.96 9.96 0 0122.6 12 9.96 9.96 0 0119 19.2 9.96 9.96 0 0115.4 12 9.96 9.96 0 0119 4.8z"
      fill="#FF5F00"
    />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const AMOUNTS = [10, 25, 50, 100, 250, 500];

const IMPACT = [
  {
    amount: 10,
    icon: <MealIco />,
    label: "Provides 8 meals",
    desc: "through the Chester County Food Bank",
  },
  {
    amount: 25,
    icon: <BookIco />,
    label: "Funds 1 tutoring session",
    desc: "for a student through the library program",
  },
  {
    amount: 50,
    icon: <HomeIco />,
    label: "Covers 1 night of shelter",
    desc: "at the Chester County Night Shelter",
  },
  {
    amount: 100,
    icon: <UsersIco />,
    label: "Supports 3 families",
    desc: "with emergency food boxes for a week",
  },
  {
    amount: 250,
    icon: <HeartIco />,
    label: "Sponsors a health clinic visit",
    desc: "for someone without insurance",
  },
  {
    amount: 500,
    icon: <HeartIco />,
    label: "Funds a month of outreach",
    desc: "connecting residents to critical services",
  },
];

const GOAL = 25000;
const RAISED = 18340;
const DONORS = 312;

// ── Sub-components ────────────────────────────────────────────────────────────
const inputCls =
  "w-full bg-[#f8faf8] border border-[#e8f5e1] rounded-xl px-4 py-3 text-sm text-[#264653] placeholder-gray-300 outline-none focus:border-[#1B6E4F] transition-colors font-medium";

const FormCard = ({ label, title, children }) => (
  <motion.div
    variants={fadeUp}
    className="bg-white rounded-2xl border border-[#d3efca] shadow-sm overflow-hidden"
  >
    <div className="bg-gradient-to-r from-[#f0f9f4] to-white px-4 sm:px-6 py-3 sm:py-4 border-b border-[#e8f5e1] flex items-center gap-3">
      <span className="w-7 h-7 rounded-lg bg-[#1B6E4F] text-white text-[11px] font-black flex items-center justify-center flex-shrink-0">
        {label}
      </span>
      <h3 className="font-black text-[#264653] text-sm sm:text-base">
        {title}
      </h3>
    </div>
    <div className="p-4 sm:p-6 flex flex-col gap-4">{children}</div>
  </motion.div>
);

const Field = ({ label, required = false, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-bold text-gray-500 tracking-wide">
      {label}
      {required && <span className="text-[#1B6E4F] ml-0.5">*</span>}
    </label>
    {children}
  </div>
);

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DonatePage() {
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [freq, setFreq] = useState("once");

  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [step, setStep] = useState("form"); // "form" | "processing" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const finalAmount = isCustom ? parseFloat(custom) || 0 : amount;
  const brand = detectBrand(card);
  const impactItem = IMPACT.reduce((prev, curr) =>
    Math.abs(curr.amount - finalAmount) < Math.abs(prev.amount - finalAmount)
      ? curr
      : prev,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    if (finalAmount < 1) {
      setErrorMsg("Minimum donation is $1.");
      setStep("error");
      return;
    }
    const raw = card.replace(/\s/g, "");
    if (raw === "4000000000000002") {
      setStep("processing");
      await delay(1800);
      setErrorMsg(
        "Your card was declined. This is a Stripe test card — try 4242 4242 4242 4242.",
      );
      setStep("error");
      return;
    }
    setStep("processing");
    await delay(2200);
    setStep("success");
  };

  const reset = () => {
    setStep("form");
    setCard("");
    setExpiry("");
    setCvc("");
    setName("");
    setEmail("");
    setZip("");
    setAgreed(false);
    setAmount(25);
    setCustom("");
    setIsCustom(false);
    setErrorMsg("");
  };

  const pct = Math.min(100, (RAISED / GOAL) * 100);
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-60px" });

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#1B6E4F] via-[#165c42] to-[#264653] px-4 sm:px-8 md:px-20 pt-12 sm:pt-16 pb-24 sm:pb-28 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="1000" cy="-60" r="340" fill="white" fillOpacity="0.03" />
          <circle cx="-60" cy="420" r="280" fill="#0cc883" fillOpacity="0.06" />
        </svg>

        <motion.div
          variants={stagger(0.11)}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block bg-white/15 text-white/80 text-[11px] font-black tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5 sm:mb-6">
              Support Chester Bridge
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-3 sm:mb-4 text-[#0cc883]"
          >
            <HeartIco size={36} />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-4 sm:mb-5"
          >
            Help us keep every
            <br />
            <span className="text-[#0cc883]">resource free</span> for everyone.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10"
          >
            Chester Bridge runs entirely on community support. Your donation
            keeps the directory free, accurate, and growing for every resident
            who needs it.
          </motion.p>

          {/* Progress bar */}
          <motion.div
            variants={fadeUp}
            className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-6 border border-white/15 text-left"
          >
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-white font-black text-2xl sm:text-3xl">
                  ${RAISED.toLocaleString()}
                </p>
                <p className="text-white/50 text-xs font-semibold mt-0.5">
                  raised of ${GOAL.toLocaleString()} goal
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#0cc883] font-black text-lg sm:text-xl">
                  {DONORS}
                </p>
                <p className="text-white/50 text-xs font-semibold mt-0.5">
                  donors
                </p>
              </div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full rounded-full bg-gradient-to-r from-[#0cc883] to-[#2a9d6e]"
              />
            </div>
            <p className="text-white/40 text-xs mt-2 text-right">
              {pct.toFixed(0)}% of goal reached
            </p>
          </motion.div>
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

      {/* ── MAIN: FORM + SIDEBAR ──────────────────────────────── */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-16 bg-[#F1FAEE]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-10 items-start">
          {/* ── LEFT: DONATION FORM ───────────────────────────── */}
          <div>
            <AnimatePresence mode="wait">
              {/* PROCESSING */}
              {step === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="bg-white rounded-3xl border border-[#d3efca] shadow-sm p-10 sm:p-16 flex flex-col items-center justify-center text-center min-h-[400px] sm:min-h-[500px]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#d3efca] border-t-[#1B6E4F] mb-6 sm:mb-8"
                  />
                  <h3 className="font-black text-[#264653] text-lg sm:text-xl mb-2">
                    Processing donation…
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Securely connecting to Stripe Test Mode
                  </p>
                  <div className="flex items-center gap-2 mt-5 text-xs text-gray-300">
                    <LockIco size={13} /> 256-bit SSL encryption
                  </div>
                </motion.div>
              )}

              {/* SUCCESS */}
              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl border border-[#d3efca] shadow-sm p-8 sm:p-12 flex flex-col items-center text-center min-h-[400px] sm:min-h-[500px] justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-[#d3efca] rounded-full flex items-center justify-center text-[#1B6E4F] mb-5 sm:mb-6"
                  >
                    <CheckIco size={32} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block bg-[#d3efca] text-[#1B6E4F] text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                      Test Mode — No charge made
                    </span>
                    <h2 className="text-[#264653] font-black text-2xl sm:text-3xl mb-3">
                      Thank you! 💚
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mb-2">
                      Your{" "}
                      <strong className="text-[#264653]">
                        ${finalAmount.toFixed(2)}
                      </strong>{" "}
                      {freq === "monthly" ? "monthly donation" : "donation"} was
                      successfully processed in Stripe test mode.
                    </p>
                    <p className="text-gray-300 text-sm mb-6 sm:mb-8">
                      A confirmation receipt would be sent to{" "}
                      <strong className="text-gray-400">{email}</strong> in
                      reality.
                    </p>
                    <div className="bg-[#f0f9f4] rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 text-left border border-[#d3efca]">
                      <p className="text-xs font-black text-[#1B6E4F] uppercase tracking-widest mb-2">
                        Your impact
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#d3efca] rounded-xl flex items-center justify-center text-[#1B6E4F] flex-shrink-0">
                          {impactItem.icon}
                        </div>
                        <div>
                          <p className="font-black text-[#264653] text-sm">
                            {impactItem.label}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {impactItem.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={reset}
                      className="bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white font-bold px-7 sm:px-8 py-3.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(27,110,79,0.28)] flex items-center gap-2 mx-auto"
                    >
                      Make Another Donation <ArrowIco />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}

              {/* ERROR */}
              {step === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-3xl border border-[#fde68a] shadow-sm p-8 sm:p-10 flex flex-col items-center text-center min-h-[260px] justify-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fee2e2] rounded-full flex items-center justify-center text-[#ef4444] mb-4 sm:mb-5">
                    <AlertIco size={26} />
                  </div>
                  <h3 className="font-black text-[#264653] text-lg sm:text-xl mb-2">
                    Payment failed
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 sm:mb-6 max-w-sm">
                    {errorMsg}
                  </p>
                  <button
                    onClick={() => setStep("form")}
                    className="bg-[#d3efca] text-[#1B6E4F] font-bold px-6 py-3 rounded-xl text-sm"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}

              {/* FORM */}
              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:gap-6"
                  >
                    {/* Step 1: Frequency */}
                    <FormCard label="01" title="Donation Frequency">
                      <div className="flex gap-2 sm:gap-3">
                        {[
                          { id: "once", label: "Give Once" },
                          { id: "monthly", label: "Give Monthly 💚" },
                        ].map((f) => (
                          <button
                            type="button"
                            key={f.id}
                            onClick={() => setFreq(f.id)}
                            className={`flex-1 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold border-2 transition-all ${freq === f.id ? "bg-[#1B6E4F] text-white border-[#1B6E4F] shadow-[0_4px_16px_rgba(27,110,79,0.25)]" : "bg-white text-gray-500 border-[#e8f5e1] hover:border-[#1B6E4F]"}`}
                          >
                            {f.label}
                          </button>
                        ))}
                      </div>
                      {freq === "monthly" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-[#d3efca] rounded-xl px-4 py-3 flex items-center gap-2 mt-1"
                        >
                          <HeartIco size={15} />
                          <p className="text-[#1B6E4F] text-xs font-semibold">
                            Monthly donors make up 70% of our sustained funding.
                            Thank you!
                          </p>
                        </motion.div>
                      )}
                    </FormCard>

                    {/* Step 2: Amount */}
                    <FormCard label="02" title="Select Amount">
                      {/* 3-col on mobile, 3-col on sm+ */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {AMOUNTS.map((a) => (
                          <motion.button
                            type="button"
                            key={a}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                              setAmount(a);
                              setIsCustom(false);
                              setCustom("");
                            }}
                            className={`py-2.5 sm:py-3 rounded-xl font-black text-sm sm:text-base border-2 transition-all ${!isCustom && amount === a ? "bg-[#1B6E4F] text-white border-[#1B6E4F] shadow-[0_4px_16px_rgba(27,110,79,0.22)]" : "bg-white text-[#264653] border-[#e8f5e1] hover:border-[#1B6E4F]"}`}
                          >
                            ${a}
                          </motion.button>
                        ))}
                      </div>

                      <div
                        className={`flex items-center gap-3 bg-white border-2 rounded-xl px-4 py-3 transition-colors ${isCustom ? "border-[#1B6E4F]" : "border-[#e8f5e1]"}`}
                      >
                        <span className="text-gray-400 font-black text-lg">
                          $
                        </span>
                        <input
                          value={custom}
                          onChange={(e) => {
                            setCustom(e.target.value.replace(/[^0-9.]/g, ""));
                            setIsCustom(true);
                          }}
                          onFocus={() => setIsCustom(true)}
                          placeholder="Custom amount"
                          className="flex-1 bg-transparent text-[#264653] font-bold text-sm sm:text-base outline-none placeholder-gray-300"
                        />
                        {isCustom && custom && (
                          <span className="text-[#1B6E4F] text-xs font-black">
                            ✓
                          </span>
                        )}
                      </div>

                      {finalAmount >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="bg-[#f0f9f4] rounded-xl px-4 py-3 flex items-center gap-3 border border-[#d3efca] overflow-hidden"
                        >
                          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#d3efca] rounded-lg flex items-center justify-center text-[#1B6E4F] flex-shrink-0">
                            {impactItem.icon}
                          </div>
                          <p className="text-[#264653] text-xs sm:text-sm font-semibold leading-snug">
                            <strong>${finalAmount}</strong> → {impactItem.label}{" "}
                            <span className="text-gray-400 font-normal">
                              {impactItem.desc}
                            </span>
                          </p>
                        </motion.div>
                      )}
                    </FormCard>

                    {/* Step 3: Personal Info */}
                    <FormCard label="03" title="Your Information">
                      {/* Stack on mobile, side-by-side on sm+ */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <Field label="Full name" required>
                          <input
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jane Smith"
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Email address" required>
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="jane@example.com"
                            className={inputCls}
                          />
                        </Field>
                      </div>
                    </FormCard>

                    {/* Step 4: Payment */}
                    <FormCard label="04" title="Payment Details">
                      <div className="bg-[#fef3c7] border border-[#fde68a] rounded-xl px-3 sm:px-4 py-3 mb-2 flex items-start gap-2.5">
                        <AlertIco />
                        <div>
                          <p className="text-[#92400e] font-black text-xs mb-1">
                            Stripe Test Mode — No real charge
                          </p>
                          <p className="text-[#92400e] text-xs leading-relaxed">
                            Use{" "}
                            <code className="bg-[#fde68a] px-1 rounded font-mono">
                              4242 4242 4242 4242
                            </code>{" "}
                            · Any future MM/YY · Any 3-digit CVC
                          </p>
                        </div>
                      </div>

                      <Field label="Card number" required>
                        <div className="relative">
                          <input
                            required
                            value={card}
                            onChange={(e) =>
                              setCard(formatCard(e.target.value))
                            }
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className={`${inputCls} pr-14`}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            {brand === "visa" && <VisaSVG />}
                            {brand === "mastercard" && <McSVG />}
                            {!brand && (
                              <div className="w-8 h-5 bg-gray-100 rounded border border-gray-200" />
                            )}
                          </div>
                        </div>
                      </Field>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <Field label="Expiry date" required>
                          <input
                            required
                            value={expiry}
                            onChange={(e) =>
                              setExpiry(formatExpiry(e.target.value))
                            }
                            placeholder="MM/YY"
                            maxLength={5}
                            className={inputCls}
                          />
                        </Field>
                        <Field label="CVC" required>
                          <input
                            required
                            value={cvc}
                            onChange={(e) =>
                              setCvc(
                                e.target.value.replace(/\D/g, "").slice(0, 4),
                              )
                            }
                            placeholder="•••"
                            maxLength={4}
                            className={inputCls}
                          />
                        </Field>
                      </div>

                      <Field label="Billing ZIP code">
                        <input
                          value={zip}
                          onChange={(e) =>
                            setZip(
                              e.target.value.replace(/\D/g, "").slice(0, 5),
                            )
                          }
                          placeholder="19380"
                          maxLength={5}
                          className={inputCls}
                        />
                      </Field>
                    </FormCard>

                    {/* Agree + Submit */}
                    <div className="bg-white rounded-2xl border border-[#d3efca] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 shadow-sm">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <div
                          onClick={() => setAgreed(!agreed)}
                          className={`w-5 h-5 rounded-md border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${agreed ? "bg-[#1B6E4F] border-[#1B6E4F]" : "border-gray-300 bg-white"}`}
                        >
                          {agreed && <CheckIco size={12} />}
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                          I understand this is a{" "}
                          <strong className="text-[#264653]">
                            Stripe test mode demo
                          </strong>{" "}
                          — no real money will be charged. Realistically, this
                          would process a real donation to support Chester
                          Bridge.
                        </p>
                      </label>

                      <motion.button
                        type="submit"
                        disabled={!agreed || finalAmount < 1}
                        whileHover={
                          agreed && finalAmount >= 1
                            ? {
                                scale: 1.02,
                                boxShadow: "0 8px 32px rgba(27,110,79,0.35)",
                              }
                            : {}
                        }
                        whileTap={
                          agreed && finalAmount >= 1 ? { scale: 0.98 } : {}
                        }
                        className={`w-full py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-3 transition-all ${agreed && finalAmount >= 1 ? "bg-gradient-to-br from-[#1B6E4F] to-[#2a9d6e] text-white shadow-[0_4px_20px_rgba(27,110,79,0.3)] cursor-pointer" : "bg-gray-100 text-gray-300 cursor-not-allowed"}`}
                      >
                        <LockIco size={17} />
                        {freq === "monthly"
                          ? `Donate $${finalAmount || 0}/mo securely`
                          : `Donate $${finalAmount || 0} securely`}
                      </motion.button>

                      <div className="flex items-center justify-center gap-4 sm:gap-5 text-xs text-gray-300 flex-wrap">
                        <span className="flex items-center gap-1">
                          <ShieldIco /> SSL Secured
                        </span>
                        <span className="flex items-center gap-1">
                          <LockIco size={12} /> Stripe Encrypted
                        </span>
                        <span className="flex items-center">
                          <BiTestTube className="text-lg" />
                          &nbsp;Test Mode
                        </span>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
          {/* On mobile: sidebar appears below form. On lg: sticky sidebar beside form. */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 sm:gap-5 lg:sticky lg:top-6"
          >
            {/* Summary card */}
            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-[#1B6E4F] to-[#264653] rounded-2xl p-5 sm:p-6 text-white"
            >
              <p className="text-[#0cc883] text-xs font-black tracking-widest uppercase mb-3 sm:mb-4">
                Donation Summary
              </p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/70 text-sm">
                  {freq === "monthly"
                    ? "Monthly donation"
                    : "One-time donation"}
                </span>
                <span className="text-white font-black text-lg sm:text-xl">
                  ${finalAmount || "—"}
                </span>
              </div>
              {freq === "monthly" && (
                <div className="flex justify-between items-center mb-3 text-xs text-white/50">
                  <span>Annual total</span>
                  <span>${((finalAmount || 0) * 12).toFixed(0)}/year</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-3 mt-3 flex justify-between items-center">
                <span className="text-white/70 text-sm">
                  Total charged today
                </span>
                <span className="text-[#0cc883] font-black text-lg sm:text-xl">
                  ${finalAmount || "0"}
                </span>
              </div>
              <p className="text-white/30 text-[10px] mt-2 text-center">
                Stripe Test Mode — $0 real charge
              </p>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-[#d3efca] p-4 sm:p-5 shadow-sm"
            >
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
                Why donate here?
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: <IoMdLock />,
                    text: "Payments secured by Stripe via bank-level encryption",
                  },
                  {
                    icon: <CiSquareCheck className="text-green-400" />,
                    text: "100% goes to supporting Chester County resources",
                  },
                  {
                    icon: <FaReceipt className="text-blue-400" />,
                    text: "Can be used for tax records",
                  },
                ].map(({ icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-500"
                  >
                    <span className="text-base flex-shrink-0 mt-0.5">
                      {icon}
                    </span>
                    <span className="leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent donors */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-[#d3efca] p-4 sm:p-5 shadow-sm"
            >
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">
                Recent Supporters
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Sarah M.",
                    amount: 50,
                    time: "2 min ago",
                    msg: "Keep up the great work!",
                  },
                  {
                    name: "Anonymous",
                    amount: 100,
                    time: "14 min ago",
                    msg: "",
                  },
                  {
                    name: "James & Linda",
                    amount: 25,
                    time: "1 hr ago",
                    msg: "So glad this exists.",
                  },
                  {
                    name: "Dr. K. Patel",
                    amount: 250,
                    time: "3 hrs ago",
                    msg: "This fills a real need.",
                  },
                ].map(({ name, amount, time, msg }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                      {name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-[#264653] text-xs">
                          {name}
                        </p>
                        <p className="text-[#1B6E4F] font-black text-xs">
                          ${amount}
                        </p>
                      </div>
                      {msg && (
                        <p className="text-gray-400 text-[11px] italic mt-0.5 truncate">
                          "{msg}"
                        </p>
                      )}
                      <p className="text-gray-300 text-[10px] mt-0.5">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stripe branding */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-2 text-gray-300 text-xs py-1"
            >
              <LockIco size={13} />
              <span>Powered by</span>
              <span className="font-black text-[#635BFF]">Stripe</span>
              <span className="bg-[#fef3c7] text-[#d97706] text-[9px] font-black px-1.5 py-0.5 rounded">
                TEST
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── IMPACT SECTION ────────────────────────────────────── */}
      <section
        ref={impactRef}
        className="bg-[#d3efca] px-4 sm:px-8 md:px-20 py-14 sm:py-20"
      >
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate={impactInView ? "show" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#1B6E4F] text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Your Impact
            </span>
            <h2 className="text-[#264653] font-black text-2xl sm:text-3xl md:text-4xl">
              Every dollar makes a difference
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-lg mx-auto">
              Here's exactly where your donation goes — no overhead fluff, just
              direct community impact.
            </p>
          </motion.div>

          {/* 2-col on mobile, 3-col on md+ */}
          <motion.div
            variants={stagger(0.07)}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5"
          >
            {IMPACT.map(({ amount, icon, label, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  boxShadow: "0 16px 40px rgba(27,110,79,0.16)",
                }}
                onClick={() => {
                  setAmount(amount);
                  setIsCustom(false);
                  setCustom("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-white shadow-sm cursor-pointer transition-shadow"
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#d3efca] rounded-xl flex items-center justify-center text-[#1B6E4F] mb-3 sm:mb-4">
                  {icon}
                </div>
                <p className="text-[#1B6E4F] font-black text-lg sm:text-xl mb-0.5">
                  ${amount}
                </p>
                <p className="text-[#264653] font-bold text-xs sm:text-sm mb-1">
                  {label}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed hidden sm:block">
                  {desc}
                </p>
                <p className="text-[#1B6E4F] text-xs font-bold mt-2 sm:mt-3 flex items-center gap-1">
                  Donate ${amount} <ArrowIco />
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
