//Components
import Landing from './views/landing/landing.component'
import About from './views/About/About';
import Select from './views/Select/Select';
import RegisterUser from './views/registerUser/registerUser.component';
import RegisterTrainer from './views/registerTrainer/registerTrainer.component';
import FormSesion from './views/Sesion/Sesion';
import DashboardTrainer from './views/DashboardTrainer/DashboardTrainer';
import Homeusuario from './views/HomeUsuario/homeusuario';
import Detail from './views/TeacherDetail/detail';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { auth } from './components/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

//Styles
import './App.css'


function App() {
  const location = useLocation();
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
        //-------------------------

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/select'
          element={<Select />}
        />
        <Route
          path='/registeruser'
          element={<RegisterUser />}
        />
         <Route
          path='/registertrainer'
          element={<RegisterTrainer />}
        />
         <Route
          path='/login'
          element={<FormSesion />}
        />
         <Route
          path='/dashboardtr'
          element={<DashboardTrainer userSession={userSession}/>}
        />
        <Route
         path='/homeusuario'
          element={<Homeusuario />}/>
        <Route 
        path='/teacher/:id'
        element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App
