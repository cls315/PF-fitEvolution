//Commons imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLfrontend } from '../../../configURL';
import { auth  } from '../../components/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
//components imports
import MenuprincipalTrainer from '../../components/menuprincipalTainer/menuprincipalTrainer';
import DashBar from '../../components/Dashbar/Dashbar';
import PagosprincipalTrainer from '../../components/pagosprincipalTrainer/pagosprincipalTrainer';
import EntrePrincipalTrainer from '../../components/entreprincipalTRainer/entreprincipalTrainer';
//styles
import React from 'react';
import './DashboardTrainer.css';





const DashboardTrainer = (props) => {
  const [menu, setmenu] = useState('deportes')
  const navigate=useNavigate()
 
  
    //firebase
    const [userSession, setUserSession] = useState(false)
      //modo escucha de firebase
      onAuthStateChanged(auth, async(user)=>{    //esta funcion es de firebase se queda en modo escucha cada vez que se carga la aplicacion.
        if(user){
          console.log(user)
          setUserSession(true)
        } else{
          setUserSession(false)
          console.log(user)
        }
        })
      //-------------------------*/
    //---------  

  const handleMenu = (e) => {
    const nom = e.target.name
    console.log(e.target.name)
    setmenu(nom)
  }

  return (<>
    {
      userSession ?
        <div className='bg-trainer-board'>
          <DashBar handleMenu={handleMenu} />
          {menu === "deportes" && <MenuprincipalTrainer />}
          {menu === "pagos" && <PagosprincipalTrainer />}
          {menu === "entrenamientos" && <EntrePrincipalTrainer />}
          <footer className='footerUser'><p>© 2023 FitRevolution </p></footer>
        </div> :
       <a href={`${URLfrontend}/login`}>Su sesion finalzo, haz click aqui.</a>
    }
  </>);
};

export default DashboardTrainer;
