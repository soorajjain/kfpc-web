import React from "react";
import { motion } from "framer-motion";
// import partners1 from "../assets/Images/partners1.png";
import partners2 from "../assets/Images/partners2.png";
import partners3 from "../assets/Images/partners3.png";

const partners1 = 'https://th.bing.com/th/id/OIP.2Tf0zJ3p7sa32z-7cTDS3gHaDt?w=291&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'

const collaborations = [
  {
    icon: "🌍",
    title: "Climate-focused companies",
    details: ["Varaha Climate AG"],
    image: partners1,
    color: "bg-green-100 border-green-300",
  },
  {
    icon: "🤝",
    title: "NGOs & Cooperatives",
    details: ["Driving rural sustainability"],
    image: partners2,
    color: "bg-yellow-100 border-yellow-300",
  },
  {
    icon: "🛒",
    title: "Exporters & Retailers",
    details: ["Sustainable sourcing"],
    image: partners3,
    color: "bg-blue-100 border-blue-300",
  },
];

const Partners = () => (
  <section id="partners" className="py-20 px-4 bg-gradient-to-br from-green-50 via-yellow-50 to-white relative overflow-hidden">
    <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none select-none z-0">
      <img src={partners1} alt="Partners" className="w-96 h-96 object-cover opacity-10 blur-2xl absolute right-0 bottom-0" />
    </div>
    <motion.div
      className="max-w-5xl mx-auto text-center relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trusted Partners
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Collaborating with industry leaders to drive sustainable impact and innovation
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 mx-6 md:mx-0">
        {collaborations.map((col, idx) => (
          <motion.div
            key={col.title}
            className={`relative rounded-3xl shadow-2xl p-0 flex flex-col items-center border-2 ${col.color} hover:scale-105 transition-transform duration-300 overflow-hidden`}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(34,197,94,0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-44 md:h-56 relative">
              <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 text-4xl md:text-5xl drop-shadow-lg">{col.icon}</span>
            </div>
            <div className="flex flex-col items-center px-6 py-6 bg-white bg-opacity-90 w-full">
              <div className="font-bold text-xl text-green-900 mb-2 mt-2">{col.title}</div>
              {col.details.map((d, i) => (
                <div key={i} className="text-md text-gray-700 mb-1">{d}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border-2 border-green-400 mx-auto max-w-2xl flex flex-col items-center">
        <h3 className="text-3xl font-extrabold text-green-700 mb-4">Partner With Us</h3>
        <p className="text-lg text-gray-800 mb-6 text-center">
          Let’s create lasting impact together.<br />
          Collaborate to scale farmer prosperity and climate resilience.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Become a Partner
        </a>
      </div> */}
    </motion.div>
  </section>
);

export default Partners;
