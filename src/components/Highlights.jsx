

import React, { useRef, useEffect, useState } from "react";
import farmImg from "../assets/Images/logo-crop.png";

function AnimatedNumber({ value, duration = 1.5 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current || hasAnimated) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        let start = 0;
        const end = value;
        let startTime = null;
        function animateNumber(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setDisplay(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            requestAnimationFrame(animateNumber);
          } else {
            setDisplay(end);
            setHasAnimated(true);
          }
        }
        requestAnimationFrame(animateNumber);
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value, hasAnimated]);
  return <span ref={ref}>{display.toLocaleString()}</span>;
}


const highlightData = [
  {
    value: 3018,
    label: "Acres under ARR project",
    icon: "🌱",
  },
  {
    value: 21000,
    label: "New plantation trees",
    icon: "🌳",
  },
  {
    value: 6,
    label: "Districts active in Karnataka",
    icon: "🗺️",
  },
    {
    icon: "👨‍🌾",
    label: "Farmers Engaged and growing",
    value: 1300,
  },
  // {
  //   icon: "🌍",
  //   label: "Carbon Credit Potential years of income for ARR farmers",
  //   value: 20
  // }
];

const Highlights = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-yellow-50 to-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
      {highlightData.map((item, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-green-100 via-yellow-50 to-white rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl mx-12 md:mx-auto"
        >
          <span className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-green-200 mb-4 shadow-lg text-4xl">{item.icon}</span>
          <span className="font-extrabold text-4xl md:text-5xl text-green-700 mb-2 tracking-wide drop-shadow-lg">
            <AnimatedNumber value={item.value} />
            <span className="text-green-400 text-3xl align-top">+</span>
          </span>
          <span className="text-gray-700 mt-3 text-lg font-semibold">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default Highlights;
