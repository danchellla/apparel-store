import React from 'react';
import { useCart } from '../context/CartContext';

const saleProducts = [
  {
    id: 101,
    name: "Luxury Silk Shirt (Sale)",
    price: 90,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    oldPrice: 120,
  },
  {
    id: 102,
    name: "Designer Denim Jacket (Sale)",
    price: 180,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    oldPrice: 250,
  },
  {
    id: 103,
    name: "Premium Leather Boots (Sale)",
    price: 220,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    oldPrice: 300,
  },
];

const Sale = () => {
  const { addToCart } = useCart();
  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-accent drop-shadow-lg">Sale</h1>
      <p className="mb-8 text-center text-lg text-gray-300">Discover products currently on sale!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {saleProducts.map(product => (
          <div key={product.id} className="glass-card p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 border-2 border-accent">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-accent">{product.name}</h2>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold text-white mr-2">${product.price}</span>
              <span className="line-through text-gray-400">${product.oldPrice}</span>
            </div>
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

export default Sale;
