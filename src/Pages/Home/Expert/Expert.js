import { Button } from 'bootstrap';
import React from 'react';
import { Card, Row } from 'react-bootstrap';
import './Expert.css'


const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        // <Row xs={1} md={2} lg={3} className="card col-lg-4 ">
        //     {Array.from({ length: 1 }).map((_, idx) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
        //     ))}
        // </Row>
    );
};

export default Expert;