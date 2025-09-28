import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/Images/logo.png";

const ErrorPage = () => (
  <motion.div
    className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 relative pt-36"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <motion.img
      src={logo}
      alt="Logo"
      className="w-32 h-32 mb-6 rounded-full shadow-lg border-4 border-green-700 bg-white"
      initial={{ scale: 0.8, rotate: -10, opacity: 0.7 }}
      animate={{ scale: [0.8, 1.1, 1], rotate: [0, 10, -10, 0], opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    />
    <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="mb-6 text-gray-700">Sorry, the page you are looking for does not exist.</p>
    <a href="/" className="bg-green-700 text-white px-6 py-2 rounded font-semibold hover:bg-green-800 transition">Go Home</a>
    <motion.div
      className="absolute left-0 bottom-0 w-full flex justify-center pointer-events-none select-none"
      initial={{ opacity: 0.05, y: 40 }}
      animate={{ opacity: 0.12, y: 0 }}
      transition={{ duration: 2 }}
    >
      <img src={logo} alt="Logo Watermark" className="w-64 opacity-10 blur-lg" />
    </motion.div>
  </motion.div>
);

export default ErrorPage;
