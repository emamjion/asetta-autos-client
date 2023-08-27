import React, { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContex)
    let location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;