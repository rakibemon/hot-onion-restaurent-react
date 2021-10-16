import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import logo from '../../../img/logo.png'
import './footer.css'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Stack direction='horizontal' gap={5}>
                    <figure className="img-fluid"><img src={logo} alt="" /></figure>
                    <div className="ms-auto text-white">
                        <h4> CUSTOMER SUPPORT</h4>
                        <ul className='list-unstyled'>
                            <li>Help and Ordering</li>
                            <li>Privacy Policy</li>
                            <li>Return and Cancellation</li>
                            <li>Get a Call</li>
                            <li>Delevery Schedule</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h4> CONTACT INFO </h4>
                        <div>
                            <div>
                            <h5> <i className='far fa-paper-plane'></i> LOCATION</h5>
                            <p>205 Olazu Familia, Herba Street Front USA</p>
                            </div>
                            <div>
                            <h5> <i className='far fa-envelope-open'></i>  EMAIL US</h5>
                            <p>support@gmail.com</p>
                            </div>
                            <div>
                            <h5> <i className='far fa-paper-plane'></i>  CALL US </h5>
                            <p>002- 01008431112

</p>
                            </div>

                        </div>
                    </div>
                </Stack>
            </Container>
        </footer>
    );
};

export default Footer;