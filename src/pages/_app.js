import '@/styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const cartLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : [];
  const [cart, setCart] = useState(cartLS);
  const [pageReady, setPageReady] = useState(false);
  useEffect(() => {
    setPageReady(true);
  }, []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (guitar) => {
    // Check if the guitar exists
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // Loop to update the Cart
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.quantity = guitar.quantity;
        }
        return guitarState;
      });
      // Assign array
      setCart([...updatedCart]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      setCart([...cart, guitar]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  const updateQuantity = (guitar) => {
    const updatedCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.quantity = parseInt(guitar.quantity);
      }
      return guitarState;
    });
    setCart(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  return pageReady ? (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      updateQuantity={updateQuantity}
    />
  ) : null;
}
