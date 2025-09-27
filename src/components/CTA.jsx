import React from "react";
import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-16 px-4 flex justify-center items-center bg-gradient-to-br from-green-800 via-green-700 to-green-900 relative">
    <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border-2 border-green-400 max-w-2xl w-full flex flex-col items-center z-10">
      <motion.h4
        className="text-xl md:text-2xl font-extrabold text-green-700 mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Join us in building sustainable farmer livelihoods and climate resilience.
      </motion.h4>
      <motion.a
        href="#contact"
        className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(34,197,94,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Partner With Us
      </motion.a>
    </div>
  </section>
);

export default CTA;
