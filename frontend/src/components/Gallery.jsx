import React from 'react';
import GlassCard from './GlassCard';

const Gallery = () => {
  const products = [
    { id: 1, name: 'Saxophone Sneakers', price: 'Ksh129', category: 'Footwear', image: '/SB/1.png'},
    { id: 2, name: 'Trumpet Tailcoat', price: 'Ksh249', category: 'Formal', image: '/SB/2.png'},
    { id: 3, name: 'Piano Pleat Skirt', price: 'Ksh89', category: 'Bottoms', image: '/SB/3.png'},
    { id: 4, name: 'Drummer Denim Jacket', price: 'Ksh159', category: 'Outerwear', image: '/SB/4.png'},
    { id: 5, name: 'fifth wear', price: 'Ksh559', category:'Dresses', image: '/SB/5.png'},
    { id: 6, name: 'sixth wear', price: 'Ksh759', category:'Dresses', image: '/SB/6.png'},
    { id: 7, name: 'seventh wear', price: 'Ksh510', category:'Dresses', image: '/SB/7.png'},
    { id: 8, name: 'eighth wear', price: 'Ksh659', category:'Dresses', image: '/SB/8.png'},
    { id: 9, name: 'nineth wear', price: 'Ksh553', category:'Dresses', image: '/SB/9.png'},
    { id: 10, name: 'tenth wear', price: 'Ksh1,559', category:'Dresses', image: '/SB/black-white-stripes'},
    { id: 11, name: 'eleventh wear', price: 'Ksh1,099', category:'Dresses', image: '/SB/lavender.png'}
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <GlassCard key={product.id} className="overflow-hidden">
              <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
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