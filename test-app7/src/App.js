import React from "react";
import "./App.css";

const menu = [
  { id: 1, name: "Margherita Pizza", price: "$12" },
  { id: 2, name: "Spaghetti Carbonara", price: "$14" },
  { id: 3, name: "Caesar Salad", price: "$9" },
  { id: 4, name: "Tiramisu", price: "$7" },
];

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      <h2>Food Menu</h2>
      <ul className="menu-list">
        {menu.map((item) => (
          <li key={item.id} className="menu-item">
            <span className="food-name">{item.name}</span>
            <span className="food-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
