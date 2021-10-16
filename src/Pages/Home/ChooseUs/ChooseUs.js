import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ChooseUsCard from './ChooseUsCard';

const ChooseUs = () => {
    const [chooseUS, setChooseUS] = useState([]);
    useEffect(() => {
        fetch('/chooseUS.json')
            .then(response => response.json())
            .then(data => setChooseUS(data))
    }, []);
    return (
        <div id='WhyUs'>
             <Container>
            <h1>Why Choose Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti enim fugiat est quo praesentium accusamus ad vel! Saepe iure, mollitia dignissimos accusantium molestiae non nulla libero maiores inventore obcaecati!</p>
           
                <Row className='gx-4'>
                    {
                        chooseUS.map(data => <ChooseUsCard key={data.id} data={data}></ChooseUsCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;