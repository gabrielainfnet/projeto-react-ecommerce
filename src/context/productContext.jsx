import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const response = await Promise.race([
          axios.get('http://localhost:8080/vendas-api/produtos', { signal }),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), 5000))
        ]);
        setProducts(response.data);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching products:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  const addToCart = (produtoId, quantidade) => {
    const product = products.find(p => p.id === produtoId);
    if (product) {
      setCart(prevCart => {
        const existingProduct = prevCart.find(item => item.id === produtoId);
        if (existingProduct) {
          return prevCart.map(item =>
            item.id === produtoId
              ? { ...item, quantidade: item.quantidade + Number(quantidade) }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantidade: Number(quantidade) }];
        }
      });
    }
  };

  const removeFromCart = (produtoId) => {
    setCart(cart.filter(item => item.id !== produtoId));
  };

  const checkout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/vendas-api/pedidos', { items: cart });
      console.log('Pedido salvo com sucesso:', response.data);
      setCart([]);
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, addToCart, removeFromCart, checkout, loading }}>
      {children}
    </ProductContext.Provider>
  );
};