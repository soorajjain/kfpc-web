
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Images/logo-crop.png";

const Footer = () => (
  <motion.footer
    className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-10 px-4 mt-16"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Logo & Company Info */}
      <div className="flex flex-col items-center md:items-start gap-3 md:w-1/3">
        <img
          src={logo}
          alt="KFPC Logo"
          className="w-16 h-16 mb-2 rounded-full shadow-lg bg-white object-contain"
        />
        <div className="font-bold text-lg w-48 md:w-auto text-center md:text-left">
          Kommanalu Farmer Producer Company Ltd.
        </div>
        <div className="text-sm opacity-80">
          Company Registration No. / FPC details
        </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-3 md:w-1/3">
        <div className="flex gap-4 text-base font-medium">
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/kfpc-web/about"
            className="hover:text-yellow-400 transition"
          >
            About
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/kfpc-web/projects"
            className="hover:text-yellow-400 transition"
          >
            Projects
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="/kfpc-web/contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>
        </div>
        <div className="mt-2 text-xs text-gray-200">
          © 2025 Kommanalu Farmer Producer Company. All rights reserved.
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-col items-center md:items-end gap-3 md:w-1/3">
        <div className="flex gap-5">
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.075-.124-.272-.198-.57-.347z" />
            </svg>
          </a>
        </div>
        <div className="mt-2 text-xs text-gray-200">info@kommanalufpc.org</div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
