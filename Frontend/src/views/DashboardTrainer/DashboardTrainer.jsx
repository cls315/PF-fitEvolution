//Commons imports
import { useEffect} from 'react';
import { useSelector } from 'react-redux';

//components imports
import MenuprincipalTrainer from '../../components/menuprincipalTainer/menuprincipalTrainer';
import DashBar from '../../components/Dashbar/Dashbar';

//styles
import React from 'react';
import './DashboardTrainer.css';



const DashboardTrainer = () => {
  const menusTrainer = useSelector(state => state.menusTrainer)
 

  useEffect(() => {
    console.log(menusTrainer[0])
 
 }, [menusTrainer[0]])

  return (
    <div className='bg-trainer-board'>
      <DashBar />
      {<MenuprincipalTrainer/>}
      <footer className='footerUser'><p>© 2023 FitRevolution </p></footer>
    </div>
  );
};

export default DashboardTrainer;
