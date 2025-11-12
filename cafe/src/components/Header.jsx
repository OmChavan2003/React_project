import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-title">☕ My Café</div>
      <nav className="header-nav">
        <a href="#">Menu</a>
        <a href="#">Cart (0)</a>
      </nav>
    </header>
  );
}

export default Header;