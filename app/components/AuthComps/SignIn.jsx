// "use client";
// import { UserAuth } from "@/app/context/AuthContext";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaHeart } from "react-icons/fa";

// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { signInUser } = UserAuth();
//   const router = useRouter();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     const { session, error } = await signInUser(email, password); // Use your signIn function

//     if (error) {
//       setError(error); // Set the error message if sign-in fails

//       // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
//       setTimeout(() => {
//         setError("");
//       }, 3000); // 3000 milliseconds = 3 seconds
//     } else {
//       // Redirect or perform any necessary actions after successful sign-in
//       router.push("/dashboard");
//     }
//     if (session && typeof closeModal === "function") closeModal();
//     if (session) {
//       closeModal();
//       setError(""); // Reset the error when there's a session
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20">
//       {/* LEFT SIDE */}
//       <div className="flex-1 hidden md:flex flex-col justify-center pr-12">
//         <h1 className="text-5xl font-black text-white leading-tight">
//           Welcome back,
//           <br />
//           explore your <span className="text-[#0cc883]">saved</span> resources
//         </h1>

//         <p className="mt-6 text-white/70 text-lg max-w-lg">
//           Sign in to access your favorites, reviews, and contributions to the
//           community.
//         </p>

//         <div className="mt-8 space-y-3 text-white/80 text-sm">
//           <p className="flex items-center">
//             <FaHeart className="text-red-500"></FaHeart> &nbsp; View your favorited resources
//           </p>
//           <p>📝 Rate Resources</p>
//           <p>💬 Engage with the community</p>
//           <p>📍 Pick up where you left off</p>
//         </div>
//       </div>

//       {/* FORM */}
//       <div className="flex-1">
//         <form
//           onSubmit={handleSignIn}
//           className="max-w-md w-full mx-auto p-8 md:p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl text-white"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

//           <div className="flex flex-col gap-4">
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               className="p-3 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
//             />

//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               className="p-3 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full mt-6 py-3 rounded-xl bg-[#0cc883] hover:bg-[#0ab374] transition font-semibold"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>

//           {error && (
//             <p className="text-red-400 text-center mt-4 text-sm">{error}</p>
//           )}

//           <p className="text-center text-sm mt-6 text-white/70">
//             Don’t have an account?{" "}
//             <Link href="/SignUp" className="text-[#0cc883] hover:underline">
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//     // <div>
//     //   <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
//     //     <h2 className="font-bold pb-2">Sign in</h2>
//     //     <p>
//     //       Don't have an account yet? <a href="/signup">Sign up</a>
//     //     </p>
//     //     <div className="flex flex-col py-4">
//     //       {/* <label htmlFor="Email">Email</label> */}
//     //       <input
//     //         onChange={(e) => setEmail(e.target.value)}
//     //         className="p-3 mt-2"
//     //         type="email"
//     //         name="email"
//     //         id="email"
//     //         placeholder="Email"
//     //       />
//     //     </div>
//     //     <div className="flex flex-col py-4">
//     //       {/* <label htmlFor="Password">Password</label> */}
//     //       <input
//     //         onChange={(e) => setPassword(e.target.value)}
//     //         className="p-3 mt-2"
//     //         type="password"
//     //         name="password"
//     //         id="password"
//     //         placeholder="Password"
//     //       />
//     //     </div>
//     //     <button className="w-full mt-4">Sign In</button>
//     //     {error && <p className="text-red-600 text-center pt-4">{error}</p>}
//     //   </form>
//     // </div>
//   );
// };

// export default Signin;
"use client";
import { UserAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";

// ── Variants ──────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = (d = 0.09) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

// ── Icons ─────────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 16, sw = 1.8 }) => (
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
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zM12 16v-4M12 8h.01" size={18} />
);
const ShieldIco = () => (
  <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={16} />
);
const UserIco = () => (
  <Ico
    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
    size={16}
  />
);
const CopyIco = () => (
  <Ico
    d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 4h8M8 4a2 2 0 012-2h0a2 2 0 012 2"
    size={14}
  />
);

// ── Credential row ────────────────────────────────────────────────────────────
const CredRow = ({ label, value, onFill }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="flex items-center justify-between gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10">
      <div className="min-w-0">
        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
          {label}
        </p>
        <p className="text-white/80 text-xs font-mono truncate">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 text-white/40 hover:text-[#0cc883] transition-colors"
        title="Copy"
      >
        {copied ? (
          <span className="text-[#0cc883] text-[10px] font-black">✓</span>
        ) : (
          <CopyIco />
        )}
      </button>
    </div>
  );
};

