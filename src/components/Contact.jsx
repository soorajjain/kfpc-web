import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import partners1 from "../assets/Images/contact1.png";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name, email, message);

  const sendEmail = (e) => {
    e.preventDefault();

    // Trim spaces for clean validation
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!trimmedName) {
      toast.error("Please enter your name!");
      return;
    }
    if (trimmedName.length < 3) {
      toast.error("Name must be at least 3 characters long!");
      return;
    }

    // Validate Email
    if (!trimmedEmail) {
      toast.error("Please enter your email!");
      return;
    }
    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Validate Message
    if (!trimmedMessage) {
      toast.error("Please enter your message!");
      return;
    }
    if (trimmedMessage.length < 10) {
      toast.error("Message must be at least 10 characters long!");
      return;
    }

    // console.log("All validations passed.");
    // console.log("form.current", form.current);

    // All validations passed, send email
    emailjs
      .sendForm("service_09we5r8", "template_g606hrl", form.current, {
        publicKey: "RrENybCVoBYkECRGl",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-white px-4 pt-32"
    >
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
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">
            Contact Us
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500 bg-white resize-none"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded shadow hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600 text-sm">
            Or email us at{" "}
            <a
              href="mailto:Kommanalufpo@gmail.com"
              className="text-green-700 font-semibold underline"
            >
              Kommanalufpo@gmail.com
            </a>
          </div>
          <div className="mt-4 text-center text-gray-500 text-xs">
            <div>Kommanalu Farmer Producer Company Ltd.</div>
            <div>📍 Kommanalu, Shivamogga</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
