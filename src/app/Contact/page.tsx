"use client";
import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-20 px-4 relative overflow-x-hidden" // Added overflow-x-hidden to prevent horizontal scrolling
    >
      {/* Background Animated Blobs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-blob"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold gradient-text mb-8"
        >
          Get in Touch
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-12"
        >
          We’re here to help! Reach out to us for any inquiries or support.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Dev Fred"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="dev.fred@yahoo.com"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                placeholder="Write your message here..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              type="submit"
              className="w-full px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Address */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105">
            <AiOutlineHome
              size={40}
              className="mx-auto mb-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Our Location
            </h3>
            <p className="text-gray-600">
              123 Innovation Drive
              <br />
              Education City, ED 12345 Accra
            </p>
          </div>

          {/* Phone */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105">
            <AiOutlinePhone
              size={40}
              className="mx-auto mb-4 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Call Us
            </h3>
            <p className="text-gray-600">+233 (554) 572-904</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
