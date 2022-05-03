import React from 'react';
import Home from './pages/Home';
import SignUp  from './pages/NewAccount';
import {Route, BrowserRouter, Routes } from 'react-router-dom'


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignUp' element={<SignUp/> }/>
    </Routes>
    </BrowserRouter>

  );
}
export default App;
