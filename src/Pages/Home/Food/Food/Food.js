import React from 'react';
import { Button } from 'react-bootstrap'
import Breakfast from '../Brakefast/Breakfast';
import Dinner from '../Dinner/Dinner';
const Food = () => {
    const breakfast = () => {
        console.log('bre')
    }
    const lunch = () => {
        console.log('lun')
    }
    const dinner = () => {
        <Dinner></Dinner>
    }
    return (
        <div id='food'>
            <div className='d-flex justify-content-center mt-4'>
                <Button onClick={breakfast}> Breakfast</Button>
                <Button onClick={lunch} className='mx-3'> Lunch</Button>
                <Button onClick={dinner}> Dinner</Button>
            </div>
            <Dinner></Dinner>
            {/* <Breakfast></Breakfast> */}
        </div>
    );
};

export default Food;