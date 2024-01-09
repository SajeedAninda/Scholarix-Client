import React, { createContext } from 'react';
export let AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);

    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    let authentication = {
        signUp
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;