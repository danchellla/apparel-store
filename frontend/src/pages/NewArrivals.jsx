
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductsContext';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

const NewArrivals = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('default');
  const [sizeFilter, setSizeFilter] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  let newArrivals = products.filter(p => p.category === 'new');
  if (sizeFilter) {
    newArrivals = newArrivals.filter(p => p.sizes && p.sizes.includes(sizeFilter));
  }
  if (sort === 'price-asc') {
    newArrivals = [...newArrivals].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    newArrivals = [...newArrivals].sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    newArrivals = [...newArrivals].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="p-8"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-center text-accent drop-shadow-lg">New Arrivals</h1>
      <p className="mb-8 text-center text-lg text-gray-300">Check out the latest additions to our store!</p>
      {/* Sort and Filter Controls */}
      <div className="flex flex-col items-center mb-8 w-full">
        <div className="w-full max-w-2xl bg-glass-bg rounded-xl shadow-lg p-4 flex flex-col sm:flex-row gap-4 items-center justify-between border border-accent">
          <div className="flex flex-col flex-1 min-w-[180px]">
            <label htmlFor="sort" className="text-xs text-accent mb-1 font-semibold">Sort By</label>
            <select
              id="sort"
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="px-4 py-2 rounded-lg border border-accent bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div className="flex flex-col flex-1 min-w-[180px]">
            <label htmlFor="sizeFilter" className="text-xs text-accent mb-1 font-semibold">Filter by Size</label>
            <select
              id="sizeFilter"
              value={sizeFilter}
              onChange={e => setSizeFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-accent bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-accent transition"
            >
              <option value="">All Sizes</option>
              {[...new Set(products.filter(p => p.category === 'new' && p.sizes).flatMap(p => p.sizes || []))].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner className="mt-16" />
      ) : newArrivals.length === 0 ? (
        <div className="text-center text-lg text-gray-400 mt-16">No new arrivals at the moment.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newArrivals.map(product => (
            <motion.div
              key={product.id}
              className="glass-card p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h2 className="text-xl font-semibold mb-2 text-accent">{product.name}</h2>
              <p className="text-white mb-2">{product.description}</p>
              <ul className="mb-2 text-sm text-gray-300 list-disc list-inside">
                {product.details && product.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <p className="text-lg font-bold mb-2 text-white">${product.price}</p>
              <button
                className="bg-accent text-white px-4 py-2 rounded-lg shadow hover:bg-accent-dark transition-colors w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default NewArrivals;
