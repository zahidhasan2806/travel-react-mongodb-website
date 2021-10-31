import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-highlights">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2>Get 30% on top destination</h2>
                                <p>Book your Package before 15th of November and avail 30% flat discount</p>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-outline-success">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discount;