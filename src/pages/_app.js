import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState([])

  const addToCart = (product) => { 
    console.log(product)
  }

  return <Component {...pageProps} cart={cart} addToCart={addToCart} />
}
