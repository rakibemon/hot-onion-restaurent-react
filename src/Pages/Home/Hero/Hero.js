import React from 'react';
import {Button} from 'react-bootstrap'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero-section'>
            <h1 className='hero-title'> Best food waiting for your belly</h1>
            <div>
                <input type="text" />
                <Button> Search</Button>
            </div>
        </div>
    );
};

export default Hero;