import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courseCategory = useLoaderData();
    console.log(courseCategory);
    return (
        <Card className="mb-5">
            {/* <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                       roundedCircle
                       src={author.img}
                       style={{height:"60px"}}
                    ></Image>
                    <div>
                        <p>{courseCategory.languages.name}</p>
                        <p>{courseCategory.languages.published_date}</p>
                    </div>
                </div>
                
            </Card.Header> */}
            <Card.Body>
                <Card.Title><h3 className='text-center'>{courseCategory.title}</h3></Card.Title>
                <Card.Img style={{height:"300px"}} variant="top" src={courseCategory.image_url} />
                <Card.Text>
                    
                    
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default Course;