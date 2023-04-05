import React from 'react';
import { BrowserRouter, Route, Navigate, Routes as ReactRoutes } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import { Login } from '../pages/Login';
import NaoEncontrada from '../pages/NaoEncontrada/NaoEncontrada';
import { Register } from '../pages/Register';
import { useUser } from '../context/UserContext';

const { userData, putUserData } = useUser();

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Register />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
