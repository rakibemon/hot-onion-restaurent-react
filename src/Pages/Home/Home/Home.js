import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Food from '../Food/Food/Food';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Food></Food>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;