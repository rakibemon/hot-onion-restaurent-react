import React from 'react';
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const CheckOut = () => {
    const { price } = useParams();
    return (
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h4> Enter Delivery Address</h4>
                        <hr />
                        <form>
                            <input type="text" placeholder='Flat,suite or floor' /> <br />
                            <input type="text" placeholder='Businss Name' /> <br />
                            <input type="text" placeholder='Add delkivery Instraction' /> <br />
                            <Button> Save and Continue </Button>
                        </form>
                    </Col>
                    <Col xs={12} md={6}>
                        <Table striped bordered hover responsive>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>{price}</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>{(price*0.1).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Delivery fee</td>
                                    <td>{20}</td>
                                </tr>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td>{(parseFloat(price)+20+(price*0.1)).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
    );
};

export default CheckOut;