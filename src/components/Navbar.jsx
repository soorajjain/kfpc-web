import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/logo-crop.png";
import CTA from "./CTA";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "About Us", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Farmers' Corner", to: "/farmers" },
  // { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
          ${(!isHome || (isHome && scrolled)) ? "bg-gradient-to-r from-green-700/70 via-green-600/70 to-green-800/70 shadow-lg" : "bg-transparent"}
          ${scrolled ? "backdrop-blur-md" : ""}`}
      >
        <div className="flex items-center justify-around py-3 px-4 md:px-12">
          <div className="flex items-center justify-center cursor-pointer w-full" onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <img
              src={logo}
              alt="Kommanalu FPC Logo"
              className={`rounded-xl mr-2 shadow-lg transition-all duration-300 ${scrolled ? "h-14 w-14" : "h-16 md:h-20 w-16 md:w-20 "}`}
              style={{ objectFit: "cover" }}
            />
            <div className="flex flex-col items-start mr-6">
              <div className="h-full flex items-center">
                <div
                  className={`border-l-2 h-full mr-2 border-green-900`}
                  style={{ minHeight: scrolled ? "42px" : "64px" }}
                ></div>
                <div>
                  {!scrolled ? (
                    <span className="font-bold text-xl md:text-2xl leading-tight text-white">
                      Kommanalu<br /> <span className="text-sm md:text-lg leading-tight text-white"> Farmers Producer Company </span>
                    </span>
                  ) : (
                    <span className="font-bold text-base md:text-lg text-white">
                      Kommanalu FPC
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className={`flex-col md:flex-row md:flex justify-center items-center w-full  gap-3 ${menuOpen ? "flex  " : "hidden md:flex"} w-full mb-4 md:my-0`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-1 w-full md:w-auto mt-6 md:mt-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`cursor-pointer px-4 py-2 rounded-xl font-semibold transition-all text-sm md:text-base  ${scrolled ? "text-white hover:bg-green-900" : "text-white hover:bg-green-900 hover:bg-opacity-20"}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <motion.a
              href="contact"
              className="inline-block border text-[#ccd00a] font-semibold px-4 py-2 hover:bg-[#ccd00a] hover:text-green-900  transition rounded-xl mt-2 md:mt-0 text-sm md:text-base "
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(234,179,8,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Partner With Us
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
