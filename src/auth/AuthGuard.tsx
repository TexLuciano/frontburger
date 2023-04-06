import React from 'react';
import { useUser } from '../context/UserContext';
import { Login } from '../pages/Login';

export default function AuthGuard({ children }: { children: JSX.Element }) {
  
  const {userData} = useUser()

  if (!userData) {
    return <Login />;
  }
   return children;
}
