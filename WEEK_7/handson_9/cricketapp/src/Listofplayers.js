import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "Gill", score: 78 },
    { name: "Rahul", score: 62 },
    { name: "Kohli", score: 92 },
    { name: "Pant", score: 54 },
    { name: "Jadeja", score: 34 },
    { name: "Bumrah", score: 72 },
    { name: "Shami", score: 65 },
    { name: "Ashwin", score: 89 },
    { name: "Suryakumar", score: 48 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h3>Players Scoring Below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
