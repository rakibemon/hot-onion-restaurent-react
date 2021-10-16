import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMeal from '../../../../hooks/useMeal';

import './Breakfast.css'
import BreakfastCard from './BreakfastCard';
const Breakfast = () => {
    const [breakfasts] = useMeal();
    return (
        <Container>
            <Row>
                {
                    breakfasts.map(breakfast => <BreakfastCard key={breakfast.id} breakfast={breakfast}></BreakfastCard>)
                }
            </Row>
        </Container>
    );
};

export default Breakfast;