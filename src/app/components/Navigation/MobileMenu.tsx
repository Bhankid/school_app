import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navItems } from './NavItems';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed right-4 top-4 z-50 md:hidden glass-morphism p-3 rounded-full"
      >
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          className="w-6 h-6 flex flex-col justify-around"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-full h-0.5 bg-gray-800 rounded-full"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: i === 1 
                  ? { opacity: 0 }
                  : { rotate: i === 0 ? 45 : -45, y: i === 0 ? 8 : -8 }
              }}
            />
          ))}
        </motion.div>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-64 glass-morphism z-40 md:hidden"
          >
            <div className="flex flex-col gap-6 p-8 mt-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}