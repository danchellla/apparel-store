import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import { ToastProvider } from './context/ToastContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Collection from './pages/Collection';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import Cart from './pages/Cart';
import Support from './pages/Support';
import './styles/theme.css';
import FloatingActionButton from './components/FloatingActionButton';

const App = () => {
  return (
    <ToastProvider>
      <ProductsProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 transition-colors duration-500">
              <Navbar />
              <div className="max-w-7xl mx-auto pt-24 px-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/new-arrivals" element={<NewArrivals />} />
                  <Route path="/sale" element={<Sale />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/support" element={<Support />} />
                </Routes>
              </div>
              <FloatingActionButton />
            </div>
          </Router>
        </CartProvider>
      </ProductsProvider>
    </ToastProvider>
  );
};

export default App;