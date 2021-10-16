import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from 'react';
import firebaseAuthentication from '../Pages/Firebase/firebase.init';
firebaseAuthentication();
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const auth = getAuth();
    const [user,setUser] = useState({})
    const [error,setError] = useState('');
    const [isLoading,setIsLoading] = useState(true)

    const signInUsingGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
        
    };
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{setIsLoading(false)})
    };
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, loggeduser=>{
            if(loggeduser){
                setUser(loggeduser)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth]);

    
    return {
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        signInUsingGoogle,
        logOut
    };
};

export default useFirebase;