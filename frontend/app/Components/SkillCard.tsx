import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <motion.div
      
      className="flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-xl/20 inset-shadow-sm inset-shadow-indigo-500/50 hover:scale-105 transition-transform duration-300"
    >
      <div className=" mb-2">
        <img src={icon} alt={name} className="h-20 w-20 rounded-full" />

      </div>
      <p className="text-white mt-1 text-sm">{name}</p>
    </motion.div>
  );
};

export default SkillCard;
