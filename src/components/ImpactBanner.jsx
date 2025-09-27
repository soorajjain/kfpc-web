
import React from "react";
import { motion } from "framer-motion";
import farmImg from "../assets/Images/logo-crop.png";

function AnimatedNumber({ value, duration = 1.5 }) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let startTime = null;
    function animateNumber(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setDisplay(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setDisplay(end);
      }
    }
    requestAnimationFrame(animateNumber);
    // eslint-disable-next-line
  }, [value]);
  return <span>{display.toLocaleString()}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const impactData = [
  {
    icon: "👨‍🌾",
    title: "Farmers Engaged",
    value: 1300,
    subtitle: "and growing",
    img: farmImg,
  },
  {
    icon: "🌍",
    title: "Carbon Credit Potential",
    value: null,
    subtitle: "20 years of income for ARR farmers",
    img: farmImg,
  },
  {
    icon: "🌳",
    title: "Acres Digitized",
    value: 3018,
    subtitle: "(ARR), 21000 new trees planted",
    img: farmImg,
  },
  {
    icon: "📍",
    title: "Districts Covered",
    value: null,
    subtitle: "Shivamogga, Davanagere, Bidar, Haveri, Koppal, Chikkamagaluru",
    img: farmImg,
  },
];

const ImpactBanner = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-green-100 to-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none select-none z-0">
      <img src={farmImg} alt="Farm" className="w-96 h-96 object-cover opacity-10 blur-2xl absolute right-0 top-0" />
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
      {impactData.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-yellow-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
        >
          <img src={item.img} alt="Impact" className="w-16 h-16 object-cover rounded-full mb-3 shadow-lg border-4 border-yellow-200" />
          <span className="text-3xl mb-2">{item.icon}</span>
          <div className="font-bold text-xl text-green-800 mb-1">{item.title}</div>
          {item.value !== null && (
            <div className="text-green-700 text-2xl font-bold mb-1">
              <AnimatedNumber value={item.value} />
            </div>
          )}
          <div className="text-gray-700 text-md font-medium">{item.subtitle}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ImpactBanner;
