// src/data/menuData.js

// --- 1. IMPORT YOUR LOCAL IMAGES ---
// (Make sure you have saved images with these names in src/assets/images/)

// Coffee
import espressoImg from '../assets/images/espresso.jpg';
import americanoImg from '../assets/images/americano.jpg';
import cappuccinoImg from '../assets/images/cappuccino.jpg';

// Sandwiches
import vegSandwichImg from '../assets/images/veg-sandwich.jpg';
import grilledCheeseImg from '../assets/images/grilled-cheese.jpg';
import clubSandwichImg from '../assets/images/club-sandwich.jpg';

// Burgers
import vegBurgerImg from '../assets/images/veg-burger.jpg';
import paneerBurgerImg from '../assets/images/paneer-burger.jpg';
import chickenBurgerImg from '../assets/images/chicken-burger.jpg';

// Pizza
import margheritaImg from '../assets/images/margherita-pizza.jpg';
import farmhouseImg from '../assets/images/farmhouse-pizza.jpg';
import bbqChickenImg from '../assets/images/bbq-chicken-pizza.jpg';

// Shakes
import chocolateShakeImg from '../assets/images/chocolate-shake.jpg';
import oreoShakeImg from '../assets/images/oreo-shake.jpg';
import mangoShakeImg from '../assets/images/mango-shake.jpg';

// Pastry
import chocolatePastryImg from '../assets/images/chocolate-pastry.jpg';
import redVelvetImg from '../assets/images/red-velvet-pastry.jpg';
import brownieImg from '../assets/images/brownie.jpg';

// --- 2. YOUR MENU STRUCTURE (now using the imported images) ---
export const menuData = {
  menu: [
    {
      category: 'Coffee',
      items: [
        { id: 1, name: 'Espresso', price: 80, description: 'Strong single shot', image: espressoImg },
        { id: 2, name: 'Americano', price: 100, description: 'Espresso with hot water', image: americanoImg },
        { id: 3, name: 'Cappuccino', price: 140, description: 'Foamy milk coffee', image: cappuccinoImg },
      ],
    },
    {
      category: 'Sandwiches',
      items: [
        { id: 10, name: 'Veg Sandwich', price: 90, description: 'Fresh veggies & mayo', image: vegSandwichImg },
        { id: 11, name: 'Grilled Cheese Sandwich', price: 120, description: 'Classic cheese melt', image: grilledCheeseImg },
        { id: 12, name: 'Club Sandwich', price: 160, description: '3-layer sandwich', image: clubSandwichImg },
      ],
    },
    {
      category: 'Burgers',
      items: [
        { id: 20, name: 'Veg Burger', price: 120, description: 'Crispy veg patty', image: vegBurgerImg },
        { id: 21, name: 'Paneer Burger', price: 150, description: 'Paneer patty', image: paneerBurgerImg },
        { id: 22, name: 'Chicken Burger', price: 180, description: 'Chicken patty burger', image: chickenBurgerImg },
      ],
    },
    {
      category: 'Pizza',
      items: [
        { id: 30, name: 'Margherita', price: 220, description: 'Cheese & herbs', image: margheritaImg },
        { id: 31, name: 'Farmhouse', price: 280, description: 'Veggies loaded', image: farmhouseImg },
        { id: 32, name: 'BBQ Chicken Pizza', price: 320, description: 'Chicken with BBQ sauce', image: bbqChickenImg },
      ],
    },
    {
      category: 'Shakes',
      items: [
        { id: 40, name: 'Chocolate Shake', price: 150, description: 'Thick chocolate shake', image: chocolateShakeImg },
        { id: 41, name: 'Oreo Shake', price: 160, description: 'Oreo blended shake', image: oreoShakeImg },
        { id: 42, name: 'Mango Shake', price: 150, description: 'Seasonal mango shake', image: mangoShakeImg },
      ],
    },
    {
      category: 'Pastry',
      items: [
        { id: 50, name: 'Chocolate Pastry', price: 80, description: 'Rich chocolate', image: chocolatePastryImg },
        { id: 51, name: 'Red Velvet Pastry', price: 100, description: 'Soft & creamy', image: redVelvetImg },
        { id: 52, name: 'Brownie', price: 120, description: 'Fudgy brownie', image: brownieImg },
      ],
    },
  ],
};