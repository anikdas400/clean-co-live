import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isloading, setIsloading] = useState(true)

    const createuser = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsloading(false)
          });
          return() =>{
            return subscribe()
          }
    },[])

    const authInfo = {
        user,
        createuser,
        login,
        isloading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;