// // "use client";
// // import React from "react";
// // import { useRouter } from "next/navigation";
// // import { UserAuth } from "@/app/context/AuthContext";
// // // import { supabase } from "../supabaseClient";

// // const Admin = () => {
// //   const { session, signOut } = UserAuth();
// //   const router = useRouter();

// //   const user = session?.user;

// //   const handleSignOut = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signOut();
// //       router.push("/SignIn");
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 py-16 text-white">
// //       {/* HEADER */}
// //       <div className="max-w-6xl mx-auto mb-12">
// //         <h1 className="text-4xl md:text-5xl font-black">
// //           Welcome back,
// //           <span className="text-[#0cc883]">
// //             {" "}
// //             Admin
// //           </span>
// //         </h1>
// //         <p className="text-white/70 mt-3">
// //           Manage your activity, saved resources, and contributions.
// //         </p>
// //       </div>

// //       {/* GRID */}
// //       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
// //         {/* PROFILE CARD */}
// //         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
// //           <h2 className="text-xl font-semibold mb-4">Profile</h2>
// //           <p className="text-white/70 text-sm">Email</p>
// //           <p className="mb-3">{user?.email}</p>

// //           <p className="text-white/70 text-sm">Name</p>
// //           <p>
// //             {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
// //           </p>
// //         </div>

// //         {/* SAVED RESOURCES */}
// //         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
// //           <h2 className="text-xl font-semibold mb-4">Saved Resources</h2>
// //           <p className="text-white/70 text-sm">
// //             View and manage your bookmarked resources.
// //           </p>

// //           <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
// //             View Saved
// //           </button>
// //         </div>

// //         {/* CONTRIBUTIONS */}
// //         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
// //           <h2 className="text-xl font-semibold mb-4">Your Contributions</h2>
// //           <p className="text-white/70 text-sm">
// //             Blogs, comments, and testimonials you’ve submitted.
// //           </p>

// //           <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
// //             View Activity
// //           </button>
// //         </div>
// //       </div>

// //       {/* SIGN OUT */}
// //       <div className="max-w-6xl mx-auto mt-12">
// //         <button
// //           onClick={handleSignOut}
// //           className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-xl font-semibold"
// //         >
// //           Sign Out
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Admin;
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "@/app/context/AuthContext";
// import { supabase } from "@/app/supabaseClient";

// const Admin = () => {
//   const { session, signOut } = UserAuth();
//   const router = useRouter();
//   const user = session?.user;

//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     const { data, error } = await supabase
//       .from("inquiry_submissions") // your table name
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) console.error(error);
//     else setRequests(data);
//   };

//   const handleSignOut = async (e) => {
//     e.preventDefault();
//     await signOut();
//     router.push("/SignIn");
//   };

//   const handleResolve = async (id) => {
//     const { error } = await supabase
//       .from("inquiry_submissions")
//       .delete()
//       .eq("id", id);

//     if (error) {
//       console.error(error);
//     } else {
//       // remove from UI instantly
//       setRequests((prev) => prev.filter((req) => req.id !== id));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 py-16 text-white">
//       {/* HEADER */}
//       <div className="max-w-6xl mx-auto mb-12">
//         <h1 className="text-4xl md:text-5xl font-black">
//           Welcome back, <span className="text-[#0cc883]">Admin</span>
//         </h1>
//         <p className="text-white/70 mt-3">
//           Review and manage submitted inquiries.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
//         {/* PROFILE */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Profile</h2>
//           <p className="text-white/70 text-sm">Email</p>
//           <p className="mb-3">{user?.email}</p>

//           <p className="text-white/70 text-sm">Name</p>
//           <p>
//             {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
//           </p>
//         </div>

//         {/* INQUIRIES */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Submitted Inquiries</h2>

//           <div className="max-h-100 overflow-y-auto space-y-4">
//             {requests.length === 0 ? (
//               <p className="text-white/60 text-sm">No inquiries found.</p>
//             ) : (
//               requests.map((req) => (
//                 <div
//                   key={req.id}
//                   className="bg-white/5 p-4 rounded-lg border border-white/10"
//                 >
//                   <div className="flex justify-between">
//                     <p className="text-sm text-white/70">{req.email}</p>
//                     <p className="text-sm text-white/70">{req.name}</p>
//                   </div>

//                   <p className="font-semibold">
//                     {req.type == "submit"
//                       ? "Resource Submission"
//                       : req.type == "report"
//                         ? "Issue Report"
//                         : "General"}
//                   </p>
//                   <p className="text-sm mt-1">{req.message}</p>
//                   <button
//                     onClick={() => handleResolve(req.id)}
//                     className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold"
//                   >
//                     Resolve
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/* SIGN OUT */}
//       <div className="max-w-6xl mx-auto mt-12">
//         <button
//           onClick={handleSignOut}
//           className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-xl font-semibold"
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Admin;
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/AuthContext";
import { supabase } from "@/app/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";

