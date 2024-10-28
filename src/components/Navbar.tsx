import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onEnrollClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onEnrollClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 text-blue-500 font-bold text-xl"
          >
            AcceleratorX
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="program" 
                smooth={true} 
                duration={500} 
                className="text-gray-300 hover:text-blue-500 transition cursor-pointer"
              >
                Program
              </Link>
              <Link 
                to="bydp" 
                smooth={true} 
                duration={500} 
                className="text-gray-300 hover:text-blue-500 transition cursor-pointer"
              >
                BYDP
              </Link>
              <Link 
                to="pricing" 
                smooth={true} 
                duration={500} 
                className="text-gray-300 hover:text-blue-500 transition cursor-pointer"
              >
                Benefits & Pricing
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onEnrollClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Join AcceX Squad
              </motion.button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
              <Link
                to="program"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Program
              </Link>
              <Link
                to="bydp"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                BYDP
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits & Pricing
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onEnrollClick();
                  setIsMenuOpen(false);
                }}
                className="w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition mt-4"
              >
                Join AcceX Squad
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;