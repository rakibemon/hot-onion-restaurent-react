import React from 'react';
import { Col } from 'react-bootstrap';
import './ChooseUs.css'
const ChooseUsCard = ({ data }) => {
    const { name, description, img } = data;
    return (
        <Col xs={12} md={6} lg={4}>
            <div className='choose-us-card'>
                <img className='img-fluid' src={img} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <div className='d-flex'>
                    <p>See more</p>
                    <div className='d-flex justify-content-center align-items-center arrow ms-2'>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ChooseUsCard;