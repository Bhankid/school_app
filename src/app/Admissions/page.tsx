"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Admissions() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-4 relative"
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
          Join Our Community
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-12"
        >
          Begin your journey with us and unlock a world of opportunities.
        </motion.p>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Step 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/Ap.jpg"
              alt="Step 1: Application"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Application</p>
            </div>
            <div className="p-6 bg-white rounded-b-2xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Step 1: Application
              </h3>
              <p className="text-gray-600">
                Submit your application online or download the form and send it
                to us.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/exm.jpg"
              alt="Step 2: Examination"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Examination</p>
            </div>
            <div className="p-6 bg-white rounded-b-2xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Step 2: Examination
              </h3>
              <p className="text-gray-600">
                Attend our student entrance examination to assess your knowledge
                and skills.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/enr.jpg" 
              alt="Step 3: Enrollment"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Enrollment</p>
            </div>
            <div className="p-6 bg-white rounded-b-2xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Step 3: Enrollment
              </h3>
              <p className="text-gray-600">
                Complete the enrollment process and prepare for your first day!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Link href="/AdmissionsForm">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
              Apply Now
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
