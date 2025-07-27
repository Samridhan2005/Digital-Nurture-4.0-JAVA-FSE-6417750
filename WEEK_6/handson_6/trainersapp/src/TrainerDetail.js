import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './Trainermock';

const TrainerDetail = () => {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.TrainerId === id);

  if (!trainer) return <p>Trainer not found!</p>;

  return (
    <div>
      <h2>Trainer Details</h2>
      <p><strong>ID:</strong> {trainer.TrainerId}</p>
      <p><strong>Name:</strong> {trainer.Name}</p>
      <p><strong>Email:</strong> {trainer.Email}</p>
      <p><strong>Phone:</strong> {trainer.Phone}</p>
      <p><strong>Technology:</strong> {trainer.Technology}</p>
      <p><strong>Skills:</strong></p>
      <ul>
        {trainer.Skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerDetail;
