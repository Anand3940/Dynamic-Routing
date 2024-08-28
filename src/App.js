import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Detailed from './components/Detailed';
import NavBar from './components/NavBar'
import Support from './components/Support';
import Careers from './components/Careers';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='support' element={<Support/>}/>
        <Route path='careers/:detailed' element={<Careers/>}>
          <Route index element={<Detailed/>}/>
        </Route>
    </Route>
   </Routes>

   
  </div>


  );
}

export default App;
