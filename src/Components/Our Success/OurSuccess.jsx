import React, { useEffect, useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import "./success.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, duration, startCounting }) => (
    <CountUp end={startCounting ? end : 0} duration={duration} separator="," />
);

const OurSuccess = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        if (inView) {
          setStartCounting(true);
        }
      }, [inView]);

    return (
        <div ref={ref} className='successBg mt-16 py-16'>
            <div className='mx-auto w-[90%]'>
                <div className='pb-8'>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4 text-lg text-white">Our Success</h1>
                        <p className="text-xl font-semibold text-white">
                            Embarking on countless educational journeys, we take pride in the success stories that have unfolded under the guidance of Scholarix. Our triumphs extend beyond academic achievements to encompass personal growth, career milestones, and the fulfillment of aspirations.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-6 text-white'>
                    <div className='flex flex-col items-center space-y-3'>
                        <BsFillPeopleFill className='text-[100px]' />
                        <h3 className='text-4xl font-bold'>
                            <AnimatedCounter end={2200} duration={3} startCounting={startCounting} /> +
                        </h3>
                        <h3 className='text-3xl font-bold'>Satisfied Clients</h3>
                    </div>

                    <div className='flex flex-col items-center space-y-3'>
                        <BsGlobeCentralSouthAsia className='text-[100px]' />
                        <h3 className='text-4xl font-bold'>
                            <AnimatedCounter end={9} duration={3} startCounting={startCounting} />
                        </h3>
                        <h3 className='text-3xl font-bold'>Countries</h3>
                    </div>

                    <div className='flex flex-col items-center space-y-3'>
                        <FaUniversity className='text-[100px]' />
                        <h3 className='text-4xl font-bold'>
                            <AnimatedCounter end={100} duration={3} startCounting={startCounting} /> +
                        </h3>
                        <h3 className='text-3xl font-bold'>Universities</h3>
                    </div>

                    <div className='flex flex-col items-center space-y-3'>
                        <IoIosPeople className='text-[100px]' />
                        <h3 className='text-4xl font-bold'>
                            <AnimatedCounter end={700} duration={3} startCounting={startCounting} /> +
                        </h3>
                        <h3 className='text-3xl font-bold'>Students Helped</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSuccess;
