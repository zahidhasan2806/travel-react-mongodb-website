import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { useParams } from 'react-router';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';



const Placeorder = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = UseAuth();
    const { id } = useParams()
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch(`https://creepy-goosebumps-33839.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const onSubmit = data => {

        axios.post('https://creepy-goosebumps-33839.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Form submitted successfully");
                    reset();
                }
            })
    };
    return (
        <Container className="mt-4">
            <Row className="m-0">
                <Col md={6} sm={12} >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={packages.picture1} />
                        <Card.Body>
                            <Card.Title>{packages.title}</Card.Title>
                            <Card.Text>
                                {packages.about}
                            </Card.Text>
                            <h5>Ordered By:{user.displayName}</h5>
                            <h5>Email: {user.email}</h5>
                            <h5>Price: {packages.price}</h5>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12} className='text-center'>
                    <h3>Add a Booking</h3>
                    <hr />
                    <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className="m-3 w-50 px-4 py-2" defaultValue={user.displayName} {...register("name")} />
                        {packages.title && <input className=" m-3 w-50 px-4 py-2" defaultValue={packages.title} {...register("Package", { required: true })} />}

                        <input className="m-3 w-50 px-4 py-2" placeholder="City"{...register("Address", { required: true })} />

                        {packages.price && <input type="number" className="m-3 w-50 px-4 py-2" defaultValue={packages.price}{...register("Price", { required: true })} readOnly />}
                        <input type="number" className="m-3 w-50 px-4 py-2" placeholder="+8801XXXXXXX"{...register("Contact", { required: true })} />

                        <input className=" m-3 w-50 px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">Please Enter Your Email</span>}

                        <input className="m-3 w-50 px-4 py-2" defaultValue="pending" readOnly {...register("status")} />

                        {/* submit button */}
                        < input className=" m-3 btn btn-info w-50" type="submit" value="Book now" />
                        <br />

                        {/* button for going back to home */}
                        < NavLink to="/home" className=" text-decoration-none   m-3 btn btn-info w-50 bg-secondary" > Home</NavLink>

                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Placeorder;