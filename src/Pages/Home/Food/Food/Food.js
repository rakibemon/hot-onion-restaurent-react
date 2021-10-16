import React from 'react';
import { Button } from 'react-bootstrap'
import Breakfast from '../Brakefast/Breakfast';
const Food = () => {
    return (
        <div id='food'>
            <div className='d-flex justify-content-center mt-4'>
                <Button > Breakfast</Button>
                <Button className='mx-3'> Lunch</Button>
                <Button > Dinner</Button>
            </div>
            <Breakfast></Breakfast>
        </div>
    );
};

export default Food;