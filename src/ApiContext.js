import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [supplier, setSupplier] = useState('FragranceX'); 
  const [searchQuery, setSearchQuery] = useState('');

  const first = 0;
  const last = 50;

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get('http://3.88.1.181:8000/products/public/catalog', {
        params: {
          supplier,
          first,
          last,
          search: searchQuery,
        }
      });
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [supplier, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ApiContext.Provider value={{ products, loading, error, setSearchQuery, setSupplier }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
