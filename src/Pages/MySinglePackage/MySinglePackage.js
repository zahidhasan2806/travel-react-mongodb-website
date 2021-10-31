import React from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';


const MySinglePackage = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);
    const { Package, status, Price, _id } = props.myOrder;
    const handleDeleteOrder = id => {
        const url = `https://creepy-goosebumps-33839.herokuapp.com/orders/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    window.location.reload()
                }
            })
            .finally(setShow(false))
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
                    <Card.Link href="#" as="button" className="btn btn-danger" onClick={() => setShow(true)}>Remove</Card.Link>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Are you sure?</Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
};

export default MySinglePackage;