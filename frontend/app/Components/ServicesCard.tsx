'use client';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";

interface ServiceCardProps {
  data: {
    title: string;
    description: string;
    icon: string;
    features: string[];
  };
  index: number;
}

export default function ServiceCard({ data, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.00 }}
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
    >
      {/* Icon */}
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {data.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
        {data.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {data.description}
      </p>

      {/* Features */}
      <div className="space-y-2 mb-6">
        {data.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
            {feature}
          </div>
        ))}
      </div>

      {/* Arrow Icon */}
      <div className="absolute bottom-6 right-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
        <FiArrowRight size={20} />
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}


