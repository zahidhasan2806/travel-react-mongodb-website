import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MySinglePackage = (props) => {
    const { Package, status, Price, _id } = props.myOrder;
    const handleDeleteOrder = id => {
        const url = `https://creepy-goosebumps-33839.herokuapp.com/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload()
                }
            })
        // .finally(setShow(false))
    };
    return (

        <Col md={4} sm={6}>
            <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Body>
                    <Card.Title>{Package}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
                    <Card.Text>
                        Price:{Price}
                    </Card.Text>
                    <Card.Link href="#" as="button" className="btn btn-danger" onClick={() => handleDeleteOrder(_id)}>Remove</Card.Link>

                </Card.Body>
            </Card>

        </Col>
    );
};

export default MySinglePackage;