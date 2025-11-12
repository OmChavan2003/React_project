import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-footer">
          <span className="item-price">${item.price.toFixed(2)}</span>
          <button className="item-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;