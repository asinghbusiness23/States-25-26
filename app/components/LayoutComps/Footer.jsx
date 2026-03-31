"use client";
import React from "react";

const C = {
  bg: "#F1FAEE",
  green: "#1B6E4F",
  greenLight: "#d3efca",
  greenMid: "#2a9d6e",
  navy: "#264653",
  accent: "#0cc883",
  white: "#ffffff",
  gray: "#f8faf8",
  textMid: "#4a7c6a",
  textLight: "#6b7280",
};
const Footer = () => (
  <footer className="bg-[#264653] text-[#ffffffbf] py-20 px-32">
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
      {/* Brand */}
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-[10px] bg-linear-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center">
            <span>CB</span>
          </div>
          <h2 className="text-white font-extrabold text-[18xpx]]">
            Chester Bridge
          </h2>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 280 }}>
          A community-powered resource hub connecting Chester County residents
          to the services, events, and opportunities they need.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          {["Facebook", "Instagram", "Twitter"].map((s) => (
            <div
              key={s}
              className="w-9 h-9 bg-white/10 rounded-[10px] flex items-center justify-center cursor-pointer text-[13px] font-bold text-white transition-colors duration-150 hover:text-[#0cc883]"
            >
              {s[0]}
            </div>
          ))}
        </div>
      </div>
      {/* Links */}
      {[
        {
          heading: "Resources",
          links: [
            "Food & Nutrition",
            "Housing & Shelter",
            "Healthcare",
            "Education",
            "Job Training",
          ],
        },
        {
          heading: "Organization",
          links: ["About Us", "Our Team", "Blog", "Volunteer", "Donate"],
        },
        {
          heading: "Contact",
          links: [
            "hello@chesterbridge.org",
            "(610) 555-0192",
            "123 Bridge St, West Chester PA",
            "Mon–Fri 9am–5pm",
          ],
        },
      ].map(({ heading, links }) => (
        <div key={heading}>
          <h4 className="text-white font-bold text-sm mb-4 tracking-wide">
            {heading}
          </h4>
          {links.map((l) => (
            <p
              key={l}
              className="text-[13px] mb-2.5 cursor-pointer transition-colors duration-150 hover:text-[#0cc883]"
            >
              {l}
            </p>
          ))}
        </div>
      ))}
    </div>
    <div className="border-t border-white/10 pt-6 flex justify-between items-center text-xs">
      <p>© 2025 Chester Bridge. All rights reserved.</p>
      <div className="flex gap-24">
        {["Privacy Policy", "Terms of Use", "Accessibility"].map((l) => (
          <span key={l} className="cursor-pointer hover:text-[#0cc883]">
            {l}
          </span>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
