//Components
import Landing from './views/landing/landing.component'
import SearchBar from './components/searchbar/searchbar.component';
//Commons imports
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react'
//Styles
import './App.css'


function App() {
const location=useLocation()
const nav=()=>{return<SearchBar/>}

  return (
    <>
    {nav()}
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
