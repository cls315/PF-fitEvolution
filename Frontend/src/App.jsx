//Components
import Landing from './views/landing/landing.component'
import SearchBar from './components/searchbar/searchbar.component';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
//Styles
import './App.css'
import About from './views/About/About';

function App() {
  const location = useLocation();
  const nav = () => {
    return <SearchBar />;
  };

  return (
    <>
      {nav()}
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
    </>
  );
}

export default App
