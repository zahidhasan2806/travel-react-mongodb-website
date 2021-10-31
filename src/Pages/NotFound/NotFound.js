import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from "../../Images/free-404-error-vector.jpg"
const NotFound = () => {
    return (
        <div className='container p-4 text-center'>
            <img width="50%" src={notFound} alt="" />
            <Link to='/' className="text-decoration-none">
                <Button className="w-50 d-block mx-auto " variant="outline-dark">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;