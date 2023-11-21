//Components
import Landing from './views/landing/landing.component'
import Card from "./components/card/card"
import Detail from "./views/TeacherDetail/detail"
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
//Styles
import './App.css'
import About from './views/About/About';

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
        <Route path='/teachers' element={<Card/>}/>
        <Route path='/teacher/:id' element={<Detail/>} />
      </Routes>
    </>
  );
}

export default App
