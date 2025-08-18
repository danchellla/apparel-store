import React from 'react';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Collection from './pages/Collection';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import './styles/theme.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
          <Navbar />
          <div className="max-w-7xl mx-auto pt-24 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;