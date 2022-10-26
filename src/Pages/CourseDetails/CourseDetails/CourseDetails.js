import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
            <h2>Course Details Page: {courseDetails.length}</h2>
        </div>
    );
};

export default CourseDetails;