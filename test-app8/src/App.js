import React from 'react';
import './App.css';
import menuData from './data/menuData';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <h2>Food Menu</h2>
      <ul className="menu-list">
        {menuData.map((item, idx) => (
          <li key={idx} className="menu-item">
            <span className="food-name">{item.name}</span> - <span className="food-price">${item.price.toFixed(2)}</span>
            <div className="food-desc">{item.description}</div>
          </li>
        ))}
      </ul>
      <button>Submit</button>
    </div>
  );
}

export default App;
