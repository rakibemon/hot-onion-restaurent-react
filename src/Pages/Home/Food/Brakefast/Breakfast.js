import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBreakfast from '../../../../hooks/useBreakfast';

import './Breakfast.css'
import BreakfastCard from './BreakfastCard';
const Breakfast = () => {
    const [breakfasts] = useBreakfast();
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