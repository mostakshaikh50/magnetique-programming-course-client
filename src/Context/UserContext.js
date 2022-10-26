import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
   const [user, setUser] = useState(null);

   const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
   }
   const authInfo = {user, createUser};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;