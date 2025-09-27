
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Images/logo-crop.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const logoVariants = {
  initial: { scale: 0.95, rotate: 0 },
  animate: { scale: [0.95, 1.05, 0.98, 1], rotate: [0, 8, -8, 0] },
  transition: { duration: 8, repeat: Infinity, repeatType: "reverse" },
};

const team = [
  {
    name: "Rahul Kumar",
    role: "Chairman",
    img: logo,
    bio: "Visionary leader with a passion for sustainable agriculture and rural empowerment.",
  },
  {
    name: "Suma Reddy",
    role: "Director",
    img: logo,
    bio: "Expert in climate-smart farming and community engagement.",
  },
  {
    name: "Manoj Singh",
    role: "Project Lead",
    img: logo,
    bio: "Driving innovation and impact through ARR and biochar projects.",
  },
];

const AboutFull = () => (
  <motion.section
    className="py-16 px-4 bg-gradient-to-br from-green-50 via-yellow-50 to-white text-gray-800 pt-36"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7 }}
  >
  <div className="max-w-4xl mx-4 md:mx-auto">
      <motion.div
        className="flex flex-col items-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src={logo}
          alt="KFPC Logo"
          className="w-24 h-24 rounded-full shadow-lg mb-4 bg-white object-contain"
          initial="initial"
          animate="animate"
          variants={logoVariants}
        />
  <motion.h2 className="text-2xl md:text-4xl font-bold mb-2 text-green-800 text-center">About Us</motion.h2>
        <hr className="w-32 border-t-2 border-green-300 mb-4" />
  <motion.p className="text-base md:text-lg text-center max-w-2xl">
          Founded in 2024, Kommanalu Farmer Producer Company (FPC) works at the grassroots level to empower farmers, restore ecosystems, and enable access to carbon markets. We bring together farmers, companies, and NGOs to achieve sustainable and climate-smart agriculture.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="bg-white rounded-2xl shadow p-6">
          <motion.h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Our Story</motion.h3>
          <motion.p className="text-sm md:text-base">Kommanalu Farmer Producer Company was established on 24 April 2024 in Kommanalu, Shivamogga. We are a collective of farmers working to strengthen rural communities, promote sustainable agriculture, and create climate impact.</motion.p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <motion.h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Vision</motion.h3>
          <motion.p className="text-sm md:text-base">To be a leading farmer-driven institution creating sustainable livelihoods and climate resilience across rural India.</motion.p>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="bg-white rounded-2xl shadow p-6">
          <motion.h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Mission</motion.h3>
          <motion.ul className="list-disc ml-6 text-sm md:text-base">
            <li>Empower farmers through collective action and partnerships.</li>
            <li>Promote sustainable crop cultivation and land restoration.</li>
            <li>Enable farmer participation in global carbon markets.</li>
            <li>Drive climate-smart practices that secure both income and ecology.</li>
          </motion.ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <motion.h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">Objectives</motion.h3>
          <motion.ol className="list-decimal ml-6 text-sm md:text-base">
            <li>Onboard and support farmers across plantation, fruit, and timber crops.</li>
            <li>Scale the ARR Project to restore degraded lands and generate carbon credits.</li>
            <li>Establish innovative projects like biochar to reduce emissions and improve soils.</li>
            <li>Strengthen farmer incomes through diversification and market linkages.</li>
            <li>Collaborate with NGOs, companies, and governments for social and environmental impact.</li>
          </motion.ol>
        </div>
      </motion.div>
      <motion.div
        className="mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={sectionVariants}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
  <h3 className="text-lg md:text-xl font-semibold mb-6 text-green-700 text-center">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-64 cursor-pointer"
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mb-3 shadow"
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className="font-bold text-green-800 text-base md:text-lg mb-1">{member.name}</div>
              <div className="text-green-600 text-xs md:text-sm mb-2">{member.role}</div>
              <div className="text-gray-600 text-xs md:text-sm text-center">{member.bio}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default AboutFull;
