import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: 'Saxophone Sneakers',
    price: 129.99,
    description: 'Step into rhythm with our limited edition Saxophone Sneakers. Featuring hand-stitched leather accents and memory foam insoles, these shoes combine jazz-era elegance with modern comfort.',
    details: [
      'Premium Italian leather',
      'Gold-tone saxophone hardware',
      'Vibram® rubber soles',
      'Limited edition numbering'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <GlassCard className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl aspect-square flex items-center justify-center">
              <div className="relative w-4/5 h-4/5">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-accent mb-6">${product.price.toFixed(2)}</div>
              
              <p className="text-lg mb-8">{product.description}</p>
              
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
                
                <button className="flex-1 bg-gradient-to-r from-accent to-[#ff4e50] text-white py-4 px-8 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ProductDetails;