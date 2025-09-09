import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../context/ToastContext';

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    showToast('Item removed from cart', 'info');
  };

  const handleCheckout = () => {
    showToast('Checkout is not implemented in this demo.', 'info');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="p-8"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center text-accent drop-shadow-lg">Your Cart</h1>
      {loading ? (
        <LoadingSpinner className="mt-16" />
      ) : cart.length === 0 ? (
        <p className="text-center text-lg text-gray-300">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-2xl mx-auto">
          {cart.map(item => (
            <motion.div
              key={item.id}
              className="glass-card flex items-center justify-between p-4 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-accent">{item.name}</h2>
                <p className="text-white font-bold">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                  className="w-16 px-2 py-1 rounded-lg border border-accent text-center bg-transparent text-white"
                />
                <button
                  className="text-red-500 hover:text-red-700 font-bold px-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
          <div className="text-right text-xl font-bold text-accent mt-4">Total: ${total}</div>
          <button
            className="bg-accent text-white px-6 py-3 rounded-xl shadow hover:bg-accent-dark transition-colors w-full mt-6 text-lg font-semibold"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
