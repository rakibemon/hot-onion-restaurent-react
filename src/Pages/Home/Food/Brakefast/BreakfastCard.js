import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

import './Breakfast.css'
const BreakfastCard = ({ breakfast }) => {
    const { id,img, name, price,desc } = breakfast;
    const history = useHistory()
    const handleDetails = () =>{
        history.push(`/meal/${id}`)
        
    }
    return (
        <Col xs={12} md={6} lg={4}>
            <div className='choose-us-card breakfast' onClick={handleDetails}>
                <img className='img-fluid' src={img} alt="" />
                <h4>{name}</h4>
                <p>{desc}</p>
                <p><b>${price}</b></p>
            </div>
        </Col>
    );
};

export default BreakfastCard;