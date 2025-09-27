import React from "react";
import { motion } from "framer-motion";


import farmImg from "../assets/Images/logo-crop.png";

const About = () => (
  <section id="about" className="py-20 px-4 bg-gradient-to-br from-green-100 via-yellow-50 to-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none z-0">
      <img src={farmImg} alt="Farm" className="w-96 h-96 object-cover opacity-10 blur-2xl absolute left-10 top-10" />
    </div>
    <motion.div
      className="max-w-4xl mx-auto text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      {/* <h2 className="text-3xl md:text-3xl font-bold mb-4 text-green-800 drop-shadow">About Us</h2> */}
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <img src={farmImg} alt="Farmers" className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-green-200 mb-2" />
        <hr className="w-32 border-t-2 border-green-300 mb-4" />
        <p className="text-base md:text-lg text-gray-700 text-center max-w-xl">
          Founded in 2024, <span className="font-semibold text-green-700">Kommanalu Farmer Producer Company (FPC)</span> works at the grassroots level to empower farmers, restore ecosystems, and enable access to carbon markets.<br /><br />
          We bring together farmers, companies, and NGOs to achieve sustainable and climate-smart agriculture.
        </p>
      </div>
      <motion.a
        href="#about-details"
        className="inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-green-800 transition"
        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(34,197,94,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Learn More →
      </motion.a>
    </motion.div>
  </section>
);

export default About;
