import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 2000, label: "Students", symbol: "+" },
  { number: 150, label: "Expert Teachers", symbol: "+" },
  { number: 50, label: "Programs", symbol: "+" },
  { number: 100, label: "Success Rate", symbol: "%" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold gradient-text mb-2">
                <CountUp end={stat.number} duration={2} />
                {stat.symbol}
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
