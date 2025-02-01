"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabContent } from "./tabContent";
import Image from "next/image";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("staff");

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-morphism rounded-3xl p-8 md:p-12"
      >
        <div className="flex gap-4 mb-12 justify-center flex-wrap">
          {["staff", "students", "facilities"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? "gradient-border bg-white/50"
                  : "hover:bg-white/30"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {tabContent[activeTab as keyof typeof tabContent].map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="glass-morphism rounded-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white">
                      {item.specialization || item.achievement || item.features}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.role || item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
