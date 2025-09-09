import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
// ...existing code...
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="glass-card fixed w-full z-50 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">Home</Link>
          <Link to="/collection" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">Collection</Link>
          <Link to="/new-arrivals" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">New Arrivals</Link>
          <Link to="/sale" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">Sale</Link>
          <Link to="/cart" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">Cart</Link>
          <Link to="/support" className="hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent">Support</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-glass-bg" onClick={() => setShowSearch(!showSearch)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {showSearch && (
            <input
              type="text"
              className="ml-2 px-3 py-1 rounded-lg glass-card border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              autoFocus
            />
          )}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-glass-bg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 px-4 glass-card">
          <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">Home</Link>
          <Link to="/collection" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">Collection</Link>
          <Link to="/new-arrivals" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">New Arrivals</Link>
          <Link to="/sale" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">Sale</Link>
          <Link to="/cart" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">Cart</Link>
          <Link to="/support" className="block py-3 px-4 rounded-lg hover:bg-glass-bg transition-colors focus:outline-none focus:ring-2 focus:ring-accent">Support</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;