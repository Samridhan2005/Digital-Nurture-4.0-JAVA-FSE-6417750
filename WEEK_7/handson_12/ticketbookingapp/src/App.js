import React, { useState } from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Browse available flights:</p>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>₹5000</td>
          </tr>
          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Chennai</td>
            <td>₹4500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function UserPage() {
  const [flight, setFlight] = useState('');
  const [name, setName] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Ticket booked for ${name} on flight ${flight}`);
  };

  return (
    <div>
      <h2>Book Your Ticket</h2>
      <form onSubmit={handleBooking}>
        <div>
          <label>Passenger Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select Flight: </label>
          <select
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="AI101">AI101 - Delhi to Mumbai</option>
            <option value="AI202">AI202 - Mumbai to Chennai</option>
          </select>
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? <UserPage /> : <GuestPage />}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;
