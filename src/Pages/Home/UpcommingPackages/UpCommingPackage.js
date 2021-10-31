import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pic01 from '../../../Images/niladri.jpg'
import pic02 from '../../../Images/shimul bagan.jpg'
import pic03 from '../../../Images/lakmachora.jpg'
import pic04 from '../../../Images/jaflong.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


const UpCommingPackage = () => {
    return (
        <Container className="my-3">
            <h1 className="text-center">Explore Bangladesh</h1>
            <Row>
                <Col md={3}>
                    <img className="img-fluid rounded" src={pic01} alt="" />
                    <h5>Niladri Lake</h5>
                    <p> <FontAwesomeIcon className="text-danger" icon={faMapMarker}></FontAwesomeIcon>  Sunamganj</p>
                </Col>
                <Col md={3}>
                    <img className="img-fluid rounded" src={pic02} alt="" />
                    <h5>Shimul Bangan</h5>
                    <p> <FontAwesomeIcon className="text-danger" icon={faMapMarker}></FontAwesomeIcon> Sunamganj</p>
                </Col>
                <Col md={3}>
                    <img className="img-fluid rounded" src={pic03} alt="" />
                    <h5>Lakmachara</h5>
                    <p> <FontAwesomeIcon className="text-danger" icon={faMapMarker}></FontAwesomeIcon> Sunamganj</p>
                </Col>
                <Col md={3}>
                    <img className="img-fluid rounded" src={pic04} alt="" />
                    <h5>Jaflong</h5>
                    <p> <FontAwesomeIcon className="text-danger" icon={faMapMarker}></FontAwesomeIcon> Sylhet</p>
                </Col>
            </Row>
        </Container>
    );
};

export default UpCommingPackage;