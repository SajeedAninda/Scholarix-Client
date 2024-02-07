import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateConsultant = () => {
    let consultantData = useLoaderData();
    console.log(consultantData);

    return (
        <div>

        </div>
    );
};

export default UpdateConsultant;