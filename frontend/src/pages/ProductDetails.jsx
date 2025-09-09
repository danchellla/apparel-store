import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const product = products.find(p => String(p.id) === String(id));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner className="mt-24" />;
  }

  if (!product) {
    return <div className="text-center text-lg text-red-400 mt-24">Product not found.</div>;
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <GlassCard className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl aspect-square flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-4/5 h-4/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-glass-border"
                />
              </div>
            </motion.div>
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-accent mb-6">${product.price?.toFixed(2)}</div>
              <p className="text-lg mb-8">{product.description || 'No description available.'}</p>
              {product.details && product.details.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Details</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-2 rounded-full border ${
                          selectedSize === size 
                            ? 'bg-accent border-accent text-white' 
                            : 'border-glass-border hover:bg-glass-bg'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <div className="flex items-center glass-card px-4 py-2 rounded-full">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-lg"
                  >
                    -
                  </button>
                  <span className="px-4 text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-lg"
                  >
                    +
                  </button>
                </div>
                <button
                  className="flex-1 bg-gradient-to-r from-accent to-[#ff4e50] text-white py-4 px-8 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
                  onClick={() => {
                    addToCart({ ...product, qty: quantity });
                    showToast('Added to cart!', 'success');
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default ProductDetails;