import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about">
                <h1>About</h1>
                <hr />
            </div>
            <Container>
                <p><span className="fw-bold">Takeoff with ZaM</span> is a full-service outbound tour operator in Bangladesh. The founder of Takeoff is 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy we specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers and clients and become the best travel agency in Bangladesh, focusing on creating friendship and long-lasting relationships with our beloved clients.</p>
                <h3>Out Mission</h3>
                <hr />
                <p>providing our clients with unforgettable travel experiences with guaranteed more than satisfactory service that exceed the level of their expectations</p>
                <h3>Out Vision</h3>
                <hr />
                <p>To dominate the tourism industry by excellence in service with Innovation and Creative Concept in the Global Marketplace for our clients that will help us achieve the title of the best travel agency in Bangladesh</p>
                <h3>Services</h3>
                <hr />
                <p>professional customer consultation providing hassle-free travel and journey. Creative and determined approach to search for the most appropriate travel arrangements and accommodations and identify the best possible values. our travel Consultants are friendly polite professional and experienced in accommodating both the season travel and those who are new to the world of travel</p>
                <h3>Our Slogan</h3>
                <hr />
                <p>Travel | Enjoy | Save</p>
            </Container>
        </div>
    );
};

export default About;