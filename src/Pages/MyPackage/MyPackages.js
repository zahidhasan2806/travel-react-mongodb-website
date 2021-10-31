import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import MySinglePackage from '../MySinglePackage/MySinglePackage';

const MyPackages = () => {
    const { user } = UseAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://creepy-goosebumps-33839.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const myOrders = orders.filter(order => user.email === order.email);
    return (
        <div className="my-5">
            <h1 className="text-center">Welcome to TakeOff with ZaM</h1>
            <Container className="my-5">
                <h1>My Orders</h1>
                <Row>
                    {
                        myOrders.map(myOrder => <MySinglePackage key={myOrder._id} myOrder={myOrder}></MySinglePackage>)
                    }</Row>
            </Container>
        </div>
    );
};

export default MyPackages;