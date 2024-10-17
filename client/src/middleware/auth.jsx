/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// for authorised router

import React from 'react'; // You need this to use JSX in .js files
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/store';

export const AuthorizeUser = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace={true}  />;
  }

  return children;
};

export const ProtectRoute = ({children}) =>{
  const username = useAuthStore.getState().auth.username;
  if(!username){
    return <Navigate to={'/'} replace={true} />
  }
  
  return children;
}