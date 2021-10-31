import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../Images/home-banner1.png'
import slider02 from '../../../Images/slider02.jpg'
import slider03 from '../../../Images/slider 03.jpg'


const Banner = () => {
    return (
        <Carousel variant="dark text-white">
            <Carousel.Item>
                <img
                    className="d-block w-100 img" height="600px"
                    src={slider02}
                    alt="First slide"
                />
                <Carousel.Caption className='mb-5 text-white '>
                    <h1>Hello traveller!</h1>
                    <p>What You'd Like To Experience?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="600px"
                    src={slider03}
                    alt="Second slide"
                />
                <Carousel.Caption className='mb-5 text-white'>
                    <h1>Hello traveller!</h1>
                    <p>Uncompromising excellence. Commitment to care</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height="600px"
                    src={banner}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb-5 text-white'>
                    <h1>Hello traveller!</h1>
                    <p>Where there is a healing, there is a hope</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;