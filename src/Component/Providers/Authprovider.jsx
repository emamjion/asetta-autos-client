
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";




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

    //   // update user profile
    //   const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //     });
    // }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

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
            // console.log(currentUser)
            // if (currentUser) {
            //     axios.post('http://localhost:5000/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data.data.token)
            //             localStorage.setItem('access-token', data.data.token)
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token')
            // }
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
    }


    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Authprovider;