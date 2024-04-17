import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';


export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create login
    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    //sign in by google
    const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    //sign in by github
    const createGithubUser = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);

    }
    //log out 
    const createLogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // update profile 
    const createUpdate = (userName, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photo,
        })
    }



    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        createUser,
        createLogin,
        createGoogleUser,
        createGithubUser,
        createUpdate,
        createLogOut,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;