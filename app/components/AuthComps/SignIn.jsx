"use client";
import { UserAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInUser } = UserAuth();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { session, error } = await signInUser(email, password); // Use your signIn function

    if (error) {
      setError(error); // Set the error message if sign-in fails

      // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // Redirect or perform any necessary actions after successful sign-in
      router.push("/dashboard");
    }
    if (session && typeof closeModal === "function") closeModal();
    if (session) {
      closeModal();
      setError(""); // Reset the error when there's a session
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1B6E4F] via-[#16593f] to-[#264653] px-6 md:px-20">
      {/* LEFT SIDE */}
      <div className="flex-1 hidden md:flex flex-col justify-center pr-12">
        <h1 className="text-5xl font-black text-white leading-tight">
          Welcome back,
          <br />
          explore your <span className="text-[#0cc883]">saved</span> resources
        </h1>

        <p className="mt-6 text-white/70 text-lg max-w-lg">
          Sign in to access your favorites, reviews, and contributions to the
          community.
        </p>

        <div className="mt-8 space-y-3 text-white/80 text-sm">
          <p>⭐ View your saved resources</p>
          <p>📝 Continue writing reviews</p>
          <p>💬 Engage with the community</p>
          <p>📍 Pick up where you left off</p>
        </div>
      </div>

      {/* FORM */}
      <div className="flex-1">
        <form
          onSubmit={handleSignIn}
          className="max-w-md w-full mx-auto p-8 md:p-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl text-white"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>

          <div className="flex flex-col gap-4">
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
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {error && (
            <p className="text-red-400 text-center mt-4 text-sm">{error}</p>
          )}

          <p className="text-center text-sm mt-6 text-white/70">
            Don’t have an account?{" "}
            <Link href="/SignUp" className="text-[#0cc883] hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
    //     <h2 className="font-bold pb-2">Sign in</h2>
    //     <p>
    //       Don't have an account yet? <a href="/signup">Sign up</a>
    //     </p>
    //     <div className="flex flex-col py-4">
    //       {/* <label htmlFor="Email">Email</label> */}
    //       <input
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="p-3 mt-2"
    //         type="email"
    //         name="email"
    //         id="email"
    //         placeholder="Email"
    //       />
    //     </div>
    //     <div className="flex flex-col py-4">
    //       {/* <label htmlFor="Password">Password</label> */}
    //       <input
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="p-3 mt-2"
    //         type="password"
    //         name="password"
    //         id="password"
    //         placeholder="Password"
    //       />
    //     </div>
    //     <button className="w-full mt-4">Sign In</button>
    //     {error && <p className="text-red-600 text-center pt-4">{error}</p>}
    //   </form>
    // </div>
  );
};

export default Signin;
