import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    return (
        <div>
            <h4 style={{ color:'yellowgreen', fontWeight:"700", fontSize:"40px" }}>Find Your Course</h4>
            {
                courses.map(course => <p className='mt-5'
                  key={course.id}
                        
                ><Link style={{textDecoration: 'none'}} to={`/course/${course.id}`}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default SideNav;