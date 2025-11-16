import React from 'react';
import { menuData } from '../data/menuData';
import MenuItem from './MenuItem'; // Import the single item component
import './MenuList.css';

// 1. Receive 'addToCart' as a prop from App.js
function MenuList({ addToCart }) {
  return (
    <div className="menu-categories-container">
      {menuData.menu.map((category) => (
        <section key={category.category} className="menu-category-section">
          <h2 className="menu-category-title">{category.category}</h2>
          
          <div className="menu-list-grid">
            {/* 2. Pass 'addToCart' down to every MenuItem */}
            {category.items.map((item) => (
              <MenuItem 
                key={item.id} 
                item={item} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MenuList;