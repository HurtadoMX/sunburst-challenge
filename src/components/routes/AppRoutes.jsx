import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from '../../App';
import Home from '../Home/Home';
import Login from '../Login/Login';

//No terminado, no se implemento las rutas privadas

const AppRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<App/>}/>
      </Routes>
        
  )
}

export default AppRoutes