import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingActionButton = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-3"
  >
    <Link to="/cart" aria-label="Open Cart" className="mb-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </motion.button>
    </Link>
    <Link to="/support" aria-label="Contact Support">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-glass-bg text-accent p-4 rounded-full shadow-lg border border-accent hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
        </svg>
      </motion.button>
    </Link>
  </motion.div>
);

export default FloatingActionButton;
