import React from 'react';
import './App.css';
function App() {
  const office = {
    name: "SpaceHub",
    rent: 55000,
    address: "123 Main Street, City Center"
  };
  const officeList = [
    { name: "SpaceHub", rent: 55000, address: "123 Main Street" },
    { name: "WorkNest", rent: 62000, address: "Park Avenue" },
    { name: "CozyDesk", rent: 48000, address: "West Lane" },
    { name: "TechSpace", rent: 70000, address: "Innovation Blvd" }
  ];
  return (
    <div>
      <h1>Office Space Rental App</h1>

      <img 
        src="office.jpeg"
        alt="Office"
        style={{ width: '400px', height: '200px', marginBottom: '20px' }}
      />

      <h2>{office.name}</h2>
      <p>Address: {office.address}</p>
      <p style={{ color: office.rent > 60000 ? 'green' : 'red' }}>
        Rent: ₹{office.rent}
      </p>

      <h2>Available Offices</h2>
      <ul>
        {officeList.map((o, index) => (
          <li key={index}>
            <strong>{o.name}</strong> – {o.address} – 
            <span style={{ color: o.rent > 60000 ? 'green' : 'red' }}>
              ₹{o.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
