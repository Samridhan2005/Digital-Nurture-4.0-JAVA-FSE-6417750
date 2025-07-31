import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Gill", "Pant", "Bumrah"];
  const RanjiTrophy = ["Pujara", "Rahane", "Saha", "Iyer", "Siraj"];

  const allPlayers = [...T20players, ...RanjiTrophy];

  const [oddPlayers, evenPlayers] = allPlayers.reduce(([odds, evens], player, index) => {
    if (index % 2 === 0) {
      odds.push(player);
    } else {
      evens.push(player);
    }
    return [odds, evens];
  }, [[], []]);

  return (
    <div>
      <h2>Merged Player List</h2>
      <p>{allPlayers.join(', ')}</p>
      <h3>Odd Team</h3>
      <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
      <h3>Even Team</h3>
      <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
