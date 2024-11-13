import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userData } = useContext(UserContext);

  if (!userData.documentNumber || !userData.cellphone) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
