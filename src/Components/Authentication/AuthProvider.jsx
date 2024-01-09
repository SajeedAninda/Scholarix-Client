import React, { createContext, useState } from 'react';
export let AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);

    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let profileUpdate = (fullName, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: fullName, photoURL: photoUrl
        })
    }

    let signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    let authentication = {
        signUp,
        profileUpdate,
        signIn
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;