import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Pages/Home';
import './App.css';
import SystemInfo from './Pages/SystemInfo';
import Layout from './Components/Layout';

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Layout><Home /></Layout>} />
          <Route path='/systeminfo' element={<Layout><SystemInfo /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

