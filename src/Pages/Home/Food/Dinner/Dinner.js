import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useMeal from '../../../../hooks/useMeal';
import BreakfastCard from '../Brakefast/BreakfastCard';
const Dinner = () => {
    const {dinners} = useMeal();
    console.log(dinners[0]);
    return (
        <Container>
            <Row>
                {
                    dinners.map(breakfast => <BreakfastCard key={breakfast.id} breakfast={breakfast}></BreakfastCard>)
                }
            </Row>
        </Container>
    );
};

export default Dinner;