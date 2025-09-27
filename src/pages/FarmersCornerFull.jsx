import React from "react";
import { motion } from "framer-motion";

const FarmersCornerFull = () => (
  <motion.section
    className="py-16 px-4 bg-white text-gray-800 pt-36"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Farmers' Corner (yet to work)</h2>
      <ul className="list-disc ml-6 mb-8">
        <li>Training modules on ARR, Plantation, and Biochar.</li>
        <li>Success stories of farmers benefiting from projects.</li>
        <li>Simple guides: “How ARR farmers earn carbon credits for 20 years” / “Best practices for mango and cashew cultivation”.</li>
      </ul>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Training Modules</h3>
        <p>(To be added: Interactive training modules and resources)</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Success Stories</h3>
        <p>(To be added: Stories and testimonials from farmers)</p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Guides</h3>
        <ul className="list-disc ml-6">
          <li>How ARR farmers earn carbon credits for 20 years</li>
          <li>Best practices for mango and cashew cultivation</li>
        </ul>
      </div>
    </div>
  </motion.section>
);

export default FarmersCornerFull;
