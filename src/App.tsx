import React from 'react';
import Home from './pages/Home';
import SignUp  from './pages/NewAccount';
import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Account from './pages/Account';
import { AuthProvider } from './context/auth';
import CardTask from './components/CardTask';


function App() {
  return (
    
    <BrowserRouter>
     <AuthProvider>
      <Routes>
       <Route path='/' element={<Account/>} />
        <Route path='/SignUp' element={<SignUp/> }/>
         <Route path='/home' element={<Home/> }/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
