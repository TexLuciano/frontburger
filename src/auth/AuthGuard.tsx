import React from 'react';
import { useUser } from '../context/UserContext';
import { Login } from '../pages/Login';

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const user = localStorage.getItem('chicoburguer:userData');

  console.log(user);
  
  if (user === null && {}) {
    return <Login />;
  }
   return children;
}
