import React from 'react';
import TrainerSearchbar from '../../components/TrainerSearchbar/TrainerSearchbar';
import DashBar from '../../components/Dashbar/Dashbar';
import './DashboardTrainer.css';

const Dashboard = () => {
  return (
    <div className='bg-trainer-board'>
      <DashBar />
      <div className='d-flex flex-column text-right'>
        <h3>Deportistas activos{' (1)'}</h3>
        <span>
          Bienvenido a tu cuenta de entrenador, aqui puedes ver todos los
          deportistas
        </span>
      </div>
      <TrainerSearchbar />
      <div className='conteinerUsersDash'></div>
      <footer className='footerUser'><p>© 2023 FitRevolution </p></footer>
    </div>
  );
};

export default Dashboard;
