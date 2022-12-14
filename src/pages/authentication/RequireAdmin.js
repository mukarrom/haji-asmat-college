import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../components/Loading';

function RequireAdmin({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    // console.log(admin);

    if (loading || adminLoading) {
        return <Loading />;
    }
    if (error) {
        return <p className="text-center font-bold text-error">{error.message}</p>;
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAdmin;
