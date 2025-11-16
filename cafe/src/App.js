import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Give the item a new, unique ID for the cart
    const newItem = { ...item, cartItemId: Date.now() };
    setCart([...cart, newItem]);
    console.log(item.name, 'added to cart!');
  };

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.cartItemId === itemToRemove.cartItemId);
    if (index > -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // --- 1. CREATE THE NEW clearCart FUNCTION ---
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MenuList addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            // --- 2. PASS clearCart DOWN TO THE CART COMPONENT ---
            element={
              <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;