import React from 'react';
import { motion } from 'framer-motion';

const SkillsAndTools = () => {
  const tools = [
    "Figma", "Jira", "Amplitude", "Mixpanel", "Notion", "Miro", "Google Analytics", "Slack"
  ];

  const skills = [
    "Product Strategy", "User Research", "Data Analysis", "Agile Management",
    "Wireframing", "Product Analytics", "A/B Testing", "Stakeholder Management"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Skills & Tools You'll Master
        </motion.h2>

        <div className="space-y-16">
          <div className="bg-blue-900/5 rounded-xl p-8 border border-blue-900/10">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 text-center text-blue-400"
            >
              Industry Tools
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-3 rounded-full bg-blue-900/10 border border-blue-900/20 text-gray-300 hover:border-blue-500/50 transition"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-900/5 rounded-xl p-8 border border-blue-900/10"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-6 text-center text-blue-400"
            >
              Core Skills
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-blue-900/10 border border-blue-900/20 text-center text-gray-300 hover:border-blue-500/50 transition"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;