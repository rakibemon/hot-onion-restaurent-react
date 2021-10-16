import React from 'react';
import {Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'
import './Login.css';
const Login = () => {
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'
    const {signInUsingGoogle,setUser,setError,setIsLoading} = useAuth();
    const handleSignInWithGoogle = () =>{
        signInUsingGoogle()
        .then(userCredential=>{
            setUser(userCredential.user);
            history.push(redirect_uri)
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))

    }
    return (
        <div className='login'>
            <input type="email" name="Email" id="email" placeholder='Email'/> <br />
            <input type="password" name="pass" id="pass"placeholder='password' /> <br />
            <Button onClick={handleSignInWithGoogle}> <i className="fab fa-google"></i></Button>
        </div>
    );
};

export default Login;