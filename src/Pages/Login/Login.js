import React from 'react';
import {Button} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './Login.css';
const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div className='login'>
            <input type="email" name="Email" id="email" placeholder='Email'/> <br />
            <input type="password" name="pass" id="pass"placeholder='password' /> <br />
            <Button onClick={signInUsingGoogle}> <i className="fab fa-google"></i></Button>
        </div>
    );
};

export default Login;