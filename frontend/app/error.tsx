'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Server Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-900 text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl font-bold text-red-500">500</h1>
          <h2 className="text-2xl font-semibold mt-2">Server Error</h2>
          <p className="text-gray-400 mt-2">
            Something went wrong. Please try again later.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 p-5 rounded-xl border border-gray-700"
        >
          <div className="flex justify-center items-center gap-2 text-red-400 mb-3 text-sm">
            <FiAlertTriangle />
            <span>Error ID: {error.digest || 'Unknown'}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <FiRefreshCw />
              Try Again
            </button>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 rounded-lg text-white hover:border-red-500 transition"
            >
              <FiHome />
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
