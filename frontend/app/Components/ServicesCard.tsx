'use client';
import { motion } from 'framer-motion';
import { FiUser } from "react-icons/fi";

interface ServiceCardProps {
  data: {
    title: string;
    description: string;
  };
}

export default function ServiceCard({ data }: ServiceCardProps) {
  return (
    <motion.div
      

      className=" rounded-xl p-10 m-2 text-center shadow-lg border border-gray-600 transition-all hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl text-orange-500 flex justify-center mb-4">
        <FiUser />
      </div>
      <h3 className="text-lg font-semibold text-orange-500 mb-2">{data.title}</h3>
      <p className="text-sm text-gray-400">
        {data.description}
      </p>
    </motion.div>
  );
};


