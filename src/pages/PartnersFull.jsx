import React from "react";
import { motion } from "framer-motion";

const PartnersFull = () => (
  <motion.section
    className="py-16 px-4 bg-white text-gray-800"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Partners & Collaborations</h2>
      <ul className="list-disc ml-6 mb-8">
        <li>Climate-focused companies (Varaha Climate AG)</li>
        <li>NGOs and cooperatives driving rural sustainability</li>
        {/* <li>Exporters & retailers for sustainable sourcing</li> */}
      </ul>
      <p className="mb-8 text-lg text-center">Join us in scaling farmer prosperity and climate resilience.</p>
      <div className="flex justify-center gap-8">
        <img src="https://via.placeholder.com/120x60?text=Varaha+Climate+AG" alt="Varaha Climate AG" className="rounded shadow" />
        <img src="https://via.placeholder.com/120x60?text=Partner+2" alt="Partner 2" className="rounded shadow" />
        <img src="https://via.placeholder.com/120x60?text=Partner+3" alt="Partner 3" className="rounded shadow" />
      </div>
    </div>
  </motion.section>
);

export default PartnersFull;
