import React from 'react';
import { menuData } from '../data/menuData'; // Import our fake data
import MenuItem from './MenuItem'; // Import the single item component
import './MenuList.css';

function MenuList() {
  return (
    <div className="menu-list">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuList;