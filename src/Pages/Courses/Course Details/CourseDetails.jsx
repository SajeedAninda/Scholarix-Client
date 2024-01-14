import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    let courseDetails = useLoaderData();
    console.log(courseDetails);

    return (
        <div>

        </div>
    );
};

export default CourseDetails;