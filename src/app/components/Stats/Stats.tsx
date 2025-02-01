import { motion } from 'framer-motion';

const stats = [
  { number: '2000+', label: 'Students' },
  { number: '150+', label: 'Expert Teachers' },
  { number: '50+', label: 'Programs' },
  { number: '100%', label: 'Success Rate' },
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
              <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}