import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";


export const authContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading,setLoading]=useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    
    // create user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create login
    const createLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in by google
    const createGoogleUser = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    //sign in by github
    const createGithubUser = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);

    }
    //log out 
    const createLogOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const  unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
                console.log('current',currentUser)
            }
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    // update profile 
    // const createUpdate =(userName,photo)=>{
    //     return updateProfile(auth.currentUser, {
    //         displayName: "Jane Q. User", 
    //         photoURL: "https://example.com/jane-q-user/profile.jpg"
    //       })
    // }
    //Get user's profile
    
    const authInfo={
        user,
        loading,
        createUser,
        createLogin,
        createGoogleUser,
        createGithubUser,
        createLogOut,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;