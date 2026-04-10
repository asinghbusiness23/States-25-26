// import React from "react";

// const Hero = () => {
//   return (
//     <div className="flex w-full py-20 items-center h-[90vh] overflow-hidden">
//       <div className="flex flex-col flex-1 pl-20">
//         <h1 className="text-5xl/17 font-bold tracking-wide">
//           Bridging the<br></br>{" "}
//           <span className="text-[#1B6E4F] italic">Gap </span> From Services
//           <br></br> to People.
//         </h1>
//         <p className="w-100 text-gray-600 mt-5">
//           Your local gateway to essential services, upcoming community events,
//           and opportuniites to make a difference in Chester County
//         </p>
//         <div className="flex mt-7 gap-4">
//           <a
//             href=""
//             className="text-white px-10 py-3.5 bg-linear-to-br from-[#1B6E4F] to-[#0cc883] w-fit rounded-2xl font-semibold"
//           >
//             Find Resources  &nbsp; &#8594;
//           </a>
//           <a
//             href=""
//             className="text-[#1B6E4F] px-10 py-3.5 bg-gray-300 w-fit rounded-2xl w font-semibold"
//           >
//             Get Involved
//           </a>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center rotate-4">
//         <div className="w-130">
//           <img
//             className="rounded-3xl"
//             src="https://vista.today/wp-content/uploads/2025/05/Greencastle-1.jpg.webp"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Three real community/Chester County photos from Unsplash (free to use)
const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
    alt: "Volunteers at a community food drive",
    label: "Food Assistance",
    rotate: "-3deg",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    alt: "Chester County community gathering",
    label: "Community Events",
    rotate: "1.5deg",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
    alt: "People receiving health services",
    label: "Health & Support",
    rotate: "-1deg",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const photoVariant = (i) => ({
  hidden: { opacity: 0, y: 48 + i * 12, rotate: 0, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    rotate: PHOTOS[i].rotate,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3 + i * 0.15,
    },
  },
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] overflow-hidden flex items-center">
      {/* ── Main layout ────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-350 mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-16 py-24 lg:py-0 min-h-screen lg:min-h-0 lg:h-screen">
        {/* ── LEFT: Text ─────────────────────────────────────── */}
        <motion.div
          className="flex-1 flex flex-col justify-center max-w-xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-black leading-[1.06] tracking-tight text-white"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Bridging the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#0cc883] italic">Gap</span>
              {/* underline squiggle */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 80 8"
                fill="none"
                preserveAspectRatio="none"
                style={{ height: 8 }}
              >
                <motion.path
                  d="M2 5 Q20 1 40 5 Q60 9 78 4"
                  stroke="#0cc883"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
                />
              </motion.svg>
            </span>{" "}
            From
            <br />
            Services to People.
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="mt-7 text-white/70 text-lg leading-[1.75] max-w-md"
          >
            Your local gateway to essential services, upcoming community events,
            and opportunities to make a difference in Chester County.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <Link href="/resources">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 10px 32px rgba(12,200,131,0.38)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#1B6E4F] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-[0_4px_20px_rgba(27,110,79,0.32)] tracking-wide"
              >
                Find Resources
              </motion.button>
            </Link>
            <Link href="/about#form">
              {" "}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-[#1B6E4F] font-bold text-sm px-8 py-4 rounded-2xl border-2 border-[#c8e6d4] hover:border-[#1B6E4F] transition-colors"
              >
                Submit A Resource
              </motion.button>
            </Link>
          </motion.div>
          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-8 mt-12 pt-10 border-t border-[#d3efca]"
          >
            {[
              { n: "120+", label: "Resources" },
              { n: "12K+", label: "Helped" },
              { n: "Free", label: "Always" },
            ].map(({ n, label }) => (
              <div key={label}>
                <p className="text-2xl font-black text-white leading-none">
                  {n}
                </p>
                <p className="text-xs text-[#7aaa91] font-semibold mt-1 tracking-wide uppercase">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3 staggered photos ──────────────────────── */}
        <div className="flex-1 relative w-full max-w-130 h-130 lg:h-screen max-h-170 shrink-0 max-[1100px]:hidden">
          {/* Photo 1 — large, left, slightly behind */}
          <motion.div
            variants={photoVariant(0)}
            initial="hidden"
            animate="show"
            whileHover={{
              scale: 1.03,
              zIndex: 30,
              transition: { duration: 0.3 },
            }}
            className="absolute left-0 top-[8%] w-[54%] z-10 cursor-pointer"
            style={{ filter: "drop-shadow(0 20px 40px rgba(27,110,79,0.22))" }}
          >
            <div
              className="rounded-2xl overflow-hidden border-4 border-white"
              style={{ transform: `rotate(${PHOTOS[0].rotate})` }}
            >
              <img
                src={PHOTOS[0].src}
                alt={PHOTOS[0].alt}
                className="w-full aspect-4/5 object-cover block"
              />
              {/* Label chip */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <span className="text-[11px] font-black text-[#264653] tracking-wide">
                  {PHOTOS[0].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Photo 2 — tall, right-center, front */}
          <motion.div
            variants={photoVariant(1)}
            initial="hidden"
            animate="show"
            whileHover={{
              scale: 1.03,
              zIndex: 30,
              transition: { duration: 0.3 },
            }}
            className="absolute right-0 top-[4%] w-[52%] z-20 cursor-pointer"
            style={{ filter: "drop-shadow(0 24px 48px rgba(27,110,79,0.28))" }}
          >
            <div
              className="rounded-2xl overflow-hidden border-4 border-white"
              style={{ transform: `rotate(${PHOTOS[1].rotate})` }}
            >
              <img
                src={PHOTOS[1].src}
                alt={PHOTOS[1].alt}
                className="w-full aspect-[3/4] object-cover block"
              />
              <div
                className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm
                              rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                <span className="text-[11px] font-black text-[#264653] tracking-wide">
                  {PHOTOS[1].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Photo 3 — wide, bottom-center, in front */}
          <motion.div
            variants={photoVariant(2)}
            initial="hidden"
            animate="show"
            whileHover={{
              scale: 1.03,
              zIndex: 30,
              transition: { duration: 0.3 },
            }}
            className="absolute left-[10%] bottom-[4%] w-[70%] z-30 cursor-pointer"
            style={{ filter: "drop-shadow(0 20px 44px rgba(27,110,79,0.26))" }}
          >
            <div
              className="rounded-2xl overflow-hidden border-4 border-white"
              style={{ transform: `rotate(${PHOTOS[2].rotate})` }}
            >
              <img
                src={PHOTOS[2].src}
                alt={PHOTOS[2].alt}
                className="w-full aspect-[16/10] object-cover block"
              />
              <div
                className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm
                              rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#ec4899]" />
                <span className="text-[11px] font-black text-[#264653] tracking-wide">
                  {PHOTOS[2].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating badge — hovers over the photo cluster */}
          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[1%] left-[28%] z-40 bg-white rounded-2xl px-4 py-3
                       shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#e8f5e1]
                       flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-[#d3efca] flex items-center justify-center text-lg">
              📍
            </div>
            <div>
              <p className="font-black text-[#264653] text-xs leading-none">
                Chester County
              </p>
              <p className="text-[10px] text-[#7aaa91] mt-0.5">
                Est. 1682
              </p>
            </div>
          </motion.div>

          {/* Green accent circle behind photos */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full -z-10 opacity-20"
            style={{
              background:
                "radial-gradient(circle, #0cc883 0%, transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
