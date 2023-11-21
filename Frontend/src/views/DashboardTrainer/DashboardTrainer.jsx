//Commons imports
import { useEffect, useState} from 'react';

//components imports
import MenuprincipalTrainer from '../../components/menuprincipalTainer/menuprincipalTrainer';
import DashBar from '../../components/Dashbar/Dashbar';
import PagosprincipalTrainer from '../../components/pagosprincipalTrainer/pagosprincipalTrainer';
import EntrePrincipalTrainer from '../../components/entreprincipalTRainer/entreprincipalTrainer';
//styles
import React from 'react';
import './DashboardTrainer.css';



const DashboardTrainer = (props) => {
 const [menu,setmenu]=useState('')

 const handleMenu =(e)=>{
  const nom=e.target.name
  console.log(e.target.name)
  setmenu(nom)
}

  return (
    <div className='bg-trainer-board'>
      <DashBar handleMenu={handleMenu}/>
      {menu==="deportes" && <MenuprincipalTrainer />}
      {menu==="pagos" && <PagosprincipalTrainer/>}
      {menu==="entrenamientos" && <EntrePrincipalTrainer/>}
      <footer className='footerUser'><p>© 2023 FitRevolution </p></footer>
    </div>
  );
};

export default DashboardTrainer;
