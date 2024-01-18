import React from 'react';
import "./country.css"
import usa from "../../assets/ChooseCountry/usa.jpg"
import cn from "../../assets/ChooseCountry/cn.jpg"
import can from "../../assets/ChooseCountry/can.jpg"
import uk from "../../assets/ChooseCountry/uk.jpg"
import mal from "../../assets/ChooseCountry/mal.jpg"
import au from "../../assets/ChooseCountry/au.jpg"
import ind from "../../assets/ChooseCountry/ind.jpg"
import ger from "../../assets/ChooseCountry/ger.jpg"
import frnc from "../../assets/ChooseCountry/frnc.jpg"
import useCountries from '../../Hooks/useCountries';
import CourseSkeleton from '../Skeleton/CourseSkeleton';

const ChooseCountry = () => {
    let { countries } = useCountries();

    console.log(countries)

    return (
        <div className='bg-[#F7FFF7]'>
            <div className='w-[90%] mx-auto'>
                <div className='pt-16 pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-[#0e2b45]">Choose Your Desired Country</h1>
                        <p className="text-xl font-semibold text-[#0e2b45]">As you navigate through the options, take the time to select your country of interest, and unveil a world of academic opportunities specifically curated to suit your ambitions. Whether you envision studying in renowned institutions in the United States, exploring the rich cultural tapestry of European universities, or embracing the innovation hubs of Asia – the power to choose your destination lies in your hands.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-8'>
                        {
                            countries ?
                                (
                                    countries?.map(country =>
                                        <div class="card">
                                            <img className='object-cover' src={country?.country_img_url} alt="" />
                                            <div class="card__content">
                                                <p class="card__title">{country?.country_name}</p>
                                                <p class="card__description">
                                                    {country?.country_brief_details}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )
                                :
                                (
                                    <div>
                                        <CourseSkeleton></CourseSkeleton>
                                    </div>
                                )
                        }
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ChooseCountry;