// ── Demo accounts box ─────────────────────────────────────────────────────────
const DemoBox = ({ type, email, password, icon, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: color + "33" }}
          >
            <span style={{ color }}>{icon}</span>
          </div>
          <p className="text-white font-bold text-sm">{type} Account</p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/40 text-xs"
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-2">
              <CredRow label="Email" value={email} />
              <CredRow label="Password" value={password} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// SIGN IN PAGE
// ══════════════════════════════════════════════════════════════════════════════
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInUser } = UserAuth();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { session, error } = await signInUser(email, password);
    setLoading(false);
    if (error) {
      setError(error);
      setTimeout(() => setError(""), 4000);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0cc883]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/4 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      {/* ── LEFT PANEL ────────────────────────────────────────────────────── */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-20 relative z-10"
      >
        <motion.div variants={fadeUp} className="mb-8 lg:mb-10">
          <p className="inline-block bg-white/15 text-white/80 text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5">
            Chester Bridge
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Welcome back,
            <br />
            explore your <span className="text-[#0cc883]">saved</span> resources
          </h1>
          <p className="mt-4 text-white/60 text-base lg:text-lg max-w-md">
            Sign in to access your favorites, reviews, and contributions to the
            community.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3 mb-8 lg:mb-10"
        >
          {[
            {
              ico: <FaHeart className="text-red-400 text-sm" />,
              text: "View your favorited resources",
            },
            { ico: <CgNotes></CgNotes>, text: "Comment on resources" },
            {
              ico: <FaMapPin className="text-red-500"></FaMapPin>,
              text: "Pick up where you left off",
            },
          ].map(({ ico, text }, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="flex items-center gap-3 text-white/70 text-sm font-medium"
            >
              <span className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
                {ico}
              </span>
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* ── TSA DEMO CREDENTIALS BOX ──────────────────────────────────── */}
        <motion.div variants={fadeUp} className="max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-[#0cc883]">
              <InfoIco />
            </div>
            <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase">
              TSA Judge Demo — Test Accounts
            </p>
          </div>
          <p className="text-white/50 text-xs leading-relaxed mb-4">
            Use these pre-made accounts to explore the platform, or{" "}
            <Link
              href="/SignUp"
              className="text-[#0cc883] hover:underline font-semibold"
            >
              create your own account
            </Link>{" "}
            — it takes under a minute and you'll get the full experience.
          </p>
          <div className="flex flex-col gap-2">
            <DemoBox
              type="Admin"
              email="chesterbridgetsa@gmail.com"
              password="admin123"
              icon={<ShieldIco />}
              color="#0cc883"
            />
            <DemoBox
              type="User"
              email="communitymember@gmail.com"
              password="member123"
              icon={<UserIco />}
              color="#3b82f6"
            />
          </div>
          <p className="text-white/30 text-[10px] leading-relaxed mt-3">
            Admin accounts have access to the admin panel and can manage
            submitted inquiries. User accounts can save resources and submit
            inquiries from the About page.
          </p>
        </motion.div>
      </motion.div>

      {/* ── RIGHT PANEL / FORM ────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-10 lg:py-20 relative z-10">
        <motion.form
          onSubmit={handleSignIn}
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
          className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-7 sm:p-10 text-white"
        >
          <motion.div variants={fadeUp} className="mb-7">
            <h2 className="text-2xl sm:text-3xl font-black text-center">
              Sign In
            </h2>
            <p className="text-white/50 text-sm text-center mt-1">
              Chester Bridge · Chester County, PA
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your@email.com"
                required
                className="p-3.5 rounded-xl bg-white/90 text-[#264653] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0cc883] font-semibold text-sm transition-all"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
              <label className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                required
                className="p-3.5 rounded-xl bg-white/90 text-[#264653] placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0cc883] font-semibold text-sm transition-all"
              />
            </motion.div>
          </div>

          <motion.button
            variants={fadeUp}
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-6 py-3.5 rounded-xl bg-[#0cc883] hover:bg-[#0ab374] transition font-black text-base shadow-[0_4px_20px_rgba(12,200,131,0.4)] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                />
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </motion.button>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400 text-center mt-4 text-sm font-semibold bg-red-400/10 py-2 px-3 rounded-xl border border-red-400/20"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.p
            variants={fadeUp}
            className="text-center text-sm mt-6 text-white/60"
          >
            Don't have an account?{" "}
            <Link
              href="/SignUp"
              className="text-[#0cc883] hover:underline font-bold"
            >
              Sign up free
            </Link>
          </motion.p>
        </motion.form>
      </div>
    </div>
  );
};

export default Signin;
