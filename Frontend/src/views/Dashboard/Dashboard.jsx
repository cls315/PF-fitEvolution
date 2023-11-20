import React from 'react';
import TrainerSearchbar from '../../components/TrainerSearchbar/TrainerSearchbar';

const Dashboard = () => {
  return (
    <div className='bg-trainer-board'>
      <div className='d-flex flex-column text-right'>
        <h2>Deportistas activos{' (1)'}</h2>
        <span>
          Bienvenido a tu cuenta de entrenador, aqui puedes ver todos los
          deportistas
        </span>
      </div>
      <TrainerSearchbar />
    </div>
  );
};

export default Dashboard;
