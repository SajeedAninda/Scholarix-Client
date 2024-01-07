import React from 'react';
import Banner from '../../Components/Banner/Banner';
import WhatWeDo from '../../Components/What We Do/WhatWeDo';
import HowWeHelp from '../../Components/How We Help/HowWeHelp';
import HowWeWork from '../../Components/How We Work/HowWeWork';
import ChooseCountry from '../../Components/Choose Country/ChooseCountry';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <HowWeHelp></HowWeHelp>
            <HowWeWork></HowWeWork>
            <ChooseCountry></ChooseCountry>
        </div>
    );
};

export default Homepage;