// ── Variants ──────────────────────────────────────────────────────────────────
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
const ShieldIco = () => (
  <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={20} />
);
const InboxIco = () => (
  <Ico
    d="M22 12h-6l-2 3H10l-2-3H2M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"
    size={20}
  />
);
const UserIco = () => (
  <Ico
    d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 100 8 4 4 0 000-8z"
    size={20}
  />
);
const LogOutIco = () => (
  <Ico
    d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
    size={18}
  />
);
const CheckIco = () => <Ico d="M20 6L9 17l-5-5" size={14} sw={2.5} />;
const InfoIco = () => (
  <Ico d="M12 2a10 10 0 100 20A10 10 0 0012 2zM12 16v-4M12 8h.01" size={20} />
);
const GridIco = () => (
  <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" size={18} />
);
const ArrowIco = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={15} sw={2} />;
const AlertIco = () => (
  <Ico
    d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"
    size={20}
    sw={2}
  />
);

// ── Stat card ─────────────────────────────────────────────────────────────────
const StatCard = ({ icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/15 flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#0cc883]">
      {icon}
    </div>
    <div>
      <p className="text-white font-black text-xl leading-none">{value}</p>
      <p className="text-white/50 text-xs font-semibold mt-0.5">{label}</p>
    </div>
  </div>
);

// ── Tab ───────────────────────────────────────────────────────────────────────
const Tab = ({ icon, label, active, onClick, badge = null }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
      active
        ? "bg-white text-[#1B6E4F] shadow-md"
        : "text-white/60 hover:text-white hover:bg-white/10"
    }`}
  >
    {icon} {label}
    {badge != null && (
      <span
        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
          active ? "bg-[#d3efca] text-[#1B6E4F]" : "bg-white/20 text-white"
        }`}
      >
        {badge}
      </span>
    )}
  </button>
);

// ── Type badge ────────────────────────────────────────────────────────────────
const typeMeta = (type) => {
  if (type === "submit")
    return { label: "Resource Submission", color: "#0cc883", bg: "#d3efca" };
  if (type === "report")
    return { label: "Issue Report", color: "#ef4444", bg: "#fee2e2" };
  return { label: "General Inquiry", color: "#3b82f6", bg: "#dbeafe" };
};

