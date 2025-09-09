import React, { createContext, useContext, useEffect, useState } from "react";
import defaultProducts from '../data/products';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load from localStorage or fallback to default
  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id, updates) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
