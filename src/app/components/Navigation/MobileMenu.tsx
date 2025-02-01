import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems } from "./NavItems";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ setIsMenuOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-0 right-0 mx-auto md:hidden z-50 w-screen"
      >
        <div className="glass-morphism p-4 rounded-full flex gap-6 shadow-lg mx-auto w-max">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <item.icon className="text-2xl mr-2 md:hidden" />
                <span className="hidden md:block">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
