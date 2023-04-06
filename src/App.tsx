import React, { useEffect, useState } from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserProvider } from './context/UserContext';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as ReactRoutes,
  useNavigate,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Products from './pages/Products';
import { AppProvider } from './context';

function App() {
  const user = localStorage.getItem('chicoburguer:userData');

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="*" element={<NaoEncontrada />} />
          </ReactRoutes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
