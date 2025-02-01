import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 pb-20 px-4 relative"
    >
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
      <h1 className="text-6xl md:text-7xl font-bold text-center gradient-text mb-6 relative">
        Future of Education
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        Embracing innovation and excellence in modern education
      </p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-6"
      >
        <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
          Apply Now
        </button>
        <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
}
