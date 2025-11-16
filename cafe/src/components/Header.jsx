import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// 1. Make sure you are receiving { cartCount } here
function Header({ cartCount }) {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        ☕ My Café
      </Link>
      <nav className="header-nav">
        <Link to="/">Menu</Link>
        
        {/* 2. Make sure you are using the cartCount prop here */}
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;