// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "@/app/context/AuthContext";

// const Dashboard = () => {
//   const { session, signOut } = UserAuth();
//   const router = useRouter();

//   const user = session?.user;

//   const handleSignOut = async (e) => {
//     e.preventDefault();

//     try {
//       await signOut();
//       router.push("/SignIn");
//       console.log(console.log(user.user_metadata.first_name));
//     } catch (err) {
//       setError("An unexpected error occurred."); // Catch unexpected errors
//     }
//   };
//   console.log(session);
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <h2>Welcome, {session?.user?.email}</h2>
//       <div>
//         <p
//           onClick={handleSignOut}
//           className="hover:cursor-pointer  border inline-block px-4 py-3 mt-4 "
//         >
//           Sign out
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/context/AuthContext";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const router = useRouter();

  const user = session?.user;

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      router.push("/SignIn");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20 py-16 text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black">
          Welcome back,
          <span className="text-[#0cc883]">
            {" "}
            {user?.user_metadata?.first_name || "User"}
          </span>
        </h1>
        <p className="text-white/70 mt-3">
          Manage your activity, saved resources, and contributions.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* PROFILE CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <p className="text-white/70 text-sm">Email</p>
          <p className="mb-3">{user?.email}</p>

          <p className="text-white/70 text-sm">Name</p>
          <p>
            {user?.user_metadata?.first_name} {user?.user_metadata?.last_name}
          </p>
        </div>

        {/* SAVED RESOURCES */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Saved Resources</h2>
          <p className="text-white/70 text-sm">
            View and manage your bookmarked resources.
          </p>

          <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
            View Saved
          </button>
        </div>

        {/* CONTRIBUTIONS */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Your Contributions</h2>
          <p className="text-white/70 text-sm">
            Blogs, comments, and testimonials you’ve submitted.
          </p>

          <button className="mt-4 px-4 py-2 bg-[#0cc883] rounded-lg text-black font-semibold">
            View Activity
          </button>
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

export default Dashboard;
