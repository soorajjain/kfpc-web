
import React from "react";
import { motion } from "framer-motion";
import partners1 from "../assets/Images/contact1.png";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-white px-4 pt-32">
      <div className="max-w-5xl w-full flex flex-col md:flex-row bg-white/80 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-0 relative">
          <img
            src={partners1}
            alt="Contact Us"
            className="w-full h-80 md:h-full object-cover filter grayscale"
          />
        </div>
        {/* Separator Line */}
        <div className="hidden md:block w-px bg-green-300 mx-0" />
        {/* Right Side: Contact Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">Contact Us</h2>
          <form className="w-full max-w-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white resize-none"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded shadow hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600 text-sm">
            Or email us at <a href="mailto:info@kommanalufpc.org" className="text-green-700 font-semibold underline">info@kommanalufpc.org</a>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <div>Kommanalu Farmer Producer Company Ltd.</div>
            <div>📍 Kommanalu, Shivamogga, Karnataka, India</div>
            <div>📞 +91-XXXXXXXXXX</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
