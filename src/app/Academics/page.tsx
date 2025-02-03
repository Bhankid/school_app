"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Academics() {
  const academicPrograms = [
    {
      title: "Primary Education",
      description:
        "A strong foundation for young learners focusing on core subjects and social skills.",
      image: "/A1.jpg", 
    },
    {
      title: "Secondary Education",
      description:
        "Comprehensive curriculum designed to prepare students for higher education.",
      image: "/A2.jpg", 
    },
    {
      title: "Advanced Placement",
      description:
        "Rigorous courses offering college-level content and credit opportunities.",
      image: "/A3.jpg", 
    },
    {
      title: "Extracurricular Activities",
      description:
        "Sports, arts, and clubs to foster creativity, teamwork, and leadership.",
      image: "/s3.jpeg",
    },
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
          Academic Excellence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-12"
        >
          Discover our diverse academic programs designed to inspire and challenge students.
        </motion.p>

        {/* Academic Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {academicPrograms.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <Image
                src={program.image}
                alt={program.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{program.title}</p>
              </div>
              {/* Content */}
              <div className="p-6 bg-white rounded-b-2xl">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Link href="/Admissions">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Enroll Now
            </button>
          </Link>
          <Link href="/Contact">
            <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-400 transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}