import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const [user, setUser] = useContext(userContext);

    return (
      user.email ? <Outlet></Outlet> : <Navigate to="/login" replace/>
    );
};

export default PrivateRoute;