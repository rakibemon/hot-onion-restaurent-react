import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from 'react';
import firebaseAuthentication from '../Pages/Firebase/firebase.init';
firebaseAuthentication();
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const auth = getAuth();
    const [user,setUser] = useState({})
    const [error,setError] = useState('')

    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(userCredential=>{
            setUser(userCredential.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    };
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
    };
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, loggeduser=>{
            if(loggeduser){
                setUser(loggeduser)
            }
        });
        return ()=> unsubscribed;
    },[auth]);

    
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    };
};

export default useFirebase;