"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const galleryImages = [
    "/f1.jpeg", 
    "/s4.jpeg",
    "/s1.jpeg",
    "/f3.jpeg",
    "/A3.jpg",
    "/t4.jpeg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 pb-20 px-4 relative"
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
          About Modern School
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-12"
        >
          Empowering students to achieve excellence through innovation and
          collaboration.
        </motion.p>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl shadow-lg mb-12 group"
        >
          {/* Large Image */}
          <Image
            src="/About.jpg"
            alt="Modern School Campus"
            width={500}
            height={300}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-semibold">
              Our Beautiful Campus
            </h3>
            <p className="text-gray-200 mt-2">
              A place where learning meets inspiration.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To provide a transformative learning experience that fosters
              creativity, critical thinking, and global awareness.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be a leader in education, shaping future generations to thrive
              in an ever-changing world.
            </p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Explore Our Campus
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {/* Image */}
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">View More</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Link href="/Admissions">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Join Us
            </button>
          </Link>
          <Link href="/Contact">
            <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-400 transition-colors duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
