import React from 'react';
import './App.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic delight with 100% real mozzarella cheese', price: 9.99 },
  { id: 2, name: 'Veggie Burger', description: 'Wholesome burger loaded with fresh veggies', price: 6.49 },
  { id: 3, name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing and croutons', price: 7.25 },
  { id: 4, name: 'Grilled Chicken Sandwich', description: 'Juicy grilled chicken with lettuce, tomato & mayo', price: 8.75 },
  { id: 5, name: 'Pasta Alfredo', description: 'Creamy Alfredo sauce over fettuccine pasta', price: 11.50 }
];

function App() {
  return (
    <div className="App">
      <h1>Food Menu</h1>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <div className="menu-name">{item.name}</div>
            <div className="menu-description">{item.description}</div>
            <div className="menu-price">${item.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
