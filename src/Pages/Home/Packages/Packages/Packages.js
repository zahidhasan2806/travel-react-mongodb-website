import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
// import loader from '../../../../Images/loader.gif'

const Packages = () => {

    const [packages, setPackages] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch("https://creepy-goosebumps-33839.herokuapp.com/packages")
            .then(res => res.json())
            .then(data => setPackages(data))
            .finally(() => setIsLoading(false))
    }, []);
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    } else {
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
    }
};

export default Packages;