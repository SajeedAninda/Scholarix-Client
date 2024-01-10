import React, { createContext, useEffect, useState } from 'react';
export let AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from './firebase.config';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [loggedInUser, setLoggedInUser] = useState(null);

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

    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    let logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedInUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    let authentication = {
        signUp,
        profileUpdate,
        signIn,
        googleLogin,
        loading,
        loggedInUser,
        signOut
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;