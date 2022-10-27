import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SideNav from '../../Shared/SideNav/SideNav';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <Container>
                <Row  className="row  row-cols-sm-1  row-cols-md-2 row-cols-lg-3 shadow-sm">
                    <Col className='' sm={4}>

                        <SideNav></SideNav>
                    </Col>
                    <Col lg-8>
                        {allCourse.length && allCourse.map((item, idx) => (

                            <Card key={idx} style={{ height: "300px" }}>
                                <Card.Body className='mt-3'>
                                    <Card.Title><h3 className='h2 text-center mb-3'>{item.name}</h3></Card.Title>
                                    <Card.Text>
                                        <h4 className='mb-5 text-center'>{item.duration}</h4>
                                        <p className='text-center'>{item.description}</p>
                                    </Card.Text>
                                    <Button style={{ marginLeft: '140px' }} variant="outline-info"><Link style={{textDecoration: 'none'}} to={`/course/${item.id}`}>Learn More</Link></Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;