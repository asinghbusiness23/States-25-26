"use client";
import { UserAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { session, signUpNewUser } = UserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password, fName, lName); // Call context function

      if (result.success) {
        router.push("/dashboard"); // Navigate to dashboard on success
        console.log("success!!!");
      } else {
        setError(result.error?.message || result.error);
        console.log(error);
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20">
      {/* LEFT SIDE */}
      <div className="flex-1 hidden md:flex flex-col justify-center pr-12">
        <h1 className="text-6xl font-black text-white leading-tight">
          Discover, save,
          <br />
          and share the <span className="text-[#0cc883]">best</span> resources
        </h1>

        <p className="mt-6 text-white/70 text-lg max-w-lg">
          Create an account to favorite places, write reviews, and contribute to
          your community.
        </p>

        <div className="mt-8 space-y-3 text-white/80 text-sm">
          <p>⭐ Save your favorite spots</p>
          <p>📝 Write reviews & blogs</p>
          <p>💬 Comment & engage</p>
          <p>🌍 Discover local gems</p>
        </div>
      </div>

      {/* FORM */}
      <div className="flex-1">
        <form
          onSubmit={handleSignUp}
          className="max-w-lg w-full mx-auto p-8 md:p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex w-full gap-4 justify-between">
              <input
                onChange={(e) => setFName(e.target.value)}
                type=""
                placeholder="First Name"
                className="p-3 max-w-52 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
              />{" "}
              <input
                onChange={(e) => setLName(e.target.value)}
                placeholder="Last Name"
                className="p-3 max-w-52 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
              />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="p-3 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-3 rounded-xl bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#0cc883]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 rounded-xl bg-[#0cc883] hover:bg-[#0ab374] transition font-semibold"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {error && (
            <p className="text-red-400 text-center mt-4 text-sm">{error}</p>
          )}

          <p className="text-center text-sm mt-6 text-white/70">
            Already have an account?{" "}
            <a href="/SignIn" className="text-[#0cc883] hover:underline">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
    // <div className="flex bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 pt-20 pb-28 overflow-hidden">
    //   <div className="flex-1">
    //     <motion.h1
    //       variants={fadeUp}
    //       className="text-4xl md:text-6xl font-black text-white leading-[1.08] tracking-tight"
    //     >
    //       Discover, save,
    //       <br />
    //       and share the <span className="text-[#0cc883]">Best </span>
    //       local resources
    //     </motion.h1>

    //     <motion.p
    //       variants={fadeUp}
    //       className="mt-8 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
    //     >
    //       Create an account to favorite places, write reviews, and contribute to
    //       the community.{" "}
    //     </motion.p>
    //   </div>
    //   <div className="flex-1">
    //     <form
    //       onSubmit={handleSignUp}
    //       className="max-w-md m-auto py-20 bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden px-5 rounded-2xl shadow-lg"
    //     >
    //       {" "}
    //       <h2 className="font-bold pb-2 text-white text-3xl">Sign up today!</h2>
    //       <div className="flex flex-col py-4">
    //         <label htmlFor="Email">Email</label>
    //         <input
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="p-3 mt-2 bg-white rounded-xl"
    //           type="email"
    //           name="email"
    //           id="email"
    //           placeholder="Email"
    //         />
    //       </div>
    //       <div className="flex flex-col py-4">
    //         <label htmlFor="Password">Password</label>
    //         <input
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="p-3 mt-2 bg-white rounded-xl"
    //           type="password"
    //           name="password"
    //           id="password"
    //           placeholder="Password"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         disabled={loading}
    //         className="w-full mt-4 cursor-pointer bg-[#0cc883]"
    //       >
    //         Sign Up
    //       </button>
    //       {error && <p className="text-red-600 text-center pt-4 ">{error}</p>}
    //       <p>
    //         Already have an account? <a href="/SignIn">Sign in</a>
    //       </p>
    //     </form>
    //   </div>
    // </div>
  );
};

export default SignUp;

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
