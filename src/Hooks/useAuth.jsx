import React from 'react';

const useAuth = () => {
    let auth = useContext(AuthContext)
    return auth;
};

export default us