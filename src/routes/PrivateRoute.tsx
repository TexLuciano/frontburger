import React from 'react'
import { useUser } from '../context/UserContext';

const { userData, putUserData } = useUser();

const PrivateRoute = () => {
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute