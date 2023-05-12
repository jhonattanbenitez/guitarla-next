import '@/styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (guitar) => {
    // Check if the guiter exists
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

  return <Component {...pageProps} cart={cart} addToCart={addToCart} deleteProduct={deleteProduct} updateQuantity={updateQuantity}  />;
}
