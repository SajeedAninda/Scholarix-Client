import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhatWeDo from '../../Components/What We Do/WhatWeDo';
import HowWeHelp from '../../Components/How We Help/HowWeHelp';
import HowWeWork from '../../Components/How We Work/HowWeWork';
import ChooseCountry from '../../Components/Choose Country/ChooseCountry';
import WhyChooseScholarix from '../../Components/Why Choose Scholarix/WhyChooseScholarix';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <HowWeHelp></HowWeHelp>
            <HowWeWork></HowWeWork>
            <ChooseCountry></ChooseCountry>
            <WhyChooseScholarix></WhyChooseScholarix>
        </div>
    );
};

export default Homepage;