import React from 'react';
import GlassCard from './GlassCard';

const Gallery = () => {
  const products = [
    { id: 1, name: 'Saxophone Sneakers', price: '$129', category: 'Footwear' },
    { id: 2, name: 'Trumpet Tailcoat', price: '$249', category: 'Formal' },
    { id: 3, name: 'Piano Pleat Skirt', price: '$89', category: 'Bottoms' },
    { id: 4, name: 'Drummer Denim Jacket', price: '$159', category: 'Outerwear' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <GlassCard key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                {/* Product image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-accent">{product.category}</span>
                <h3 className="text-xl font-semibold my-2">{product.name}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button className="text-accent hover:opacity-75 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;