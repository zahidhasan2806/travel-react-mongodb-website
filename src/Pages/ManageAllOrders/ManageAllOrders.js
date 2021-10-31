import React, { useEffect, useState } from 'react';
import { Container, Modal, Table, Button } from 'react-bootstrap';
import ManageOrder from './ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleNoBtn = () => setShow(false);


    useEffect(() => {
        fetch("https://creepy-goosebumps-33839.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // const handleDeleteOrder = id => {
    //     const url = `https://creepy-goosebumps-33839.herokuapp.com/orders/${id}`;

    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {

    //                 const remainingOrder = orders.filter(order => order._id !== id)

    //                 setOrders(remainingOrder);
    //             }
    //         })
    //         .finally(setShow(false))
    // };



    // const handleUpdateStatus = (id) => {
    //     const updatedStatus = { status: "Approved" };

    //     const url = `https://creepy-goosebumps-33839.herokuapp.com/orders/${id}`;

    //     fetch(url, {
    //         method: 'PUT',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(updatedStatus)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 alert('Order approved')

    //                 // const btn = document.getElementById('myButton1')
    //                 // if (btn.value === 'Pending...') {
    //                 //     btn.value = "Approved";
    //                 // }

    //             }

    //         })
    // }
    return (
        <Container>
            <div className="table-responsive">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Package Name</th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Status</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => (<ManageOrder key={order._id} order={order}></ManageOrder>))
                        }
                    </tbody>
                </Table>
            </div>

        </Container >
    );
};

export default ManageAllOrders;