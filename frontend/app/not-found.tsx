'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-xl mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-gray-500 text-white px-6 py-2 rounded hover:border-white"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
