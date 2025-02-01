import { motion } from "framer-motion";
import Link from "next/link";
import { navItems } from "./NavItems";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 md:w-auto w-[90%] z-50 md:top-6 lg:top-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-morphism rounded-full px-8 py-4 gap-8 items-center hidden md:flex" // Hide on mobile
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-300 hover:text-blue-600 transition-colors duration-300 relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
