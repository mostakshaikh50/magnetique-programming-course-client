import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {
    
   const [user, setUser] = useState(null);
   
   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
   }

   const updateUserProfile = (profile) =>{
     return updateProfile(auth.currentUser, profile)
   }

   const logOut = () =>{
      return signOut(auth);

   }

   const googleProviderLogin = (provider) =>{
      return signInWithPopup(auth, provider);
   }
   const githubProviderLogin = (provider) =>{
        signInWithPopup(auth, provider);
   }

   useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('current user', currentUser);
            setUser(currentUser);
        });

        return () => unsubscribe(); 
   }, [])

   const authInfo = {user, createUser, signIn, logOut, googleProviderLogin, updateUserProfile,githubProviderLogin};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;