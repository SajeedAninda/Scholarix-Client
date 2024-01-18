import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    let countryDetails = useLoaderData();
    console.log(countryDetails);

    return (
        <div>
            Hi
        </div>
    );
};

export default CountryDetails;