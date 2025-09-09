import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ className = '' }) => (
  <div className={`flex justify-center items-center ${className}`} role="status" aria-label="Loading">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
      style={{ borderTopColor: '#fff' }}
    />
  </div>
);

export default LoadingSpinner;
