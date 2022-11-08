import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className='text-4xl text-center'>Loading</h1>
  }
  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} replace></Navigate>
};

export default Privateroute;