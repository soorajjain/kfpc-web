
import React from "react";
import { motion } from "framer-motion";
import arrImg from "../assets/Images/partners1.png";
import plantationImg from "../assets/Images/partners2.png";
import biocharImg from "../assets/Images/partners3.png";

const projectData = [
  {
    title: "ARR Project",
    img: arrImg,
    icon: "🌱",
    color: "from-green-200 via-green-100 to-white",
    points: [
      "Land degradation and low carbon income for farmers.",
      "Farmers with plantations after 2020 are eligible for 20 years of carbon credits.",
      "Progress: 3,018 acres completed; goal: 5,000 acres by Dec 2025.",
      "Impact: More carbon captured, richer biodiversity, and climate resilience."
    ],
    benefits: [
      "Earn carbon credits for 20 years",
      "Healthier soil and higher yields",
      "Support global climate action"
    ]
  },
  {
    title: "Plantation Project",
    img: plantationImg,
    icon: "🌳",
    color: "from-yellow-200 via-yellow-100 to-white",
    points: [
      "Farmers rely on single crops; diversification is needed.",
      "New plantations in 6+ districts with high-value crops.",
      "2025: Mango, Cashew, Lemon, Coconut, Red Sanders planted.",
      "21,000 new trees established.",
      "Impact: Stable income, resilient ecology, sustainable timber and fruit."
    ],
    benefits: [
      "Better returns from diverse crops",
      "Timber value from Red Sanders",
      "Market access and partnerships"
    ]
  },
  {
    title: "Biochar Project",
    img: biocharImg,
    icon: "🔥",
    color: "from-orange-200 via-orange-100 to-white",
    points: [
      "Crop residues are often wasted or burned, causing pollution.",
      "Biochar project converts residues into soil health and carbon storage.",
      "Launching Oct 2025, expanding across Karnataka.",
      "Impact: Lower emissions, better soil, and new carbon credits."
    ],
    benefits: [
      "Higher yields from fertile soils",
      "Less need for fertilizers",
      "Join carbon markets for extra income"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsFull = () => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-green-50 via-yellow-50 to-white text-gray-800 pt-36"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
    <div className="max-w-6xl mx-4 md:mx-auto">
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-8 text-center text-green-800 drop-shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={cardVariants}
        transition={{ duration: 0.7 }}
      >
        Projects & Impact
      </motion.h2>
      <motion.p
        className="mb-12 text-base md:text-lg text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={cardVariants}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        At Kommanalu FPC, we are driving three flagship projects to create farmer prosperity and climate action.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className={`bg-gradient-to-br ${proj.color} rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <img src={proj.img} alt={proj.title} className="w-24 h-24 object-cover rounded-full mb-4 shadow-lg border-4 border-green-200" />
            <span className="absolute top-6 left-6 text-4xl drop-shadow-lg">{proj.icon}</span>
            <h3 className="font-bold text-lg md:text-2xl text-green-800 mb-2 tracking-wide border-b-2 border-green-300 pb-2 w-full">{proj.title}</h3>
            <ul className="text-gray-700 text-sm md:text-base mb-4 text-left list-disc ml-6 space-y-2">
              {proj.points.map((pt, i) => (
                <li key={i} className="leading-relaxed">{pt}</li>
              ))}
            </ul>
            <div className="font-semibold mb-2 text-green-700 text-base md:text-lg mt-4 border-t border-green-200 pt-3 w-full text-left">Farmer Benefits:</div>
            <ul className="text-green-800 text-sm md:text-base text-left list-disc ml-6 mb-2 space-y-2">
              {proj.benefits.map((b, i) => (
                <li key={i} className="bg-green-100 rounded px-2 py-1 inline-block shadow-sm">{b}</li>
              ))}
            </ul>
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 opacity-10 blur-2xl pointer-events-none select-none"
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: [0.9, 1.05, 0.95, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            >
              <img src={proj.img} alt="Project BG" className="w-24 h-24 object-cover rounded-full" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProjectsFull;
