import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const text = "Future of Education";
  const [displayText, setDisplayText] = useState(""); // Stores typed text
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
  const typingSpeed = 100; // Speed of typing effect
  const deletingSpeed = 50; // Speed of deleting effect
  const pauseDuration = 1500; // Pause before deleting (in ms)

  useEffect(() => {
    let index = 0;
    let isDeletingText = false;

    const typeEffect = setInterval(
      () => {
        if (!isDeletingText && index < text.length) {
          setDisplayText(text.slice(0, index + 1)); // Typing forward
          index++;
        } else if (!isDeletingText) {
          // Typing complete, pause before deleting
          isDeletingText = true;
          setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeletingText && index >= 0) {
          setDisplayText(text.slice(0, index)); // Deleting backward
          index--;
        } else {
          // Deleting complete, restart typing
          isDeletingText = false;
          setIsDeleting(false);
          index = 0;
        }
      },
      isDeletingText ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(typeEffect);
  }, [isDeleting]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 pb-20 px-4 relative"
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

      {/* Typing & Deleting Effect Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-6xl md:text-7xl font-bold text-center gradient-text mb-6 relative"
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-8 bg-white ml-1"
        />
      </motion.h1>

      {/* Subtitle */}
      <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg mb-12">
        Embracing innovation and excellence in modern education
      </p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-6"
      >
        <button className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
          Apply Now
        </button>
        <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-400 transition-colors duration-300">
          Learn More
        </button>
      </motion.div>
    </motion.section>
  );
}
