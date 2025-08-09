import React from 'react';
import './App.css';

const menuItems = [
  { name: 'Margherita Pizza', description: 'Classic cheese and tomato pizza', price: 9.99 },
  { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, Caesar dressing', price: 7.99 },
  { name: 'Spaghetti Carbonara', description: 'Pasta with pancetta, egg, pecorino romano', price: 11.99 },
  { name: 'Chicken Teriyaki', description: 'Grilled chicken with teriyaki sauce and rice', price: 10.99 },
  { name: 'Veggie Burger', description: 'Grilled veggie patty with lettuce, tomato, and aioli', price: 8.99 }
];

function App() {
  return (
    <div className="App">
      <h1>Food Menu</h1>
      <ul className="menu-list">
        {menuItems.map((item, idx) => (
          <li key={idx} className="menu-item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className="price">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
