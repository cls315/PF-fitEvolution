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
import { useState,onAuthStateChanged } from 'react'
import { auth } from './components/firebase/firebase';
//Styles
import './App.css'

function App() {
  const location = useLocation();
  onAuthStateChanged(auth, async()=>{    //esta funcion es de firebase se queda en modo escucha cada vez que se carga la aplicacion.
    console.log(user)
  })
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
          element={<DashboardTrainer />}
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
