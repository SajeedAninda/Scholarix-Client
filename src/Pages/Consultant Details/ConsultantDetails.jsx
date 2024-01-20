import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ConsultantDetails = () => {
    let consultantDetails = useLoaderData();
    console.log(consultantDetails)

    return (
        <div>
            Hi
        </div>
    );
};

export default ConsultantDetails;