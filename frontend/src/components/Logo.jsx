import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/logosimona.jpg"
        alt="Simona Boutique Logo"
        className="h-10 w-auto"/>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#1e3a8a]">
        SIMONA BOUTIQUE
      </span>
    </div>
  );
};

export default Logo;