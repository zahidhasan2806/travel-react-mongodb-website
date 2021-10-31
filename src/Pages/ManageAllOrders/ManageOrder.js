import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ManageOrder = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    const { Package, name, email, status, _id } = props.order;
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


    const handleUpdateStatus = () => {
        const updatedStatus = { status: "Approved" };

        const url = `https://creepy-goosebumps-33839.herokuapp.com/orders/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Order approved')
                    window.location.reload()
                }

            })
    }

    return (
        <tr>
            <td>{Package}</td>
            <td>{email}</td>
            <td>{name}</td>
            <td>
                {status}
            </td>
            <td>
                <Button variant="secondary" onClick={handleUpdateStatus} className="btn btn-success w-100">
                    Confirm
                </Button>


            </td>
            <td><button onClick={() => setShow(true)} className="btn btn-danger w-100">Delete</button></td>

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

        </tr>
    );
};

export default ManageOrder;