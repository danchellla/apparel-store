import React from 'react';
import '../styles/glassCard.css';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`glass-card ${className}`}>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;