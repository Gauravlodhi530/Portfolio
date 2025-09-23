import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  icon: string;
  level: number;
  index: number;
}

const SkillCard: React.FC<SkillProps> = ({ name, icon, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl w-50 hover:shadow-orange-500/20 mx-2"
    >
      {/* Icon */}
      <div className="text-center mb-4">
        <div className="relative inline-block">
          <img 
            src={icon} 
            alt={name} 
            className="h-16 w-16 rounded-full object-cover border-2 border-gray-600 group-hover:border-orange-500 transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Skill Name */}
      <h3 className="text-white font-semibold text-center mb-3 group-hover:text-orange-400 transition-colors duration-300">
        {name}
      </h3>



      {/* Hover Effect Overlay
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
    </motion.div>
  );
};

export default SkillCard;
