import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnrollClick }) => {
  return (
    <div className="pt-24 pb-16 px-4 sm:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Master Product Management
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-400 font-semibold text-xl mb-4"
          >
            No Coding Background Required!
          </motion.div>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the most comprehensive product management program and build your own product from scratch
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnrollClick}
              className="group bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#program"
              className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2"
            >
              Explore Program
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: "Graduates" },
            { value: "95%", label: "Placement Rate" },
            { value: "50+", label: "Industry Partners" },
            { value: "12LPA+", label: "Avg. Package" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-blue-900/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;