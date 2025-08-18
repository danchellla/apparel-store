import React from 'react';
import { useCart } from '../context/CartContext';

const newArrivals = [
  {
    id: 201,
    name: "Modern Trench Coat",
    price: 350,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 202,
    name: "Minimalist Sneakers",
    price: 180,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 203,
    name: "Classic Wool Scarf",
    price: 60,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
];

const NewArrivals = () => {
  const { addToCart } = useCart();
  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-accent drop-shadow-lg">New Arrivals</h1>
      <p className="mb-8 text-center text-lg text-gray-300">Check out the latest additions to our store!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newArrivals.map(product => (
          <div key={product.id} className="glass-card p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-accent">{product.name}</h2>
            <p className="text-lg font-bold mb-2 text-white">${product.price}</p>
            <button
              className="bg-accent text-white px-4 py-2 rounded-lg shadow hover:bg-accent-dark transition-colors w-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
