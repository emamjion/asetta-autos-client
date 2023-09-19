
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
// import jwt_decode from 'jwt-decode';




export const AuthContex = createContext(null)

const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const googelProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    // for dark mode and light mode
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleDarkMode = (event) => {
        if (event.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    };


    // reset password

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    const goggleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googelProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                 axios.post('http://localhost:5000/jwt', {email : currentUser.email})
                 .then(data=>{
                     localStorage.setItem('car-access-token', data.data.token)
                 })
            }
            
            localStorage.removeItem('car-access-token')
            
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authinfo = {
        user,
        loading,
        createUser,
        signin,
        logOut,
        goggleSignIn,
        updateUserProfile,
        resetPassword,
        theme,
        handleDarkMode
    }


    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Authprovider;