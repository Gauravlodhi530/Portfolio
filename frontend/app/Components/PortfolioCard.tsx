import React from "react";
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiEye } from "react-icons/fi";

type PortfolioCardProps = {
  title: string;
  description: string;
  imgSrc: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  imgSrc, 
  category, 
  technologies, 
  liveUrl, 
  githubUrl, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors duration-300"
            title="View Live"
          >
            <FiExternalLink size={20} />
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
            title="View Code"
          >
            <FiGithub size={20} />
          </a>
          <button 
            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
            title="View Details"
          >
            <FiEye size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-4">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <div className="flex gap-2">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 text-center"
          >
            Live Demo
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 hover:border-orange-500 transition-all duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
