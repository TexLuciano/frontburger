import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as ReactRoutes,
  useNavigate,
} from 'react-router-dom';
import App from '../App';
import { AppProvider } from '../context';
import AuthGuard from '../auth/AuthGuard';
import Home from '../pages/Home/Home';
import Products from '../pages/Products';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import NaoEncontrada from '../pages/NaoEncontrada/NaoEncontrada';
import { useUser } from '../context/UserContext';

export function Routess() {
  const { userData } = useUser();



  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to={'/login'} />}
        />
        <Route path="/produtos" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="*" element={<NaoEncontrada />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
