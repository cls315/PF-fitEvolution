//Components
import Landing from './views/landing/landing.component'
import About from './views/About/About';
import Select from './views/Select/Select';
import RegisterUser from './views/registerUser/registerUser.component';
import RegisterTrainer from './views/registerTrainer/registerTrainer.component';
import FormSesion from './views/Sesion/Sesion';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
//Styles
import './App.css'


function App() {
  const location = useLocation();

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
      </Routes>
    </>
  );
}

export default App
