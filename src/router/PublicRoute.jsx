import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const { state } = useContext(AuthContext);
    return (!state.logged) ? children : <Navigate to="/marvel"/>
}
