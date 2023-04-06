import React, { useEffect, useState } from 'react';
import { useRoutes } from "react-router-dom";
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
import AuthGuard from './auth/AuthGuard';
import { Routess } from './routes/Routes';

function App() {

  
  return (
    <>
      <AppProvider>
        <div>aaaa</div>       
        
        <Routess/>
  
      </AppProvider>
    </>
  );
}

export default App;
