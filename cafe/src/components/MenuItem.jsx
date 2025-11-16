import React from 'react';
import './MenuItem.css';

// 1. Receive 'addToCart' as a prop from MenuList.jsx
function MenuItem({ item, addToCart }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">₹{item.price.toFixed(2)}</span>
          
          {/* 2. Use the 'addToCart' prop in the onClick */}
          <button 
            className="item-button" 
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;