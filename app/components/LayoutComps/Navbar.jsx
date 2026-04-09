"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Replace with your actual auth import:
import { UserAuth } from "@/app/context/AuthContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "References", href: "/references" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Replace with real auth:
  const { session, loading } = UserAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav
        style={{
          position: "",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(241, 250, 238, 0.92)"
            : "rgba(241, 250, 238, 1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(27,110,79,0.10)" : "none",
          borderBottom: scrolled
            ? "1.5px solid rgba(27,110,79,0.10)"
            : "1.5px solid transparent",
        }}
        className=""
      >
        <div
          style={{
            maxWidth: "",
            margin: "",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            height: "68px",
            width: "100%",
          }}
        >
          {/* LEFT — Logo */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: "#1B6E4F",
                  }}
                >
                  Chester
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#2A9D6F",
                    textTransform: "uppercase"
                  }}
                >
                  Bridge
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER — Nav */}
          <div
            className="desktop-nav"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>

          {/* RIGHT — CTA */}
          <div className="desktop-nav">
            <CTAButton session={session} />
          </div>

          {/* Hamburger — Mobile */}
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              transition: "background 0.2s",
              backgroundColor: menuOpen
                ? "rgba(27,110,79,0.08)"
                : "transparent",
              marginLeft: "auto",
            }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 998,
                background: "rgba(10,40,25,0.35)",
                backdropFilter: "blur(2px)",
              }}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 34 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(85vw, 340px)",
                zIndex: 999,
                background: "#F1FAEE",
                display: "flex",
                flexDirection: "column",
                padding: "80px 32px 48px",
                boxShadow: "-8px 0 48px rgba(27,110,79,0.18)",
              }}
            >
              {/* Decorative accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "4px",
                  height: "100%",
                  background:
                    "linear-gradient(180deg, #1B6E4F 0%, #2A9D6F 50%, #A8DABC 100%)",
                  borderRadius: "0 2px 2px 0",
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(27,110,79,0.08)",
                  border: "none",
                  borderRadius: "10px",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#1B6E4F",
                  fontSize: "20px",
                }}
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Logo in panel */}
              <div style={{ marginBottom: "48px" }}>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    color: "#1B6E4F",
                  }}
                >
                  Chester
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#2A9D6F",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Bridge
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  flex: 1,
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        padding: "14px 16px",
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        color: "#1B6E4F",
                        textDecoration: "none",
                        borderRadius: "10px",
                        transition: "background 0.18s, color 0.18s",
                        letterSpacing: "-0.01em",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(27,110,79,0.09)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA in panel */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.3 }}
                style={{ marginTop: "32px" }}
              >
                <CTAButton
                  session={session}
                  fullWidth
                  onClick={() => setMenuOpen(false)}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');

        .desktop-nav {
          display: flex;
        }
        .hamburger-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

/* ── Sub-components ─────────────────────────────────── */

const NavLink = ({ href, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "6px 14px",
        fontWeight: 600,
        fontSize: "0.92rem",
        color: hovered ? "#1B6E4F" : "#2c7a5f",
        textDecoration: "none",
        letterSpacing: "0.03em",
        transition: "color 0.2s",
        borderRadius: "8px",
        background: hovered ? "rgba(27,110,79,0.07)" : "transparent",
      }}
    >
      {label}
      <motion.span
        style={{
          position: "absolute",
          bottom: "2px",
          left: "14px",
          right: "14px",
          height: "1.5px",
          background: "#1B6E4F",
          borderRadius: "2px",
          originX: 0,
        }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
    </Link>
  );
};

const CTAButton = ({ session, fullWidth = false, onClick }) =>
  session ? (
    <div>
      <Link
        className="relative overflow-hidden bg-[#1B6E4F] px-4 py-2 rounded-lg text-white font-semibold group"
        href="/dashboard"
      >
        <span className="relative z-10">My Account</span>

        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-md transform skew-x-12 translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
        </span>
      </Link>
    </div>
  ) : (
    <div>
      <Link
        className="relative overflow-hidden bg-[#1B6E4F] px-4 py-2 rounded-lg text-white font-semibold group"
        href="/SignIn"
      >
        <span className="relative z-10">Log In</span>

        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-md transform skew-x-12 translate-x-0 group-hover:translate-x-[200%] transition-transform duration-700"></span>
        </span>
      </Link>
    </div>
  );

const HamburgerIcon = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <motion.line
      x1="3"
      y1="6"
      x2="19"
      y2="6"
      stroke="#1B6E4F"
      strokeWidth="2"
      strokeLinecap="round"
      animate={
        open
          ? { rotate: 45, y: 5, x1: 3, y1: 6, x2: 19, y2: 6 }
          : { rotate: 0, y: 0 }
      }
      style={{ originX: "11px", originY: "6px" }}
      transition={{ duration: 0.25 }}
    />
    <motion.line
      x1="3"
      y1="11"
      x2="19"
      y2="11"
      stroke="#1B6E4F"
      strokeWidth="2"
      strokeLinecap="round"
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.line
      x1="3"
      y1="16"
      x2="19"
      y2="16"
      stroke="#1B6E4F"
      strokeWidth="2"
      strokeLinecap="round"
      animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
      style={{ originX: "11px", originY: "16px" }}
      transition={{ duration: 0.25 }}
    />
  </svg>
);

export default Navbar;
