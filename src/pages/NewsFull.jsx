import React from "react";
import { motion } from "framer-motion";

const NewsFull = () => (
  <motion.section
    className="py-16 px-4 bg-white text-gray-800"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">News & Updates</h2>
      <ul className="list-disc ml-6 mb-8">
        <li>Jan 2025: ARR expanded to 3,018 acres.</li>
        <li>Feb 2025: Plantation Project reaches 21,000 trees.</li>
        <li>Oct 2025: Launch of Biochar Project.</li>
      </ul>
    </div>
  </motion.section>
);

export default NewsFull;
