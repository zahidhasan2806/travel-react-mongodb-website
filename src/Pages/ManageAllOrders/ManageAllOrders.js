import React, { useEffect, useState } from 'react';
import { Container, Modal, Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);


    useEffect(() => {
        fetch("https://creepy-goosebumps-33839.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    console.log(orders);

    const handleDeleteOrder = id => {
        const url = `https://creepy-goosebumps-33839.herokuapp.com/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    const remainingOrder = orders.filter(order => order._id !== id)

                    setOrders(remainingOrder);
                }
            })
            .finally(setShow(false))
    };



    const handleUpdateStatus = (id) => {
        const updatedStatus = { name: orders.name, status: "Approved" };
        setOrders(updatedStatus);
        const url = `https://creepy-goosebumps-33839.herokuapp.com/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order approved')

                    // const btn = document.getElementById('myButton1')
                    // if (btn.value === 'Pending...') {
                    //     btn.value = "Approved";
                    // }

                }

            })
    }
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
                            orders.map(order => (
                                <tr key={order._id}>
                                    <td>{order.Package}</td>
                                    <td>{order.email}</td>
                                    <td>{order.name}</td>
                                    <td>
                                        {order.status}
                                    </td>
                                    <td>
                                        <input id="btn" onClick={() => handleUpdateStatus(order._id)} type="button" value="Confrim" className="btn btn-danger w-100" />

                                        {/* <button value={order.status}  className="">{order.status}</button> */}
                                    </td>
                                    <td><button onClick={() => setShow(true)} className="btn btn-danger w-100">Delete</button></td>

                                    <Modal show={show} onHide={handleClose}>

                                        <Modal.Body>Are you sure?</Modal.Body>
                                        <Modal.Footer>

                                            <Button variant="secondary" onClick={() => { handleDeleteOrder(order._id) }}>
                                                Yes
                                            </Button>
                                            <Button variant="primary" onClick={handleNoBtn}>
                                                No
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </tr>




                            ))
                        }
                    </tbody>
                </Table>
            </div>

        </Container >
    );
};

export default ManageAllOrders;