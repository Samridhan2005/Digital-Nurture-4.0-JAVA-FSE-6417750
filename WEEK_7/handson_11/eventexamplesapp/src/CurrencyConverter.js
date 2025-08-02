import React, { useState } from 'react';

function CurrencyConverter() {
  const [inr, setInr] = useState('');
  const [eur, setEur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rate = 0.011;
    setEur((inr * rate).toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
          placeholder="Enter INR"
        />
        <button type="submit">Convert</button>
      </form>
      {eur && <p>{inr} INR = {eur} EUR</p>}
    </div>
  );
}

export default CurrencyConverter;
