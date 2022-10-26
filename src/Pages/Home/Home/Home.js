import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../CourseSummary/CourseSummary/CourseSummary';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Home = () => {
    const allCourse = useLoaderData();
    //const { id, name, duration, description } = course;
    //console.log(course.name);
    return (
        <div>
            <h2>This is Home Component: {allCourse.length}</h2>
            {/* {
                allCourse.map(course => <CourseSummary
                 key ={course.id}
                 course={course}
                ></CourseSummary>)
            } */}

            <Row xs={1} md={2} className="g-4">
                {allCourse.length && allCourse.map((item, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body className='mt-3'>
                                <Card.Title><h3 className='h2 text-center mb-3'>{item.name}</h3></Card.Title>
                                <Card.Text>
                                    <h4 className='mb-5 text-center'>{item.duration}</h4>
                                    <p className='text-center'>{item.description}</p>
                                </Card.Text>
                                <Button style={{ marginLeft:'140px' }} variant="outline-info">Learn More</Button>                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;