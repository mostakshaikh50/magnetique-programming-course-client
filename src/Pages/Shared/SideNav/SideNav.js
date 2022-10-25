import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    return (
        <div>
            <h4>Our All Courses: {courses.length}</h4>
            {
                courses.map(course => <p
                  key={course.id}

                ><Link to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default SideNav;