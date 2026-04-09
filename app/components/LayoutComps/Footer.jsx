"use client";
import React from "react";
import Link from "next/link";

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
  <footer className="bg-[#264653] text-[#ffffffbf] py-16 px-4 sm:px-8 lg:px-20">
    <div className="max-w-7xl mx-auto">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-linear-to-br from-[#1B6E4F] to-[#0cc883] flex items-center justify-center">
              <span>CB</span>
            </div>
            <h2 className="text-white font-extrabold text-lg">
              Chester Bridge
            </h2>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            A community-powered resource hub connecting Chester County residents
            to the services, events, and opportunities they need.
          </p>
        </div>

        {/* Links */}
        {[
          {
            heading: "Resources",
            links: [
              { label: "Food & Nutrition", href: "/resources?cat=food" },
              { label: "Housing & Shelter", href: "/resources?cat=housing" },
              { label: "Healthcare", href: "/resources?cat=health" },
              { label: "Job Training", href: "/resources?cat=jobs" },
              { label: "Immediate Help", href: "/resources?urgency=immediate" },
            ],
          },
          {
            heading: "Organization",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blogs" },
              { label: "Donate", href: "/donate" },
              { label: "Sign In", href: "/SignIn" },
            ],
          },
          {
            heading: "Contact",
            links: [
              { label: "hello@chesterbridge.org", href: "#" },
              { label: "(610) 555-0192", href: "#" },
              { label: "123 Bridge St, West Chester PA", href: "#" },
              { label: "Mon–Fri 9am–5pm", href: "#" },
            ],
          },
        ].map(({ heading, links }) => (
          <div key={heading} className="flex flex-col">
            <h4 className="text-white font-bold text-sm mb-4">{heading}</h4>
            {links.map((l) => (
              <Link
                href={l.href ? l.href : "#"}
                key={l.label}
                className="text-sm mb-2 hover:text-[#0cc883]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-center sm:text-left">
        <p>© 2026 Chester Bridge. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {["Privacy Policy", "Terms of Use", "Accessibility"].map((l) => (
            <span key={l} className="cursor-pointer hover:text-[#0cc883]">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
