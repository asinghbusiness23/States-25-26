"use client";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import { UserAuth } from "@/app/context/AuthContext";
import React from "react";

const Display = () => {
  const { profile } = UserAuth();
  return <div>{profile?.role === "admin" ? <Admin /> : <Dashboard />} </div>;
};

export default Display;
