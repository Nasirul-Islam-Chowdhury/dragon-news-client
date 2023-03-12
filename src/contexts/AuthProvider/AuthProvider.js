import React, { createContext } from 'react';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword,
     getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword,
      signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    const verifyEmail = ()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
            setLoading(false)
        })
        return () => unsuscribed()
    }, [])
    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        signin,
         loading,
        updateUserProfile,
        verifyEmail,
        setLoading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;