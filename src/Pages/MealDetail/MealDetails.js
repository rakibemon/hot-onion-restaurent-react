import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import useBreakfast from '../../hooks/useBreakfast';
import MealSlider from './MealSlider';

const MealDetails = () => {
    const [breakfasts] = useBreakfast();
    const [foodQuantity, setFoodQuantity] = useState(1);
    console.log(breakfasts, breakfasts.length);
    const [singleMealDetail, setSingleMealDetail] = useState({});
    const { mealId } = useParams();
    const quantityIncrease = () => {
        setFoodQuantity(foodQuantity + 1);
    }
    const quantityDecrease = () => {
        if (foodQuantity > 0) {
            setFoodQuantity(foodQuantity - 1);
        }
    }
    useEffect(() => {
        if (breakfasts.length > 0) {
            const singleMeal = breakfasts.find(breakfast => breakfast.id === parseInt(mealId) || {})
            setSingleMealDetail(singleMeal);
            console.log(singleMeal)
        }
    }, [breakfasts, mealId]);
    const { img, name, desc, price } = singleMealDetail;
    return (
        <Container className='my-5'>
            <Row>
                <Col xs={12} md={6}>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <div className="d-flex">
                        <h4 className='me-3'> ${price * foodQuantity}</h4>
                        <div className='d-flex'>
                            <Button onClick={quantityDecrease}> <i className="fas fa-minus"></i> </Button>
                            <p className='px-3'>{foodQuantity}</p>
                            <Button onClick={quantityIncrease}> <i className="fas fa-plus"></i> </Button>
                        </div>
                    </div>
                        <Button className='rounded-pill mt-5'> Add to Cart</Button> <br />
                        <MealSlider></MealSlider>
                </Col>
                <Col xs={12} md={6}>
                    <figure>
                        <img className='img-fluid' src={img} alt="" />
                    </figure>
                </Col>
            </Row>
        </Container>
    );
};

export default MealDetails;