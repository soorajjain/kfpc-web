import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => (
  <section id="home" className="relative flex items-center justify-center h-screen bg-black text-white overflow-hidden pt-10">
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
    <motion.div
      className="relative z-20 text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Farmers. Driving Climate Action.</h1>
      <p className="text-lg md:text-2xl mb-8">Partnering with farmers and organizations to build sustainable agriculture through ARR, Plantation, and Biochar projects.</p>
      <a href="/projects" className="inline-block bg-[#ccd00a] text-green-900 font-semibold px-5 py-3 rounded-xl shadow hover:bg-[#ccd00a] transition">Explore Our Projects</a>
    </motion.div>
  </section>
);

export default HeroBanner;
