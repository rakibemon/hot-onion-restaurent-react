import React from 'react';
import { Carousel } from 'react-bootstrap';
import useMeal from '../../hooks/useMeal';
import './MealDetails.css'

const MealSlider = () => {
    const [breakfasts] = useMeal()
    return (
        <div>
            <Carousel variant="dark" className='carousel'>
                <Carousel.Item className='text-center'>
                    <img
                        className="d-block img-fluid"
                        src={breakfasts[0]?.img}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={breakfasts[1]?.img}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src={breakfasts[2]?.img}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MealSlider;