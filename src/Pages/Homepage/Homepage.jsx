import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhatWeDo from '../../Components/What We Do/WhatWeDo';
import HowWeHelp from '../../Components/How We Help/HowWeHelp';
import HowWeWork from '../../Components/How We Work/HowWeWork';
import ChooseCountry from '../../Components/Choose Country/ChooseCountry';
import WhyChooseScholarix from '../../Components/Why Choose Scholarix/WhyChooseScholarix';
import OurSuccess from '../../Components/Our Success/OurSuccess';
import PeopleSays from '../../Components/People Says/PeopleSays';
import LatestCourses from '../../Components/Latest Courses/LatestCourses';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Scholarix | Home</title>
            </Helmet>
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <HowWeHelp></HowWeHelp>
            <HowWeWork></HowWeWork>
            <ChooseCountry></ChooseCountry>
            <LatestCourses></LatestCourses>
            <WhyChooseScholarix></WhyChooseScholarix>
            <OurSuccess></OurSuccess>
            <PeopleSays></PeopleSays>
        </div>
    );
};

export default Homepage;