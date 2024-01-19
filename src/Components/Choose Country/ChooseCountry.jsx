import React from 'react';
import "./country.css"
import useCountries from '../../Hooks/useCountries';
import CourseSkeleton from '../Skeleton/CourseSkeleton';
import { Link } from 'react-router-dom';
import CountrySkeleton from '../Skeleton/CountrySkeleton';

const ChooseCountry = () => {
    let { countries } = useCountries();

    return (
        <div className='bg-[#F7FFF7]'>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Choose Your Desired Country</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">As you navigate through the options, take the time to select your country of interest, and unveil a world of academic opportunities specifically curated to suit your ambitions. Whether you envision studying in renowned institutions in the United States, exploring the rich cultural tapestry of European universities, or embracing the innovation hubs of Asia – the power to choose your destination lies in your hands.
                        </p>
                    </div>

                    {
                        countries ?
                            <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-8'>
                                {
                                    countries?.map(country =>
                                        <div class="card">
                                            <img className='object-cover' src={country?.country_img_url} alt="" />
                                            <div class="card__content">
                                                <p class="card__title">{country?.country_name}</p>
                                                <p class="card__description">
                                                    {country?.country_brief_details}
                                                </p>

                                                <div className='flex justify-end'>
                                                    <Link to={`/countryDetails/${country?._id}`} className='text-[white] font-bold underline hover:opacity-50'>
                                                        See Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            :
                            <CountrySkeleton></CountrySkeleton>
                    }



                </div>
            </div>
        </div>
    );
};

export default ChooseCountry;