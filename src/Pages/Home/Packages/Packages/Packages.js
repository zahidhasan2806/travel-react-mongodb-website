import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch("https://creepy-goosebumps-33839.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <Container className="mt-4">
                <h1> Our Packages</h1>
                <Row>
                    {
                        packages.map(offer => <Package key={offer._id} offer={offer}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;