// ══════════════════════════════════════════════════════════════════════════════
// ADMIN PAGE
// ══════════════════════════════════════════════════════════════════════════════
const Admin = () => {
  const { session, signOut } = UserAuth();
  const router = useRouter();
  const user = session?.user;

  const [requests, setRequests] = useState([]);
  const [loadingReqs, setLoadingReqs] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [signOutConfirm, setSignOutConfirm] = useState(false);
  const [resolvingId, setResolvingId] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoadingReqs(true);
    const { data, error } = await supabase
      .from("inquiry_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRequests(data || []);
    setLoadingReqs(false);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    router.push("/SignIn");
  };

  const handleResolve = async (id) => {
    setResolvingId(id);
    const { error } = await supabase
      .from("inquiry_submissions")
      .delete()
      .eq("id", id);
    if (!error) setRequests((prev) => prev.filter((r) => r.id !== id));
    setResolvingId(null);
  };

  const initials =
    `${user?.user_metadata?.first_name?.[0] || ""}${user?.user_metadata?.last_name?.[0] || "A"}`.toUpperCase();

  const submits = requests.filter((r) => r.type === "submit");
  const reports = requests.filter((r) => r.type === "report");
  const general = requests.filter(
    (r) => r.type !== "submit" && r.type !== "report",
  );

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10">
        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10"
        >
          <div className="flex items-center gap-5">
            <motion.div
              variants={fadeUp}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white font-black text-xl shadow-[0_4px_20px_rgba(12,200,131,0.35)] flex-shrink-0"
            >
              {initials}
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-white/50 text-sm font-semibold">Admin Panel</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                Welcome, <span className="text-[#0cc883]">Admin</span>
              </h1>
              <p className="text-white/50 text-sm mt-0.5">{user?.email}</p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="flex items-center gap-3">
            {!signOutConfirm ? (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSignOutConfirm(true)}
                className="flex items-center gap-2 bg-white/10 backdrop-blur text-white/80 font-bold text-sm px-5 py-3 rounded-xl border border-white/15 hover:bg-white/20 transition-colors"
              >
                <LogOutIco /> Sign Out
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 flex-wrap"
              >
                <p className="text-white/70 text-sm font-semibold">
                  Are you sure?
                </p>
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-red-600 transition-colors"
                >
                  Yes, sign out
                </button>
                <button
                  onClick={() => setSignOutConfirm(false)}
                  className="bg-white/15 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-white/25 transition-colors"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* ── TSA JUDGE NOTICE ────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 bg-white/10 backdrop-blur-xl border border-[#0cc883]/40 rounded-3xl p-5 sm:p-6 shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0cc883]/20 flex items-center justify-center text-[#0cc883] flex-shrink-0 mt-0.5">
              <InfoIco />
            </div>
            <div>
              <p className="text-[#0cc883] text-[10px] font-black tracking-widest uppercase mb-1">
                TSA Judge Demo Note
              </p>
              <h3 className="text-white font-black text-base sm:text-lg mb-2">
                About This Admin Panel
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                In a full production environment, an admin would be able to
                review incoming resource submissions and issue reports, update
                the live resource database on the backend, and then mark each
                item as resolved — removing it from this queue. This demo
                simulates that workflow end-to-end.
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                <span className="text-white font-bold">
                  To try it yourself:
                </span>{" "}
                Log into a regular user account (credentials on the Sign In
                page), visit the{" "}
                <span className="text-[#0cc883] font-bold">About page</span>,
                and submit an inquiry using the contact form. It will appear
                here in real time. You can then resolve it using the button on
                each card.
              </p>
              <div className="flex items-center gap-2 flex-wrap mt-2 mb-3">
                <span className="text-white/40 text-xs">
                  Submit an inquiry, then come back here to resolve it
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                <span className="text-white font-bold">*IMPORTANT INFO*:</span>{" "}
                When navigating the website while logged in, be sure not to
                click out of the page. If you do accidentally click out of the
                page, please refresh and open a page other than the Account Page
                or Resources Page as in order to get real time updates using
                Supabase, there was a paywall for real time updating
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── STAT STRIP ──────────────────────────────────────────────────── */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          {[
            {
              icon: <InboxIco />,
              value: requests.length,
              label: "Total Inquiries",
            },
            {
              icon: <AlertIco />,
              value: reports.length,
              label: "Issue Reports",
            },
            {
              icon: <GridIco />,
              value: submits.length,
              label: "Resource Submissions",
            },
            { icon: <UserIco />, value: "Active", label: "Admin Status" },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <StatCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── TAB NAV ─────────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="flex gap-2 flex-wrap mb-8 bg-white/5 backdrop-blur rounded-2xl p-1.5 border border-white/10 w-fit"
        >
          <Tab
            icon={<GridIco />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <Tab
            icon={<InboxIco />}
            label="Inquiries"
            active={activeTab === "inquiries"}
            onClick={() => setActiveTab("inquiries")}
            badge={requests.length}
          />
          <Tab
            icon={<UserIco />}
            label="Profile"
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
          />
        </motion.div>

        {/* ── CONTENT ─────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {/* OVERVIEW ────────────────────────────────────────────────────── */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              variants={stagger(0.09)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {/* Profile card */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-5"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <UserIco />
                  </div>
                  <h2 className="text-white font-black text-lg">Profile</h2>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Email", value: user?.email },
                    {
                      label: "Name",
                      value:
                        `${user?.user_metadata?.first_name || ""} ${user?.user_metadata?.last_name || ""}`.trim() ||
                        "Admin",
                    },
                    { label: "Role", value: "Administrator" },
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
                      className="bg-white/10 rounded-xl px-4 py-3"
                    >
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
                        {label}
                      </p>
                      <p className="text-white font-semibold text-sm truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inquiries preview */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <InboxIco />
                  </div>
                  <h2 className="text-white font-black text-lg">Inquiries</h2>
                </div>
                {requests.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-6">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white/30 mb-3">
                      <InboxIco />
                    </div>
                    <p className="text-white/50 text-sm">
                      No pending inquiries
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      They'll appear here when submitted
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 flex-1">
                    {requests.slice(0, 3).map((r) => {
                      const tm = typeMeta(r.type);
                      return (
                        <div
                          key={r.id}
                          className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: tm.color }}
                          />
                          <p className="text-white text-sm font-semibold truncate flex-1">
                            {r.name || r.email}
                          </p>
                          <span
                            className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0"
                            style={{ background: tm.bg, color: tm.color }}
                          >
                            {r.type || "general"}
                          </span>
                        </div>
                      );
                    })}
                    {requests.length > 3 && (
                      <p className="text-white/40 text-xs text-center mt-1">
                        +{requests.length - 3} more
                      </p>
                    )}
                  </div>
                )}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab("inquiries")}
                  className="w-full bg-[#0cc883] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(12,200,131,0.3)] mt-auto"
                >
                  Manage All Inquiries <ArrowIco />
                </motion.button>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                variants={fadeUp}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-[#0cc883]">
                    <ShieldIco />
                  </div>
                  <h2 className="text-white font-black text-lg">
                    Queue Summary
                  </h2>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  {[
                    {
                      label: "Resource Submissions",
                      value: submits.length,
                      color: "#0cc883",
                    },
                    {
                      label: "Issue Reports",
                      value: reports.length,
                      color: "#ef4444",
                    },
                    {
                      label: "General Inquiries",
                      value: general.length,
                      color: "#3b82f6",
                    },
                  ].map(({ label, value, color }) => (
                    <div
                      key={label}
                      className="bg-white/10 rounded-xl px-4 py-3 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: color }}
                        />
                        <p className="text-white/70 text-sm font-semibold">
                          {label}
                        </p>
                      </div>
                      <span className="text-white font-black text-lg">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/10 mt-auto">
                  <p className="text-white/40 text-xs leading-relaxed">
                    Resolve items by clicking the{" "}
                    <span className="text-[#0cc883] font-bold">Resolve</span>{" "}
                    button in the Inquiries tab after reviewing them.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* INQUIRIES ───────────────────────────────────────────────────── */}
          {activeTab === "inquiries" && (
            <motion.div
              key="inquiries"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-6">
                <h2 className="text-white font-black text-2xl">
                  Submitted Inquiries
                </h2>
                <p className="text-white/50 text-sm mt-0.5">
                  {requests.length} pending item
                  {requests.length !== 1 ? "s" : ""} in queue
                </p>
              </div>

              {loadingReqs ? (
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
              ) : requests.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center bg-white/5 rounded-3xl border border-white/10"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white/30 mb-5">
                    <InboxIco />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">
                    All clear!
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    No pending inquiries. Submissions from the About page will
                    appear here.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  variants={stagger(0.07)}
                  initial="hidden"
                  animate="show"
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <AnimatePresence>
                    {requests.map((req) => {
                      const tm = typeMeta(req.type);
                      return (
                        <motion.div
                          key={req.id}
                          layout
                          variants={fadeUp}
                          exit={{
                            opacity: 0,
                            scale: 0.95,
                            transition: { duration: 0.2 },
                          }}
                          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex flex-col gap-3 shadow-xl group"
                        >
                          {/* Top bar */}
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                              style={{ background: tm.bg, color: tm.color }}
                            >
                              {tm.label}
                            </span>
                            {req.created_at && (
                              <span className="text-white/30 text-[10px] font-semibold flex-shrink-0">
                                {new Date(req.created_at).toLocaleDateString(
                                  "en-US",
                                  { month: "short", day: "numeric" },
                                )}
                              </span>
                            )}
                          </div>

                          {/* Sender info */}
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white/60 font-black text-sm flex-shrink-0">
                              {(
                                req.name?.[0] ||
                                req.email?.[0] ||
                                "?"
                              ).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <p className="text-white font-bold text-sm truncate">
                                {req.name || "Anonymous"}
                              </p>
                              <p className="text-white/50 text-xs truncate">
                                {req.email}
                              </p>
                            </div>
                          </div>

                          {/* Message */}
                          <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/10 flex-1">
                            <p className="text-white/80 text-sm leading-relaxed">
                              {req.message}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 mt-1">
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => handleResolve(req.id)}
                              disabled={resolvingId === req.id}
                              className="flex-1 flex items-center justify-center gap-2 bg-[#0cc883] text-white font-bold text-sm py-2.5 rounded-xl shadow-[0_4px_16px_rgba(12,200,131,0.3)] disabled:opacity-60 transition-opacity"
                            >
                              {resolvingId === req.id ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                                />
                              ) : (
                                <>
                                  <CheckIco /> Resolve
                                </>
                              )}
                            </motion.button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* PROFILE ─────────────────────────────────────────────────────── */}
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-xl"
            >
              <div className="mb-6">
                <h2 className="text-white font-black text-2xl">
                  Admin Profile
                </h2>
                <p className="text-white/50 text-sm mt-0.5">
                  Your account details
                </p>
              </div>
              <motion.div
                variants={stagger(0.08)}
                initial="hidden"
                animate="show"
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-4"
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-5 mb-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0cc883] to-[#1B6E4F] flex items-center justify-center text-white font-black text-2xl shadow-[0_4px_20px_rgba(12,200,131,0.35)]">
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-black text-xl">
                      {user?.user_metadata?.first_name}{" "}
                      {user?.user_metadata?.last_name}
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0cc883]/20 text-[#0cc883]">
                      Administrator
                    </span>
                  </div>
                </motion.div>
                {[
                  { label: "Email", value: user?.email },
                  { label: "User ID", value: user?.id?.slice(0, 18) + "..." },
                  {
                    label: "Member since",
                    value: user?.created_at
                      ? new Date(user.created_at).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "—",
                  },
                ].map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="bg-white/10 rounded-xl px-4 py-3"
                  >
                    <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
