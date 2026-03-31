// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "@/app/context/AuthContext";
// // import { supabase } from "../supabaseClient";

// const Admin = () => {
//   const { session, signOut } = UserAuth();
//   const router = useRouter();

//   const user = session?.user;

//   const handleSignOut = async (e) => {
//     e.preventDefault();
//     try {
//       await signOut();
//       router.push("/SignIn");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 py-16 text-white">
//       {/* HEADER */}
//       <div className="max-w-6xl mx-auto mb-12">
//         <h1 className="text-4xl md:text-5xl font-black">
//           Welcome back,
//           <span className="text-[#0cc883]">
//             {" "}
//             Admin
//           </span>
//         </h1>
//         <p className="text-white/70 mt-3">
//           Manage your activity, saved resources, and contributions.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
//         {/* PROFILE CARD */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Profile</h2>
//           <p className="text-white/70 text-sm">Email</p>
//           <p className="mb-3">{user?.email}</p>

//           <p className="text-white/70 text-sm">Name</p>
//           <p>
//             {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
//           </p>
//         </div>

//         {/* SAVED RESOURCES */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Saved Resources</h2>
//           <p className="text-white/70 text-sm">
//             View and manage your bookmarked resources.
//           </p>

//           <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
//             View Saved
//           </button>
//         </div>

//         {/* CONTRIBUTIONS */}
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
//           <h2 className="text-xl font-semibold mb-4">Your Contributions</h2>
//           <p className="text-white/70 text-sm">
//             Blogs, comments, and testimonials you’ve submitted.
//           </p>

//           <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
//             View Activity
//           </button>
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

const Admin = () => {
  const { session, signOut } = UserAuth();
  const router = useRouter();
  const user = session?.user;

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("inquiry_submissions") // your table name
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setRequests(data);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut();
    router.push("/SignIn");
  };

  const handleResolve = async (id) => {
    const { error } = await supabase
      .from("inquiry_submissions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      // remove from UI instantly
      setRequests((prev) => prev.filter((req) => req.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 py-16 text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black">
          Welcome back, <span className="text-[#0cc883]">Admin</span>
        </h1>
        <p className="text-white/70 mt-3">
          Review and manage submitted inquiries.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* PROFILE */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <p className="text-white/70 text-sm">Email</p>
          <p className="mb-3">{user?.email}</p>

          <p className="text-white/70 text-sm">Name</p>
          <p>
            {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
          </p>
        </div>

        {/* INQUIRIES */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Submitted Inquiries</h2>

          <div className="max-h-100 overflow-y-auto space-y-4">
            {requests.length === 0 ? (
              <p className="text-white/60 text-sm">No inquiries found.</p>
            ) : (
              requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <div className="flex justify-between">
                    <p className="text-sm text-white/70">{req.email}</p>
                    <p className="text-sm text-white/70">{req.name}</p>
                  </div>

                  <p className="font-semibold">
                    {req.type == "submit"
                      ? "Resource Submission"
                      : req.type == "report"
                        ? "Issue Report"
                        : "General"}
                  </p>
                  <p className="text-sm mt-1">{req.message}</p>
                  <button
                    onClick={() => handleResolve(req.id)}
                    className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold"
                  >
                    Resolve
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* SIGN OUT */}
      <div className="max-w-6xl mx-auto mt-12">
        <button
          onClick={handleSignOut}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-xl font-semibold"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Admin;
