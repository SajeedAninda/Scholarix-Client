import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { ColorRing } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let { loggedInUser, loading } = useAuth();

    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#ed4747', '#0e2b45', '#ed4747', '#0e2b45', '#ed4747']}
            />
        </div>
    }
    if (loggedInUser) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;