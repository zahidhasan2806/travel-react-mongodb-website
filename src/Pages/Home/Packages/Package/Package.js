import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./package.css";

const Package = (props) => {
    const { title, picture1, about, duration, price, _id } = props.offer;
    return (
        <Col md={4} sm={6} className='my-3 items'>
            <Card className="package-card">
                <Card.Img variant="top" height="300px" src={picture1} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {(about).slice(0, 90)}..............
                    </Card.Text>
                    <div className="fs-6">
                        <Row>
                            <Col md={6} sm={12}>৳ {price}</Col>
                            <Col md={6} sm={12}><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{duration}</Col>

                        </Row>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-primary bg-opacity-10 p-0">
                    <Link to={`/packages/${_id}`}>
                        <Button className="w-100" variant="success">Book Now</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Package;