import React from "react";
import { motion } from "framer-motion";

const GalleryFull = () => (
  <motion.section
    className="py-16 px-4 bg-white text-gray-800"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Gallery</h2>
      <p className="mb-8 text-lg text-center">Photos of fieldwork, farmer meetings, tree plantations, biochar demo (add your images here)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder images, replace with actual images */}
        <img src="https://via.placeholder.com/300x200?text=Fieldwork" alt="Fieldwork" className="rounded shadow" />
        <img src="https://via.placeholder.com/300x200?text=Meeting" alt="Meeting" className="rounded shadow" />
        <img src="https://via.placeholder.com/300x200?text=Plantation" alt="Plantation" className="rounded shadow" />
        <img src="https://via.placeholder.com/300x200?text=Biochar+Demo" alt="Biochar Demo" className="rounded shadow" />
      </div>
    </div>
  </motion.section>
);

export default GalleryFull;
