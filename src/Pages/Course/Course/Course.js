import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseCategory = useLoaderData();    
    const coursesItem = courseCategory.languages.name;
    const courseItem = coursesItem.split('_');
    console.log(courseItem)
    return (
        <Card className="mb-5">            
            <Card.Body>
                <Card.Title><h3 style={{ color: "green", fontWeight: "700" }} className='text-center'>{courseCategory.title}</h3></Card.Title>
                <Card.Text>
                    <ListGroup style={{ width: "300px"}} className='text-center mt-3 mx-5'>
                        <ListGroup.Item>Course Item-1:<span style={{ color: 'blue', fontSize:"20px", fontFamily:"700"}}> {courseItem[0]}</span></ListGroup.Item>
                        <ListGroup.Item>Course Item-2:<span style={{ color: 'blue', fontSize:"20px"}}> {courseItem[1]}</span></ListGroup.Item>
                        <ListGroup.Item>Course Item-3:<span style={{ color: 'blue', fontSize:"20px"}}> {courseItem[2]}</span></ListGroup.Item>
                        <ListGroup.Item>Course Item-4:<span style={{ color: 'blue', fontSize:"20px"}}> {courseItem[3]}</span></ListGroup.Item>
                        <ListGroup.Item>Price:<span style={{ color: 'blue', fontSize:"20px", fontWeight: "600"}}> {courseCategory.price}£</span></ListGroup.Item>
                    </ListGroup>                  

                </Card.Text>
                <Card.Img style={{ height: "300px" }} variant="top" src={courseCategory.image_url} />                
                <p className=''>{courseCategory.details}</p>
            </Card.Body>            
        </Card>
    );
};

export default Course;